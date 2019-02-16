![歡迎使用 Dism++](../images/logo.png "歡迎使用 Dism++")  

## 關於 Dism++ —— **我們是一線戰友！**

Dism++ 可以說是一個 Dism 的 GUI 版，但是並不依賴 Dism，直接基於更底層的 CBS (Component Based Servicing Reference)。


### Dism++ 的特點
* Dism++ 無需任何 Dism 組件，即可相容高低版本所有系統！而微軟 Dism 則需要 3 個版本。
* Dism++ 是 Dism 的交集，提供完全的圖形化操作，幾乎支援 Dism 的所有功能以及大量 Dism 原本所不支援的功能。管理更新、驅動、功能、Appx、選用功能、服務、Compact/WIMboot、系統修復等……放馬過來吧。
* Dism++ 提供了完整的 WIM 支援（包括 ESD 擷取、ESD 轉 ISO、釋放分段 ESD 以及直接 ISO 支援），`值得一提的是，ESD 轉 ISO，Dism++ 可以直接在記憶體中解密無需修改硬碟資料。這極大的滿足了強迫症患者。`
* Dism++ 提供了開放的清理以及最佳化功能，使用者可以自訂 Dism++ 規則，來打造專屬系統工具。

[ [BUG 反映](https://github.com/Chuyu-Team/Dism-Multi-language/issues) ]
[ [QQ 群 200783396](http://shang.qq.com/wpa/qunwpa?idkey=07a04c095aee1e31f54b82ba98499a5b49aa10185f975946243ba68e0134a34e) ]

### 贊助 Dism++
贊助的費將用於支付伺服器費用，如果大家夠豪氣可能還能支付房租。為了從可持續角度考慮，建議大家每年小額贊助一次，每次大約 20 RMB 即可。

`貼心提醒：贊助並不是等於付費支援，此軟體為個人愛好業餘維護。BUG 反映以及改進意見並不能保證 100% 及時回應並處理。因此請勿僅僅為了後期服務支援而贊助 Dism++。`

![donate](../images/donate.png)

## Dism++ 執行要求

最低執行平台：NT 6.0 以上、512 MB 記憶體

建議執行平台：NT 6.1 以上、64 位元作業系統、8G 實體記憶體 +8GB 虛擬記憶體以上

>* 執行平台僅限 x86、amd64 以及 arm64 處理器，IA64 以及 ARM 架構僅支援離線模式
* 在沒有 WOW64 支援的環境中（比如純 64 PE），將導致 Dism++ 無法離線處理 32 位元系統。
* 如果執行平台為 Windows Vista 或者 Windows 2008 時某些功能將無法使用，比如 CompactOS、WIMBoot。

## Dism++ 檔案清單

以下清單展示了所有 Dism++ 相關檔案，你可以根據需要刪除你所不需要的內容。懶人請無視以下內容。

| 檔案名稱 | 功能說明
| -------- | -------
|Dism++x64.exe|x64 系統的 UI，在 64 位元系統中，啟動此程式呈現 UI。 僅 x64 系統需要，可以考慮刪除此檔案。
|Dism++x86.exe|x86 系統的 UI，如果你在 x64 系統中啟動此程式，則自動轉向到 Dism++x64.exe。 僅 x86 系統需要，可以考慮刪除此檔案。
|Dism++arm64.exe|arm64 位元系統的 UI，在 arm64 位元系統中，啟動此程式呈現 UI。 僅 arm64 系統需要，可以考慮刪除此檔案。
|Config\amd64\bcdboot.exe|提供啟動(Boot)修復功能，原版系統自帶此檔案，刪除沒有影響。原版系統使用者以及 32 位元系統使用者可以刪除此檔案。
|Config\x86\bcdboot.exe|提供啟動(Boot)修復功能，原版系統自帶此檔案，刪除沒有影響。原版系統使用者以及 64 位元系統使用者可以刪除此檔案。
|Config\amd64\CBSHost.dll|Dism++API 支援模組，刪除後 x64 系統將無法使用 Dism++。僅 x64 系統需要，可以考慮刪除此檔案。
|Config\x86\CBSHost.dll|Dism++API 支援模組，刪除後 x86 系統將無法使用 Dism++，64 位元系統無法離線處理 x86 以及 arm64 系統。不需要離線處理 32 位元系統的 x64 以及 arm64 使用者可以考慮刪除。
|Config\arm64\CBSHost.dll|Dism++API 支援模組，刪除後 arm64 位元系統將無法使用Dism++。 僅 arm64 系統需要，使用者可以考慮刪除此檔案。
|Config\amd64\NCleaner.dll|64 位元 NCleaner 清理引擎，缺少此檔案後某些進階清理功能將無法使用，僅 x64 系統需要，可以考慮刪除此檔案。
|Config\x86\NCleaner.dll|32 位元 NCleaner 清理引擎，缺少此檔案後某些進階清理功能將無法使用，僅 x86 系統需要，可以考慮刪除此檔案。
|Config\arm64\NCleaner.dll|arm64 NCleaner 清理引擎，缺少此檔案後某些進階清理功能將無法使用，僅 arm64 系統需要，使用者可以考慮刪除此檔案。
|Config\amd64\wimgapi.dll|WIM 檔案操作支援模組，Win10 使用者、32 位元使用者或者不需要任何 WIM 相關功能的使用者，那麼可以考慮刪除。
|Config\x86\wimgapi.dll|WIM 檔案操作支援模組，Win10 使用者、64 位元使用者或者不需要任何 WIM 相關功能的使用者，那麼可以考慮刪除。
|Config\amd64\wofadk.sys<br>Config\x86\wofadk.sys|提供 Compact 功能相關支援，不需要離線處理的 Win10 使用者可以考慮刪除此檔案。強烈建議不要刪除這些檔案。
|Config\Plugins|Dism++ 外掛支援，不需要外掛的使用者可以刪除此檔案。
|Config\Languages|Dism++ 的語言檔案，以繁體中文為例，只保留 zh-Hant.zip 即可。
|Config\Data.zip|此檔案存放了清理規則，ESD 解密 KEY 等。此檔案不允許刪除。
|Config\UpdateInfo.zip<br>Config\UpdateInfoBeta.zip|Dism++ 更新元資料，用於判斷是否存在新版本，以及防止使用者新版本降級為舊版本。建議保留，刪除後將重新下載。
|Config\default.ui.zip|此檔案存放了 Dism++ 的 UI。此檔案不允許刪除。
|Config\wsusscn2.cab|Windows Update 資料庫檔案，用於掃描更新。可以考慮刪除。
|Config\include\Dism++.h|僅測試版存在此檔案，C Script 腳本支援標頭檔，缺少此檔案後 C Script 腳本將無法使用。
|Config\amd64\CScript.dll|僅測試版存在此檔案，64 位元 C Script 腳本解析引擎，缺少此檔案後 C Script 腳本將無法使用，32 位元使用者可以考慮刪除此檔案。
|Config\x86\CScript.dll|僅測試版存在此檔案，32 位元 C Script 腳本解析引擎，缺少此檔案後 C Script 腳本將無法使用，64 位元使用者可以考慮刪除此檔案。
