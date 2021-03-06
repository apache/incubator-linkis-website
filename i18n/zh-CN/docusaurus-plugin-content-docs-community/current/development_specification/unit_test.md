---
title: 测试规约
sidebar_position: 7
---

1. 【**强制**】工具类和服务内部接口一定要有测试样例。
2. 【**强制**】单元测试需要能够自动化（通过 mvn编译即可触发）、独立性(单元测试用例间不可相互调用)、可重复执行(可以多次执行，结果一样)。
3. 【**强制**】一个测试用例应该只测试一个方法。
4. 【**强制**】测试用例异常不可以catch，需要向上抛出。
5. 【**强制**】单元测试代码必须写在如下工程目录：src/test/java or scala，不允许写在其他录下。
6. 【推荐】单元测试需要考虑边界条件，如日期需要考虑月末和2月。
7. 【推荐】对于数据库相关的单元测试，要考虑数据回滚。
