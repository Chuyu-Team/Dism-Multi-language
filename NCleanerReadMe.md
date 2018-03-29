# NCleaner 自述

## 介绍
首先感谢使用和支持该项目的一切用户；其次我还想感谢Dism++的开发团队(即初雨团队)

NCleaner原本是一个Dism++第三方清理增强插件；由于我不想在用Dism++的时候还要用
CCleaner；于是诞生了这个插件

Dism++作者（小鸭子）打算把清理功能外包给NCleaner（或者说是Dism++深度整合
NCleaner）我也很赞同作者的看法，于是从NCleaner 1.0.1.4开始NCleaner正式成为
Dism++的组件

先谈谈我认为与Dism++深度整合的好处
- 大部分人不需要单独下载NCleaner
- NCleaner不再会因为Dism++API结构更改而背锅
- 测试范围更加广阔，出Bug即使我没空修复Dism++作者也能帮忙修复(*^_^*)

**如果发现Bug和提建议，希望你们可以多多包涵并请及时在群内反馈**

- 初雨Dism++官方群：200783396 282276394
- M2-Team官方群：466078631

**谢谢，By Chuyu Team & M2-Team**

## 更新日志
**NCleaner 1.0.4.0**
- 移除缩略图缓存清理残留代码
  - 在NCleaner 1.0.3.0开始缩略图缓存清理已使用DISM++规则实现
- 整理并优化代码
  - 完全使用MSDN文档化API

**NCleaner 1.0.3.10**
- 降低某些情况下潜在dll抗劫风险
- 解决潜在初始化崩溃问题

**NCleaner 1.0.3.9**
- 解决系统还原清理功能可能发生的崩溃的两个Bug

**NCleaner 1.0.3.8**
- 添加dll抗劫持功能

**NCleaner 1.0.3.6**
- 深度整合M2-SDK库
  - 因为其他M2工具不再用到该库，但该库一旦修改，GitHub对应部分会同步
- 删除无用代码
- 根据VC编译器文档的建议，使用 /W4 编译

**NCleaner 1.0.3.5**
- 修复新版Visual Studio安装源缓存清理的日志输出Bug
- 整理并优化代码
- 修改编译选项
  - 根据新版VC-LTL文档
- 添加损坏的AppX在线清理
  - 清理损坏的AppX。例如Visual Studio的通用应用XAML设计器暴力删除临时生成的设计
    器应用，于是会出现大量损坏的AppX

**NCleaner 1.0.3.4**
- 重新调整Release编译选项为“使大小最小化 (/O1)”
- 优化日志输出逻辑

**NCleaner 1.0.3.3**
- 调整Release编译选项为“使速度最大化 (/O2)”
- 同步VC-LTL版本至1.0.0.8
- 整理并优化代码
- Package Cache清理支持清理特定用户的Package Cache

**NCleaner 1.0.3.2**
- 整理并优化代码

**NCleaner 1.0.3.1**
- 整理并优化代码

**NCleaner 1.0.3.0**
- 缩略图缓存清理完全使用Dism++规则实现
- 增加新版Visual Studio安装源缓存清理
- 整理代码

**NCleaner 1.0.2.9**
- 引入M2-SDK
  - https://github.com/M2Team/M2-SDK
- 移除重复代码
- 缩略图缓存清理使用Dism++的ExplorerNotify功能启动Explorer以解决#43问题
  - 链接：https://github.com/Chuyu-Team/Dism-Multi-language/issues/43

**NCleaner 1.0.2.8**
- 使用VS2017重新编译
  - By mingkuang

**NCleaner 1.0.2.5**
- 解决BUG，修复LocalPackage文件名为空时程序奔溃问题
  - By mingkuang

**NCleaner 1.0.2.4**
- 在Installer清理的注册表操作传入备份恢复特权Flag
- 同步M2.Native库并优化编译结果

NCleaner 1.0.2.3
- 修复在32位模块下取消对sse和sse2指令集的依赖无效问题
- 同步M2最新代码重新编译

**NCleaner 1.0.2.2**
- 新增Installer清理
  - 实验性功能，专家模式Only

**NCleaner 1.0.2.1**
- 增加传递优化（DeliveryOptimization）缓存清理
- 使Package Cache清理与Windows Installer实现互斥

**NCleaner 1.0.2.0**
- Package Cache清理：改善对.Net Core安装源的清理
- 缩略图缓存清理：减少重启Explorer时的API调用次数
- 在32位模块下取消对sse和sse2指令集的依赖
  - 感谢mingkuang
  - 解决某些古董CPU机器因为没有SSE指令集而崩溃的问题

**NCleaner 1.0.1.6**
- 修复系统还原点清理扫描奔溃的Bug（由mingkuang修复）

**NCleaner 1.0.1.5**
- 优化并调整代码
- 修复Windows事件日志清理的Bug

**NCleaner 1.0.1.4**
- 嵌入Dism++
  - 继承Dism++的全部清理规则,且把清理规则移入Data.xml，并作以下调整
    - 对清理规则进行归类
    - NCleaner规则融入Dism++分类
    - 移除Installer清理
	  - 这是上古残留，且NCleaner也有一份替代实现
    - 移除Visual Studio安装源清理
	  - 因为有更好的方案，即Package Cache清理
    - 临时文件清理规则扩充，应用容器临时文件清理规则合并入临时文件清理
    - 应用容器CLR缓存清理合并入Windows日志清理
    - Windows事件清理实现移入NCleaner
  - 多语言部分移除
    - 我相信Dism++翻译组，当然参考翻译会提供给他们
  - 移除对旧版本Dism++的兼容代码
  - 使用Dism++内部方法调用Dism++ API
  - 为Dism++清理函数提供转发
- 优化代码
  - 使用Native API加载DLL并获取函数入口
  - 系统还原点清理不再获取不必要的函数入口
  - 缩略图缓存Explorer重启部分调用Native API模拟令牌
- 移除NCleaner关于对话框
  - 因为Dism++关于UI可以直接查看NCleaner版本号
- 修复Package Cache清理不能离线使用的Bug
- 暂时屏蔽Installer清理
  - 感谢夏虫反馈Bug，虽然Bug修复容易；但是干脆重新研究下清理方案

**NCleaner 1.0.1.3**
- 移除IE网页缓存清理
  - 被WinINet网页缓存清理替代
- 移除IE Cookies清理
  - 被WinINet Cookies清理替代
- 移除Edge网页缓存清理
  - 被WinINet网页缓存清理替代
- 移除Edge Cookies清理
  - 被WinINet Cookies清理替代
- 添加WinINet网页缓存清理
  - 清理每个用户账户和应用容器下的Windows网络组件（例如IE，Edge）的网页缓存（仅
    支持默认目录）
- 添加WinINet Cookies清理
  - 清理每个用户账户和应用容器下的Windows网络组件（例如IE，Edge）的Cookies（仅
    支持默认目录）
- 增强微软系安软无用文件清理
  - 添加删除MA NIS的日志文件
- 修复零售演示离线内容清理规则
- 添加应用容器临时文件清理
  - 清理每个应用容器下的临时文件
- 添加应用容器CLR缓存清理
  - 清理每个应用容器下的CLR缓存
- 新清理项目多语言同步
  - 感谢随便问我

**NCleaner 1.0.1.2**
- 改善语言ini文件解析
- 修复Readme文档的错误
- 解决与Dism++ 10.1.9.1的兼容性问题 
  - 感谢东方牛

**NCleaner 1.0.1.1**
- 提升对Dism++的最低版本要求到10.1.6.5
  - 当时和mingkuang讨论时，Dism++最新版本是10.1.6.5
- 删除对旧版本的兼容代码
- 加入多语言（英语和繁体中文）支持
  - 感谢hortz, ITechDeveloper, 随便问我
- 解决与Dism++ 10.1.10.0的兼容性问题
  - 感谢mingkuang和那位反馈给mingkuang的无名英雄
  - 如果可以提供ID,则我会修改本条目

**NCleaner 1.0.0.7**
- 去除工具箱NCleaner项目前面的#号
- 优化代码
- 增加零售演示离线内容清理
- 完全使用Native API实现文件遍历和删除
- 修复日志中返回的错误值Bug
- 修复潜在的调用Dism++API返回时的判断Bug
  - 由于Dism++规定,只有返回S_OK代表执行成功

**NCleaner 1.0.0.6**
- 禁用多语言支持
- 增加Visual Studio日志清理
- 增加Installer目录清理
  - 基本清理功能，类似WICleanup小工具
- 使用TaskDialog替代MessageBox实现关于NCleaner对话框
- 修复潜在的规则Bug和插件Bug
- 扩充了Package Cache清理规则

**NCleaner 1.0.0.5**
- 改进检测规则
- 优化清理项目描述
- 把程序内嵌资源移入资源DLL以减少空间占用
- 根据Windows10的新图标尺寸重新生成了图标
- 优化在Dism++下显示NCleaner图标的效果
  - 需要Dism++ 10.1.5.8（2016年6月9日及之后编译）及以上版本才能享受到
- 初步加入多语言支持
  - 需要Dism++ 10.1.5.8（2016年6月9日及之后编译）及以上版本才能享受到

**NCleaner 1.0.0.4**
- 减小系统还原点清理扫描大小误差;并设定大小小于512MB不予清理
  - 根据mingkuang的建议做出的调整
- 添加Package Cache清理
  - 清理后基于WIX的安装程序例如VS可以正常卸载；但升级、修复、增添组件需要联网或
    者备好安装镜像
- 添加Web平台安装程序缓存清理
  - 安装Azure开发工具时会用到WPI，其缓存几乎只是一次性使用，可以安全删除
- 小工具中的NCleaner图标占位符起到显示NCleaner插件版本信息的作用

**NCleaner 1.0.0.3**
- 增加微软系安软无用文件清理
  - 提取自磁盘清理，由于Dism++引擎高效，所以原理相同但速度比磁盘清理快得多
- 使用VC-LTL运行时替代msvc运行时，大幅度减小程序大小
  - 程序大小减小到原来的30% ，感谢初雨团队，特别是mingkuang
- 修复离线模式下显示系统还原点清理的Bug
- 修复离线模式下图标缓存清理出现未指定错误的Bug
- 优化代码
- 按照mingkuang的建议在清理项目旁边加上“不建议频繁清理字样”
- 修复IE Cookies清理位置与IE 网页缓存一致的Bug

**NCleaner 1.0.0.2**
- 移除IE和Edge缓存清理
  - 因为有更好的替代清理项
- 增加Windows图标缓存清理
  - 修改自自己以前在远景发布的Windows图标缓存清理工具，支持离线，联机情况下只支
    持当前用户清理；表示大部分人用Windows也是单用户模式，所以应该影响不大
- 添加IE和Edge各自的网页缓存和Cookies清理
  - 只是IE的只支持默认路径；虽然Edge也是默认路径，但Edge路径固定
- 在小工具增加“NCleaner选项”项
  - 虽然其中没有实现什么功能，只是占位符；也说明你的Dism++是否集成NCleaner

**NCleaner 1.0.0.1**
- 增加系统还原点清理
  - 这是我曾经研究内容的精华，一些被系统还原点占尽系统盘空间的人可以因此受益
- 增加IE和Edge缓存清理
  - 照搬Windows 10 磁盘清理实现，因为足够简单；但是只能用于Win10联机映像且返回
    可清理大小不准确；因为微软自家的磁盘清理返回的Internet缓存大小也不准确；也
	证明我是照搬微软的实现，笑

## 第三方库列表
**VC-LTL**
- 项目首页：https://github.com/Chuyu-Team/VC-LTL
- 介绍和授权：
  - VC-LTL 是一个开源的第三方修改VC库，大家都可以免费，无条件，甚至是用于商业环
    境。本库基于VC140修改，所以也同样适用Common Public License协议。
  - 但我也希望如果你可以在程序的说明文件中声明下，使用了此库，来使更多人受益。
	——mingkuang

**M2-SDK**
- 项目首页：https://github.com/M2Team/M2-SDK
- 介绍和授权：
  - M2-SDK是M2-Team系列工具使用的开发包
  - https://github.com/M2Team/M2-SDK/blob/master/License.txt
