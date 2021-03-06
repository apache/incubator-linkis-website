---
title: Scheduler架构
sidebar_position: 1
---

>Linkis Scheduler—可智能监控扩展的分组调度消费架构

## 1 背景

在微服务架构下，每个服务都只处理一种逻辑，且服务之间的调用为了实现异步和解耦，往往通过提交事件后再由服务端分发消费的形式来完成。

这使得事件的分发消费算法需要处理大量不同种类的事件，这些事件在紧急程度、预计执行时间、是否可放弃等方面具有不同的要求，而且事件抵达的高峰与低谷之间的差距非常大，处于难以预测的状态，因此传统的消费队列等数据结构和算法无法满足要求，需要定义一种能够将事件进行合理分组，并能够及时监控消费状况、对消费的过程进行扩展和调整的新的分发消费算法。

## 2 思路

1. 通过分组，组内的所有对象对应一个完整的生命周期。

2. 每个组都可独立设置衡量消费器健康状态的参数标准，有单独的线程监控，一旦发现处于不健康状态，会根据定义好的逻辑，做出相对应的参数调整，尽最大可能保证消费器的稳定运行.

2. 在每个分组里，定义好关联参数的组合，当某个参数被调整时，随之调整与它有关联的所有参数，尽量保持消费器的正常运作。


## 3 实现

如下图所示，Linkis Scheduler分发消费事件的过程如下：

![分组调度消费架构](../../images/ch4/commons/scheduler.png)

### 3.1 具体实现

1. 当事件抵达时，调度器请求分组工厂，获得该事件应该进入的分组的名称。

   分组工厂的作用是解析事件的属性，将其关联到某个分组，具体的逻辑是留给具体消费者的开发人员自己去继承实现的，只要去实现该方案提供的GroupFactory的统一接口即可。

2. 从分组工厂拿到分组名称后，调度器请求消费管理器，获得该分组所对应的实际的消费器。

   消费管理器是全局唯一的，它维护了一个分组到消费器的映射关系，并在首次请求的时候负责消费器的初始化构建。

   在初始化消费器的过程中，消费管理器会先创造一个Consumer对象，再从所有的Group实体中，根据名称找到对应的那一个，把其中的参数设置到刚刚创走的Consumer对象中，再启动该Consumer使其进入工作状态，开始处理事件。

3. 调度器将事件放入对应的消费器的等待队列中。

   每个消费器都维护一个等待队列和一个执行队列。

   在每个“分发间隔”参数规定的时间段后，消费器会检查执行队列中是否存在空位或已经执行完毕的事件的位子，如果有，则从等待队列中选取一个事件，放入该位子，并开始执行该事件（选取事件的逻辑取决于分发规则，比如默认的FIFO规则会选取最先加入队列的事件）。

### 3.2 参数调整

该方案在调整参数时，需经过以下过程：

1. 请求分组工厂，通过名称拿到准备进行调整的分组对象，不支持直接在Consumer中设置参数。

   只有该分组对象对外公开提供了调整方法的参数才能够被调整。

2.	调用分组对象中的调参方法，尝试设置参数。涉及以下两种情况：

    a)	参数限制必须在几组数字规定的范围内。
        
        若尝试设置的参数不在范围内，则反馈设置失败。
        
        若在允许的范围内，则分组对象会通过消费管理器拿到对应的消费器，在设置目标参数到目标值的同时，将其它的参数也随之按照匹配的那组数字设置成相应的值。
    
    b)	参数限制必须符合一定的比例。
    
        分组对象通过消费管理器拿到对应的消费器，在设置目标参数到目标值的同时，将其它的参数也按照比例计算出相应的目标值，全部进行重新设置。
        
除了手工设置参数外，每个消费器均有一个独立的监控线程，统计消费器中的等待队列长度、正在执行的事件数量、执行时间的增长比例等指标。

在每个分组对象中，会对这些指标设置阈值和告警比例，一旦某个指标超过阈值，或多个指标间的比例超过限定范围（比如监控到平均执行时间大于分发间隔参数，即认为超过阈值），监控线程就会立即对消费器进行相应的扩展。

扩展时，会充分利用上述的调参过程，具有针对性的调大某个参数，其它参数会自动随之得到扩展。
