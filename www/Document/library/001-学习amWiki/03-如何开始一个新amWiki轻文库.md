# 如何开始一个新 amWiki 轻文库

## 开始一个新文库的步骤

1. ##### 下载 Github 出品的开源文本编辑器 [Atom](https://atom.io/ "打开Atom官网")，并安装  
![](https://amwiki.xf09.net/docs/assets/001.tiny/02-0e63f48d.png)

2. ##### 安装 Atom 完成之后，再安装插件 amWiki，您可以通过以下三种途径安装：
    - 【方式一】：通过 Atom 菜单，File -> Setting -> Install -> 搜索 `amWiki`  
      ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-ec2b10b3.png)  
      <br>
    - 【方式二】：运行：`apm install amWiki`  
      ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-37a29814.png)  
      <br>
    - 【方式三】：从Github的 [amWiki版本发布](https://github.com/TevinLi/amWiki/releases) 下载zip，(windows)解压到 `C:\Users\Administrator\.atom\packages`，并将文件夹名 `amWiki-x.x.x` 改为 `amWiki`

3. ##### 重启 Atom (必须)

4. ##### 在本地您需要创建文库的位置创建一个文件夹 (非 Atom 编辑器中)

5. ##### 在 Atom 中 `Add Project Folder` (添加项目文件夹)，并指向刚创建的文件夹
    ![](https://amwiki.xf09.net/docs/assets/001.tiny/03-7ce48bba.png)

6. ##### 在 Atom 刚创建的项目下新建 `config.json` 文件，并按 json 格式配置以下属性：
    - **name**，您的文库名称，设置但为空或不设置将显示默认名
    - **ver**，文本版本号或维护者名号，设置但为空将不显示，注意诺不设置此属性将显示 amWiki 作者
    - **logo**，logo 的 url，设置但为空或不设置将显示默认 logo
    - **colour**，自定义颜色，默认为蓝色
    - **testing**，是否启用接口测试模块，默认值 false  
    - 例如：
    ```javascript
    {
        "name": "A3项目文档中心",
        "ver": "",
        "logo": "http://abc.com/logo.jpg",
        "testing": true
    }
    ```
7. ##### 保持 `config.json` 处于当前打开状态，在 Atom 菜单点击：

    amWiki文库 -> 通过“config.json”创建新文库  
    ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-78f2030d.png)

8. ##### 此时项目中自动创建了许多内容，其中 library 文件夹即为您的文库文件夹
    ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-d72e59a9.png)

9. ##### 使用 `F12` 启动本地静态服务器，访问刚刚自动创建的 index.html


## 文库目录结构
项目目录自动生创建的内容如下

    index.html                 // http 访问入口页面
    amWiki/                    // amWiki Web 端程序文件夹
    library/                   // 您的 Markdown 文库目录，所有文件必须使用 .md 格式
       ├ $navigation.md        // amWiki 文库目录导航文件，可自动/手动更新
       ├ 首页.md                // Web 端打开页面时页面页面默认显示的内容
       ├ 001-学习amWiki/        // Markdown 文件夹01
       │   ├ 001-关于amWiki     // 一些 Markdown 文档，支持二级目录
       │   └ 002-...
       ├ 002-文档示范/          // Markdown 文件夹02
       │   ├ 001-通用api        // 一些 Markdown 文档，支持二级目录
       │   └ 002-...
       └ 003-...               // 更多 Markdown 文件夹
    (assetes/)                 // 如果您粘帖截图，图片文件将自动创建在此处


## 如何使用
一键创建新文库后，您可以通过以下方式开始 amWiki 文库之旅：

1. 在 Atom 编辑器中使用快捷键 `F12` 或在浏览器中使用 http 访问刚刚创建的 index.html。
2. PC 端使用左侧导航栏、移动端使用右上角弹出菜单来切换页面。
3. 在导航栏顶部，可以使用筛选功能通过输入关键词对整个导航目录进行筛选。
4. 如果存在页内目录，直接点击，页内目录使用 hash 滚动；同时您可以直接带 hash 分享，以方便他人快速浏览指定内容。
