# 如何编辑 amWiki 轻文库

文库创建后，您就可以编辑自己的文库了

## 基本编辑

1. ##### 新建文件或文件夹，组织您自己的文库  
   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-88742d4f.png)

2. ##### 每个文件夹或文件要求使用 `id-名称.md` 来命名，其中：

   1. id 仅允许 **整数** 或 **浮点数** 类型，且 **不可重复**
   2. 必须使用连 **接符** 或 **下划线** 将 id 与后续具体名称相连
   3. 文件只能使用 **.md** 扩展名  

   如果未能满足以上条件，将弹出以下错误提示：  
   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-4801dadd.png)  
   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-79e0b528.png)  
   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-0c4d9e7d.png)  
   正确的命名，例如：  
   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-12e1b01c.png)  

3. ##### 使用 Markdown 语法编辑您的文档
   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-b3be9411.png)

## 扩展编辑

1. ##### library 文件夹下 `首页.md` 文档为默认打开时的显示内容
   您可以适当修改此文档内容以符合您的项目需求  

5. ##### `$navigation.md` 导航文件无需人工维护，创建新文件夹或文件时将自动更新，也可以在菜单栏手动刷新：

    菜单栏 -> amWiki文库 -> 手动更新当前文库导航文件  
    ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-b7efbbde.png)

6. ##### 如果需要在 Markdown 文档中插入图片，**请先截图**，然后在文档对应位置使用快捷键：`Ctrl + Shift + V`
    此时，光标位置将多出一段 Markdown 图片代码，例如：

        ![](assets/001/04-b7efbbde.png)

    同时，将在项目目录依次创建文件夹 assets、001 (如果不存在的话)，以及此文件夹下名称为 04-b7efbbde.png 的图片文件

7. ##### 对于较长文章，可以使用页内目录，依次进行如下操作，或使用快捷键 `Ctrl + D`，即可在光标处插入页内目录。
    菜单栏 -> amWiki文库 -> 提取h2、h3标题为页内目录  
    ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-3eb34e61.png)  
    注意：请按顺序使用h1、h2、h3，且h1仅使用一次。

8. ##### 如果启用了测试模块，想对一篇文档激活接口测试功能，请参照 [使用测试模块测试接口](?file=001-学习amWiki/06-使用测试模块测试接口)


## 维护与延伸

1. 本插件升级后，您想更新 `(projectName)/amWiki/` 文件夹下 web 端的工作文件，您只需重新打开 `config.json` 文件，然后在 Atom 菜单上选择 `通过“config.json”创建新文库` 即可。  
这个二次创建操作不会影响您 library 与 assetes 文件夹下的内容。

2. 借助版本管理 SVN、Git、Hg，传输协议FTP/SFTP，文件同步Dropbox、百度云等等工具，便捷实现网络访问。
