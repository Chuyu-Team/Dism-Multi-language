# Dism转Dism++入门
Dism++很大程度受到Dism的影响。这是因为Dism与Dism++拥有几乎相同的底层实现。可以说，Dism++复制了Dism大部分代码实现。但是Dism++依然跟Dism存在诸多不同，本文将详细阐述Dism++与Dism的使用上或者是功能上的不同之处。


## Dism++平台兼容性
Dism++支持Vista~Windows 10所有系统（包括服务器、平板、手机、受限桌面平台等系统），并无其他要求。Dism++也没有对不同系统分平台处理。这点与Dism有很大的不同，不需要准备多个版本的Dism++去兼容不同的系统。也不同担心某些受限桌面平台无法处理问题。


## WIM/VHD映像处理命令
跟Dism不同的是，Dism++支持的映像格式有WIM、SWM、ESD、UUP ESD以及ISO。需要注意的是Dism++不支持VHD、VHDX、FFU以及SFU。Dism不完整支持ESD，但是Dism++提供了完整的ESD支持。在Dism++中，ESD转WIM或者直接保存ESD也是允许的，下面详细的介绍下操作方式。

### /Apply-CustomDataImage 应用自定义Wimboot数据怎么做
根据评估，用不到此功能，因此Dism++不尚未添加此功能。如果需要此功能，请反馈。

### /Capture-CustomImage 捕获自定义WimBoot数据怎么做
根据评估，用不到此功能，因此Dism++不尚未添加此功能。如果需要此功能，请反馈。

### /Get-WIMBootEntry 获取WimBoot信息怎么做
将鼠标移动到对应系统Tab上方，程序会显示此系统的WIMBootEntry配置。

### /List-Image 查看WIM文件列表怎么做
Dism++不支持此功能，如果需要查看，可以使用7z打开wim/esd文件。

### /Append-Image 增量到现有映像怎么做
在菜单中 点击 文件 - 另存为映像即可。其中：

/ImageFile 参数就是下方的编辑框，点击浏览就能选择路径。

/CaptureDir 参数是当前选择的系统，你可以切换Tab来调整当前选择的系统。

/Name /Description 参数Dism++会自动感知，如果你不满意，可以双击更改。

/ConfigFile 配置可以在 选项 - 详细设置 - 排除列表 中设置。

/WIMBoot 参数自动感应，目标文件是WimBoot压缩时自动使用。

/Bootable 参数自动感应，目标是PE系统时自动使用，另外在专家模式才能更改此设置，新手模式中无法更改也不显示此选项。

/CheckIntegrity 参数不支持，因为此选项将降低捕获性能。

/Verify 参数不支持，因为检查WIM文件会降低性能。

/NoRpFix 参数不支持，此选项不常用，到时有需要了在添加。

/EA 参数自动使用，因为保存扩展属性没有副作用。

### /Capture-Image 捕获映像怎么做
用法跟/Append-Image相同，在菜单中 点击 文件 - 另存为映像即可。其中：

/ImageFile 参数就是下方的编辑框，点击浏览就能选择路径。

/CaptureDir 参数是当前选择的系统，你可以切换Tab来调整当前选择的系统。

/Name /Description 参数Dism++会自动感知，如果你不满意，可以双击更改。

/ConfigFile 配置可以在 选项 - 详细设置 - 排除列表 中设置。

/Compress 参数，点击浏览，能选择压缩类型，Dism++支持所有压缩类型（不压缩/none、快速压缩/fast、WimBoot压缩/WIMBoot、最大压缩/max、极限压缩/recovery）。

/WIMBoot 参数已经归类到/Compress参数中。

/Bootable 参数自动感应，目标是PE系统时自动使用，另外在专家模式才能更改此设置，新手模式中无法更改也不显示此选项。

/CheckIntegrity 参数不支持，因为此选项将降低捕获性能。

/Verify 参数不支持，因为检查WIM文件会降低性能。

/NoRpFix 参数不支持，此选项不常用，到时有需要了在添加。

/EA 参数自动使用，因为保存扩展属性没有副作用。

> 温馨提示：如果保存映像时选择一个已经存在的映像，那么Dism++自动调整为 /Append-Image 逻辑，因此，如果你需要全新保存，请删除现有文件在继续。

### /Apply-Image 释放映像怎么做
选择 文件 - 释放映像 即可，其中：

/ImageFile 参数就是映像文件路径，点击第一个浏览按钮即可选择（支持 WIM、SWM、ESD、UUP ESD以及ISO）。

/ApplyDrive 参数就是安装路径，点击第二个浏览按钮选择。

/Index 参数可以点击目标映像下拉框选择。

/SFUFile 参数，不支持

/SkipPlatformCheck 参数不支持。

/CheckIntegrity 参数会降低性能，不支持。

/Verify 参数会降低性能，不支持。

/NoRpFix 参数不常用，不支持。

/SWMFile 参数自动感应，目标为SWM时自动使用。

/ConfirmTrustedFile 参数，不支持。

/WIMBoot 参数，勾选WimBoot可选框即可。与Dism不同的是Dism++允许快速压缩、WimBoot压缩、最大压缩的wim文件使用此特性，另外支持Windows 7以上（包含）所有系统，Dism++自动添加驱动并且解压核心文件。

/Compact 参数，勾选Compact可选框即可。此功能支持Windows 7以上（包含）所有系统，Dism++自动添加驱动并且解压核心文件。

/EA 参数，自动使用。

除此之外，Dism++还支持WindowsToGO、添加引导以及格式化分区，有需要的用户可以使用。


### /Apply-SiloedPackage 自定义配置怎么做
Dism++暂不支持此功能。


### /Split-Image
选择 文件 - WIM <--> ESD/SWM，然后在目标文件选择SWM即可。与Dism不同的是，Dism++还允许拆分ESD。


### /Get-MountedWimInfo或者/Get-MountedImageInfo 查看所有挂载的映像怎么做
直接启动Dism++即可，Dism++在启动时直接会显示所有的映像，包括挂载映像。你可以点击Tab来切换你需要的映像。
> Dism++不支持VHD/或者VHDX，因此，Dism++无法查看挂载的VHD/VHDX，如果需要处理挂载的VHD/VHDX，请手动添加映像路径，文件 - 添加路径。

### /Get-WimInfo或者/Get-ImageInfo 查看所有映像信息怎么做
Dism++有个`文件`菜单，点击 `打开映像文件` 即可。此外Dism++此功能还支持ISO以及UUP分段映像。除此之外，双击映像信息可以直接修改映像描述信息。
> Dism++不支持VHD/或者VHDX，因此，你无法使用此功能来查看VHD/VHDX映像。

### /Commit-Wim或者/Commit-Image 保存更改怎么做
在Tab中选择需要保存的映像后，再从菜单点击 `文件` -> `保存映像` 即可。也可以按快捷键 Ctrl + S。

Dism++还支持增量保存，如果选择增量保存。那么会在原有的WIM中新增加一个修改后的Index。


### /Unmount-Wim或者/Unmount-Image 卸载挂载怎么做
在Tab中选择需要保存的映像后，再从菜单点击 `文件` -> `卸载映像` 即可。也可以按快捷键 Delete。
> Dism++不支持卸载并保存。如果需要保持，请首先保存映像，然后在使用此功能卸载。

### /Remount-Wim或者/Remount-Image 修复挂载点怎么做
Dism++在启动时会自动检测挂载映像是否受损，并咨询你是否需要修复，如果你需要使用此功能，只需要点击`确定`即可，无需其他操作。

### /Cleanup-Wim或者/Cleanup-Mountpoints 清除所有挂载点怎么做
Dism++不支持此功能，不过你可以手动挨个删除挂载点。

### /Delete-Image 删除映像索引怎么做
在 文件 - 打开映像文件 后，选中你需要删除的索引，然后点击删除即可。

### /Export-Image 导出映像怎么做
有二种办法：

方法一：在 文件 - 打开映像文件 后，选中你需要导出的索引，然后点击导出映像即可。这是会提示你选择一个映像文件，如果映像文件存在，那么自动追加不会删除原有数据，不存在则创建。

方法二：在 文件 - WIM <--> ESD/SWM，然后选择一个新的映像文件位置。此功能会导出所有索引，并且会覆盖现有文件。当需要完全转换时比较适合。

## Windows版本服务命令
Dism++暂不支持此此功能。

## 无人参与服务命令
Dism++暂不支持此功能。

## 驱动程序服务命令
选择 驱动管理，即可处理驱动。与Dism不同的是，Dism++还可以联机处理。

### /Remove-Driver 删除驱动怎么做
Dism++默认不再新手模式中显示此功能，打开专家模式后，选中需要删除的驱动点击删除即可。

### /Add-Driver 添加驱动怎么做
可以点击添加按钮，与Dism不同的是，Dism++只允许选择文件夹。在选择后，Dism++会自动把这个文件夹下方的驱动全部添加到系统中。

/recurse 参数自动使用，所以Dism++只能选择文件夹。

/ForceUnsigned 参数自动使用，添加未签名的驱动不返回失败。

值得注意的是，Dism++会检查驱动体系，比如你向64位系统添加32位驱动则直接返回失败，这点跟Dism有所不同。

### /Get-DriverInfo 查看驱动信息怎么做
在左侧点击驱动后，自动会在右侧显示驱动详细信息。

### /Get-Drivers 获取驱动列表怎么做
在打开驱动管理时自动会展示列表。

/all 参数，勾选 显示内置驱动 即可。但是需要注意的是，内置驱动无法删除，显示了也染病软。

### /Export-Driver 导出驱动怎么做
选择你需要导出的驱动，然后点击`导出驱动`即可。

## 国际服务命令
在Dism++中名字叫 区域和语言 ，点击后即可看到相关命令。

### /Set-UILang 设置系统语言怎么做
选择 将系统默认语言调整为指定区域 下拉框即可，另外你需要事先安装对应的语言。

### /Set-UserLocale 设置用户区域信息怎么做
调整 新用户账号 下方的 `将用户配置（格式、键盘布局等）为指定区域` 即可。

### /Set-SysLocale 设置系统区域信息怎么做
调整 欢迎屏幕（系统账号） 下方的 `将用户配置（格式、键盘布局等）为指定区域` 即可。

### /Set-TimeZone 设置时区怎么做
调整 `将时区设置调整为以下时区` 即可。

### /Set-SKUIntlDefaults 或者 /Set-AllIntl 一次性调整为对应的默认语言设置怎么做
调整 `调整映像中的指定 SKU 语言的所有国际设置都设置为默认值` 即可，此外要使用此功能，请先安装对应的语言包。Dism++也推荐使用此选项，而不是一个个去设置。

### /Get-Intl 获取国际化设置怎么做
启动此功能时，自动显示国际化相关设置。

### 其他参数
其他参数，为了UI的实用性以及美观考虑，就不做了，毕竟对大家来说 支持 /Set-SKUIntlDefaults 或者 /Set-AllIntl就可以了，没必要一个个去展示。

## 应用程序服务命令
考虑到没啥实际价值，不支持此功能，不过Dism++已经应用于Windows Update功能，用于扫描Office相关补丁。

## 程序包服务命令
此功能被分布多个Dism++功能中。

### /Get-Packages 获取已安装的更新怎么做
在更新管理中 点击 已安装的更新 即可。

### /Get-PackageInfo 获取更新详细信息怎么做
在已安装的更新列表中 自动展示所有更新信息。


### /Add-Package 添加更新怎么做
可以直接点击`添加`，然后选择你本地的更新即可（按住Shift可以选择多个更新文件）。其中：

/PackagePath 更新文件路径，支持多个文件，可以按Shift选择多个更新，支持cab、msu以及exe（部分）更新。

/IgnoreCheck 参数不支持，Dism++强制执行适应性检查。

/PreventPending 参数不支持。

最后Dism++还能使用数据库扫描更新，点击`扫描`，在点击`安装`。这样就免去了手动收集补丁的烦恼，Dism++也推荐这样的方式来安装更新。

### /Remove-Package 卸载更新怎么做
首先点击 已安装的更新，然后选中需要删除的更新，最后点击删除即可。

### /Get-Features 查看所有特定功能怎么做
点击 Windows功能即可。

### /Get-FeatureInfo 查看特定功能信息怎么做
点击 Windows功能后，自动展示所有功能的状态。

### /Enable-Feature 启用特定功能怎么做
在功能列表，选择需要开启的功能，然后点击应用即可，其中：

/LimitAccess 参数，不支持。

/Source 参数，支持，在本地源设置一个路径即可，一般是`D:\Sources\sxs`。如果不知道怎么用，可以挂载一个ISO，Dism++能自动感知。

/All 参数，支持，自动使用。

### /Disable-Feature 关闭特定功能怎么用
在功能列表，选择需要关闭的功能，然后点击应用即可，其中：

/Remove 参数，支持，将更新状态调整为 X 即可。

### /Get-Capabilities 查看所有功能怎么用
点击 可选功能 即可。
> Dism++为了优化性能，默认关闭了网络请求，如果需要查看所有功能（包含网络位置），那么勾选`显示所有功能`即可。

### /Get-CapabilityInfo 查看功能信息怎么用
点击 可选功能 后，自动展示功能信息。


### /Add-Capability 添加添加功能怎么用
如需使用此功能，首先在可选功能界面点击`查看所有功能`，然后点击启用即可。其中：

/Source以及/LimitAccess均不支持，如需添加本地功能，请在`更新管理` 点击 `添加`，手动选择cab文件即可。

### /Remove-Capability 删除功能怎么用
在可选功能界面，在你需要删除的功能上点击删除即可。

### /Cleanup-Image /RevertPendingActions 撤销挂起更改怎么用
Dism++不支持此功能。

### /Cleanup-Image /spsuperseded 固化SP补丁包怎么用
此功能已经被合并到/StartComponentCleanup中。其中：

/hidesp 参数，自动使用。

### /Cleanup-Image /StartComponentCleanup 清理WinSxS怎么用
打开空间回收，里面有个清理项目叫`被取代的WinSxS组件`，勾选此项目然后点击清理即可。另外此功能已经包含 /spsuperseded特新。

/ResetBase 更新固化，自动使用。另外，需要注意的是，Dism已经在Windows 10中屏蔽了此功能，此参数会被自动忽略。但是Dism++（10.1.25.1以及更高版本）不会忽略此参数，此处行为略有差异。另外Dism++还支持Vista以及Windows 7。

/Defer 推迟清理到下次系统维护，不支持此参数。


### /Cleanup-Image /AnalyzeComponentStore 扫描可以清理的空间
打开空间回收，里面有个清理项目叫`被取代的WinSxS组件`，勾选此项目然后点击扫描即可，程序将展现可清理的空间。

### /Cleanup-Image /CheckHealth 查看是否存在受损标记怎么用
不支持此功能。

### /Cleanup-Image /ScanHealth 扫描系统是否受损怎么用
在菜单点击恢复功能 - 验证受损，即可。

### /Cleanup-Image /RestoreHealth 恢复系统受损怎么用
在菜单点击恢复功能 - 修复受损，即可。其中：

/Source 不支持自定义本地源，然并软的参数。

/LimitAccess参数，阻止网络访问，不支持。
> 恢复受损是然并软的功能，基本都是修复失败，大家就别抱什么希望了。


## APPX 服务命令
点击 Appx管理 ，并 点击 Provisioned Appx即可。

### /Get-ProvisionedAppxPackages 查看所有预装应用怎么用
启动UI时自动展示相关Appx信息。

### /Set-ProvisionedAppxDataFile 设置自定义数据怎么用
不支持此功能。

### /Remove-ProvisionedAppxPackage 删除预装应用怎么用
勾选需要删除的应用，在点击删除即可。

### /Add-ProvisionedAppxPackage 添加Appx怎么用
不支持此功能。Dism++主要侧重于删除，等微软的Appx成气候了在添加此功能。

## PROVISIONING PACKAGE SERVICING COMMANDS
不支持此功能。

## 默认关联命令
点击`文件关联`即可查看相关功能。与Dism不同的是，在Dism++中，Vista以及Windows 7也能使用此功能。

### /Remove-DefaultAppAssociations 删除默认程序关联怎么用
点击 `Windows映像默认应用程序关联` 下方的删除按钮即可。

### /Import-DefaultAppAssociations 导入默认程序关联怎么用
点击 `Windows映像默认应用程序关联` 下方的导入按钮即可。

### /Get-DefaultAppAssociations 怎么查看默认程序关联
点击 `Windows映像默认应用程序关联` 下方的导出按钮，然后在使用文本查看器，查看刚才导出的配置文件。

### /Export-DefaultAppAssociations 怎么导出当前用户的程序关联配置
点击 `Windows联机映像默认应用程序关联` 下方的导出按钮即可。

## WINDOWS PE 命令
点击`WinPE命令`即可查看相关功能。

### /Get-ScratchSpace 或者 /Get-TargetPath 或者 /Get-PESettings 怎么查看PE相关设置
打开此功能时自动显示相关设置。

### /Set-ScratchSpace 怎么调整暂存空间
调整 `设置 Windows PE 映像的暂存空间（MB）`此设置，然后点击应用即可。

### /Set-TargetPath 怎么调整目标PE路径
调整 `设置 Windows PE 映像的目标路径`此设置，然后点击应用即可。

### /Get-Profiling 怎么查看配置文件
不支持此功能。

### /Apply-Profiles 应用配置文件怎么用
不支持此功能。

### /Disable-Profiling 禁用配置文件怎么用
不支持此功能。

### /Enable-Profiling 启用配置文件怎么用
不支持此功能。
