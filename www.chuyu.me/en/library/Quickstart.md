# Quick start
In this program, the core function is to clean up and update the system, so, you may get the real value after installing updates.

## Interface layout
As is shown in the picture, clicking the top tags can switch different systems. `(If you have multiple systems.)` On the left lies a list that includes the function you need. For the average user, you may click the `Disk Clean` button.

![MainUI](./images/MainUI.png)

## Disk Clean
<br>
>We don't suggest you constantly clean up your disk, especially if you are using a SSD. Cleaning up once a month is recommended.

![CleanupUI](./images/CleanupUI.png)

<br>
After running the software, click `Disk Clean`, and you will see this interface.Then select your wanted item, click `Scan` for an estimate of space that can be released or directly click `CleanUp` for an immediate delete without an estimate. Ultimately, if you have a better idea for cleaning, click 'Help - Feedback', and submit your rules.

<br>
>Warming: the risk item is labeled orange. Besides, some items exist side effects. Once checked one, an alert box will pop up. Please make sure the illustration.

## System Backup
As a saying goes, forewarned is forearmed. Now Dism++ can back up the current system to WIM and ESD file without starting a PE. It's very easy to use. Select the current system, and click 'Recovery - System Backup' on the menu.

![BackupImage](./images/BackupImage.png)

![BackupImage-WimPath](./images/BackupImage-WimPath.png)
<br>Then enter the path to store the image. Finally, just click `OK`. (You can change the image name by double-click the Value items.)
>If the WIM file already exists, the program will automatically increment to the existing image for an incremental backup.

In addition, in order to restore the system in case your system can not be started, you can click `Options - More settings` on the menu, then check `integrate BCD menu`. After this operation, there will be a Dism++ item in the BCD boot menu. You may restore your system there if necessary.

## System Restore
When the system goes wrong, you can use your existing backup image to restore the system and date back the time creating the image. In order to reduce the difficulty of recovery system, the program supports the hot restore mode which means users can store the system without starting a PE. If your system goes wrong, just click `Recovery - System Restore` on the menu. Then select the image. Finally, just click `OK` as the following system.

![RecoveryImage](./images/RecoveryImage.png)

>Tips: If your system can not be started and you have checked 'integrate BCD menu', you may restore your system by Dism++ in BCD boot menu. Or if you don't have, don't worry. Just start a PE to run Dism++ for the above steps.

<br>This part for quick start is over, and the user who wants a further research can refer to the follow-up documents. Have a good time!
