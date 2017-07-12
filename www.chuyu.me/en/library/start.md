>* Under Construction
* You can commit your translations to [here](https://github.com/Chuyu-Team/Dism-Multi-language/tree/master/www.chuyu.me/en) if you want to help us to translate the English documentations.

![Welcome to Dism++](../images/logo.png "Welcome to Dism++")  

## About Dism++ -  **We are in the frontline!**

Dism++ can be considered as a GUI frontend of DISM, but it is based on low-level Component Based Servicing (CBS) interface instead of DISM API or DISM Core API.


### Dism++的特点
* Dism++ compatible with Windows Vista or later, without any Windows ADK DISM components requirements. If you use Microsoft's, it need 3 versions of Windows ADK DISM components.
* Dism++是Dism的交集，提供完全的图形化操作，几乎支持Dism的所有功能以及大量Dism原本所不支持的功能。管理更新、驱动、功能、Appx、可选功能、服务、Compact/WIMboot、系统修复等……放马过来吧。
* Dism++提供了完整的WIM支持（包括ESD捕获、ESD转ISO、释放分段ESD以及直接ISO支持），`值得一提的是，ESD转ISO，Dism++可以直接在内存中解密无需修改硬盘数据。这极大的满足了强迫症患者。`
* Dism++提供了开放的清理以及优化功能，用户可以自定义Dism++规则，来打造专属系统工具。

[ [BUG Feedback](https://github.com/Chuyu-Team/Dism-Multi-language/issues) ]
[ [QQ Group 200783396](http://shang.qq.com/wpa/qunwpa?idkey=07a04c095aee1e31f54b82ba98499a5b49aa10185f975946243ba68e0134a34e) ]

### Donate Dism++
赞助的费将用于支付服务器费用，如果大家够豪气可能还能支付房租。为了从可持续角度考虑，建议大家每年小额赞助一次，每次大约20RMB即可。

`温馨提示：赞助并不是等于付费支持，此软件为个人爱好业余维护。BUG反馈以及改进意见并不能保证100%及时响并处理。因此请勿仅仅为了后期服务支持而赞助Dism++。`

![WeiXin](../images/weixin.png)  ![Alipay](../images/1487498940074.jpg)

## Minimum requirements of Dism++

Minimum: Windows NT 6.0 or later, 512 MB Physical Memory

Recommend: Windows NT 6.1 or later, an AMD64 processor, 8 GB Physical Memory and 8 GB Pagefile or higher

>* You can only run Dism++ on x86 and AMD64 processors. IA64, ARM and ARM64 images only support the offline mode.
* Dism++ don't support the x86 images if lacks the WOW64 support in AMD64 Windows. (AMD64 Windows ADK PE is an example.) 
* Features like CompactOS, WIMBoot and etc are unavailable in Windows Vista and Windows Server 2008.

## The file list of Dism++

Here are the all files about Dism++. You can delete which you don't need. Lazy people ignore the following. 

| File Name | Description
| -------- | -------
|Dism++x64.exe|64位系统的UI，在64位系统中，启动此程序呈现UI。32位系统用户可以考虑删除此文件。
|Dism++x86.exe|32位系统的UI，如果你在64位系统中启动此程序，则自动转向到Dism++x64.exe。64位系统用户可以考虑删除此文件。
|Config\amd64\bcdboot.exe|提供引导修复功能，原版系统自带此文件，删除没有影响。原版系统用户以及32位系统用户可以删除此文件。
|Config\x86\bcdboot.exe|提供引导修复功能，原版系统自带此文件，删除没有影响。原版系统用户以及64位系统用户可以删除此文件。
|Config\amd64\CBSHost.dll|Dism++API支持模块，删除后64位系统将无法使用Dism++。32位用户可以删除此文件。
|Config\x86\CBSHost.dll|Dism++API支持模块，删除后32位系统将无法使用Dism++，64位系统无法脱机处理32位系统。不需要脱机处理32位系统的64位用户可以考虑删除。
|Config\amd64\NCleaner.dll|64位NCleaner清理引擎，缺少此文件后某些高级清理功能将无法使用，32位用户可以考虑删除此文件。
|Config\x86\NCleaner.dll|32位NCleaner清理引擎，缺少此文件后某些高级清理功能将无法使用，64位用户可以考虑删除此文件。
|Config\amd64\wimgapi.dll|WIM文件操作支持模块，Win10用户、32位用户或者不需要任何WIM相关功能的用户，那么可以考虑删除。
|Config\x86\wimgapi.dll|WIM文件操作支持模块，Win10用户、64位用户或者不需要任何WIM相关功能的用户，那么可以考虑删除。
|Config\amd64\wofadk.sys<br>Config\x86\wofadk.sys|提供Compact功能相关支持，不需要脱机处理的Win10用户可以考虑删除此文件。强烈建议不要删除这些文件。
|Config\Plugins|Dism++插件支持，不需要插件的用户可以删除此文件。
|Config\Languages|Dism++的语言文件，以中国为例，只保留zh-Hans.zip即可。
|Config\Data.zip|此文件保存了清理规则，ESD解密KEY等。此文件不允许删除。
|Config\UpdateInfo.zip<br>Config\UpdateInfoBeta.zip|Dism++更新元数据，用于判断是否存在新版本，以及防止用户新版本降级为老版本。推荐保留，删除后将重新下载。
|Config\default.ui.zip|此文件保存了Dism++的UI。此文件不允许删除。
|Config\wsusscn2.cab|Windows Update数据库文件，用于扫描更新。可以考虑删除。
|Config\include\Dism++.h|仅测试版存在此文件，C Script脚本支持头文件，缺少此文件后C Script脚本将无法使用。
|Config\amd64\CScript.dll|仅测试版存在此文件，64位C Script脚本解析引擎，缺少此文件后C Script脚本将无法使用，32位用户可以考虑删除此文件。
|Config\x86\CScript.dll|仅测试版存在此文件，32位C Script脚本解析引擎，缺少此文件后C Script脚本将无法使用，64位用户可以考虑删除此文件。
