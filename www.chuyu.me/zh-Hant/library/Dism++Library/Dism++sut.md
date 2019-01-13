# 通用安裝腳本——sut
通用安裝腳本用於將軟體整合到離線系統，並且整合是原生整合，而非透過應答實現。 這意味著可以大大縮短系統安裝時間。

[ [下載SutWizard 1.0.0.2](HTTP://cdn.chuyu.me/SutWizard_1.0.0.2_7ba6e8933b4b8ab5c85d09d435a9f8585d2764e3.zip) ]


## 核心思想
    安裝一個軟體其實很大程度上可以理解為，釋放檔案然後在匯入相關登錄檔。因此理論上我們只需要把這些動作擷取，得到一個差異集合。那麼就可以轉移到其他相似的系統中。
	sut 通用安裝腳本就是如此，第一階段：釋放相關檔案，第二階段：匯入登錄檔以及其他行為。而儲存為一個 sut 檔案是為了方便以後再次使用。
	為了降低 sut 製作門檻，我還提供了一個工具 SutWizard，用於自動化產生差異以及製作 sut 檔案。有需要的人士可以自行下載。


## Sut一般製作流程

要進行此過程，你必須準備`SutWizard`以及你需要安裝的應用程式。


### 啟動 SutWizard (快速模式)


選擇快速模式，然後按下一步。

! [](.. /images/sut/SutStart.jpg)


等待快照完成。

! [](.. /images/sut/Wait.jpg)


過一段時間後，你將看到提示。 這時進入第二階段，安裝你的應用程式。

! [](.. /images/sut/InstallApp.jpg)


### 安裝應用程式
當程式提醒說你可以安裝應用程式後，按兩下你需要安裝的應用程式。這裡我們以 VC 2008 為例。操作過程中請勿關閉 SutWizard！

手動按兩下你需要的應用程式，然後讓他安裝完成。

! [](.. /images/sut/StartInstallApp.jpg)


### SutWizard產生差異資料

VC 2008 安裝完成後，按下完成。這時程式會顯示正在產生差異。稍等片刻……

! [](.. /images/sut/ScanDiffer.jpg)


差異產生完成，程式會把資料放在這個目錄。

! [](.. /images/sut/DifferDone.jpg)

### 優化差異資料
一般情況下有較多垃圾，建議你手動刪除不必要的資料。
打開這個目錄後，你會看到`AppData`目錄以及`Data`目錄。 AppData用於存在程式檔案部分，你可以手動刪除一些意外引入的垃圾檔。

Data 這是軟體的登錄檔以及規則檔案。同樣的登錄檔也可能意外引入大量垃圾，建議手動刪除後繼續。

在來說說`Data\Data.xml`，它是規則檔。 打開後你一般可以看到如下所示：

! [](.. /images/sut/ViewData.jpg)

其中 `IsInstallable` 節點必須填寫，註釋中也說了這個節點用於判斷此軟體是否適用目標系統。由於這個sut是在Windows 10 15063 x64 裡面製作的，因此一般的我們可以這樣寫：

```xml
<IsInstallable>
	<Applicable>
		<!--IsInstallable 節點用於判斷此軟體是否適用目標系統。 請在此節點內輸入檢測條件。(必選)-->
		<!--目標系統必須是 amd64 架構-->
		<Arch>9</Arch>
		<!--系統版本必須是10.0.15063-->
		<OSVersion>10.0.15063</OSVersion>
	</Applicable>
</IsInstallable>
```

簡單的就這樣了，接下來你可以打包為sut。


### 打包Sut

同樣的，此過程我們需要SutWizard，不過選擇第三項，然後點擊繼續。

! [](.. /images/sut/StartMakerSut.jpg)


填寫剛才的目錄，以及輸入Sut檔保存路徑，點擊完成。 稍等片刻...... 知道提示完成。

! [](.. /images/sut/MakingSut.jpg)


這時你就可以將`C:\MyFirst.sut` 應用於其他的Windows 10 15063 x64。 如果你希望你的腳本擁有更加廣泛的適用性。 請自行編輯Data.xml，讓你的Sut更加通用。




## sut結構說明
sut其實是一個esd檔案，這點分微軟的輕鬆傳送很相似。 為什麼Dism++也選用esd檔案呢？ 首先他體積小，其次esd能完整保存硬連結以及檔案流。 接下來看看sut佈局：


\Data\Data.xml
<br>\......


其中`\Data\Data.xml`是必選檔，用於記錄中繼資料。 中繼資料記錄了這是什麼軟體以及安裝流程。 另外Data目錄還存放了一些登錄檔，可以配合Data.xml使用。

而其他目錄則隨意命名，用於保存程式檔案部分。 在AppData的ImageName屬性增加參考即可。


