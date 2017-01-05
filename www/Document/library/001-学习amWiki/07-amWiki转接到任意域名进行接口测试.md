# amWiki 转接到任意域名进行接口测试

我们分两种情况进行文档转接，一种是我们有域名服务器操作权限，一种是没有

## 有域名服务器操作权限的转接
如果我们有域名服务器操作权限，那要把其他域名下的文档转接到当前域名下，其实很简单，就是一个 **反向代理** 的过程  

以 nginx 为例，将地址 https://amwiki.xf09.net/docs/ 下所有文档转接到任意域名(_无需https_) /wiki 路径下
```nginx
server {
    listen       81;
    server_name  abc123.com;
    location /wiki {
        proxy_pass https://amwiki.xf09.net/docs/;
        proxy_redirect     off;
        #proxy_set_header   Host             $host;
        proxy_set_header   X-Real-IP        $remote_addr;
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
        proxy_max_temp_file_size   0k;
        proxy_connect_timeout      90;
        proxy_send_timeout         90;
        proxy_read_timeout         90;
        proxy_buffer_size          4k;
        proxy_buffers              4 32k;
        proxy_busy_buffers_size    64k;
        proxy_temp_file_write_size 64k;
    }
    # other settings ...
}
```

## 无域名服务器操作权限
此时，如果想要将我们的文档转接到对应域名上去，需要利用抓包工具 Fiddler 进行 **请求代理**  
(_请下载安装抓包工具 [Fiddler](http://www.telerik.com/fiddler)，并了解 AutoResponder 面板的使用_)

由于 https 特殊性，我们分两种情况来讨论：  

### http 请求代理
当原域名基于 http 通信时，由于 http 请求是一种很开放的通信，我们可以直接用 fiddler 非常简单的进行转接  

比如，我们继续把地址 https://amwiki.xf09.net/docs/ 下所有文档转接到任意域名 /wiki 路径下  
只需要如下配置 AutoResponder：   

![](https://amwiki.xf09.net/docs/assets/001.tiny/07-c1ef9812.png)  
规则代码如下：

    regex:.+abc123\.com\/wiki\/(.+)$
    https://amwiki.xf09.net/docs/$1

第一行代码为请求匹配，其中 `regex:` 表示按正则表达式进行匹配，`.+abc123\.com\/wiki\/` 表示需要代理的路径，`(.+)$` (和第二行配合)表示转接后续的路径，即将后续路径替换到第二行代码中的 `$1`  

| | 转接地址 | 实际请求地址 |
| : ---| :--- | :--- |
| 例1 | http://abc123.com/wiki/index.html | https://amwiki.xf09.net/docs/index.html |
| 例2 | http://abc123.com/wiki/amWiki/js/amWiki.js | https://amwiki.xf09.net/docs/amWiki/js/amWiki.js |

### https 请求代理
当原域名基于 https 通讯是，我们需要更多的操作才能使用代理 (Fiddler 抓包 https 的原理，有兴趣可自行知乎一下)    

- **第一步，开启 https 解码**  
  Tools -> Fiddler Options -> HTTPS -> 依次勾选如下  
  ![](https://amwiki.xf09.net/docs/assets/001.tiny/07-ea6ad78e.png)  
- **第二步，是安装 Fiddler 根证书**  
  打开 http://localhost:8888/ 下载Fiddler 根证书并安装  
  ![](https://amwiki.xf09.net/docs/assets/001.tiny/07-c59334fc.png)  
- **第三步，按照 http 的方式进行代理**  
  例如，我们转接到百度域名的一个路径下

        regex:.+www\.baidu\.com\/wiki\/(.+)$
        https://amwiki.xf09.net/docs/$1

  此时，我们打开 https://www.baidu.com/wiki/index.html 会发现，不再是“很抱歉，您要访问的页面不存在！”了
