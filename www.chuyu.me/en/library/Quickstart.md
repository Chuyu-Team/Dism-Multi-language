# Quick start
The core functionality of Dism++ is to clean-up and updates the Windows installation, so you may not experience the full potential of the program until you have installed some updates.

## User Interface
As shown below, you may switch between various systems with the tabs above should you have multiple operating systems installed or mounted. On the left you may find and use various features of the program. For average users, they may be interested in the `Disk Clean-up` feature.

![MainUI](./images/MainUI.png)

## Disk Clean-up
<br>
>We do not recommend cleaning your system too frequently, especially for users with an SSD! We recommend cleaning every month or so is enough.

![CleanupUI](./images/CleanupUI.png)

<br>
After starting up the software, click `Disk Clean-up`, and you will see this interface. Next, select the items you wish to clean-up or remove; click `Scan` to estimate the amount of the space each item could potentially freeup. Alternatively, you may also click `CleanUp` for an immediate delete without an estimate. Ultimately, if you have a better idea for cleaning, click `Help - Feedback`, and submit your rules.

<br>
>Warning: Risky items will be labeled organge. Additionally, removing some of the items may cause unwanted side-effects. Once a risky item is selected, an alert box will pop up to confirm clean-up. Please double check before proceeding!

## System Backup
As a saying goes, forewarned is forearmed. Now Dism++ can back up the current system to a WIM and ESD file without booting into Windows PE. Simply select the current system, and click `Recovery - System Backup` on the menu.

![BackupImage](./images/BackupImage.png)

![BackupImage-WimPath](./images/BackupImage-WimPath.png)
<br>Then enter the path to store the image. Finally, just click `OK`. (You can change the image name by double-click the Value items.)
>If the WIM file already exists, the program will automatically increment to the existing image for an incremental backup.

In order to restore the system in event that your system could not be started, you need to click `Options - More settings` on the menu, then check `Integrated BCD boot menu`. After this, there will be a Dism++ item in the BCD boot menu. You may restore your system there if necessary.

## System Restore
When the system goes wrong, you can use your existing backup image to restore the system, swiftly repairing the environment. In order to reduce the difficulty of the recovery process, the program supports the hot restore mode, which means users can store the system without starting a PE. If your system goes wrong, just click `Recovery - System Restore` on the menu. Then select the image. Finally, just click `OK` as shown below.

![RecoveryImage](./images/RecoveryImage.png)

>Tips: If your system can not be started, and you had checked `Integrated BCD boot menu`, you may restore your system by selecting Dism++ in BCD boot menu or simply boot into Windows PE and perform the steps above

<br>This concludes the quick-start guide. Users who want to research further can refer to the follow-up documents. Have a good time!