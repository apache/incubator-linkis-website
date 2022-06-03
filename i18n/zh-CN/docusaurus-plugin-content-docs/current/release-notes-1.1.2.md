---
title: Release Notes 1.1.2
sidebar_position: 0.4
--- 

Apache Linkis(incubating) 1.1.2 包括所有 [Project Linkis-1.1.2](https://github.com/apache/incubator-linkis/projects/20)。


本次发布主要支持 Linkis 部署解耦 HDFS；添加 Sqoop 引擎；修复社区已知 bug；修复安全漏洞等；

主要功能如下：
* 支持 Linkis 部署接口 HDFS [文档](/deployment/deploy_linkis_without_hdfs.md)
* Linkis 增加 Sqoop 引擎 [文档](/engine_usage/sqoop.md)
* 优化日志等，提高问题排查效率
* 修复用户越权等接口的安全问题
* 部分依赖包的升级和社区已知问题修复

缩写：
- COMMON: Linkis Common
- EC: Engineconn
- ECM: EngineConnManager
- ECP: EngineConnPlugin
- DMS: Data Source Manager Service
- MDS: MetaData Manager Service
- LM:  Linkis Manager
- PS: Linkis Public Service
- PE: Linkis Public Enhancement
- RPC: Linkis Common RPC
- CG: Linkis Computation Governance
- 

---
## 新特性
* \[Deployment][[Linkis-1804,1811,1841,1843,1846,1933]](https://github.com/apache/incubator-linkis/pull/1804) 支持 Linkis部署解耦 HDFS，并运行 shell 作业
* \[PS][[Linkis-1949]](https://github.com/apache/incubator-linkis/pull/1949) 增加未完成作业的列表接口 (/listundone)，并利用定时调度优化查询性能
* \[BML][[Linkis-1811,1843]](https://github.com/apache/incubator-linkis/pull/1843) 支持 BML Service 以本地文件系统存储物料的模式部署
* \[Deployment][[Linkis-1841]](https://github.com/apache/incubator-linkis/pull/1841) 支持用户部署时关闭 Spark/Hive/HDFS 环境检测
* \[Common][[Linkis-1887]](https://github.com/apache/incubator-linkis/pull/1887) RPC-Sender 支持修改 Ribbon 等参数
* \[EC][[Linkis-1971]](https://github.com/apache/incubator-linkis/pull/1971) EC AsyncExecutor 支持设置并行 Job Group 的个数
* \[Common][[Linkis-2059]](https://github.com/apache/incubator-linkis/issues/2059) 使用 task id 作为日志中的 trace id
* \[ECP][[Linkis-2074]](https://github.com/apache/incubator-linkis/issues/2074) Flink 引擎支持自定义配置
* \[Engine][[Linkis-2109]](https://github.com/apache/incubator-linkis/pull/2109) 增加 Sqoop 引擎类型

## 增强点
* \[EC][[Linkis-1942]](https://github.com/apache/incubator-linkis/pull/1942) EC支持将taskID塞入到底层引擎的conf中，方便做任务的血缘分析关联到具体的linkis任务
* \[Entrance][[Linkis-1941]](https://github.com/apache/incubator-linkis/pull/1941) Entrance 支持将原始的 jobId 传递给 EngineConn 和 LinkisManager.
* \[Orchestrator][[Linkis-1937]](https://github.com/apache/incubator-linkis/pull/1937) Orchestrator任务重试时creator判断支持判断多个,参数应该支持配置多个Creator
* \[RPC][[Linkis-1903]](https://github.com/apache/incubator-linkis/pull/1903/files) 修改 RPC 模块异常处理逻辑，透出 EngineConnPlugin 原始错误信息
* \[RPC][[Linkis-1905]](https://github.com/apache/incubator-linkis/pull/1905) 增加参数支持传递 LoadBalancer 的参数，比如 Ribbon
* \[Orchestrator][[Linkis-1937]](https://github.com/apache/incubator-linkis/pull/1937) Orchestrator任务重试时creator判断支持判断多个，参数支持配置多个Creator
* \[PE][[Linkis-1959](https://github.com/apache/incubator-linkis/pull/1959) ContextService 增加日志方便错误排查
* \[EC][[Linkis-1937]](https://github.com/apache/incubator-linkis/pull/1937) Task 的执行错误日志由 cat 改为 tail -1000 控制日志数量
* \[Deployment][[Linkis-1971]](https://github.com/apache/incubator-linkis/pull/1989) 由于可能存在多块网卡，由用户选择使用某个 IP
* \[CG,PE][[Linkis-2014]](https://github.com/apache/incubator-linkis/pull/2014) 增加配置 add/get/delete，优化同步锁
* \[Common][[Linkis-2016]](https://github.com/apache/incubator-linkis/pull/2016) 优化 spring cglib 使用
* \[Entrance][[Linkis-2045]](https://github.com/apache/incubator-linkis/issues/2045) 重构EntranceInterceptor实现类中脚本类型和运行类型匹配关系
* \[Gateway][[Linkis-2071]](https://github.com/apache/incubator-linkis/issues/2071) Header 中增加 GatewayURL

## 修复功能
* \[Engine][[Linkis-1931]](https://github.com/apache/incubator-linkis/pull/1931) 修复 Python 引擎加载 PySpark 函数的异常行为
* \[Deployment][[Linkis-1853]](https://github.com/apache/incubator-linkis/pull/1853) 修复安装初始化 DDL 报错的问题
* \[UDF][[Linkis-1893]](https://github.com/apache/incubator-linkis/pull/1893) 为 udf 相关接口增加用户校验
* \[EC][[Linkis-1933]](https://github.com/apache/incubator-linkis/pull/1933) 给非 deploy 用户组的用户执行作业增加 resultSet 的写权限
* \[EC][[Linkis-1846]](https://github.com/apache/incubator-linkis/pull/1846) 修复 ResultSet 配置本地路径无效的问题
* \[PS][[Linkis-1840]](https://github.com/apache/incubator-linkis/pull/1840) 下载 csv 格式数据时，增加灵活选择防止数据格式错乱
* \[CG][[Linkis-1751]](https://github.com/apache/incubator-linkis/pull/1751) 脚本自定义变量运行类型和后缀约束配置化
* \[Web][[Linkis-1895]](https://github.com/apache/incubator-linkis/pull/1895) 资源页面显示问题修复
* \[EC][[Linkis-1966]](https://github.com/apache/incubator-linkis/pull/1966) 使用 System.properties 替换 System.ev
* \[Orchestrator][[Linkis-1992]](https://github.com/apache/incubator-linkis/pull/1992) 修复 Orchestrator Reheater 模块的并发问题
* \[ECP][[Linkis-2027]](https://github.com/apache/incubator-linkis/pull/2027) 修复 ECP 物料下载错误
* \[PE][[Linkis-2032]](https://github.com/apache/incubator-linkis/pull/2032) 配置选项 bugfix
* \[CG][[Linkis-2034]](https://github.com/apache/incubator-linkis/pull/2034) 超时任务的描述信息修复
* \[Web][[Linkis-2036]](https://github.com/apache/incubator-linkis/pull/2036) instance 页面显示问题修复
* \[ECP][[Linkis-2088]](https://github.com/apache/incubator-linkis/pull/2088) 修复 hive task 运行过程中存在进度回退的问题
* \[ECP][[Linkis-2090]](https://github.com/apache/incubator-linkis/pull/2090) 修复 Python3 找不到的问题
* \[CG][[Linkis-2100]](https://github.com/apache/incubator-linkis/pull/2100) 修复高并发下的 db 死锁问题
* \[EC][[Linkis-2131]](https://github.com/apache/incubator-linkis/pull/2131) 修复 Python 引擎由于 pandas 导入异常的问题

## 安全相关
* \[UDF][[Linkis-1893]](https://github.com/apache/incubator-linkis/pull/1893) 修复 udf 部分接口（/udf/list，/udf/tree/add，/udf/tree/update）的用户越权问题
* \[PS][[Linkis-1869]](https://github.com/apache/incubator-linkis/pull/1869) 修复 Linkis PlublicService 相关接口越权问题
* \[PS][[Linkis-2086]](https://github.com/apache/incubator-linkis/pull/2086) 方法 /updateCategoryInfo 增加权限校验

## 依赖变更
* \[COMMON][[Linkis-1808]](https://github.com/apache/incubator-linkis/pull/1808) commons-lang 升级到 commons-lang3
* \[MDS][[Linkis-1947]](https://github.com/apache/incubator-linkis/pull/1947) mysql-connector-java 从 5.1.34 升级到 8.0.16
* \[ECP][[Linkis-1950]](https://github.com/apache/incubator-linkis/pull/1950) hive-exec 从 2.3.3 升级至 2.3.4
* \[ECP][[Linkis-1951]](https://github.com/apache/incubator-linkis/pull/1951) hive-jdbc 从 1.2.1 升级至 2.3.4
* \[ECP][[Linkis-1968]](https://github.com/apache/incubator-linkis/pull/1968) 去除有安全问题的 log4j-1.2.17
* \[ECP][[Linkis-1974]](https://github.com/apache/incubator-linkis/pull/1974) protobuf-java 版本升级至 3.15.8
* \[RPC][[Linkis-2018]](https://github.com/apache/incubator-linkis/pull/2018) 增加依赖 json4s
* \[ECP][[Linkis-2021]](https://github.com/apache/incubator-linkis/pull/2021) 移除 Flink 模块的一些依赖包

## 致谢
Apache Linkis(incubating) 1.1.1的发布离不开Linkis社区的贡献者,感谢所有的社区贡献者，包括但不仅限于以下Contributors（排名不发先后）: Alexyang, Casion, David hua, GodfreyGuo, Jack Xu, Zosimer, allenlliu, casionone, ericlu, huapan123456, husofskyzy, iture123, legendtkl, luxl@chinatelecom.cn, maidangdang44, peacewong, pengfeiwei, seedscoder, weixiao, xiaojie19852006, めぐみん, 李为