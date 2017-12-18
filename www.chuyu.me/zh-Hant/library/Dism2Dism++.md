# Dism 轉 Dism++ 入門
Dism++ 很大程度受到 Dism 的影響。這是因為 Dism 與 Dism++ 擁有幾乎相同的底層實現。可以說，Dism++ 複製了 Dism 大部分程式碼實現。但是 Dism++ 依然跟 Dism 存在諸多不同，本文將詳細闡述 Dism++ 與 Dism 的使用上或者是功能上的不同之處。


## Dism++ 平台相容性
Dism++ 支援 Vista~Windows 10 所有系統（包括伺服器、平板、手機、受限桌面平台等系統），並無其他要求。Dism++ 也沒有對不同系統分平台處理。這點與 Dism 有很大的不同，不需要準備多個版本的 Dism++ 去相容不同的系統。也不需要擔心某些受限桌面平台無法處理問題。


## WIM/VHD 映像處理命令
跟 Dism 不同的是，Dism++ 支援的映像格式有 WIM、SWM、ESD、UUP、ESD 以及 ISO。需要注意的是 Dism++ 不支援 VHD、VHDX、FFU 以及 SFU。Dism 不完整支援 ESD，但是 Dism++ 提供了完整的 ESD 支援。在 Dism++ 中，ESD 轉 WIM 或者直接儲存 ESD 也是允許的，下面詳細的介紹下操作方式。

### /Apply-CustomDataImage 套用自訂 Wimboot 資料該怎麼做
根據評估，用不到此功能，因此 Dism++ 不尚未新增此功能。如果需要此功能，請反映。

### /Capture-CustomImage 擷取自訂 WimBoot 資料該怎麼做
根據評估，用不到此功能，因此 Dism++ 不尚未新增此功能。如果需要此功能，請反映。

### /Get-WIMBootEntry 取得 WimBoot 資訊該怎麼做
將滑鼠游標移動到對應系統 Tab 上方，程式會顯示此系統的 WIMBootEntry 配置。

### /List-Image 檢視 WIM 檔案清單該怎麼做
Dism++ 不支援此功能，如果需要檢視，可以使用 7z 開啟 wim/esd 檔案。

### /Append-Image 增量到現有映像該怎麼做
在選單中 按下 檔案 - 另存為映像即可。其中：

/ImageFile 參數就是下方的編輯框，按下瀏覽就能選擇路徑。

/CaptureDir 參數是目前選擇的系統，你可以切換 Tab 來調整目前選擇的系統。

/Name /Description 參數 Dism++ 會自動感知，如果你不滿意，可以按兩下更改。

/ConfigFile 配置可以在 選項 - 詳細設定 - 排除清單 中設定。

/WIMBoot 參數自動感應，目標檔案是 WimBoot 壓縮時自動使用。

/Bootable 參數自動感應，目標是 PE 系統時自動使用，另外在專家模式才能更改此設定，新手模式中無法更改也不顯示此選項。

/CheckIntegrity 參數不支援，因為此選項將降低擷取效能。

/Verify 參數不支援，因為檢查 WIM 檔案會降低效能。

/NoRpFix 參數不支援，此選項不常用，到時有需要了在增加。

/EA 參數自動使用，因為儲存擴展屬性沒有副作用。

### /Capture-Image 擷取映像該怎麼做
用法跟/Append-Image 相同，在選單中 按下 檔案 - 另存為映像即可。其中：

/ImageFile 參數就是下方的編輯框，按下瀏覽就能選擇路徑。

/CaptureDir 參數是目前選擇的系統，你可以切換 Tab 來調整目前選擇的系統。

/Name /Description 參數 Dism++ 會自動感知，如果你不滿意，可以按兩下更改。

/ConfigFile 配置可以在 選項 - 詳細設定 - 排除清單 中設定。

/Compress 參數，按下瀏覽，能選擇壓縮類型，Dism++ 支援所有壓縮類型（不壓縮 /none、快速壓縮 /fast、WimBoot 壓縮 /WIMBoot、最大壓縮 /max、極限壓縮 /recovery）。

/WIMBoot 參數已經歸類到 /Compress 參數中。

/Bootable 參數自動感應，目標是 PE 系統時自動使用，另外在專家模式才能更改此設定，新手模式中無法更改也不顯示此選項。

/CheckIntegrity 參數不支援，因為此選項將降低擷取效能。

/Verify 參數不支援，因為檢查 WIM 檔案會降低效能。

/NoRpFix 參數不支援，此選項不常用，到時有需要了在增加。

/EA 參數自動使用，因為儲存擴展屬性沒有副作用。

> 貼心提醒：如果儲存映像時選擇一個已經存在的映像，那麼 Dism++ 自動調整為 /Append-Image 邏輯，因此，如果你需要全新儲存，請刪除現有檔案在繼續。

### /Apply-Image 釋放映像該怎麼做
選擇 檔案 - 釋放映像 即可，其中：

/ImageFile 參數就是映像檔案路徑，按下第一個瀏覽按鈕即可選擇（支援 WIM、SWM、ESD、UUP、ESD 以及 ISO）。

/ApplyDrive 參數就是安裝路徑，按下第二個瀏覽按鈕選擇。

/Index 參數可以按下目標映像下拉框選擇。

/SFUFile 參數，不支援

/SkipPlatformCheck 參數不支援。

/CheckIntegrity 參數會降低效能，不支援。

/Verify 參數會降低效能，不支援。

/NoRpFix 參數不常用，不支援。

/SWMFile 參數自動感應，目標為 SWM 時自動使用。

/ConfirmTrustedFile 參數，不支援。

/WIMBoot 參數，勾選 WimBoot 可選框即可。與 Dism 不同的是 Dism++ 允許快速壓縮、WimBoot 壓縮、最大壓縮的 wim 檔案使用此特性，另外支援 Windows 7 以上（包含）所有系統，Dism++ 自動增加驅動並且解壓縮核心檔案。

/Compact 參數，勾選 Compact 可選框即可。此功能支援 Windows 7 以上（包含）所有系統，Dism++ 自動增加驅動並且解壓縮核心檔案。

/EA 參數，自動使用。

除此之外，Dism++ 還支援 WindowsToGO、新增引導以及格式化分區，有需要的使用者可以使用。


### /Apply-SiloedPackage 自訂配置該怎麼做
Dism++ 暫不支援此功能。


### /Split-Image
選擇 檔案 - WIM <--> ESD/SWM，然後在目標檔案選擇 SWM 即可。與 Dism 不同的是，Dism++ 還允許拆分 ESD。


### /Get-MountedWimInfo 或者 /Get-MountedImageInfo 檢視所有掛載的映像該怎麼做
直接啟動 Dism++ 即可，Dism++ 在啟動時直接會顯示所有的映像，包括掛載映像。你可以按下 Tab 來切換你需要的映像。
> Dism++ 不支援 VHD/ 或者 VHDX，因此，Dism++ 無法檢視掛載的 VHD/VHDX，如果需要處理掛載的 VHD/VHDX，請手動增加映像路徑，檔案 - 新增路徑。

### /Get-WimInfo 或者 /Get-ImageInfo 檢視所有映像資訊該怎麼做
Dism++ 有個`檔案`選單，按下 `開啟映像檔案` 即可。此外 Dism++ 此功能還支援 ISO 以及 UUP 分段映像。除此之外，按兩下映像資訊可以直接修改映像描述資訊。
> Dism++ 不支援 VHD/ 或者 VHDX，因此，你無法使用此功能來檢視 VHD/VHDX 映像。

### /Commit-Wim 或者 /Commit-Image 儲存更改該怎麼做
在 Tab 中選擇需要儲存的映像後，再從選單按下 `檔案` -> `儲存映像` 即可。也可以按快捷鍵 Ctrl + S。

Dism++ 還支援增量儲存，如果選擇增量儲存。那麼會在原有的 WIM 中新增加一個修改後的 Index。


### /Unmount-Wim或者/Unmount-Image 卸載掛載該怎麼做
在 Tab 中選擇需要儲存的映像後，再從選單按下 `檔案` -> `卸載映像` 即可。也可以按快捷鍵 Delete。
> Dism++ 不支援卸載並儲存。如果需要保持，請首先儲存映像，然後在使用此功能卸載。

### /Remount-Wim或者/Remount-Image 修復掛載點該怎麼做
Dism++ 在啟動時會自動檢測掛載映像是否受損，並諮詢你是否需要修復，如果你需要使用此功能，只需要按下`確定`即可，無需其他操作。

### /Cleanup-Wim或者/Cleanup-Mountpoints 清除所有掛載點該怎麼做
Dism++ 不支援此功能，不過你可以手動挨個刪除掛載點。

### /Delete-Image 刪除映像索引該怎麼做
在 檔案 - 開啟映像檔案 後，選中你需要刪除的索引，然後按下刪除即可。

### /Export-Image 匯出映像該怎麼做
有二種辦法：

方法一：在 檔案 - 開啟映像檔案 後，選中你需要匯出的索引，然後按下匯出映像即可。這是會提示你選擇一個映像檔案，如果映像檔案存在，那麼自動追加不會刪除原有資料，不存在則建立。

方法二：在 檔案 - WIM <--> ESD/SWM，然後選擇一個新的映像檔案位置。此功能會匯出所有索引，並且會覆蓋現有檔案。當需要完全轉換時比較適合。

## Windows 版本服務命令
Dism++ 暫不支援此功能。

## 無人參與服務命令
Dism++ 暫不支援此功能。

## 驅動程式服務命令
選擇 驅動管理，即可處理驅動。與 Dism 不同的是，Dism++ 還可以聯機處理。

### /Remove-Driver 刪除驅動該怎麼做
Dism++ 預設不再新手模式中顯示此功能，開啟專家模式後，選中需要刪除的驅動按下刪除即可。

### /Add-Driver 新增驅動該怎麼做
可以按下新增按鈕，與 Dism 不同的是，Dism++ 只允許選擇資料夾。在選擇後，Dism++ 會自動把這個資料夾下方的驅動全部新增到系統中。

/recurse 參數自動使用，所以 Dism++ 只能選擇資料夾。

/ForceUnsigned 參數自動使用，新增未簽名的驅動不返回失敗。

值得注意的是，Dism++ 會檢查驅動架構，比如你向 64 位元系統新增 32 位元驅動則直接返回失敗，這點跟 Dism 有所不同。

### /Get-DriverInfo 檢視驅動資訊該怎麼做
在左側按下驅動後，自動會在右側顯示驅動詳細資訊。

### /Get-Drivers 取得驅動清單該怎麼做
在開啟驅動管理時自動會展示清單。

/all 參數，勾選 顯示內置驅動 即可。但是需要注意的是，內置驅動無法刪除，顯示了也染病軟。

### /Export-Driver 匯出驅動該怎麼做
選擇你需要匯出的驅動，然後按下`匯出驅動`即可。

## 國際服務命令
在 Dism++ 中名字叫 區域和語言 ，按下後即可看到相關命令。

### /Set-UILang 設定系統語言該怎麼做
選擇 將系統預設語言調整為指定區域 下拉框即可，另外你需要事先安裝對應的語言。

### /Set-UserLocale 設定用戶區域資訊該怎麼做
調整 新用戶賬號 下方的 `將用戶配置（格式、鍵盤佈局等）為指定區域` 即可。

### /Set-SysLocale 設定系統區域資訊該怎麼做
調整 歡迎畫面（系統賬號） 下方的 `將用戶配置（格式、鍵盤佈局等）為指定區域` 即可。

### /Set-TimeZone 設定時區該怎麼做
調整 `將時區設定調整為以下時區` 即可。

### /Set-SKUIntlDefaults 或者 /Set-AllIntl 一次性調整為對應的預設語言設定該怎麼做
調整 `調整映像中的指定 SKU 語言的所有國際設定都設定為預設值` 即可，此外要使用此功能，請先安裝對應的語言套件。Dism++ 也推薦使用此選項，而不是一個個去設定。

### /Get-Intl 取得國際化設定該怎麼做
啟動此功能時，自動顯示國際化相關設定。

### 其他參數
其他參數，為了 UI 的實用性以及美觀考慮，就不做了，畢竟對大家來說 支援 /Set-SKUIntlDefaults 或者 /Set-AllIntl 就可以了，沒必要一個個去展示。

## 應用程式服務命令
考慮到沒啥實際價值，不支援此功能，不過 Dism++ 已經應用於 Windows Update 功能，用於掃描 Office 相關更新檔。

## 程式包服務命令
此功能被分佈多個 Dism++ 功能中。

### /Get-Packages 取得已安裝的更新該怎麼做
在更新管理中 按下 已安裝的更新 即可。

### /Get-PackageInfo 取得更新詳細資訊該怎麼做
在已安裝的更新清單中 自動展示所有更新資訊。


### /Add-Package 新增更新該怎麼做
可以直接按下`新增`，然後選擇你本機的更新即可（按住 Shift 可以選擇多個更新檔案）。其中：

/PackagePath 更新檔案路徑，支援多個檔案，可以按 Shift 選擇多個更新，支援 cab、msu 以及 exe（部分）更新。

/IgnoreCheck 參數不支援，Dism++ 強制執行適應性檢查。

/PreventPending 參數不支援。

最後 Dism++ 還能使用資料庫掃描更新，按下`掃描`，在按下`安裝`。這樣就免去了手動收集更新的煩惱，Dism++ 也推薦這樣的方式來安裝更新。

### /Remove-Package 卸載更新該怎麼做
首先按下 已安裝的更新，然後選中需要刪除的更新，最後按下刪除即可。

### /Get-Features 檢視所有特定功能該怎麼做
按下 Windows 功能即可。

### /Get-FeatureInfo 檢視特定功能資訊該怎麼做
按下 Windows 功能後，自動展示所有功能的狀態。

### /Enable-Feature 啟用特定功能該怎麼做
在功能清單，選擇需要開啟的功能，然後按下套用即可，其中：

/LimitAccess 參數，不支援。

/Source 參數，支援，在本機來源設定一個路徑即可，一般是`D:\Sources\sxs`。如果不知道怎麼用，可以掛載一個 ISO，Dism++ 能自動感知。

/All 參數，支援，自動使用。

### /Disable-Feature 關閉特定功能該怎麼用
在功能清單，選擇需要關閉的功能，然後按下套用即可，其中：

/Remove 參數，支援，將更新狀態調整為 X 即可。

### /Get-Capabilities 檢視所有功能該怎麼用
按下 選用功能 即可。
> Dism++ 為了最佳化效能，預設關閉了網路請求，如果需要檢視所有功能（包含網路位置），那麼勾選`顯示所有功能`即可。

### /Get-CapabilityInfo 檢視功能資訊該怎麼用
按下 選用功能 後，自動展示功能資訊。


### /Add-Capability 添加添加功能該怎麼用
如需使用此功能，首先在選用功能介面按下`檢視所有功能`，然後按下啟用即可。其中：

/Source 以及 /LimitAccess 均不支援，如需新增本機功能，請在`更新管理` 按下 `新增`，手動選擇 cab 檔案即可。

### /Remove-Capability 刪除功能該怎麼用
在選用功能介面，在你需要刪除的功能上按下刪除即可。

### /Cleanup-Image /RevertPendingActions 撤銷掛起更改該怎麼用
Dism++ 不支援此功能。

### /Cleanup-Image /spsuperseded 固化 SP 補丁包該怎麼用
此功能已經被合併到 /StartComponentCleanup 中。其中：

/hidesp 參數，自動使用。

### /Cleanup-Image /StartComponentCleanup 清理 WinSxS 該怎麼用
開啟空間回收，裡面有個清理項目叫`被取代的 WinSxS 組件`，勾選此項目然後按下清理即可。另外此功能已經包含 /spsuperseded 特新。

/ResetBase 更新固化，自動使用。另外，需要注意的是，Dism 已經在 Windows 10 中屏蔽了此功能，此參數會被自動忽略。但是 Dism++（10.1.25.1 以及更高版本）不會忽略此參數，此處行為略有差異。另外 Dism++ 還支援 Vista 以及 Windows 7。

/Defer 推遲清理到下次系統維護，不支援此參數。


### /Cleanup-Image /AnalyzeComponentStore 掃描可以清理的空間
開啟空間回收，裡面有個清理項目叫`被取代的WinSxS組件`，勾選此項目然後按下掃描即可，程式將展現可清理的空間。

### /Cleanup-Image /CheckHealth 檢視是否存在受損標記該怎麼用
不支援此功能。

### /Cleanup-Image /ScanHealth 掃描系統是否受損該怎麼用
在選單按下恢復功能 - 驗證受損，即可。

### /Cleanup-Image /RestoreHealth 恢復系統受損該怎麼用
在選單按下恢復功能 - 修復受損，即可。其中：

/Source 不支援自訂本機來源，然並軟的參數。

/LimitAccess 參數，阻止網路訪問，不支援。
> 恢復受損是然並軟的功能，基本都是修復失敗，大家就別抱什麼希望了。


## APPX 服務命令
按下 Appx 管理 ，並 按下 Provisioned Appx即可。

### /Get-ProvisionedAppxPackages 檢視所有預裝 App 該怎麼用
啟動 UI 時自動展示相關 Appx 資訊。

### /Set-ProvisionedAppxDataFile 設定自訂資料該怎麼用
不支援此功能。

### /Remove-ProvisionedAppxPackage 刪除預裝 App 該怎麼用
勾選需要刪除的 App，在按下刪除即可。

### /Add-ProvisionedAppxPackage 新增 Appx 該怎麼用
不支援此功能。Dism++ 主要側重於刪除，等微軟的 Appx 成氣候了在新增此功能。

## PROVISIONING PACKAGE SERVICING COMMANDS
不支援此功能。

## 預設關聯命令
按下`檔案關聯`即可檢視相關功能。與 Dism 不同的是，在 Dism++ 中，Vista 以及 Windows 7 也能使用此功能。

### /Remove-DefaultAppAssociations 刪除預設程式關聯該怎麼用
按下 `Windows 映像預設應用程式關聯` 下方的刪除按鈕即可。

### /Import-DefaultAppAssociations 匯入預設程式關聯該怎麼用
按下 `Windows 映像預設應用程式關聯` 下方的匯入按鈕即可。

### /Get-DefaultAppAssociations 怎麼檢視預設程式關聯
按下 `Windows 映像預設應用程式關聯` 下方的匯出按鈕，然後在使用文本檢視器，檢視剛才匯出的配置檔案。

### /Export-DefaultAppAssociations 怎麼匯出目前用戶的程式關聯配置
按下 `Windows 聯機映像預設應用程式關聯` 下方的匯出按鈕即可。

## WINDOWS PE 命令
按下`WinPE 命令`即可檢視相關功能。

### /Get-ScratchSpace 或者 /Get-TargetPath 或者 /Get-PESettings 怎麼檢視 PE 相關設定
開啟此功能時自動顯示相關設定。

### /Set-ScratchSpace 怎麼調整暫存空間
調整 `設定 Windows PE 映像的暫存空間（MB）`此設定，然後按下套用即可。

### /Set-TargetPath 怎麼調整目標PE路徑
調整 `設定 Windows PE 映像的目標路徑`此設定，然後按下套用即可。

### /Get-Profiling 怎麼檢視配置檔案
不支援此功能。

### /Apply-Profiles 應用配置檔案該怎麼用
不支援此功能。

### /Disable-Profiling 停用配置檔案該怎麼用
不支援此功能。

### /Enable-Profiling 啟用配置檔案該怎麼用
不支援此功能。