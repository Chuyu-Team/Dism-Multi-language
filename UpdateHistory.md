# Dism++ 更新历史记录

## 提示
- 使用全新的架构的Dism++，可以进入官网：www.chuyu.me 获得帮助信息
- 如果需要特殊服务 可以加群： 200783396（敲门砖 临安初雨 一夜落红）
- Compact专门研究群：136241462
- Windows Update测试专群：203425333
- 反馈邮箱：mingkuang@live.com
- NCleaner 自述：
  https://github.com/Chuyu-Team/Dism-Multi-language/blob/master/NCleanerReadMe.md

## 更新历史记录
**Dism++ 10.1.1000.100 夏季更新 14:18 2019/6/7**
- 解决Bug，ISO功能无法创建超过7.9GB的ISO问题（感谢 行走世间全是妖怪）。
- 解决Bug，14393等老版本Win10不能正常InfusedApps不删除问题。
- 解决Bug，某些网络环境无法自动更新问题。
- 解决Bug，解决1903平台NCleaner传递优化缓存崩溃问题。
- 改进体验，将备份还原特权调整为可选，增强Dism++可用性。
- 其他，wimgapi.dll更新到Windows 10 17763。
- 其他，全面切换到VS2019编译。

**Dism++ 10.1.1000.90年度更新 13:21 2019/1/26**
- 解决Bug，避免某些精简PE API导致程序崩溃（感谢 青春永不落幕）
- 解决Bug 583，修复仅启动RE功能无法使用问题（感谢 N5558）。
- 解决Bug，无法处理Windows 10 RS5或更高平台预装appx问题（感谢 乌云、追风少年、光牙）。
- 解决Bug，可选功能屏蔽没有名称的功能（感谢 污云）
- 解决Bug，某些新更新堆栈Windows 7的可能会错误的报告找不到指定源（感谢 追风少年）。
- 解决Bug，Wua API正确性提升，改善某些执行结果与微软不一致问题。
- 解决Bug，解决某些情况网络下载失败问题（感谢 蛤蟆）。
- 解决Bug，解决ARM64无法使用Dism++插件命令行问题（感谢 毛利）。
- 新增Fea，新增2合一ISO支持（感谢 青春永不落幕）
- 新增Fea，Windows功能本地源新增wim挂载目录识别（感谢 追风少年）。
- 新增Fea，在引导修复中添加efi启动项修复支持。
- wimgapi.dll更新到Windows 10 17143（感谢 毛利）
- 多国语言更新（地方有限，但是感谢 所有提交翻译的人士）
- Dism++年度更新，主要改进对新系统的支持以及用户体验。
  - 新的版本中，Dism++能帮助你处理Windows 10 RS5以及更高版本。
  - 新的版本中，Dism++能帮助你在使用引导修复时自动修复efi启动项问题，让你更好的拥抱UEFI。
  - 新的版本中，Dism++会尽可能的降低意外任务中断的可能性，哪怕是极端精简的PE。
- 最后祝大家新年快乐，mingkuang敬上。

**Dism++ 10.1.1000.80B 17:21 2019/1/12**
- 新增Fea，Dism++规则库，增强对Windows Defender、人脉等处理（感谢 iliGPU、冰激凌小子、MS-PC2、救赎之道）。
- 多国语言更新（地方有限，但是感谢 所有提交翻译的人士）

**Dism++ 10.1.1000.80 21:30 2018/8/20**
- 修复Bug，修复“首次登陆动画”规则提示不支持此接口问题（感谢 冰淇淋小子）。
- 解决Bug，com接口上初始化套间错误，导致Wua无法正确执行（感谢 竹叶青）。
- 解决Bug，修复Windows Update WindowsVersion规则特定上下文时执行不正确问题。
- 解决Bug 426，修复离线模式中Windows 10 17133以上系统版本识别为企业版问题（感谢 lovezhiqi123）。
- 解决Bug，修复桌面壁纸质量调整问题（感谢 Łukasz Kuchta）
- 解决Bug，屏蔽Windows 10 17134平台“使任务栏更透明”规则（感谢 Cloud.）
- 解决Bug，当家庭组不存在时不显示家庭组（感谢 冰淇淋小子）
- 新增Fea，添加ARM64支持。
- 更新多国语言翻译。

**Dism++ 10.1.1000.70C 15:14 2018/5/31**
- 解决Bug 444，Windows 10 1803 OneDrive导致系统无法备份问题
- 优化传递清理适配1803（由 毛利 提供）
- 更新多国语言翻译。

**Dism++ 10.1.1000.70B 14:32 2018/4/22**
- 解决青蛙插件在没安装KB2533623中的系统无法运行问题。

**Dism++ 10.1.1000.70 19:06 2018/4/16**
- 解决BUG 438，Windows 10 17639无法处理wim问题。（感谢 28149**226）
- 新增Fea211,系统还原后自动纠正系统盘盘符，避免跨硬盘还原导致黑屏问题。
  （感谢 卡文迪许）
- 行为调整，Dism++选项卡中显示的版本号调整为UBR版本号，避免用户潜在疑惑。

**Dism++ 10.1.1000.62B 13:04 2018/3/28**
- 更新配置，解决Windows 10开启Linux子系统时导致保存wim提示环境错误问题。
- 更新多国语言翻译。

**Dism++ 10.1.1000.62 14:20 2018/3/17**
- Dism++
  - 解决BUG 405，重新进入RE功能无法使用（感谢 MIUI、疯子）
  - 解决BUG，文件关联功能适配最新Windows 10 17120(感谢 Cloud.)
  - 更新UI文件（感谢 清茶苦酒，kokutoukiritsugu）
- NCleaner
  - 移除缩略图缓存清理残留代码（在NCleaner 1.0.3.0开始缩略图缓存清理已使用
    DISM++规则实现）
  - 整理并优化代码（完全使用MSDN文档化API）

**Dism++ 10.1.1000.61 16:50 2018/3/11**
- 解决BUG，dll安全初始化可能导致程序无法启动问题（感谢 TheZihanGu、3.、大个er）
- 解决BUG，获取App信息时可能的的崩溃问题。

**Dism++ 10.1.1000.60 18:29 2018/3/9**
- 解决BUG，Windows 10 17083系统名称显示异常（感谢 老牛吃嫩草）
- 解决BUG 352，某些时候无法正常下载问题（感谢 T1M77、Le）
- 解决BUG 354，无法获取Windows 10 17074预装应用问题（感谢 ukasz Kuchta、Cloud）
- 解决BUG 329，无法识别Windows 10 17074系统版本问题（感谢 Whuihuan、Cloud）

**Dism++ 10.1.1000.52 13:02 2017/12/25**
- 解决BUG 304，Dism++重启explorer后导致Chrome黑屏（感谢 SpDChen，由 毛利 修复）
- 解决BUG 273，减少Dism++自动更新次数，并降低网络超时时间，避免某些极端网络环境
  长时间无响应。（感谢 WanJJ123）
- 解决BUG 297，优化程序体验。阻止每次输完目录后跳出参数错误问题。
  （感谢 keeeeymann ）
- 解决BUG，Dism++消息传递时句柄泄漏问题（感谢 毛利）
- 解决BUG 292，UUP转ISO时直接选择esd转换提示找不到指定资源（感谢 初生之鸟）
- 解决BUG，将ISO标签限制调整为32个字符（感谢 咸鱼）
- 解决BUG 327，误杀Opera问题（感谢 grompes 反馈，由 Jhovany200修复此问题）
- 新增Fea 225，为程序与功能添加排序支持（感谢 Viaxl ）
- 更新多国语言翻译
  - 具体相关信息 请参考 https://github.com/Chuyu-Team/Dism-Multi-language。

**Dism++ 10.1.1000.51B 13:22 2017/11/5**
- 新增Fea 256，新增 关闭Adobe Flash即点即用，感谢 PaTTeeL
- 新增Fea 279，新增 不允许在开始菜单显示建议 for 16299（by powerxing04）
- 新增Fea 281，添加 禁用WfpDiag.ETL日志（by powerxing04）
- 新增Fea 282，添加规则「包含到库中」（文件夹右键）以及「NVIDIA 控制面板」（桌
  面右键），感谢  choyri
- 新增Fea，为 传递优化缓存 清理项增加对 Windows 10, Version 1709 的支持（感谢
  毛利）
- 新增Fea 255，添加 规则 关闭休眠（by powerxing04）
- 新增Fea 259，添加 面壁纸质量调整为（by IT之家） 感谢 Luupw3d提交规则
- 更新 es.xml以及zh-Hant.xml（感谢 Jhovany 200 & GT Wang）

**Dism++ 10.1.1000.51 21:23 2017/10/20**
- 解决BUG，Windows Update无法安装1709 esd问题
- 解决BUG，某些规则不应该在新版本Win10显示问题。
- 解决BUG 258，任务栏时钟精确到秒未重启Explorer问题（感谢 AnnAngela）
- 解决BUG，隐藏此电脑中视频、图片、文档、下载、音乐、桌面、3D对象七个文件夹 未
  重启Explorer问题（感谢 Silence）
- 更新ADK，wimgapi.dll升级到10.0.16299.15
- 多国语言翻译更新相关人员名单请参考
  “https://github.com/Chuyu-Team/Dism-Multi-language/blob/master/README.md”

**Dism++ 10.1.1000.50 13:13 2017/10/15**
- 解决BUG，任务栏时钟精确到秒优化规则适用性检测错误，应该只能在Win10中显示（感
  谢 流星剑）
- 解决BUG 237，收起资源管理器功能区优化项初始条件检测错误问题。（感谢 
  Roger-WIN）
- 解决BUG，解决Vista无法正常使用更新清理问题。（感谢 魏 燕聪）
- 解决BUG，调整360安全卫士的检测方式。
- 新增Fea 233，添加新规则“禁用所有对象的“共享”右键菜单”（感谢 yuehun）
- 更新SDK，编译环境迁徙至10.0.16299.0

**Dism++ 10.1.1000.40 18:48 2017/9/26**
- 解决BUG，更新Dism++堆栈，解决Cbs Interface第二次使用时随机崩溃问题。
- 解决BUG，某些时候重启Explorer无法启动Explorer问题（感谢 幸福的戒）
- 解决BUG，Windows 7某个补丁扫描不出来问题。
- 解决BUG 218，新手模式可启动不会自动感应问题（感谢 nnail）
- 解决BUG 213 ， 不允许在开始菜单显示建议规则搞反了（感谢 lmwuxia ）
- 新增FEA，添加360以及QQ浏览器兼容性检测以及打开回话兼容性弹窗更改
- 新增FEA，ISO生成器添加多实例支持以及32字节输入限制。
- 新增FEA，添加esd更新支持，可以将UUP esd中的文件作为更新（类似于cab、msu）添加
  到系统中。（感谢 留香 大叔建议）

**Dism++ 10.1.1000.31 15:45 2017/8/26**
- 解决 BUG 199 ，某些更新无法离线安装，Dism++依然会提供问题。（感谢 爤菜頭）
- 解决BUG 189，修正某些时候添加更新时可能会遇到失败，“当文件已存在时，无法创建
  该文件。”（感谢 追风少年）
- 解决BUG 188，修正Windows 7针对Windows 8.1系统启用差异传输引擎时报告 数据无
  效。（感谢 伊缠）
- 解决BUG 190，调整Dism++处理堆栈，改进对某些极端精简PE的兼容性问题（感谢 红毛
  樱木）
  - 调整后，典型的 优启通 之类的极端精简PE可以正常为其他系统添加更新。
- 改进对精简PE的支持，PE精简mspatcha.dll时可能导致差异传输无法正常工作问题。
  （感谢 辉哥）
  - 调整后，可以解决某些极端精简的PE也能正常使用差异传输引擎进行补丁安装。
- 解决BUG，Windows 10升级进度可能迟缓问题
- 解决BUG，CBS目录不存在时无法输出OfflineCbs.log日志问题（感谢 污云）
- 解决BUG，修复Dism++引擎True逻辑错误问题（感谢 Joy）
- 改进Windows Update特定情况下的扫描性能，当用户已经安装完成大部分更新时约减少
  70%扫描时间。
  - 具体信息可以参考 https://github.com/Chuyu-Team/Dism-Multi-language/issues
- Data.xml更新，解决某些规则不显示问题（感谢 钢铁侠）
- 另外本次还更新Dism++翻译，感谢所有帮助Dism++的人。具体翻译人员请参考：
  https://github.com/Chuyu-Team/Dism-Multi-language/blob/master/README.md

**Dism++ 10.1.1000.20B 13:59 2017/8/13**
- Dism++语言翻译更新，感谢所有帮助Dism++的人。具体请参考：
  https://github.com/Chuyu-Team/Dism-Multi-language/blob/master/README.md

**Dism++ 10.1.1000.20 13:59 2017/8/13**
- 调整UI配置（123），修正大部分地方蓝底黑字。减轻眼睛压力（感谢 iliGPU）
- 解决BUG，UI配置界面中，Wofadk驱动不加载时右键菜单可以选择问题（感谢 (ÒωÓױ)）
- 解决BUG 164，Dism++64.exe与Dism++32.exe二进制边界不兼容。导致64位Dism++处理32
  位系统点击取消时崩溃。（感谢 Orange Master）
- 解决BUG，修复Dism++多处权限提升BUG。现在Dism++将通过普通User权限，降低用户意
  外访问带恶意脚本网页或者HTTP劫持攻击风险。
- 解决BUG 149，过滤硬件数量<=1的驱动，以免某些虚拟设备驱动被删除（感谢 失控）
- 解决BUG 155，规避微软更新堆栈BUG，某些更新堆栈版本返回进度不正确问题。（感谢
  Andy）
- 解决BUG，规避某些低版本Windows 7更新堆栈缓存策略BUG（感谢 追风少年）
- 新增Fea，Windows Update新增重启生效报告支持。
- 新增Fea，新增Dism++ sut支持，为离线系统添加软件。

**Dism++ 10.1.1000.12 13:59 2017/8/13**
- Dism++规则库更新，解决一些规则问题，比如BUG 162,BUG 161
  - 具体请参考：https://github.com/Chuyu-Team/Dism-Multi-language/issues
- Dism++语言翻译更新，感谢所有帮助Dism++的人。
  - 具体请参考：https://github.com/Chuyu-Team/Dism-Multi-language/blob/master/README.md

**Dism++ 10.1.1000.11 21:03 2017/7/31**
- 此版本用于紧急规避15063的一些系统BUG。
- 解决BUG 148，规避15063系统BUG 系统语言包可被意外卸载问题。（感谢 Caiws）
- 新增Fea，安装更新添加进度支持。

**Dism++ 10.1.1000.10 14:43 2017/7/29**
- 解决一些历史BUG，比如BUG 10、BUG 74、BUG 136
  - 具体请参考 https://github.com/Chuyu-Team/Dism-Multi-language/issues
- 改进Dism++性能，差异传输引擎减少50%的时间，内置Windows Update扫描更新约减少
  70%的时间。
- 改进对Windows 10的支持，系统优化扩充了适用于最新Windows 10的规则
  - 比如：添加3D对象文件夹隐藏、关闭应用商店应用默认推广

**Dism++ 10.1.1000.4 17:06 2017/7/9**
- Data.zip Ver 2017-07-04
  - Data.zip修正某些规则不生效问题

**Dism++ 10.1.1000.3 11:39 2017/7/2**
- wimgapi.dll Ver 10.0.16225.1000
  - 更新wimgapi到最新 10.0.16225.1000

**Dism++ 10.1.1000.2 13:32 2017/6/25**
- default.ui.zip Ver 2017-06-25
  - UI某些字体颜色调整，减轻用户眼睛负担。
- Data.zip Ver 2017-06-25
  - CompactOS平台表达式调整，调整为所有平台均非专家模式隐藏（感谢 李道然）
- Languages Ver 2017-06-25
  - en.zip，英语翻译更新（感谢 Hexhu）
  - ja.zip，日语翻译更新（感谢 山形まり花）
  - zh-Hant.zip，通用繁体更新（感谢 iliGPU）

**Dism++ 10.1.1000.1 20:18 2017/6/17**
- Dism++(x86/x64).exe Ver 10.1.1000.1
  - 修复BUG，添加IE时直接返回尚未实现问题。（感谢 自由自在）

**Dism++ 10.1.1000.0 13:41 2017/6/17**
- Dism++(x86/x64).exe Ver 10.1.1000.0
  - 漏洞修复
    - 修复漏洞，根据秘密反馈，解决一处Dism++可被利用的劫持攻击漏洞。
      （感谢 000）
  - 逻辑修复
    - 改进Dism++对Windows Vista的兼容（感谢 毛利）
    - 解决BUG 111，解决Windows Update无法离线扫描Windows 10 15063问题（感谢 
      Roger-WIN、预谋）
    - 解决BUG 107，打开特殊ISO导致Dism++崩溃问题
    - 解决BUG 106，开启DisableInstallUpdate参数时，Windows Update崩溃问题
    - 解决BUG 99,某些UI界面显示问题（感谢 kulaLin）
    - 解决BUG，自动升级后没有删除.del文件问题
- 新增功能
   - 新增FEA，已安装的更新添加友好名称以及更新安装时间
- CbsHost.dll Ver 10.1.1000.0
  - 解决Windows Vista无法正常记录日志问题
  - 新增功能，过期WinSxS清理更新，针对Windows 10离线清理关闭Resetbase功能。
- Plugin.amd64.dll/Plugin.x86.dll Ver 10.1.1000.0
  - 删除激活备份功能
- NCleaner.dll Ver 1.0.3.6
  - 深度整合M2-SDK库（因为其他M2工具不再用到该库，但该库一旦修改，github对应部
    分会同步）
  - 删除无用代码
  - 修复新版Visual Studio安装源缓存清理的日志输出Bug
  - 整理并优化代码
  - 修改编译选项（根据新版VC-LTL文档）
  - 添加损坏的AppX在线清理（清理损坏的AppX。例如Visual Studio的通用应用XAML设计
    器暴力删除临时生成的设计器应用，于是会出现大量损坏的AppX）
- Data.zip Ver 2017-06-17
  - 调整 显示开始菜单、任务栏、操作中心和标题栏的颜色 等级，所有Windows 10均显
    示（感谢 Cloud）
  - 修复BUG，将同时可用下载数目调整到 10一些错误（感谢 旧食光）
  - 解决BUG 108，Windows 7意外调用NCCorruptedAppXOnlineCleanup问题。
- default.ui.zip Ver 2017-05-31
  - 适配最新程序UI
- CScript.dll
  - 删除此文件，Beta版才拥有的功能。

**Dism++ 10.1.27.2 14:19 2017/6/14**
  - 各种库文件整合以及wimgapi整合

**Dism++ 10.1.27.1 21:09 2017/4/27**
- Dism++(x86/x64).exe Ver 10.1.27.1
  - 解决BUG，修复PE无法识别问题（感谢 城市 边缘）
  - 解决BUG，界面初始化时极端情况导致程序崩溃刷新界面时崩溃问题。
- CbsHost.dll Ver 10.1.27.1
  - 解决BUG，Windows 7无法使用更新清理问题
- NCleaner.dll 1.0.3.4
  - Package Cache清理支持清理特定用户的Package Cache
- default.ui.zip Ver 2017-04-27
  - 解决俄语无法正常显示问题。
- Languages Ver 2017-04-27
  - bg.zip, Thanks to Pavel Belivakov
  - cs.zip，Thanks to Richard Kahl
  - de.zip，Thanks to franz@drwindows.de
  - en.zip
  - es.zip，Thanks to Oleada
  - fr.zip，Thanks to JP.Sudrets
  - it.zip，Thanks to Massimiliano F.
  - ja.zip，Thanks to 山形まり花
  - ko.zip，Thanks to OldMac
  - pl-PL.zip，Thanks to WinClub.pl
  - pt.zip，Thanks to JNylson
  - ru.zip，Thanks to Black Alex, Vasiliy Nasonov
  - zh-Hant.zip，Thanks to iliGPU, 月下独酌

**Dism++ 10.1.25.4 13:53 2017/4/16**
- Dism++(x86/x64).exe Ver 10.1.25.4
  - 解决BUG，修复微软最新wimgapi错误代码问题（感谢 咸鱼）
  - 解决BUG，增加PE检测逻辑，改进与PowerISO的兼容性（感谢 mmxx08）
  - 改进体验，优化WIM映像释放，自动调整ESD默认索引，避免大家手误。
  - 解决BUG，修复某些时候延迟卸载导致程序崩溃问题
  - 优化代码结构，缩减体积20KB
- default.ui.zip Ver 2017-04-09
  - 适配最新UI
- Data.zip Ver 2017-04-16
  - 针对1703屏蔽 显示开始菜单、任务栏、操作中心和标题栏的颜色（感谢 
    q1953555067）
- Languages Ver 2017-04-16
  - en.zip English Resource，Thanks Frag
  - es.zip Spanish Resource，Thanks Oleada
  - it.zip Italian Resource, Thanks Massimiliano F.
  - ja.zip Japanese Resource, Thanks 山形まり花
  - pt.zip Portuguese Resource, Thanks JNylson
  - ru.zip Russian Resource, Thanks Vasiliy Nasonov
  - zh-Hant.zip 繁体中文资源包,感谢 月下独酌
- 温馨提示：为了不让系统自带杀毒误报已经移除了自动添加信任逻辑。如果在使用时发
  现Dism++执行任务耗时很长，而且Dism++CPU使用率非常低，那么请自行在系统自带杀毒
  中添加Dism++为信任。

**Dism++ 10.1.25.3 20:42 2017/4/4**
- Dism++(x86/x64).exe Ver 10.1.25.3
  - 解决BUG，修复某些极端情况反复刷新Windows功能界面时可能导致程序崩溃问题
  - 文件关联适配最新Windows 10 RS2系统（感谢 原罪 反馈）
- Data.zip Ver 2017/4/4
  - 适配 西班牙语 相关提示文字（感谢 Oleada 提供此更新）
- Languages 语言翻译更新
  - es.zip 西班牙语(感谢 Oleada)
  - ja.zip 日语（感谢 山形まり花）
  - ru.zip 俄语（感谢 Black Alex, Vasiliy Nasonov）
  - zh-Hans.zip 简体中文
- PS：此版本主要用于紧急适配Windows 10 RS2最新版。对于RS2还有其他兼容性问题，可
  以继续反馈。另外目前Dism++尚未适配最新的Windows 7补丁，因此对Win7进行更新清理
  基本都是失败。此问题是已知问题，将在未来版本中解决此问题。

**Dism++ 10.1.25.2 21:03 2017/4/1**
- Dism++(x86/x64).exe Ver 10.1.25.2
  - 引入Windows 10内存压缩机制，大幅度缩减Windows Update功能内存占用（约降低
    90%的内存占用，同时几乎不影响到性能）
  - 解决某些服务无法删除问题（感谢 Cloud. 反馈）
  - 修正Windows 7能显示联机文件关联处理问题
  - 修复差异模式安装补丁提示成功却没有安装问题（感谢 离线中勿扰）
- CbsHost.dll Ver 10.1.26.8
  - 删除过期代码。
- Data.zip Ver 2017/3/29
  - 添加 登陆界面默认打开小键盘 规则，感谢（Yukinoshita ）
  - 适配Dism++最新UI。
  - 缩略图缓存清理使用Dism++的ExplorerNotify功能启动Explorer以解决#43问题
- es.zip Ver 2017-04-01
  - 新增西班牙语支持（Thanks to Oleada）

**Dism++ 10.1.25.1 18:44 2017/3/17**
- Dism++(x86/x64).exe Ver 10.1.25.1
  - 使用VS 2017重新编译，并优化代码结构以及文件结构，缩减程序体积
    （约减少体积 2.2MB）
  - 解决一处内存泄漏问题
  - 解决释放映像后无法自动重启或者关机问题（感谢 咸鱼 反馈）
  - 删除CCleaner规则支持，减少误杀概率。
  - Windows Update功能更新，改进引擎检测准确度。
  - 解决某些时候系统版本读取错误（感谢 殇夏oSUMMER）
  - 硬链接合并屏蔽 WindowsApps目录，以免某些程序无法启动（感谢 magsom）
  - 调整垃圾清理展示逻辑（感谢 ugksoft 提供建议）
- CBSHost.dll Ver 10.1.26.3
  - 使用VS 2017重新编译
  - 解决BUG，修复某些时候删除驱动时设备残留问题（感谢 翟延 反馈）
- NCleaner.dl Ver 1.0.2.8
  - 使用VS 2017重新编译
- Plugin.amd64/x86.dll Ver  10.1.26.3
  - 使用VS 2017重新编译
  - 解决青蛙插件复制文件失败时到程序崩溃问题
- CScript.dll Ver 10.1.26.3
  - 使用VS 2017重新编译
- wimgapi.dll Ver 10.0.15052.1000
  - 同步最新Windows ADK
- Data.xml Ver 2017-02-25
  - 扩充规则库（感谢 yui 以及 stanlazy 提供规则）
- ru.zip Ver 2017-03-02
  - 调整翻译内容（Thanks to Vasiliy Nasonov）

**Dism++ 10.1.23.2 19:57 2017/2/28**
- Dism++(x86/x64).exe Ver 10.1.23.2
  - 解决ESD转ISO返回参数错误问题

**Dism++ 10.1.23.1 19:21 2017/2/25**
- Dism++(x86/x64).exe Ver 10.1.23.1
  - 新增FEA，改进分段ESD（UUP）识别，无需ActionList.xml也能正常工作。
    （感谢 留香 意见）
  - 修复BUG，安装软件更新时可能会重启相关软件问题
  - 行为调整，删除Duilib.dll依赖减少程序总体体积
  - 行为调整，挂载功能屏蔽esd以及ISO等文件
  - UI细节调整
- wsuscan2.cab Ver 2017-02-25
  - 同步最新补丁数据
- 语言文件 Ver 2017-02-25
  - 更新 cs.xml，de.xml，en.xml，fr.xml，it.xml，ja.xml，ko.xml，pl-PL.xml，
    ru.xml，zh-Hant.xml
  - 感谢 Richard Kahl, franz, Frag, JP.Sudrets, Massimiliano F.,山形まり花,
    OldMac, Schooli,WinClub.pl,Vasiliy Nasonov, 翔雲

**Dism++ 10.1.21.4B 18:42 2017/2/18**
- wimgapi.dll Ver 10.0.15021.1001
  - 新增FEA，增加150XX 分段ESD(UUP)转ISO功能以及释放映像功能（全平台支持）
- default.ui.zip Ver 2017-02-15
  - 修正UI某些显示问题（感谢 宫 宇冲 反馈 ）

**Dism++ 10.1.21.4 16:11 2017/2/12**
- Dism++(x86/x64).exe Ver 10.1.21.4
  - 新增FEA，增加150XX 分段ESD(UUP)转ISO功能以及释放映像功能（暂不支持Windows 
    7）
  - 新增FEA，格式化时保留卷标（由 咸鱼 提供）
  - 新增FEA，改进系统名称识别方式，兼容Windows 10 Starter/Cloud系统
  - 解决BUG 23，Config.ini未使用Unicode导致某些系统显示异常（suwakowww 反馈）
  - 新增FEA，wimgapi全面适配14393，新增WIM捕获时，扩展属性保存支持
  - 解决BUG，WIMBoot释放映像时行为分析不起作用问题（★星魂☆♂ 反馈）
- Duilib.dll Ver 10.1.24.2
  - 解决BUG，修复Duilib一处潜在崩溃问题
- Plugin.amd64/x86.dll Ver  10.1.24.2
  - 解决BUG，修复高DPI环境文件浏览器发生模糊BUG （Iù weil* 反馈）
- wimgapi.dll Ver 10.0.15021.1000
  - 更新wimgapi基础库，以支持150XX后续新功能
- wsuscan2.cab Ver 2017-02-12
  - 同步最新补丁数据

**Dism++ 10.1.21.3B 16:54 2017/1/21**
- CBSHost.dll Ver 10.1.24.2
  - 解决BUG，修复极端情况 CBS空指针崩溃问题
  - 解决BUG，修复离线系统刚好在Boot分区无法打开会话问题（感谢 yunzy ）
- NCleaner.dll Ver 1.0.2.5（由毛利提供此模块）
  - 解决BUG，修复 LocalPackage 文件名为空时 程序崩溃问题
- Plugin.amd64.dll/Plugin.x86.dll Ver 10.1.24.1
  - 春哥附体全面兼容Windows 10 15007
  - 解决BUG，修复 账号管理提示拒绝访问问题
- zh-Hant.xml Ver 2017-01-16
  - 繁体资源更新，修正一些语法习惯问题（感谢 kulaLin）
- Data.xml Ver 2017-01-16
  - 修正部分规则适应性检查错误（感谢 赖道真）

**Dism++ 10.1.21.3 19:58 2017/1/15**
- Dism++(x86/x64).exe Ver 10.1.21.3
  - 解决15007系统兼容性问题
  - 解决BUG，Windows Update功能可能显示 0个更新问题（感谢 烂菜头）
  - 解决BUG，修正3处，UI并发访问稳定性问题
- CBSHost.dll Ver 10.1.21.3
  - 解决15007系统兼容性问题
- NCleaner.dll Ver 1.0.2.4（由毛利提供此模块）
  - 同步M2.Native库并优化编译结果
  - 适配新版本的CBSHost.dll
- Duilib.dll Ver 10.1.21.3
  - UI控件添加触摸屏支持（感谢 Hikari&nbsp;Calyx 提供平板设备）
- Data.xml Ver 2017-01-15 
  - 添加 Installer清理项目以及英伟达安装文件
- 多国语言翻译更新
  - Thanks Richard Kahl, franz@drwindows.de, Frag, JP.Sudret, Massimiliano F., 
    山形まり花, OldMac, WinClub.pl, Vasiliy Nasonov, 月下独酌

**Dism++ 10.1.21.2C 20:57 2017/1/11**
- wsuscan2.cab Ver 2017-01-11
  - 同步最新补丁数据

**Dism++ 10.1.21.2B 11:36 2017/1/8**
- Dism++(x86/x64).exe Ver 10.1.21.2B
  - 修复BUG，解决在空间回收不断点击 刷新 按钮可能导致程序崩溃问题
  - 避开系统BUG，由于Windows 10 14986系统 GetHandleInformation API BUG存在问
    题，导致Dism++文件虚拟化崩溃，现在已经避开 对 GetHandleInformation 的调用。
- Data.xml Ver 2017-01-07 
  - 调整规则说明，响应规则提供者要求 将 雪姬 全部替换为 溯汐潮。

**Dism++ 10.1.21.2 16:00 2017/1/7**
- Dism++(x86/x64).exe Ver 10.1.21.2
  - 修复BUG，解决CompactOS遇到某些非法PE文件崩溃问题
  - 修复BUG，解决Windows Update下载更新时可能发生的死锁问题
  - 新增FEA，新增Windows Update引入快速差异功能，节省70%网络传输 速度提升30倍。
    （PS：完整版差异引擎 节省90%网络传输，但是扫描速度慢。用户可自由切换引擎工
    作状态）
  - 修复BUG，解决某些环境总是提示用户协议问题（感谢 莫忘莫失）
- CBSHost.dll Ver 10.1.21.2
  - 新增FEA，新增Intel USB 3.X 驱动兼容支持，自由添加1.0/5.0双驱动，不必担心同
    时添加无效问题
  - 新增schema注册表支持，HKEY_USERS\schema即可访问此注册表，详情参考最新版帮助
    文档
  - 修复BUG，解决CBS模块进度不正确问题（感谢 XXX）
- Duilib Ver 10.1.21.2
  - 全面改造UI模块框架，改进UI稳定性问题
- NCleaner.dll Ver 10.0.2.3（由 毛利 提供此更新）
  - 同步最新的M2库
  - 减少模块体积
  - 解决某些古董级CPU不支持某些指令集崩溃问题
- default.ui.zip Ver 2017-01-06 
  - 调整UI，适应新版本
- Data.xml Ver 2017-01-06 
  - 年度规则扩充（感谢 大胖子、雪姬、dfc643）
- 多国语言翻译更新 Ver 2017-01-07
  - Thanks for Richard Kahl, franz@drwindows.de, Frag, Hexhu, JP.Sudret, 
    Massimiliano F., 山形まり花, OldMac, WinClub.pl, Vasiliy Nasonov, 月下独酌

**Dism++ 10.1.21.1B(1125) 19:17 2016/12/28**
- default.ui.zip Ver 2016-12-27 （由 毛利 提供此更新）
  - 调整UI，以免其他语言无法显示部分翻译问题

**Dism++ 10.1.21.1(1125) 20:40 2016/12/27**
- Dism++(x86/x64).exe Ver 10.1.21.1
  - 解决BUG，修复Imagex无法处理swm映像（由 城市 边缘 反馈）
  - 解决BUG，修复系统精简wimgapi时，使用wimgapi相关功能崩溃
  - 解决BUG，用户精简default.ui.zip时，导致Dism++崩溃，现在已经调整为提示用户重
    新下载。
  - 新增FEA，Dism++自动升级添加差异升级支持，节省80%的程序升级流量
- CBSHost.dll Ver 10.1.22.2
  - 解决BUG，修复guard64恶意软件注入Dism++导致程序崩溃问题
- NCleaner.dll Ver 1.0.2.2（由 毛利 提供此更新）
  - 新增Installer清理
  - 增加传递优化（DeliveryOptimization）缓存清理
  - 使Package Cache清理与Windows Installer实现互斥
- Data.xml Ver 2016-12-25
  - 适配最新NCleaner.dll
  - 部分优化规则显示调整
- default.ui.zip Ver 2016-12-27 （由 毛利 提供此更新）
  - 调整清理界面UI
- 多国语言翻译更新 Ver 2016-12-28
  - Config\Languages\cs.xml，Thanks Richard Kahl
  - Config\Languages\fr.xml，感谢 JP.Sudret
  - Config\Languages\ja.xml，感谢 山形まり花
  - Config\Languages\ko.xml，Thanks OldMac
  - Config\Languages\ru.xml，感谢 月下独酌
- wsusscn2.cab Ver 2016-12-25
  - 同步微软最新更新更新数据

**Dism++ 10.1.17.5(1102) 20:20 2016/12/16**
- Dism++(x86/x64).exe Ver 10.1.17.5
  - 修复BUG，解决CompactOS扫描时 遇到特殊精心构造的非法PE文件时崩溃问题
  - 调整bcdboot加载逻辑，改进Vista系统引导修复的兼容性问题（感谢 原罪）
  - 修复BUG，解决Win7新NET更新因为msp与cab混合而无法扫描问题（感谢 爱读书）
  - 修正各种强制退出程序后的崩溃问题
  - 修复BUG，解决重新载入变成退出问题（感谢 ★無名氏）
  - 新增FEA，新增挂载映像重启系统后自动修复功能（在打开会话 时自动修复 挂载失效
    问题）
- FrogPlugins_Pcn7FMvReAsVWfCQBfRJCw\Plugin.*.dll Ver 10.1.20.9
  - 修复BUG，制作ISO时强行关闭窗口导致程序崩溃问题
- NCleaner.dll Ver 1.0.2.0（By 毛利）
  - Package Cache清理：改善对.Net Core安装源的清理
  - 缩略图缓存清理：减少重启Explorer时的API调用次数
  - 在32位模块不使用sse和sse2指令集，解决某些古董CPU机器因为没有SSE指令集而崩溃
- 多国语言更新
  - Thanks franz, Frag, JP.Sudret, Massimiliano F., Vasiliy Nasonov, jamesfuh

**Dism++ 10.1.17.4B(1087) 12:49 2016/12/14**
- wsusscn2.cab Ver 2016-12-14
  - 同步微软最新更新更新数据

**Dism++ 10.1.17.4(1087) 20:39 2016/12/12**
- Dism++(x86/x64).exe Ver 10.1.17.4
  - 解决BUG，修复一些程序界面描述问题（感谢 明天）
  - 新增功能，新增对Windows 10分段ESD映像支持，目前仅支持释放映像，无法转ISO（
    感谢 山形まり花 提供分段ESD映像）
  - 解决BUG，修复操作完成后重启无效问题（感谢 Space Tomato）
  - 解决BUG，修复Dism++无法打开VM映射分区问题（感谢 原罪）
  - 解决BUG，修复swm文件无法释放问题（感谢 TIELBB）
  - 行为调整，更新元数据更新频率调整为实时
- CbsHost.dll Ver 10.1.17.4
  - 行为调整，驱动清理排除关键驱动（感谢 失控）
- 多国语言更新
  - Thanks 明天, Franz, Hexhu, 艾迪熊！

**Dism++ 10.1.17.3B(1077) 20:38 2016/12/7**
- wsusscn2.cab Ver 2016-12-07
  - 同步微软最新更新更新数据

**Dism++ 10.1.17.3(1077) 16:35 2016/12/4**
- Dism++(x86/x64).exe Ver 10.1.17.3
  - 下载模块增加自动重新连接，缓解 百度CDN 频繁 404 问题。
  - 解决BUG，修复升级失败后点击 “确定” 更新程序错误的提示没有更新问题（感谢
    123 以及`_ 小陌 ）
  - 解决BUG，修复驱动管理删除驱动后，未刷新界面问题
  - 改进与微软Dism的兼容性，支持与微软Dism 原子互斥
- CbsHost.dll Ver 10.1.17.3
  - 修正对关键启动驱动的支持（感谢 A-BO）
- Config\Data.xml Ver 2016-12-04
  - 修正一些系统优化项描述错误（感谢 Hexhu）
-  多国语言翻译更新 Ver 2016-12-04
  - Config\Languages\cs.xml，修正部分错误（感谢 Hexhu）
  - Config\Languages\de.xml，新增『德语』翻译（Thanks franz@drwindows.de ）
  - Config\Languages\en.xml，修正部分错误（感谢 Hexhu）
  - Config\Languages\fr.xml，修正部分错误（感谢 Hexhu）
  - Config\Languages\it.xml，修正部分错误（感谢 Hexhu）
  - Config\Languages\ja.xml，修正部分错误（感谢 Hexhu）
  - Config\Languages\ko.xml，修正部分错误（感谢 Hexhu）
  - Config\Languages\ru.xml，调整部分翻译（Thanks Vasiliy Nasonov）
  - Config\Languages\zh-Hant.xml，修正部分错误（感谢 Hexhu）

**Dism++ 10.1.17.2B 19:08 2016/11/30**
- Config\Data.xml Ver 2016-11-30
  - 解决酷狗音乐误杀问题，感谢 (๑'ᴗ')ゞ
- Config\default.ui.zip Ver 2016-11-30
  - 扩充翻译致谢列表
- 多国语言翻译更新 Ver 2016-11-30
  - Config\Languages\cs.xml，修正部分错误
  - Config\Languages\de.xml，新增『德语』翻译（Thanks franz@drwindows.de ）
  - Config\Languages\en.xml，调整部分翻译（感谢 Hexhu）
  - Config\Languages\fr.xml，修正部分错误
  - Config\Languages\it.xml，新增『意大利语』翻译（Thanks Massimiliano F. ）
  - Config\Languages\ja.xml，修正部分错误
  - Config\Languages\ko.xml，修正部分错误
  - Config\Languages\ru.xml，修正部分错误
  - Config\Languages\zh-Hant.xml，修正部分错误

**Dism++ 10.1.17.2 13:23 2016/11/26**
- Dism++(x86/x64).exe Ver 10.1.17.2
  - 行为调整，程序崩溃时添加崩溃恢复
  - 改进对精简版PE的兼容性，即使精简CBS组件，Dism++依然能给PE添加驱动。
- ru.xml Ver 2016-11-26
  - 补充遗漏的俄语翻译（感谢 Vasiliy Nasonov）

**Dism++ 10.1.17.1 17:38 2016/11/21**
- CbsHost.dll Ver 10.1.17.1：
  - 删除CbsCreateTempDirectory API
  - 同步CppHealper最新代码
- Data.xml Ver 2016-11-19：
  - 扩充清理规则
- default.ui.zip Ver 2016-11-19：
  - 适配最新程序
- Dism++(x86/x64).exe Ver 10.1.17.1：
  - 行为调整，崩溃时增加崩溃模块信息输出。
  - 修复BUG，解决更新元数据并发访问时，导致程序崩溃（感谢 辉哥）
  - 修复BUG，解决Windows Update更新下载大小未纳入快速体验包大小（感谢 
    1650***614 ）
  - 新增FEA，补丁下载新增Url导出功能
  - 修复BUG，解决bcdboot工作判断不正常，导致错误的弹窗警告
  - 同步CppHealper最新代码
  - Windows Update差异传输引擎性能改进，缩减安装更新时发生的文件复制操作，新版
    本Dism++仅需复制补丁新增文件，无需复制现有组件，大幅度降低IO需求并改进性
    能。
  - Windows Update差异传输引擎功能改进，使用差异传输引擎安装补丁时，将自动修复
    目标补丁相关系统文件错误。
    - 某些Ghost系统将WinSxS进行了0字节化处理。Dism++安装更新时，将自动修复安装
      更新需要的系统文件。
    - 另外6B蓝屏补丁，在使用Dism++差异传输引擎模式下安装更新也不会引发蓝屏，文
      件错误将自动纠正。
  - 增加14951兼容性检查
  - 修复BUG，计划重启时因为被窗口阻挡而无法重启或者关机问题
  - 行为调整，更新引入Tag机制，以免手动更新时提示降级问题（Fix by mingkuang）
  - 行为调整，默认引导挂掉时，Dism++引导修复后需要多按F9才能启动系统，现在修复
    引导后Dism++将会把修复的系统设置为默认（感谢 风无痕）
  - 行为调整，修复引导时，如果提示BCD损坏，则自动删除BCD文件夹然后重建（感谢 
    风无痕）
- DuiLib.dll Ver 10.1.17.1：
  - 同步CppHealper最新代码
  - 修复BUG，Edit控件中按Delete导致程序崩溃问题（感谢 lm***sb@qq.com）
- NCleaner.dll Ver 1.0.1.6 ：
  - 修复BUG，修复还原点扫描崩溃BUG（感谢 1814***9059）
  - 调整并优化代码
- 多国语言翻译：
  - cs.xml，新增捷克语资源文件（感谢 Richard Kahl）
  - en.xml，适配新版本翻译（感谢 Frag）
  - fr.xml，适配新版本翻译（感谢 JP.Sudret）
  - ja.xml，适配新版本翻译（感谢 山形まり花）
  - ko.xml，删除无用翻译文字（目前韩语无人维护，恳请各位韩语大神前来找茬）
  - ru.xml，适配新版本翻译（感谢 Vasiliy Nasonov）
  - zh-Hant.xml，适配新版本翻译（感谢 月下独酌）

**Dism++ 10.1.15.6 11:01 2016/11/10**
- 更新数据库同步到 2016-11-10

**Dism++ 10.1.15.5 14:24 2016/10/28**
- 更新数据库同步到 2016年10月28日

**Dism++ 10.1.15.4 13:03 2016/10/24**
- 更新数据库同步到 2016年10月24日

**Dism++ 10.1.15.3 19:02 2016/10/20**
- 更新数据库同步到 2016年10月19日
  - PS：WSUS库已经调整，已经支持Win7更新全离线集成,不会因为独占更新而导致某几个
    更新不能集成问题。

**Dism++ 10.1.15.2 15:17 2016/10/19**
- 更新数据库同步到 2016年10月19日
- Data.xml，清理规则更新（感谢 离线中勿扰）
- ja.xml,日语翻译更新，（感谢 山形まり花）

**Dism++ 10.1.15.1(988) 12:38 2016/10/16**
- 修正BUG，Appx API修正Win10支持，由于Win10新增后台异步部署，刚安装系统时刚立马
  删除Appx，将导致卸载不全问题。现在Dism++已经添加Windows异步部署感知，来解决此
  问题（责任老猫）
- 修正BUG，Windows Update反复扫描时，偶尔发生崩溃问题
- 修正BUG，文件浏览器直接选择计算机，确定后可能导致程序崩溃问题（感谢 
  盗墓笔记）
- 修正BUG，解决一定概率导致安装更新时第一次失败，第二次才成功BUG
- 修正BUG，解决重新载入头标题未更新问题（感谢 夏虫）
- 修复BUG，解决某个特殊状态下Dism++发生无限等待问题（感谢 辉哥）
- 新增FEA，添加NCleaner，此版本开始NCleaner作为Dism++的清理引擎（感谢 毛利）
- 新增FEA，ISO创建添加介质自动适应
- 行为调整，NativeDism调整为使用分区信息进行定位，而不是以前的分区ID，提高系统
  还原成功率。
- 行为调整，针对Win7以及以下系统，当可用内存不足500MB时自动重启TrustedInstaller
  服务，（因为Win7 的COM组件存在内存泄漏BUG，容易导致内存耗尽）
- 行为调整，适配微软最新添加的独占更新，在Windows Update安装独占更新时，Dism++
  将询问用户是否继续。（温馨提示：安装独占更新后，必须启动系统应用挂起更改后才
  能继续添加更新。）

**Dism++ 10.1.11.8 15:20 2016/10/12**
- wsuscan数据库更新，同步最新Windows补丁

**Dism++ 10.1.11.7 18:47 2016/10/10**
- wsuscan数据库更新，同步最新Windows补丁，并且删除一个Win10升级相关更新

**Dism++ 10.1.11.6 13:20 2016/9/30**
- wsuscan数据库更新，同步最新Windows补丁，并且删除一个Win10升级相关更新

**Dism++ 10.1.11.5(948) 12:26 2016/9/25**
- wsuscan数据库更新，同步最新Windows补丁
- 修复BUG，解决网络传输错误时，可能发生的崩溃问题（感谢 玖维科技）
- 修复BUG，解决过滤器下标错误（感谢 Rambin）
- 修复BUG，解决离线会话某些注册表无法导入问题（感谢 留香）
- 修复BUG，解决某些未同步操作，导致程序崩溃问题（感谢 百年寂寥）
- 修复BUG，解决弹出文件浏览框时会阻塞某些任务问题（感谢 Rambin）
- 行为调整，添加空闲内存判断，以免内存不足时继续运行导致最后程序崩溃
- 行为调整，添加按需加载支持，加速程序启动，并降低启动时的内存开销。
- 行为调整，关联文件导入后添加成功提示（感谢 原罪）
- en.xml, fr.xml,ja.xml, ru.xml,zh-Hans.xml, zhan-Hant.xml语言文件升级，扩充错
  误代码（感谢 Frag，JP.Sudret，山形まり花, Vasiliy Nasonov，月下独酌）

**Dism++ 10.1.11.4 13:22 2016/9/23**
- wsuscan数据库更新，同步最新Windows补丁

**Dism++ 10.1.11.3 20:08 2016/9/18**
- 由于Windows 10 14393 ADK BUG，回滚部分组件至10586
- en.xml, fr.xml,ja.xml, ru.xml, zhan-Hant.xml升级，改进多国语言翻译（感谢 
  Frag，JP.Sudret，山形まり花, Vasiliy Nasonov，月下独酌）

**Dism++ 10.1.11.2(933) 12:16 2016/9/17**
- 修复BUG，解决转组件未初始化导致ISO转换失败，（感谢  ⺌一抹_.淡笑＂）
- 行为调整，调整文件下载验证逻辑，以免在下载失败时频繁提示文件验证错误的提示
- 新增FEA，为Windows Update增加跳过更新安装设置（在Config\Config.ini中添加以下
  设置即可跳过更新安装，Dism++将仅下载更新，而不安装)：
```
[WUA]
DisableInstallUpdate=1
```

**Dism++10.1.11.1(927) 14:51 2016/9/15**
- 此版本主要提高程序稳定性，改进Windows Update性能表现，显著减少扫描更新耗时。
- 并且全新引入 更新差异传输引擎，大幅度减少下载补丁网络流量消耗（一般仅需下载完
  整更新包的1/10即可完成安装）。
- 比如Win10 1511 x64累积更新有900MB，但是Dism++仅需下载100MB左右即可
- 如果你喜欢全量包，你可以在在 设置 -- 详细设置 更新差异传输引擎中关闭。这时
  Dism++会回到以前的传输模式
- 详细日志：
  - 修复BUG，解决安装msi更新时，Dism++崩溃问题（感谢 灰大狼）
  - 修复BUG，解决任务完成后未刷新任务栏进度条状态问题（感谢 و我要呵呵哈嘿）
  - 修复BUG，解决x86系统无法正常处理x64系统问题（感谢 巢鍋鍋）
  - 修复BUG，解决安全模式下使用Appx清理时，所有Metro应用被删除（感谢 
    YukiSakura 反馈）
  - 修复BUG，解决安装Office补丁时可能会自动重启计算机问题（感谢 ReinForce-I）
  - 修复BUG，解决Windows Update初始化可能发生的崩溃问题（感谢 咸鱼）
  - 修复BUG，解决硬链接合并导致某些打印机驱动无法使用问题（感谢 jaffedream ）
  - 修复BUG，解决Win10 14393无法使用关联导出功能（感谢 赖建）
  - 修复BUG，解决文件虚拟化在多线程时可能发生崩溃问题（感谢 、Cloud. ）
  - 修复BUG，区域设置SKU调整失败时可能发生崩溃问题
  - 修复BUG，启动项管理删除条目在刷新导致程序崩溃（感谢 Children）
  - 修复BUG，Appx清理时如果对应的Appx不存在时报告指定Appx不存在并且无法继续清理
    （感谢 三三得久）
  - 修复BUG，解决春哥附体失败时导致程序崩溃问题（感谢 重启大脑 ）
  - 行为调整，引导修复项不顶置，不默认，而是添加到最后（感谢 Rambin）
  - 行为调整，打开映像文件添加ISO支持（感谢 原罪）
  - 新增FEA，引入线程池，减少线程开销，并且针对Windows Update提供并发扫描能力，
    充分利用多核性能
  - 新增FEA，Windows Update功能新增补丁差异传输支持，大大减少网络传输流量（仅需
    以往的 1/10）
  - 新增FEA，Windows Update扫描引入4级缓存机制，显著提升扫描速度
  - 新增FEA，文件下载添加断点续传支持
  - Data.xml规则更新，解决酷狗被误杀问题（感谢 花未『眠）
  - en.xml, fr.xml,ja.xml, ru.xml, zhan-Hant.xml升级，改进多国语言翻译（感谢 
    Frag，JP.Sudret，山形まり花, Vasiliy Nasonov，月下独酌）

**Dism++10.1.9.4(883) 10:15 2016/9/14**
- wsuscan2.cab更新，同步最新更新

**Dism++10.1.9.3(883) 10:36 2016/9/12**
- wsuscan2.cab更新，同步最新更新

**Dism++10.1.9.2(883) 10:32 2016/9/1**
- wsuscan2.cab更新，同步最新更新，删除KB3150513（Win10升级补丁）

**Dism++10.1.9.1(883) 14:36 2016/8/28**
- 新增FEA，Dism++自动升级添加差异升级支持，减少网络传输流量
- 新增FEA，添加PEImageManager以及区域支持功能
- 新增FEA，Windows Update引擎增强，添加Office更新支持，并且降低内存开销
- 修复BUG，reg导入最后一个元素没有回车时导致失败（感谢 原罪）
- 修复BUG，第二通道Update.xml解密Key无效问题（感谢 Pavel Belivakov）
- 修复BUG，启动项管理无法调整系统启动项问题（感谢 艾尔君， Rambin ）
- 修复BUG，异常捕捉回滚到SetUnhandledExceptionFilter，以免异常捕捉太激进问题
- 修复BUG，某些实现EditionID识别错误
- 行为调整，CompactOS删除文件落地时间7天检查
- 行为调整，添加映像新增Index显示
- wsuscan2.cab升级，添加Office 2010,2013,2016补丁
- en.xml, fr.xml, ru.xml, zhan-Hant.xml升级，改进多国语言显示（感谢 Frag，
  JP.Sudret，Vasiliy Nasonov，月下独酌）
- Data.xml升级

**Dism++10.1.7.1C 19:57 2016/8/18**
- wsuscan2.cab更新，同步更新至2016-08-18

**Dism++ 10.1.7.1B 18:32 2016/8/10**
- Windows Update数据库升级，同步最新更新
- 更新 fr.xml 法语翻译（感谢 JP.Sudret）
- 组件升级，bcdboot.exe,wimgapi.dll,wofadk.sys同步至10.0.14393.0

**Dism++ 10.1.7.1(826) 13:20 2016/7/30**
- 解决BUG，某些时候注册表占用导致保存Image时提示文件被占用问题（感谢 白书）
- 解决BUG，某些时候激活还原时提示文件被占用（感谢 追风少年）
- 解决BUG，esd、wim互转功能，手动输入esd转出来的是wim（感谢 Rambin）
- 解决BUG，x86系统无法释放释放ISO问题(感谢 ⺌一抹_.淡笑＂、)
- 解决BUG，定位VHD分区不正确问题（感谢 luan）
- 解决BUG，某些系统上ATL库未初始化导致程序崩溃（感谢 妙尊）
- 行为调整，崩溃报告改用向量异常处理，以免被其他程序覆盖。
- 行为调整，优化Dism++代码结构，减少Dism++程序体积约700KB
- 行为调整，为了应对解密Key频繁更新问题，现在解密Key通过二种渠道更新，一种通过
  Data.xml（Dism++规则库）另一种通过Update.xml（Dism++自动更新元数据）。
- 行为调整，改进Windows 10的版本识别（感谢 ╰殇夏 oSUMMER）
- 新增FEA，添加国际化支持，支持离线调整Windows语言、键盘布局等
- 更新日语、朝鲜语、俄语、繁体中文翻译（感谢 山形まり花、阿泽西、Vasiliy 
  Nasonov、virus、月下独酌）

**Dism++ 10.1.6.5B 10:24 2016/7/19**
- Data.xml数据库升级，新增14393解密Key（感谢 原罪 提醒）
- 多国语言翻译更新，升级en.xml、ko.xml、zh-Hant.xml（感谢 Frag、Simon、阿泽西、
  月下独酌）

**Dism++ 10.1.6.5A 11:51 2016/7/17(794)**
- 解决BUG，只读文件删除失败问题（感谢 卿离）
- 解决BUG，UI引擎 字体文件列表执行不正确问题，导致日语环境中程序字体显示错误（
  感谢 山形まり花）
- 修复BUG，ssshim.dll文件占用导致某些更新安装失败（感谢 xiaox）
- 修复BUG，加密ESD转WIM文件异常问题（感谢 快到碗里来）
- Windows Update引入双标准策略，先检测LDR，在检测GDR（Windows 7踏入LDR分支，此
  调整是为了尽可能的减少过期更新的引入）
- 青蛙插件更新，解决还原Office激活后仍需用户输入Key才能激活问题（感谢 抱猫睡的鱼）
- Dism++引擎新增RegMove支持
- Data.xml数据库升级，增加若干系统优化条目以及14390解密Key（感谢 原罪、雪姬、
  wandoubaba、星➹☪梦 提醒）

**Dism++ 10.1.6.3C 10:18 2016/7/13(786)**
- Data.xml库文件更新，添加14388 by 原罪、雪寂、chengshidong1259
- wsusscn2.cab库文件更新，添加Windows Update 2016年7月13日新增更新，并删除（
  KB2952664、KB2976978、KB2977759、KB3170735、KB3163589、KB3173040）6个Windows 
  10升级广告弹窗以及静默部署工具更新

**Dism++ 10.1.6.3B 19:35 2016/7/11(786)**
- 解决某些杀毒误报系统热还原模块（NativeDism）问题
- 扩充一些遗漏的翻译（感谢 Vasiliy Nasonov）

**Dism++ 10.1.6.3A 13:08 2016/7/10(784)**
- Data.xml库更新，添加14385解密Key（感谢 欧阳小枫）并且新增一些清理项目（感谢 ‍
  莫失莫忘）
- 更新英语、法语、日语、朝鲜语、俄语、繁体中文翻译（感谢 Frag、windypao wu、
  JP.Sudret、山形まり花、阿泽西、Vasiliy Nasonov、jamesfuh）
- 程序行为调整，WSUS警告数据库合并至Data.xml，方便断网使用
- 程序行为调整，解决卸载映像后 出现盘符丢失，需要F5刷新才能出现，现在增加自动刷
  新功能，解决此问题
- 新增FEA，新增文件虚拟化，直接支持ISO释放（从此版本开始Dism++可以直接释放ISO中
  的install.wim来安装系统，无需解压或者虚拟光驱挂载）
- 修复BUG，Win10中应用某些更改重启Explorer失败问题
- 修复BUG，解决某些时候同时操作Image导致程序卡死问题（感谢 原罪）
- 修复BUG，解决对一些ARM体系操作系统的兼容性（感谢 沪城某生）
- 修复BUG，某些时候显示多余的受损挂载点问题（感谢 浮生半醒）
- 新增FEA，新增文件虚拟化，增加ESD内存解密。（从此版本开始 加密的ESD文件无需修
  改源文件解密，Dism++将透过文件虚拟化，直接内存解密，变相实现加密ESD直接转ISO
  或者直接加密ESD释放）
- 修复BUG，根治光驱请插入磁盘问题
- 新增FEA，启动项管理新增新用户的支持
- 修复BUG，大型清理项目处理时没有进度问题
- 10.1.6.3正式添加 法语、日语 翻译，也希望更多人能为Dism++添砖加瓦~~看到翻译错
  误什么的还请赐教
- 除此外该版本开始，内核实现主要依据迁徙到NT API，大大降低对Win32 API的依赖性。
- 还引入了文件虚拟化，Dism++已经直接支持ISO释放（释放系统中 可以直接选择ISO，即
  可释放里面的install.wim，无需解压或者虚拟光驱挂载）
- 另外透过文件虚拟化，Dism++也解决了一个历史遗留问题——ESD解密操作会修改源文
  件，从10.1.6.3开始。加密ESD转ISO以及加密ESD直接释放都无需修改物理文件。广大强
  迫症患者/原版控的福音！在也不用复制ESD文件了。
- 还有件事情 Edge浏览器插件也是属于Appx，所以在Appx管理中如果你选择全选删除也将
  删除你安装的Edge浏览器插件……

**Dism++ 10.1.6.1H 9:51 2016/7/8(729)**
- Data.xml扩充解密Key Win10 14383（感谢 uxteam）
- 不提升版本号重置发布

**Dism++ 10.1.6.1H 9:51 2016/7/1(729)**
- Data.xml扩充14379（感谢 ⺌一抹_.淡笑＂、uxteam）
- 更新俄语翻译（感谢 Vasiliy Nasonov）

**Dism++ 10.1.6.1G 9:57 2016/6/29(729)**
- 添加Windows 10 14376解密Key（感谢 uxteam、雪寂）

**Dism++ 10.1.6.1F 14:35 2016/6/24(729)**
- 添加Windows 10 14372解密Key（感谢 MrMagic）
- 删除Win10 14366 之前测试版解密密钥，减少库体积

**Dism++ 10.1.6.1E 10:37 2016/6/23(729)**
- 添加Windows 10 14371解密Key（感谢 MrMagic）
- 多国语言翻译更新（感谢 阿泽西、Frag、JP Student、山形まり花、Vasiliy 
  Nasonov、月下独酌）
  - 也希望各种语言大神能为Dism++国际化支持添砖加瓦 : )

**Dism++ 10.1.6.1D 12:37 2016/6/22(729)**
- Windows Update数据库同步至（2016-06-22）

**Dism++ 10.1.6.1C 16:27 2016/6/19(729)**
- 临时解决BUG，新春哥附体与火绒杀毒的兼容性问题（感谢 原罪）
  - 但是此问题并未完全修复仅仅是临时性的修复措施，在Win10 14332 x64（以及更高版
    本）中使用春哥附体跑x86程序，此BUG将继续触发。
  - Win10 14332 中 Native x64以及Native x86均不受影响，只影响Wow64
- 解决BUG 143，某些存在光驱的电脑启动Dism++时弹窗请插入磁盘的提示（感谢 aaa）
- 解决BUG 141，某些系统，每次启动Dism++时弹出用户协议（感谢 Joy）
- 解决版本号显示错误
- 更新英语翻译（感谢 Frag）

**Dism++ 10.1.6.1B 20:20 2016/6/18(726)**
- Appx管理删除Microsoft.XboxIdentityProvider时，增加警告信息。
  - PS: 刚收到用户反馈，Microsoft.XboxIdentityProvider很重要，删除后将导致
    Windows Sotre无法使用。
  - 因此Appx管理中增加警告弹窗，这项更新虽然改动不大，但是我认为很重要，以免大
    家手贱把Microsoft.XboxIdentityProvider删了。

**Dism++ 10.1.6.1 13:47 2016/6/18（724）**
- 修复BUG，导入reg文件时hex换行错误（感谢 Linzeal）
- 适配Windows 10 14366（感谢 一抹_.淡笑、感觉）
  - PS： 14366大量非公开API已经更改，导致Dism++崩溃，假死 现在已经修正了所有更
    改，例如Wow64虚拟机、AllUserAppx等API调整
- 程序调整，文件浏览添加所有文件选项
- 程序调整，WIndows Update增加详细信息
- 改进某些极端精简PE的兼容性，至少让Dism++不崩溃（感谢 ⺌一抹_.淡笑＂）
- 新增FEA，添加 更新增加语言包支持
- 新增FEA，另存为映像增加LastCompress,记忆
- 同步Windows Update数据库至（2016-06-18）

**Dism++ 10.1.5.9D 13:50 2016/6/17**
- Data.xml规则库更新添加Win10 14367解密Key（Thanks timster）

**Dism++ 10.1.5.9C 11:07 2016/6/15**
- Data.xml规则库更新添加Win10 14366解密Key
- 多国语言翻译更新（感谢 阿泽西、Frag、Vasiliy Nasonov、月下独酌）

**Dism++ 10.1.5.9B 21:01 2016/6/12**
- ESD转ISO增加标签支持

**Dism++ 10.1.5.9 Release 18:43 2016/6/9(705)**
- ESD解密算法适配Win10 14361
- 修正多出UI显示问题
- 修正Windows Update Win7 x86无法扫描IE9问题

**Dism++ 10.1.5.7 Release 15:50 2016/6/4(686)**
- 修复BUG，Windows功能中UI显示问题（感谢 悠远）
- 修复BUG，检测到没有更新时，未清空更新列表（感谢 夢幻天使）
- 修复BUG，使用Appx相关功能后将AppxAllUserStore.dll文件占用导致离线时某些更新安
  装失败（感谢 352XXX944）
- 修复BUG，某些时候备份激活时提示文件被占用。
- 新增FEA，Provisioned Appx管理（等效Dism APPX 服务命令）、文件关联（等效Dism 
  默认关联命令）、预应答功能（等效Dism IBSProvider.dll）
- 多国语言翻译更新（感谢 阿泽西、Frag、Vasiliy Nasonov、月下独酌）
- 程序调整，Windows Update补丁数据库删除Win7大补丸（KB3125574）
  - Win7的最新的堆栈更新似乎存在问题，导致Win7大补丸未能正常应用LDR分支组件，但
    是这个补丁又没有GDR文件直接导致大量系统文件实际没有安装上。
  - 全新的MSDN原版Win7直接安装大补丸，将导致以下问题：
    - 微软的Windows Update将扫描不出IE10，因为d3d11.dll没有被更新到6.2.9200。DX
      的相关安全漏洞也直接等于没修。
    - 某些高漏洞白装，比如远程桌面组件未被更新。用户仍需安装22X系列补丁来堵住这
      些高危漏洞。
    - 补丁取代链异常，导致微软的Windows Update仍能扫描出过期更新。
    - 某些显卡驱动安装后导致计算机直接蓝屏
  - 因此Dism++暂时撤了此更新，观望微软下个月动作再说，反正安装其他补丁后仍能代
    替大补丸的所有功能……

**Dism++ 10.1.5.5 Release 18:13 2016/5/29（674）**
- 同步Windows Update数据库同步至2016年5月29日
- 扩充更新繁体中文、英语、韩语、俄语翻译（感谢 阿泽西、Frag、Vasiliy Nasonov、月下独酌）
- 改进会话重启机制，CBS堆栈更新后自动重新加载Session（感谢 Joy）
- 修复BUG，调整Windows功能时导致程序崩溃（感谢 HigHwind）
- UI细节调整，比如 Windows Update增加日期等
- 改进Dism++引擎，新增以下规则支持（感谢 Rambin ）
  - RegWrite规则新增Wow64属性
  - Active规则新增Rescan属性
  - 新增检测ID支持
- 青蛙插件日常修复，并增加新图标（感谢 NTFS提供图标）
- 改进Windows Update乱序更新安装能力
- Dism++规则库常规更新（感谢 走走道疯了、Rambin）

**Dism++ 10.1.5.3 Release2 19:25 2016/5/28**
- 同步Windows Update数据库同步至2016年5月28日，并删除所有Windows 7过期更新以及
  2016过期补丁

**Dism++ 10.1.5.3 Release 14:58 2016/5/21(644)**
- 修复BUG，不支持SSE2指令集的CPU无法运行Dism++问题。(感谢 Thomas Schneider)
- 修复BUG，为PE/RE系统进行引导修复时导致程序崩溃（感谢 シ包泡糖o0）
- 修复BUG，ISO制作器确定按钮以及RE配置时部分文字未翻译问题（感谢 Vasiliy 
  Nasonov）
- 修复BUG，UI同步问题可能导致程序崩溃（感谢 爤菜頭）
- 修复BUG，zip数据异常时导致程序崩溃问题。
- 修复BUG，Wof驱动状态判断不正确问题（感谢 靈 ）
- 新增FEA，系统优化增加Default支持（仅专家模式可用）
- 新增FEA，Windows  Update默认仅勾选微软推荐安装的更新。
- 新增FEA：为菜单增加提示信息。
- 改进体验，自定义规则约束为Custom*.xml，winapp*.ini
- 改进体验，增加是否加载wofadk驱动设置（选项 - 详细设置，仅专家模式可用）
- 改进体验，扩充英语、繁体中文、俄语、韩语翻译（感谢 阿泽西、ChemFan、Frag、
  Vasiliy Nasonov、月下独酌 帮忙翻译）
- 附：Dism++功能移植状态
  - 微软Dism组件名称
    - 功能说明
    - 移植状态
  - CbsProvider.dll
    - 提供添加删除更新支持
    - 已完成，已应用于更新管理、Windows Update、可选功能、以及更新清理
  - DmiProvider.dll
    - 提供驱动管理支持
    - 已完成，已应用于驱动管理、以及过期驱动清理
  - IntlProvider.dll
    - 国际化命令支持，调整语言等
    - 进行中
  - MsiProvider.dll
    - Msi/msp信息获取
    - 移植完成，但未应用
  - SmiProvider.dll
    - Windows离线服务支持
    - None
  - TransmogProvider.dll
    - 比如家庭版升级旗舰版等
    - 移植完成，但未应用
  - UnattendProvider.dll
    - 无人应答支持
    - None
  - WimProvider.dll
    - 挂载wim文件等
    - 已完成，已应用于添加映像、挂载映像、Imagex
  - AppxProvider.dll
    - 添加删除Appx
    - 已完成，已应用于过期Appx清理
  - AssocProvider.dll
    - 文件关联支持
    - 已完成，已应用于文件关联
  - IBSProvider.dll
    - Windows预部署
    - 已完成，已应用于预部署
  - VhdProvider.dll
    - 用于挂载VHD/VHDX
    - None
  - FfuProvider.dll
    - 用于释放FFU映像
    - None
  - OfflineSetupProvider.dll
    - 离线安装支持程序
    - None

**Dism++ 10.1.5.1 Release5 11:41 2016/5/18**
- Windows Update数据库同步至（2016-05-18）增加Win7 KB3125574以及2016 TP6更新

**Dism++ 10.1.5.1 Release4 14:49 2016/5/15**
- Windows Update数据库同步至（2016-05-15）
- 扩充英语、繁体中文、俄语、韩语翻译（辛苦 阿泽西、 ChemFan、Frag、jamesfuh、月
  下独酌 帮忙翻译，也希望德语、法语、日语大神能挺身而出，帮助Dism++走的更远。）

**Dism++ 10.1.5.1 Release3 22:25 2016/5/13**
- 改进Dism++插件多国语言支持

**Dism++ 10.1.5.1 Release2 18:24 2016/5/11**
- Windows Update数据库同步至（2016-05-11）
- 多国语言翻译更新（感谢 ChemFan, Frag, Vasiliy Nasonov, ZT）
- Dism++规则日常更新

**Dism++ 10.1.5.1 Release 13:36 2016/5/7(603)**
- 修复BUG，下拉框展开后立即关闭导致程序崩溃
- 修复BUG，用户取消操作系统优化操作时UI显示不正确问题
- 修复BUG，某些情况导致挂载映像重入问题
- 修复BUG，读卡器未插入设备时，弹出插入设备问题（感谢 ♂筷樂♀119）
- 修复BUG，x86系统无法安装IE.exe安装包问题（感谢 原罪）
- 改进体验，调整Temp目录获取方式，并增加空闲空间检查。现在优先使用系统Temp目
  录，如果Temp目录可用空间不足则使用程序Config\Temp。如果可用空间还是不足那么弹
  窗警告，可用空间不足。
- 改进体验，大幅度降低Windows Update内存占用情况，改进低配机器机能。
- 改进体验，检查更新调整为异步进行
- 改进体验，添加本地更新功能转移至Windows Update Tab
- 改进体验，Windows Update下载线程数量调整为10
- 改进体验，增强多国语言匹配（多国语言支持大更改）
- 改进体验，改进添加现有映像功能的操作延迟
- 改进体验，系统优化增加查找按钮
- 新增FEA，另存为映像增加卷影复制
- 新增FEA，自动清理Dism++的Windows Update过期缓存
- 新增FEA，青蛙插件增加ISO制作插件，支持制作双启动ISO文件（工具箱 - ISO制作）
- Dism++规则日常更新
- 本次更新主要用于改进Windows Update的资源占用，并且扩充了系统优化条目。

**Dism++ 10.1.4.9 Release3 18:00 2016/4/23**
- 解决激活备份提示版本号不一致问题（感谢 kaidy）
- 规则库常规更新
- UI资源更新

**Dism++ 10.1.4.9 Reletse2 16:45 2016/4/20**
- Windows Update数据库同步至（2016-04-20）
- 修正一些翻译问题（感谢 jamesfuh、Vasiliy Nasonov、ZT）

**Dism++ 10.1.4.9 17:39 17.04.2016**
- 解决BUG，解决与Google输入法兼容性问题。（感谢 似风）
- 解决BUG，某些极端情况信息不同步导致程序崩溃（感谢 kevin ）
- 解决BUG，Windows更新清理提示拒绝访问问题（感谢 一叶微风TM）
- 解决BUG，已安装的更新中添加IE11 exe安装包时未添加IE语言包问题（感谢 XX）
- 解决BUG，WIM创建日期变成了UTC时间未转换为本地时间问题。
- 显著增强插件多国语言支持（感谢 mdlgaofei、Mouri_Naruto、jamesfuh、Vasiliy 
  Nasonov、ZT为多国语言翻译辛勤的付出，也希望更多人能为Dism++添砖加瓦~）
- 春哥附体添加命令行支持，比如 春哥附体启动regedit，让regedit无视权限访问注册
  表，如下：（具体请输入 /? 获得详细帮助）
  - Dism++x86.exe /All /Plugin:{4d420a2e-ea11-450a-b8a0-ab8ca7772043} /GodMode 
    regedit
- 剔除韩语翻译，因为找不到合适的人翻译韩语 T - T
- PS：现在的人是怎么了？喷子都不会做？什么叫喷子？喷子简单说就是敢于提出不足的
  人，并给出具体方案。SO 诸位伪喷子，以后在喷的同时能把问题具体发送到我邮箱，让
  Dism++更加完善。我不是神自然不可能面面俱到……有问题不是很正常么？微软那么大
  的公司那么多人都会出问题呢。

**Dism++ 10.1.4.8 Reltase6 12:00 2016/4/13**
- 同步Windows Update数据库至2016-04-13

**Dism++ 10.1.4.8 Release5 19:54 2016/4/10**
- 解决Windows 10 x64离线处理x86系统崩溃问题
- 解决无视权限未能无视注册表权限问题
- Windows Update数据库同步至2016/4/10 19:54

**Dism++ 10.1.4.8 Release4 15:55 2016/4/9**
- 解决赛门铁克（sep）远程注入Dism++导致的无法启动问题。
- ADK升级至10.0.14295.1000
- 解决BUG，CompactOS效果明显下降问题（感谢 Eso）
- Windows Update功能改进，新增IE支持，不在立即提示下载失败。
- Dism++规则日常更新
- 合并俄罗斯翻译（感谢 Vasiliy Nasonov, ZT）
- 温馨提示：本次更新仅更新CBS内核，不涉及UI

**Dism++ 10.1.4.8 Release3 14:51 2016/4/3**
- 合并台湾、俄罗斯翻译（感谢 jamesfuh、Vladimir）
- 升级Windows Update数据库同步至2016-04-03，并增加Windows 7 Embedded、Windows 
  2016 TP4信息
- Dism++规则日常更新

**Dism++ 10.1.4.8 Release2 17:10 2016/4/2**
- 合并英语、台湾、俄罗斯翻译（感谢 jamesfuh、mdlgaofei、Vasiliy Nasonov, ZT）

**Dism++ 10.1.4.8 15:27 2016/4/2（559）**
- 修复BUG，Compact撤销不生效问题。（感谢 Eso ）
- 隐藏离线处理系统时的cbs.log压缩黑框
- 提高WIM另存为能效
- 解决Windows 10中无视权限机制无法工作问题。
- 已知问题：
  - 涉及重解析点时空间回收容量告别可能不准确问题。
  - 更新清理偶尔返回拒绝访问。具体原因还在追查中，不知道为什么。
- 其他
  - ADK 10.0.14295.1000开始分批推送，防止wofadk.sys引发大规模蓝屏。如果你的组件
    还是10586这是正常的，我会根据用户的反馈情况，慢慢放开。

**Dism++ 10.1.4.7 19:51 2016/3/26（553）**
- 修复BUG 122，空间回收选中某些项目可能连续弹二次警告问题。
- 修复BUG 120，系统优化下拉菜单修改失败时未提示操作失败。（感谢 Rambin）
- 修复BUG，REG_BINARY比较结果不正确问题。
- 修复BUG，SkipError字段未生效，导致意外的提示操作失败问题。
- 功能增强，系统优化  配置文件导入增加 - 删除逻辑支持（感谢 原罪）
- 功能增强，提升空间回收清理效果。

**Dism++ 10.1.4.6 13:14 2016/3/20(547)**
- 修复BUG 123，Win10 14291 esd转ISO时提示参数错误（感谢原罪）
- 修复BUG 124，另存为映像时无法过滤Program Files (x86)文件夹（感谢 古畑任三郎）
- 修复BUG，撤销Compact时未删除系统Compact状态
- 合并多国语言翻译至最新（感谢 mdlgaofei）

**Dism++ 10.1.4.5 Release2 16:57 2016/3/12（542）**
- 解决Dism++过滤列表问题，导致计划任务空白

**Dism++ 10.1.4.5 16:57 2016/3/12（541）**
- 新增FEA，释放映像/系统还原直接支持ISO映像文件（仅Win8或者更高可用）
- 新增FEA，系统系统优化，可以调整系统常用设置
- 修复BUG，Compact/WimBoot释放系统时某些文件夹未正常解压问题（感谢 webjump）
- 修复BUG，驱动管理导出驱动时某些驱动因存在特殊字符而无法创建文件夹问题。
  （感谢 Amelie）
- 修复BUG，Windows Update语言加载不正确问题（感谢 beadinsea）
- 扩充多国语言翻译，（感谢jamesfuh、Vasiliy Nasonov）

**Dism++ 10.1.4.4 16:51 2016/3/5（528）**
- 适配：Windows 10 14271/14279，改进程序稳定性以及性能
- 解决BUG，Windows Update扫描更新时可能的崩溃问题。（感谢 星➹☪梦）
- 解决BUG，某些情况Duilib的不同步问题导致程序崩溃。（感谢 原罪）
- 解决BUG 110，某些时候Dism++的注册表泄漏。（感谢 Silence）
- 解决BUG 117，Windows 10 14271/14279无法正常获取系统名称问题（感谢 原罪）
- 解决BUG，Windows功能状态检测不一致问题（感谢 原罪）
- 解决BUG，驱动删除在极端情况导致sys丢失。
- 新增FEA，卸载映像时自动关闭受影响的Explorer窗口，以免因文件占用而失败
- 新增FEA，使用RE相关功能时，如果RE关闭则自动启用RE。
- 新增FEA，卸载可选功能时自动删除子功能，以免卸载失败。
- 行为调整，新手模式不加载驱动管理
- 行为调整，Windows Update调整为树视图。
- 性能改进，改进程序载入速度、会话关闭速度以及Update扫描速度。

**Dism++ 10.1.4.3 15:56 14:36 2016/2/20（变更集 515）**
- 改进青蛙插件的兼容性
  - 此更新是对青蛙插件的小幅度升级，不涉及主程序

**Dism++ 10.1.4.3 15:56 2016/1/31（变更集 515）**
- 适配：Windows 10 14251、改进程序稳定性
- 同步Vasiliy Nasonov俄语翻译（感谢 Vasiliy Nasonov支持）
- 修复BUG 109，点击Appx清理返回不支持此接口（感谢 A、⺌一抹_.淡笑＂）
- 修复BUG 113，某些环境无法正确识别RE位置（感谢 冒泡）
- 修复BUG 111，删除某些驱动后，不删除sys文件问题（感谢 小兵）
- 修复BUG 114，Vista无法更新清理问题（感谢 毛利）
- 新增FEA，Windows Update增加风险更新标识
- 修复UI上的一些显示问题以及程序稳定性

**Dism++ 10.1.4.2 2016/1/23 14:41（变更集 502）**
- 修复BUG，Windows 7 Compact释放又重新解压问题（感谢 燎原）
- 修复BUG 95，PE中退出程序导致程序崩溃（感谢 矿工）
- 修复BUG 96，Windows Update数据库下载不完整的数据库导致程序崩溃（感谢 Rambin）
- 修复BUG 101，64位系统，春哥附体无法正常附体32位程序
- 修复BUG 91，Win10 11082无法使用激活备份问题（感谢 张文友）
- 修复BUG 97，由于Win10机制变化，Appx清理后可能导致某些应用无法打开
  （感谢 423***274、dism+爱好者）
- 修复BUG 104，Windows打开驱动后无法正常卸载（感谢 Aling、留香）
- 修复BUG，引导修复选择错误时可点击确定问题（感谢 Rambin）
- 修复BUG 107，32位系统无法启用Dism++引导菜单（感谢 大幻想家）
- 修复BUG 108，存在Windows.old文件夹时系统热还原不生效问题（感谢 大幻想家）
- 新增FEA，双击Tab打开系统所在文件夹功能（留香提出）
- 新增FEA，增加重新载入功能（留香提出）
- 通过WSUS服务器导出补丁数据库，大幅度扩充Windows Update补丁数量
- 体验改进，优化了程序UI响应速度，以及UI布局
- 体验改进，优化类库结构，缩小程序体积（大约减少64K）

**Dism++ 10.1.4.1 2016年1月10日（变更集 476）**
- 修复BUG 89，空间回收扫描时会弹窗XXX光驱不存在（感谢 小渣渣）
- 修复BUG 86，空间回收某些规则不生效问题（感谢 大胖子技术员）
- 修复BUG 87，挂载映像容量报告不准确问题（感谢 原罪）
- 修复BUG 85，春哥附体启动程序后偶尔状态不能及时更新问题（Sunny）
- 修复BUG 84，自动更新时，没等待更新完成点击确定导致程序崩溃（感谢 wwaanng）
- 修复BUG 82，春哥模式下拉框可容纳的文字太少（感谢 幻）
- 修复BUG 83，32位系统无法使用春哥附体（感谢 穿越火线 ）
- 改进体验，空间回收引擎升级，并扩充常见3款应用程序规则
- 改进体验，新增任务栏进度条以及完成操作后任务栏闪烁
- 改进体验，青蛙插件增加ESD转ISO等WIM文件操作入口
- 改进体验，添加更新时进度为总体进度

**Dism++ 10.1.4.0 2016年1月4日**
- 修复BUG 80，导出驱动功能将所有驱动都导出问题（感谢 笑笑）
- 修复BUG 69，自动更新后未能正常删除.del文件问题
- 修复BUG 75，热还原功能不起作用问题
- 新增FEA，添加映像、打开映像增加压缩等级显示
- 新增FEA，服务管理、更新管理增加查找功能
- 清理规则库升级，新增3种常见应用程序垃圾清理
- 合并俄语、繁体中文翻译（感谢 james fu、Vasiliy Nasonov）
- 因为NativeDism.exe杀毒软件误报严重，现在已经将此程序合并至Dism++x86/x64.exe中
- 大幅度缩减青蛙插件体积（约减少800K），并屏蔽了注册表清理
- Windows Update功能优化，无需释放庞大的wsusscn2.Session目录

**Dism++ 10.1.3.9 2015年12月29日**
- 修复BUG 63，青蛙插件与新版本Dism++兼容性问题（感谢 Ursh）
- 修复BUG 64，离线清理后Win10专业版变成企业版问题（感谢 Rambin）
- 修复BUG 65，极端下，打开启动项管理导致程序崩溃问题（感谢 ♀淹沒♂）
- 修复BUG 66，激活备份无法使用问题（感谢 ♀淹沒♂）
- 修复BUG 67，某些特定情况下，Win8或者更高系统未正常显示启动项状态（感谢 毛利）
- 修复BUG 68，不正常的启动项信息导致程序显示乱码（感谢 蓝色故事）
- 修复BUG 70，空间回收风险项目颜色未正常显示（感谢 シ包泡糖o0）
- 修复BUG 71，Windows 10未正常显示已删除的功能
- 解决BUG 73，不压缩WIM无法制作为WinBoot启动，现在已经屏蔽了不压缩Wim文件的
  WimBoot功能（感谢 Linzeal）
- 解决BUG 74，卸载不存在的映像时导致程序崩溃(感谢 雨辰)
- 新增FEA，Beta版也支持自动升级
- 新增FEA，自动扫描本地源目录，自动将所有X:\Sources\SxS目录纳入本地源
- 改进用户体验，提高了插件图标分辨率

**Dism++ 10.1.3.7 2015年12月24日**
- ADK升级至10.0.10586.0
- C++库升级至10.0.10586.11
- 编译器已经全面升级至Visual Studio 2015
- 改进Compact性能以及压缩效果（仅Win8.1或者更高）
- 改进WimBoot支持，支持原版Win7直接释放成WimBoot启动，无需额外操作，一切由
  Dism++搞定
- 改进WimBoot支持，即使不是哈夫曼压缩的WIM文件也能制作成WimBoot启动（ESD依然不
  支持直接变成WimBoot）
- 新增功能，空间回收新增 Dism++非必需文件 项目，自动根据当前环境删除无用文件
- 新增功能，扩充ESD解密KEY（Windows 10 11082 感谢原罪）
- 解决BUG 40：由于未写入PBR导致引导修复后无法启动
- 解决BUG 41：因为文件占用无法删除Windows.old问题
- 解决BUG 43，Vista无法使用更新清理问题
- 解决BUG 55，安装更新后，7天内未重启计算机，然后使用Compact可能导致蓝屏问题
- 新增FEA 51，增加春哥附体，允许无视权限运行其他程序。在工具箱 --> 春哥附体
- 新增FEA，启动项管理，允许调整系统开机启动项（与系统msconfig行为一致）以及服务
  管理
- 新增FEA，Windows事件清理（在空间回收，感谢 毛利提供）
- 体验改进：退出程序时增加退出提示（如果当前有任务正在进行）
- 体验改进：大幅度提高会话打开速度
- 新增ARM/ARM64平台支持（仅离线处理）

**Dism++ 10.1.2.1 2015年9月27日**
- 新增功能，新增硬链接合并，将文件内容完全一致的文件使用硬链接合并为一个文件，
  减少重复数据占用。（在空间回收 — 硬链接合并）
- 新增功能，另存在映像新增可启动参数支持。（具体参考微软 WIM 可启动 相关信息）
- 问题修复，解决CompactOS功能遇到不正常的PE文件导致程序崩溃问题。
- 问题修复，解决硬盘存在未格式化分区时，引导修复不能正确的激活启动分区问题。
- 问题修复，解决WIM释放（Compact模式）与360安全卫士的兼容性。
- 问题修复，解决程序无法根据计划自动重启电脑。（感谢 巧木 反馈）
- 问题修复，解决挂载映像信息扫描中一处句柄泄漏。（感谢 原罪 反馈）
- 问题修复，解决首次启动程序，UI未居中显示。（感谢 Ernst 反馈）
- 问题修复，解决Appx管理崩溃问题。
- 问题修复，解决WIM释放Win10（Compact模式），如果引导分区与系统分区一致时，无法
  启动问题。（感谢 hhyyyy 反馈）
- 改进体验，砍掉ATL库中XP支持代码，轻微减少程序体积。
- 改进体验，显著增强Windows 10的更新清理效果。（在空间回收 — 更新清理）
- 改进体验，点击健康扫描/健康恢复时，自动打开会话（如果会话未打开）。
- 改进体验，改进Windows Update的扫描速度以及内存需求（现在改用释放到硬盘，而不
  是使用大量内存）。
- 改进体验，WIM/ESD还原后，自动删除上次未正常关机状态。
- 改进体验，合并繁体中（感谢jamesfuh）、以及俄语（感谢Vasiliy Nasonov）。

**Dism++ 10.1.1.6 2015年9月8日**
- 全面切换到CBS内核（不在依赖Dism相关接口，大幅度缩小体积）
- 新增Windows Update，自动搜索系统所需更新并安装（仅支持cab更新）
- 新增Appx管理，完美支持多用户，轻松删除不需要的Windows Store应用程序
- CompactOS可靠性更新，新增DLL行为分析，自动解压。
- 新增无视权限浏览（实用工具菜单中，随意删除任何文件）
- 轻微改进Windows 7的清理效果，并针对Windows 8.1（包含）或者更高版本系统提供完
  整补丁挂起清理

**Dism++ 10.0.5.12 2015年7月16日**
- 改进体验，自动添加WD进程信任，以免影响性能
- 改进体验，对UI进行微调并完善多国语言翻译
- 改进体验，释放已经存在的系统时将自动转向到系统还原
- 改进体验，功能新增分组
- 改进体验：右键菜单支持ESD转ISO，解密，转WIM等
- 改进体验，增加最大化状态记忆
- 改进体验，遇到不适用的更新或者过期更新时，直接返回环境错误
- 改进体验，增加自动更新新增重试功能
- 新增功能，关机时增加倒计时关机
- 新增功能，ESD转ISO支持普通压缩等级导出
- 新增功能，添加删除更新提供完整的msu（之前msu仅支持脱机映像）以及exe补丁（仅IE
  安装包）支持
- 新增功能，新增引导修复启动分区自定义功能
- 问题修复，解决CompactOS功能对VB以及Office的兼容性问题
- 问题修复，解决编辑框回车键拦截问题
- 问题修复，解决操作过程中强行退出程序导致程序崩溃问题
- 问题修复，解决自动更新导致进程残留问题
- 问题修复，修复过滤列表向导不显示完成按钮
- 问题修复，修复CompactOS不会为当前系统添加标记问题
- 问题修复，修复重新载入后清理列表倍增问题
- 问题修复，修复首次弹窗选择模式没有保存设置BUG
- 程序调整：引导修复时启动分区总是与系统分区同一硬盘（VHD分区则总是与VHD文件同
  一硬盘）
- Dism内核升级至10.0.10240

**Dism++ 10.0.5.1**
- 修复CompactOS导致某些程序无法使用BUG（IE11 GWX，以及PPTV等 感谢4512xxx781的大
  力支持）
- 修复CC规则某些时候不能正常发挥作用BUG
- 修复开打回话可以重入BUG
- 修复某些时候Compact压缩等级不显示BUG
- 修复调整模式后没有正常保存设置BUG
- 修复映像释放时Compact未完全发挥作用BUG
- 修复解决某些时候UI刷新BUG
- 修复程序运行时间超过6分钟时无法正常退出BUG
- 修复特权等级模拟BUG
- 修复添加驱动功能会引入不适用的驱动BUG
- 修复系统还原功能点击下一步没有反应BUG
- 修复垃圾清理在符号连接情况下报告容量不准确BUG
- 修复某些时候Wof驱动安装失败BUG
- 修复另存为映像时一处崩溃BUG
- 改进体验：切换新手/专家模式后启动重启程序生效
- 改进体验：垃圾清理项目选中状态记忆功能
- 改进体验：增加操作完成后（关机、重启）功能
- 改进体验：新增Compact右键菜单支持
- 改进体验：激活备份系统密钥自动获取
- 改进体验：CompactOS新增支持压缩等级调整（在设置-->详细设置菜单）
- 改进体验：支持模块化自动升级
- 新增功能：泛翻译引擎新增CCleaner规则支持（Config\winapp1.ini为CC官方规则）
- 新增功能：支持分类筛选
- 程序调整：UI布局，排除列表、本地源转移至设置-->详细设置 菜单中
- 程序调整：CompactOS功能自动跳过7天内发生写入操作的文件
- 程序调整：解决繁体中文翻译的一些文件（感谢jamesfuh‏）
- 程序调整：整合Win10 100158 ESD解密Key

**Dism++ 10.0.1.9**
- 自带BcdBoot，以免精简系统无法使用引导修复
- 解决重新加载会话后显示工具栏问题
- Compact功能更新（操作时允许随意中断，不会导致系统无法启动）
- Compact功能更新（支持预测Compact可以释放的大小）

**Dism++ 10.0.1.8 2015年6月11日**
- Compact功能更新（解决HV虚拟机无法使用问题）
- Compact功能更新（一处8.1 无法启动问题）
- 文件菜单中新增重新载入功能

**Dism++ 10.0.1.7 2015年6月10日**
- 改进对Win10 10130的兼容性
- 修复WIn7开机画面变成滚动条问题
- 空间回收默认隐藏存在风险的项目
- 新增应用解压列表功能
- 解决离线会话无法正常清理，添加补丁问题
- 修复因为WIM文件被占用导致的崩溃问题
- 修复Boot文件夹没有解压导致的无法启动问题（Compact）

**Dism++ 10.0.1.6 2015年6月6日**
- 修复一处死锁问题
- 完善Compact支持（修复系统盘与启动分区同一个时无法启动问题，解决无法加载
  Compact系统问题，解决Win7启动画面变成滚动条问题）
- 改进引导修复，新增MBR引导写入
- 改进ESD转ISO，将临时文件设置在ISO所在目录，避免PE系统无法转换问题
- 新增系统引导类型识别 传统BIOS启动的系统，会显示Bios Firmware，UEFI则显示UEFI 
  Firmware
- 空间回收新增CompactOs支持，启用后直接将目标系统转换为CompactOS，减少系统体积
- Compact压缩时自动忽略已经压缩的文件
- 新增Compact撤销选项
- 解决二处Compact压缩后系统无法启动问题
- 解决CompactOS时程序意外崩溃

**Dism++ 10.0.1.5 2015年5月25日**
- 修复某些时候发生的死锁问题以及崩溃问题
- 修复ESD解密密钥无法匹配问题
- 修复保存映像时信息无法保存问题
- 修复使用扫描映像功能死循环
- 对7/8.1新增Compact启动支持（MSDN ISO 可直接以Compact模式释放，并正常启动）

**Dism++ 10.0.1.4 2015年5月6日**
- 解决某些时候消息无法同步的问题
- 修复映像信息为空时无法选择问题
- ESD转ISO时新增双启动支持（MBR、UEFI双兼容）
- Dism内核升级至10.0.10075.0

**Dism++ 10.0.1.3 2015年4月26日**
- 解决更加更新时没有进度问题
- 错误信息显示优化
- 修正无法正常关闭会话问题
- 修复添加驱动无法递归子文件夹问题
- 修复获取驱动信息时一处句柄泄漏
- 修复SYSTEM未正常关闭映射问题
- 修复清理注册表重定向问题

**Dism++ 10.0.1.2 2015年4月20日**
- 全新引入双引擎模式，让Dism无缝兼容Windows 10与Windows 6.x
- 缩减Dism++主程序体积
- UI交互细节（在驱动管理中 显示驱动名称+版本号，服务管理支持排序，解决一些UI刷
  新问题 等）
- 修复Dism++ API一处接口泄露
- 新增BCD引导修复（在恢复功能 引导修复）
- 修复ESD转ISO（install.wim命名为install.esd问题）

**Dism++ 10.0.1.1 2015年4月11日**
- 修复另存为映像过滤列表失效问题。
- 提高计算机新手的体验（默认启用新手模式，并增加了备份还原入口点）
- 修复DismOpenPluginKey API 返回结果错误问题

**Dism++ 10.0.1.0 2015-04-03**
- 修复重启进入RE提示文件不存在问题。
- 修复设置Windows平台API不能正确设置Windows密钥问题
- 修复Win8以上平台ESD解密缺陷

**Dism++ 10.0.0.9 2015年3月23日**
- 改进多国语言的支持情况
- 新增Win10 10041 ESD解密Key（ESD解密）
- 调整WIM文件操作临时文件位置（保存Wim文件时临时文件将被设置在wim所在路径，释放
  wim文件时临时文件将使用释放路径）
- 改进错误提示信息，近可能的提示有价值的信息。
- 新增SWM支持，允许ESD、WIM、SWM相互转换（在文件 -> 格式转换 中）

**Dism++ 10.0.0.8 2015年2月18日（新年版）**
- 改进多国语言支持
- 调整多国语言翻译
- 修正Installer清理某些BUG（辛苦毛利以及青蛙及时修复）
- 空间回收清理数据库扩充

**Dism++ 10.0.0.7 2015年2月13日**
- 新增多国语言支持
- 新增ESD解密功能（文件 -> 格式转换 -> ESD解密即可使用）
- 进度条优化

**Dism++ 10.0.0.6 2015年2月6日**
- 修复只读文件无法删除BUG
- 新增Windows修复环境相关功能（支持重启再RE中运行Dism++ 或者重启进入RE）
- 修复驱动导出不能保存文件夹问题
- 新增系统热还原（点击 辅助功能 --> 系统修复  即可使用）
- 新增Installer清理（在空间回收中）
- 新增格式转换（在文件 -》格式转换  支持ESD、WIM无缝互转）
- UI调整

**Dism++ 10.0.0.5 2015年1月29日**
- 改进驱动清理对Ghost系统的稳定性（部分Ghost系统由于驱动方面的注册表残留，新版
  本将跳过关键驱动的清理，避免发生签名问题）
- Metro应用清理逻辑调整，不处理1小时内下载的App
- UI配色调整
- 改进对PE系统的识别
- 温馨提示：低版本系统默认不能处理高版本系统，你需要附带Dism运行时才能处理高版
  本
  - 对于64位系统，请将Dism运行时 存放在 程序所在路径\Config\x64\DISM\ 此路径下
    - 比如 C:\Dism++\Config\x64\DISM\DismAPI.dll
  - 对于32位系统，请将Dism运行时 存放在 程序所在路径\Config\x86\DISM\ 此路径下
    - 比如 C:\Dism++\Config\x86\DISM\DismAPI.dll
  - Dism运行时可以从ADK中或者ISO中提取

**Dism++ 10.0.0.4 2015年1月15日**
- 更新无视权限操作API（无视权限删除文件，无视权限处理注册表）所有接入Dism的插件
  只需调用系统自身API即可无视权限处理
- 更新Windows更新清理，改进极端情况的稳定性（只影响Windows 7、8）8.1以上系统由
  系统自身完成
  - 极端情况1：安装更新程序集中补丁一部分时没有未返回部分安装状态
  - 极端情况2：更新程序集安装完毕后，卸载其中一个时未检测到部分安装
  - 遇到上述情况 更新清理将继续进行，但是会跳过所有受影响的文件，如果需要发挥最
    大效果，请安装所有补丁后继续
- 改进Metro应用清理，自动跳过正在更新的App
- 配置文件加载失败时程序仅发出警告，但是依然正常运行，但是无法保存配置信息。

**Dism++ 10.0.0.3 2015年1月8日**
- 新增能力管理（仅WIndows 10）
- UI调整
- 更新Windows更新API，新增Win10 OnDemand Pack支持
- 修复添加删除更新不能卸载更新问题

**Dism++ 10.0.0.2**
- 修复一处句柄泄漏问题
- 提升文件创建权限，避免某些时候无法加载配置信息问题
- 调整UI布局，并裁剪不必要的库
- 调整配置文件文件名，避免非中文系统解压压缩包乱码

**Dism++ 10.0.0.1 2014年12月27日**
- 修复添加更新时没有进度问题
- UI布局调整
- 修复编辑WIM信息没保存问题
- 修复偶尔频繁启动程序的崩溃问题
- 新增驱动导出功能
- 为添加删除更新新增msu支持
- 空间回收新增自定义规则支持
- 全新的Metro应用清理

**Dism++ 10.0.0.0 V2 2014年12月24日**
- 修复更新清理的一处崩溃BUG
- 改进会话打开速度
- 修复某些精简系统获取驱动信息时的崩溃问题
- 修复Windows 7无法打开WIM文件问题
- 修复保存映像时路径不正确问题

**Dism++ 10.0.0.0 2014年12月23日**
- 全面的ESD支持，可以捕获、导出、编辑等（仅Windows 8以上平台）
- 新增WIMBoot系统检测（仅Windows 8.1 Update1以上平台）
- 修复大量BUG
- 新增系统修复、已安装的更新、驱动管理
- 改进Windows 8更新清理
- 新增WinSxS存储池压缩

**Dism++ 1.0.0.6 V4 2014年12月4日**
- 修复驱动清理的无法正常使用问题

**Dism++ 1.0.0.6 V3**
- 修复删除文件时的0xC0000024错误

**Dism++ 1.0.0.6 V2**
- 修复系统账户管理权限问题
- 修复Metro清理的一处崩溃问题
- 修复排除列表没有滚动条问题

**Dism++ 1.0.0.6 V1**
- 改进文件操作性能
- 修复加载插件的一处BUG
- 插件SDK更新，新增无视权限函数
- 修复驱动清理，服务管理的一处BUG
- 新增自动更新检查
- 新增系统账户管理插件（可以随意修改系统登录密码等）

**Dism++ 1.0.0.5 V2**
- 解决因为编译问题导致CPU核心数低于2时无法正常使用。

**Dism++ 1.0.0.5 V1**
- 解决另存为映像时 无限提醒正在准备问题
- 更新清理调整，当遇到暂存更新时 自动将更新删除，而不是返回更新挂起
- 更新清理增强，新增安全信息恢复特性，清理完毕后自动恢复安全信息
- Windows 7如果不安装SP1不支持更新清理

**Dism++ 1.0.0.4**
- 解决Win7挂载系统崩溃BUG
- 新增Metro清理功能
- 合并类库，大幅度提高代码利用率，减少程序体积（32位从758KB缩减到691KB,64位从
  1041KB缩减到969KB）
- 修复Windows功能BUG
- 全平台支持……Win7到Win10（包括对应的服务器版以及嵌入式版）

**Dism++ 1.0.0.3**
- 解决Win7的更新清理BUG
- 修复诺干崩溃BUG
- 新增插件支持接口

**Dism++ 1.0.0.2**
- 修复Win10更新检查大小反馈为0的问题
- 解决DismLinkTempTemp.LinkFile错误
- Win7更新清理 稳定性测试已经通过（Win8仍未测试）
- 改进多处性能问题以及内存泄漏

**Dism++ 1.0.0.1**
- 第一预览版
