>* Under Construction
* You can commit your translations to [here](https://github.com/Chuyu-Team/Dism-Multi-language/tree/master/www.chuyu.me/en) if you want to help us to translate the English documentations.

![Welcome to Dism++](../images/logo.png "Welcome to Dism++")  

## About Dism++ -  **We are in the frontline!**

Dism++ can be considered as a GUI frontend of DISM, but it does not rely on Dism. It is instead based on a low-level Component Based Servicing (CBS) interface instead of the DISM API or DISM Core API.


### Dism++ Features
* Dism++ does not require any additional Dism component, such as the Windows ADK DISM components, making it compatible with a vareity of systems. Compared to Microsoft's Dism, the other solution requires 3 versions of the Windows ADK DISM components.
* Dism++ is like an improved version of Dism. It provides a full graphical interface and supports almost all of Dism's functionalities and more. It can be used to manage updates, drivers, updates, features, Appx; toggle services and features; use Compact and WIMBoot; repair system...etc.
* Dism++ provides full WIM support (including ESD patching, ESD to ISO, release partial ESD, and direct support for ISO). `Most importantly, when using the ESD to ISO conversion feature, Dism++ can decrypt from the internal storage without decrypting the data.`
* Dism++ provides an open-ended clean-up and optimization features. Users can define their own Dism++ rules, creating their own tools for the system.

[ [BUG Feedback](https://github.com/Chuyu-Team/Dism-Multi-language/issues) ]
[ [QQ Group 200783396](http://shang.qq.com/wpa/qunwpa?idkey=07a04c095aee1e31f54b82ba98499a5b49aa10185f975946243ba68e0134a34e) ]

### Donate Dism++
All donations go towards hosting; if enough people help out or donate enough, we may even be able to pay our rents. For sustaniability,  we recommend donating annually, roughly 20 RMB (~$4 USD) every time.

`Reminder: Donation does not equate to paying for support. This software is developed out of self-interest. Feedbacks may not be processed immediately. Please do not donate to Dism++ for the sake of software support.`

![donate](../images/donate.png)

## Minimum requirements of Dism++
Minimum: Windows NT 6.0 or later, 512 MB Physical Memory

Recommended: Windows NT 6.1 or later, AMD64-based system, 8 GB Physical Memory and 8 GB Pagefile or higher

>* You can only run Dism++ on x86 and AMD64 processors. IA64, ARM and ARM64 systems can only support loading images in offline mode.
* Dism++ does not support x86 images if lacks the WOW64 support in AMD64 Windows. (e.g. AMD64 Windows ADK PE.) 
* Features like CompactOS, WIMBoot and etc. are unavailable in Windows Vista and Windows Server 2008.

## The file list of Dism++

Here are the all files about Dism++. You can delete those that you do not need. Ignore the following if you do not know what you are doing or are too lazy.

| File Name | Description
| -------- | -------
|Dism++x64.exe| User interface for x64-based systems; used to provide a graphical interface. This file can be considered for deletion only for x64 systems.
|Dism++x86.exe| User interface for x86-based systems; used to provide a graphical interface. When launched on an x64 system, Dism++x64.exe will be launched instead. This file can be considered for deletion only for x86 systems.
|Dism++arm64.exe| User interface for x64-based systems; used to provide a graphical interface. This file can be considered for deletion only for arm64 systems.
|Config\amd64\bcdboot.exe| Provides index repair functionalitiy for x64 users. All versions of Windows come with this utility, removing this file does not affect the overall functionalitiy. Users with a full installation of Windows and x86 users can consider removing this file.
|Config\x86\bcdboot.exe| Provides index repair functionalitiy for x86 users. All versions of Windows come with this utility, removing this file does not affect the overall functionalitiy. Users with a full installation of Windows and x64 users can consider removing this file.
|Config\amd64\CBSHost.dll| 64-bit Dism++ API support module. Removing this file will render the utility useless for x64 users. x86 users can consider removing this file.
|Config\x86\CBSHost.dll| 32-bit Dism++ API support module. Removing this file will render the utility useless for x86 users; x64 users will not be able to process x86-based systems offline. x64 users that do not need to handle x86-based systems can consider removing this file.
|Config\arm64\CBSHost.dll| arm64 Dism++ API support module. Removing this file will render the utility useless for arm64 users. This file can be considered for deletion only for arm64 systems.
|Config\amd64\NCleaner.dll| 64-bit NCleaner cleanup engine. Removing this file can render some of the advanced clean-up features unusable. x86 users can consider removing this file.
|Config\x86\NCleaner.dll| 32-bit NCleaner engine. Removing this file can render some of the advanced clean-up features unusable. x64 users can consider removing this file.
|Config\arm64\NCleaner.dll| arm64 NCleaner cleanup engine. Removing this file can render some of the advanced clean-up features unusable. This file can be considered for deletion only for arm64 systems.
|Config\amd64\wimgapi.dll| WIM file operation support module. Windows 10 users, x86 users, or users that do not need to utilize any features related to WIM can consider removing this file.
|Config\x86\wimgapi.dll| WIM file operation support module. Windows 10 users, x64 users, or users that do not need to utilize any features related to WIM can consider removing this file.
|Config\amd64\wofadk.sys<br>Config\x86\wofadk.sys| Offers support for Compact-related features. Users that do not need to process Windows 10 systems offline can consider deleting this file. We highly recommend that you do not remove this file.
|Config\Plugins| Offers Dism++ plugin support. Users that do not use plugins can consider removing this file.
|Config\Languages| Dism++ Language files. For English users, you could remove everything else but `en.zip`.
|Config\Data.zip| Includes cleanup rules, ESD decrypt keys, etc. Please DO NOT delete this file.
|Config\UpdateInfo.zip<br>Config\UpdateInfoBeta.zip| Provides update information of Dism++, used to check for new versions and used to avoid downgrade to an older version. It is recommended to keep this file; when the file is missing, it will be re-downloaded automatically.
|Config\default.ui.zip| Contains UI configruation for Dism++.  Please DO NOT delete this file.
|Config\wsusscn2.cab| Windows Update database file, used to scan updates.  You can delete this file.
|Config\include\Dism++.h| This file is only available in the beta version. The header file for C Script, missing this file can render C Script unusable. 
|Config\amd64\CScript.dll|This file is only available in the beta version. The 64-bit parsing engine for C Script, missing this file can render C Script unusable.  You can delete this file when you using a 32-Bit OS.
|Config\x86\CScript.dll|This file is only available in the beta version. The 32-bit parsing engine for C Script, missing this file can render C Script unusable.  You can delete this file when you using a 64-Bit OS.