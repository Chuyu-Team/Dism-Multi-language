# amWiki 与语法高亮

amWiki使用 [highlight.js](https://github.com/isagalaev/highlight.js) 进行预语法高亮渲染，它能对多达一百多种语言、样式提供语法高亮解析  
使用两组每组三个反引号分单独两行将代码包围起来，并在第一组反引号后写上语言类型即可使用语法高亮，例如：
    ```js
    //some js code here
    ```

## javascript / js 代码
普通代码块效果：  
```
//发送验证码
function cd(num) {
    $('#code').val(num + '秒后可重发');
    setTimeout(function() {
        if (num - 1 >= 0) {
            cd(num - 1);
        } else {
            $('#code').removeClass('bg-gray').prop('disabled', false).val('重新发送验证码');
        }
    },
    1000);
}
```
```
{
    "state": {
        "code": 10200,                   //code状态码
        "msg": "ok"                      //状态描述
    },
    "data": {
        "team_num": 13,                  //队伍数
        "position": "海珠区新港中路"      //位置
    }
}
```

添加 `js`、`javascript` 标记后的效果：
```javascript
//发送验证码
function cd(num) {
    $('#code').val(num + '秒后可重发');
    setTimeout(function() {
        if (num - 1 >= 0) {
            cd(num - 1);
        } else {
            $('#code').removeClass('bg-gray').prop('disabled', false).val('重新发送验证码');
        }
    },
    1000);
}
```
```js
{
    "state": {
        "code": 10200,                   //code状态码
        "msg": "ok"                      //状态描述
    },
    "data": {
        "team_num": 13,                  //队伍数
        "position": "海珠区新港中路"      //位置
    }
}
```
amWiki对javascript代码片段做了再次增强，可以点击代码块右上角按钮隐藏/显示注释  
当注释处于隐藏状态时不会被复制，比较适合模拟返回json数据的接口时直接拷贝（json不允许注释）

## Html 代码
普通代码段效果：  
```
<body>
    <div class="loading"><img src="/assets/images/loading.gif"></div>
    <header>some text</header>
    <script type="text/javascript" src="/assets/js/jquery-2.1.4.min.js"></script>
</body>
```
添加 `html` 标记后的效果：
```html
<body>
    <div class="loading"><img src="/assets/images/loading.gif"></div>
    <header>some text</header>
    <script type="text/javascript" src="/assets/js/jquery-2.1.4.min.js"></script>
</body>
```

## css 代码
普通代码段效果：
```
/* 紧凑 */
html,body{display:block;width:100%;height:100%;min-width:320px;}
a,img{-webkit-touch-callout:none;}
/* 展开 */
input[type="button"],
input[type="submit"],
input[type="reset"],
textarea {
    -webkit-appearance: none;
}
```

添加 `css` 标记后的效果：
```css
/* 紧凑 */
html,body{display:block;width:100%;height:100%;min-width:320px;}
a,img{-webkit-touch-callout:none;}
/* 展开 */
input[type="button"],
input[type="submit"],
input[type="reset"],
textarea {
    -webkit-appearance: none;
}
```

## php 代码
普通代码段效果：
```
private function addQuestData($data, $filing_id)
  {
    $quest_num = $data['status'] == 10 ? 1 : 2;
      $where = [
        ['user_filing_id', '=', $filing_id],
        ['project_id', '=', $data['project_id']],
        ['mobile','=', $data['mobile']],
        ['quest_num', '=', $quest_num]
      ];
  }
```
添加 `php` 标记后的效果：
```php
private function addQuestData($data, $filing_id)
  {
    $quest_num = $data['status'] == 10 ? 1 : 2;
      $where = [
        ['user_filing_id', '=', $filing_id],
        ['project_id', '=', $data['project_id']],
        ['mobile','=', $data['mobile']],
        ['quest_num', '=', $quest_num]
      ];
  }
```

## sql 代码
普通代码段效果：
```
SELECT Company, OrderNumber FROM Orders ORDER BY Company, OrderNumber
```
添加 `sql` 标记后的效果：
```sql
SELECT Company, OrderNumber FROM Orders ORDER BY Company, OrderNumber
```

## java 代码
普通代码段效果：
```
public class Test {
   public static void main(String args[]) {
      int x = 10;
      while( x < 20 ) {
         System.out.print("value of x : " + x );
         x++;
         System.out.print("\n");
      }
   }
}
```
添加 `java` 标记后的效果：
```java
public class Test {
   public static void main(String args[]) {
      int x = 10;
      while( x < 20 ) {
         System.out.print("value of x : " + x );
         x++;
         System.out.print("\n");
      }
   }
}
```
