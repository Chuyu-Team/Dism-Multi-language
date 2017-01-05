# 微信JS-SDK说明文档（超长文档页内目录示例）

>1. [概述](#概述 "概述")
	1. [JSSDK使用步骤](#JSSDK使用步骤 "JSSDK使用步骤")
	1. [接口调用说明](#接口调用说明 "接口调用说明")
1. [基础接口](#基础接口 "基础接口")
	1. [判断当前客户端版本是否支持指定JS接口](#判断当前客户端版本是否支持指定JS接口 "判断当前客户端版本是否支持指定JS接口")
	1. [分享接口](#分享接口 "分享接口")
	1. [获取“分享到朋友圈”按钮点击状态及自定义分享内容接口](#获取“分享到朋友圈”按钮点击状态及自定义分享内容接口 "获取“分享到朋友圈”按钮点击状态及自定义分享内容接口")
	1. [获取“分享给朋友”按钮点击状态及自定义分享内容接口](#获取“分享给朋友”按钮点击状态及自定义分享内容接口 "获取“分享给朋友”按钮点击状态及自定义分享内容接口")
	1. [获取“分享到QQ”按钮点击状态及自定义分享内容接口](#获取“分享到QQ”按钮点击状态及自定义分享内容接口 "获取“分享到QQ”按钮点击状态及自定义分享内容接口")
	1. [获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口](#获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口 "获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口")
	1. [获取“分享到QQ空间”按钮点击状态及自定义分享内容接口](#获取“分享到QQ空间”按钮点击状态及自定义分享内容接口 "获取“分享到QQ空间”按钮点击状态及自定义分享内容接口")
1. [图像接口](#图像接口 "图像接口")
	1. [拍照或从手机相册中选图接口](#拍照或从手机相册中选图接口 "拍照或从手机相册中选图接口")
	1. [预览图片接口](#预览图片接口 "预览图片接口")
	1. [上传图片接口](#上传图片接口 "上传图片接口")
	1. [下载图片接口](#下载图片接口 "下载图片接口")
1. [音频接口](#音频接口 "音频接口")
	1. [开始录音接口](#开始录音接口 "开始录音接口")
	1. [停止录音接口](#停止录音接口 "停止录音接口")
	1. [监听录音自动停止接口](#监听录音自动停止接口 "监听录音自动停止接口")
	1. [播放语音接口](#播放语音接口 "播放语音接口")
	1. [暂停播放接口](#暂停播放接口 "暂停播放接口")
	1. [停止播放接口](#停止播放接口 "停止播放接口")
	1. [监听语音播放完毕接口](#监听语音播放完毕接口 "监听语音播放完毕接口")
	1. [上传语音接口](#上传语音接口 "上传语音接口")
	1. [下载语音接口](#下载语音接口 "下载语音接口")
1. [智能接口](#智能接口 "智能接口")
	1. [识别音频并返回识别结果接口](#识别音频并返回识别结果接口 "识别音频并返回识别结果接口")
1. [设备信息](#设备信息 "设备信息")
	1. [获取网络状态接口](#获取网络状态接口 "获取网络状态接口")
1. [地理位置](#地理位置 "地理位置")
	1. [使用微信内置地图查看位置接口](#使用微信内置地图查看位置接口 "使用微信内置地图查看位置接口")
	1. [获取地理位置接口](#获取地理位置接口 "获取地理位置接口")
1. [摇一摇周边](#摇一摇周边 "摇一摇周边")
	1. [开启查找周边ibeacon设备接口](#开启查找周边ibeacon设备接口 "开启查找周边ibeacon设备接口")
	1. [关闭查找周边ibeacon设备接口](#关闭查找周边ibeacon设备接口 "关闭查找周边ibeacon设备接口")
	1. [监听周边ibeacon设备接口](#监听周边ibeacon设备接口 "监听周边ibeacon设备接口")
1. [界面操作](#界面操作 "界面操作")
	1. [隐藏右上角菜单接口](#隐藏右上角菜单接口 "隐藏右上角菜单接口")
	1. [显示右上角菜单接口](#显示右上角菜单接口 "显示右上角菜单接口")
	1. [关闭当前网页窗口接口](#关闭当前网页窗口接口 "关闭当前网页窗口接口")
	1. [批量隐藏功能按钮接口](#批量隐藏功能按钮接口 "批量隐藏功能按钮接口")
	1. [批量显示功能按钮接口](#批量显示功能按钮接口 "批量显示功能按钮接口")
	1. [隐藏所有非基础按钮接口](#隐藏所有非基础按钮接口 "隐藏所有非基础按钮接口")
	1. [显示所有功能按钮接口](#显示所有功能按钮接口 "显示所有功能按钮接口")
1. [微信扫一扫](#微信扫一扫 "微信扫一扫")
	1. [调起微信扫一扫接口](#调起微信扫一扫接口 "调起微信扫一扫接口")
1. [微信小店](#微信小店 "微信小店")
	1. [跳转微信商品页接口](#跳转微信商品页接口 "跳转微信商品页接口")
1. [微信卡券](#微信卡券 "微信卡券")
	1. [获取api_ticket](#获取api_ticket "获取api_ticket")
	1. [拉取适用卡券列表并获取用户选择信息](#拉取适用卡券列表并获取用户选择信息 "拉取适用卡券列表并获取用户选择信息")
	1. [批量添加卡券接口](#批量添加卡券接口 "批量添加卡券接口")
	1. [查看微信卡包中的卡券接口](#查看微信卡包中的卡券接口 "查看微信卡包中的卡券接口")
	1. [核销后再次赠送卡券接口](#核销后再次赠送卡券接口 "核销后再次赠送卡券接口")
1. [微信支付](#微信支付 "微信支付")
	1. [发起一个微信支付请求](#发起一个微信支付请求 "发起一个微信支付请求")


## 概述

微信JS-SDK是微信公众平台面向网页开发者提供的基于微信内的网页开发工具包。  

通过使用微信JS-SDK，网页开发者可借助微信高效地使用拍照、选图、语音、位置等手机系统的能力，同时可以直接使用微信分享、扫一扫、卡券、支付等微信特有的能力，为微信用户提供更优质的网页体验。  

此文档面向网页开发者介绍微信JS-SDK如何使用及相关注意事项。

### JSSDK使用步骤

#### 步骤一：绑定域名

先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。**如果你使用了支付类接口，请确保支付目录在该安全域名下，否则将无法完成支付。**

备注：登录后可在“开发者中心”查看对应的接口权限。

#### 步骤二：引入JS文件

在需要调用JS接口的页面引入如下JS文件，（支持https）：
[http://res.wx.qq.com/open/js/jweixin-1.0.0.js](http://res.wx.qq.com/open/js/jweixin-1.0.0.js)

**请注意，如果你的页面启用了https，务必引入** [https://res.wx.qq.com/open/js/jweixin-1.0.0.js](https://res.wx.qq.com/open/js/jweixin-1.0.0.js) ，**否则将无法在iOS9.0以上系统中成功使用JSSDK**

如需使用摇一摇周边功能，请引入 jweixin-1.1.0.js

备注：支持使用 AMD/CMD 标准模块加载方法加载

#### 步骤三：通过config接口注入权限验证配置

**所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用**（同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用,目前Android微信客户端不支持pushState的H5新特性，所以使用pushState来实现web app的页面会导致签名失败，此问题会在Android6.2中修复）。

```javascript
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名，见附录1
    jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});
```

#### 步骤四：通过ready接口处理成功验证
```javascript
wx.ready(function(){
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
});
```

#### 步骤五：通过error接口处理失败验证
```javascript
wx.error(function(res){
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
});
```
### 接口调用说明

所有接口通过wx对象(也可使用jWeixin对象)来调用，参数是一个对象，除了每个接口本身需要传的参数之外，还有以下通用参数：

1. success：接口调用成功时执行的回调函数。
1. fail：接口调用失败时执行的回调函数。
1. complete：接口调用完成时执行的回调函数，无论成功或失败都会执行。
1. cancel：用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到。
1. trigger: 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。

备注：**不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回。**

以上几个函数都带有一个参数，类型为对象，其中除了每个接口本身返回的数据之外，还有一个通用属性errMsg，其值格式如下：

1. 调用成功时："xxx:ok" ，其中xxx为调用的接口名
1. 用户取消时："xxx:cancel"，其中xxx为调用的接口名
1. 调用失败时：其值为具体错误信息

## 基础接口

### 判断当前客户端版本是否支持指定JS接口

```javascript
wx.checkJsApi({
    jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    success: function(res) {
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
    }
});
```
备注：checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测。

### 分享接口

请注意不要有诱导分享等违规行为，对于诱导分享行为将永久回收公众号接口权限，详细规则请查看：朋友圈管理常见问题。

### 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口

```javascript
wx.onMenuShareTimeline({
    title: '', // 分享标题
    link: '', // 分享链接
    imgUrl: '', // 分享图标
    success: function () {
        // 用户确认分享后执行的回调函数
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});
```

### 获取“分享给朋友”按钮点击状态及自定义分享内容接口
```javascript
wx.onMenuShareAppMessage({
    title: '', // 分享标题
    desc: '', // 分享描述
    link: '', // 分享链接
    imgUrl: '', // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
        // 用户确认分享后执行的回调函数
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});
```

### 获取“分享到QQ”按钮点击状态及自定义分享内容接口
```javascript
wx.onMenuShareQQ({
    title: '', // 分享标题
    desc: '', // 分享描述
    link: '', // 分享链接
    imgUrl: '', // 分享图标
    success: function () {
       // 用户确认分享后执行的回调函数
    },
    cancel: function () {
       // 用户取消分享后执行的回调函数
    }
});
```

### 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
```javascript
wx.onMenuShareWeibo({
    title: '', // 分享标题
    desc: '', // 分享描述
    link: '', // 分享链接
    imgUrl: '', // 分享图标
    success: function () {
       // 用户确认分享后执行的回调函数
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});
```

### 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
```javascript
wx.onMenuShareQZone({
    title: '', // 分享标题
    desc: '', // 分享描述
    link: '', // 分享链接
    imgUrl: '', // 分享图标
    success: function () {
       // 用户确认分享后执行的回调函数
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});
```

## 图像接口

### 拍照或从手机相册中选图接口
```javascript
wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    }
});
```

### 预览图片接口
```javascript
wx.previewImage({
    current: '', // 当前显示图片的http链接
    urls: [] // 需要预览的图片http链接列表
});
```

### 上传图片接口
```javascript
wx.uploadImage({
    localId: '', // 需要上传的图片的本地ID，由chooseImage接口获得
    isShowProgressTips: 1, // 默认为1，显示进度提示
    success: function (res) {
        var serverId = res.serverId; // 返回图片的服务器端ID
    }
});
```

备注：上传图片有效期3天，可用微信多媒体接口下载图片到自己的服务器，此处获得的 serverId 即 media_id，参考文档 ../12/58bfcfabbd501c7cd77c19bd9cfa8354.html 目前多媒体文件下载接口的频率限制为10000次/天，如需要调高频率，请邮件weixin-open@qq.com,邮件主题为【申请多媒体接口调用量】，请对你的项目进行简单描述，附上产品体验链接，并对用户量和使用量进行说明。

### 下载图片接口
```javascript
wx.downloadImage({
    serverId: '', // 需要下载的图片的服务器端ID，由uploadImage接口获得
    isShowProgressTips: 1, // 默认为1，显示进度提示
    success: function (res) {
        var localId = res.localId; // 返回图片下载后的本地ID
    }
});
```

## 音频接口

### 开始录音接口
```javascript
wx.startRecord();
```

### 停止录音接口
```javascript
wx.stopRecord({
    success: function (res) {
        var localId = res.localId;
    }
});
```

### 监听录音自动停止接口
```javascript
wx.onVoiceRecordEnd({
    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
    complete: function (res) {
        var localId = res.localId;
    }
});
```

### 播放语音接口
```javascript
wx.playVoice({
    localId: '' // 需要播放的音频的本地ID，由stopRecord接口获得
});
```

### 暂停播放接口
```javascript
wx.pauseVoice({
    localId: '' // 需要暂停的音频的本地ID，由stopRecord接口获得
});
```

### 停止播放接口
```javascript
wx.stopVoice({
    localId: '' // 需要停止的音频的本地ID，由stopRecord接口获得
});
```

### 监听语音播放完毕接口
```javascript
wx.onVoicePlayEnd({
    success: function (res) {
        var localId = res.localId; // 返回音频的本地ID
    }
});
```

### 上传语音接口
```javascript
wx.uploadVoice({
    localId: '', // 需要上传的音频的本地ID，由stopRecord接口获得
    isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
        var serverId = res.serverId; // 返回音频的服务器端ID
    }
});
```

备注：上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器，此处获得的 serverId 即 media_id，参考文档 ../12/58bfcfabbd501c7cd77c19bd9cfa8354.html 目前多媒体文件下载接口的频率限制为10000次/天，如需要调高频率，请邮件weixin-open@qq.com,邮件主题为【申请多媒体接口调用量】，请对你的项目进行简单描述，附上产品体验链接，并对用户量和使用量进行说明。

### 下载语音接口
```javascript
wx.downloadVoice({
    serverId: '', // 需要下载的音频的服务器端ID，由uploadVoice接口获得
    isShowProgressTips: 1, // 默认为1，显示进度提示
    success: function (res) {
        var localId = res.localId; // 返回音频的本地ID
    }
});
```

## 智能接口

### 识别音频并返回识别结果接口
```javascript
wx.translateVoice({
   localId: '', // 需要识别的音频的本地Id，由录音相关接口获得
    isShowProgressTips: 1, // 默认为1，显示进度提示
    success: function (res) {
        alert(res.translateResult); // 语音识别的结果
    }
});
```

## 设备信息

### 获取网络状态接口
```javascript
wx.getNetworkType({
    success: function (res) {
        var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
    }
});
```

## 地理位置

### 使用微信内置地图查看位置接口
```javascript
wx.openLocation({
    latitude: 0, // 纬度，浮点数，范围为90 ~ -90
    longitude: 0, // 经度，浮点数，范围为180 ~ -180。
    name: '', // 位置名
    address: '', // 地址详情说明
    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
});
```

### 获取地理位置接口
```javascript
wx.getLocation({
    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: function (res) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
    }
});
```

## 摇一摇周边

### 开启查找周边ibeacon设备接口
```javascript
wx.startSearchBeacons({
    ticket: "",  // 摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
    complete: function(argv) {
        // 开启查找完成后的回调函数
    }
});
```

备注：如需接入摇一摇周边功能，请参考：申请开通摇一摇周边

### 关闭查找周边ibeacon设备接口
```javascript
wx.stopSearchBeacons({
	complete:function(res){
		//关闭查找完成后的回调函数
	}
});
```

### 监听周边ibeacon设备接口
```javascript
wx.onSearchBeacons({
	complete:function(argv){
		//回调函数，可以数组形式取得该商家注册的在周边的相关设备列表
	}
});
```

备注：上述摇一摇周边接口使用注意事项及更多返回结果说明，请参考：摇一摇周边获取设备信息

## 界面操作

### 隐藏右上角菜单接口
```javascript
wx.hideOptionMenu();
```

### 显示右上角菜单接口
```javascript
wx.showOptionMenu();
```

### 关闭当前网页窗口接口
```javascript
wx.closeWindow();
```

### 批量隐藏功能按钮接口
```javascript
wx.hideMenuItems({
    menuList: [] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
});
```

### 批量显示功能按钮接口
```javascript
wx.showMenuItems({
    menuList: [] // 要显示的菜单项，所有menu项见附录3
});
```

### 隐藏所有非基础按钮接口
```javascript
wx.hideAllNonBaseMenuItem();
// “基本类”按钮详见附录3
```

### 显示所有功能按钮接口
```javascript
wx.showAllNonBaseMenuItem();
```

## 微信扫一扫

### 调起微信扫一扫接口
```javascript
wx.scanQRCode({
    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
    success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
    }
});
```

## 微信小店

### 跳转微信商品页接口
```javascript
wx.openProductSpecificView({
    productId: '', // 商品id
    viewType: '' // 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
});
```

## 微信卡券

微信卡券接口中使用的签名凭证api_ticket，与步骤三中config使用的签名凭证jsapi_ticket不同，开发者在调用微信卡券JS-SDK的过程中需依次完成两次不同的签名，并确保凭证的缓存。

### 获取api_ticket

api_ticket 是用于调用微信卡券JS API的临时票据，有效期为7200 秒，通过access_token 来获取。

开发者注意事项：

1. **此用于卡券接口签名的api_ticket与步骤三中通过config接口注入权限验证配置使用的jsapi_ticket不同。**
2. 由于获取api_ticket 的api 调用次数非常有限，频繁刷新api_ticket 会导致api调用受限，影响自身业务，开发者需在自己的服务存储与更新api_ticket。

#### 接口调用请求说明

    http请求方式: GET
    https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=wx_card

#### 参数说明
| 参数 | 是否必须 | 说明 |
| --- | --- | --- |
| access_token | 是 | 调用接口凭证 |

#### 返回数据

数据示例：
```JSON
{
    "errcode": 0,
    "errmsg": "ok",
    "ticket": "bxLdikRXVbTPdHSM05e5u5sUoXNKdvsdshFKA",
    "expires_in": 7200
}
```
| 参数名 | 描述
| --- | ---
| errcode	| 错误码
| errmsg | 错误信息
| ticket | api_ticket，卡券接口中签名所需凭证
| expires_in | 有效时间

### 拉取适用卡券列表并获取用户选择信息
```javascript
wx.chooseCard({
    shopId: '', // 门店Id
    cardType: '', // 卡券类型
    cardId: '', // 卡券Id
    timestamp: 0, // 卡券签名时间戳
    nonceStr: '', // 卡券签名随机串
    signType: '', // 签名方式，默认'SHA1'
    cardSign: '', // 卡券签名
    success: function (res) {
        var cardList= res.cardList; // 用户选中的卡券列表信息
    }
});
```

|参数名	|必填	|类型	|示例值	|描述
| --- | --- | --- | --- | ---
|shopId	|否	|string(24)	|1234	|门店ID。shopID用于筛选出拉起带有指定location_list(shopID)的卡券列表，非必填。
|cardType	|否	 |string(24)	|GROUPON	|卡券类型，用于拉起指定卡券类型的卡券列表。当cardType为空时，默认拉起所有卡券的列表，非必填。
|cardId	|否	 |string(32)	|p1Pj9jr90_SQRaVqYI239Ka1erk	|卡券ID，用于拉起指定cardId的卡券列表，当cardId为空时，默认拉起所有卡券的列表，非必填。
|timestamp	|是	 |string(32)	 |14300000000	|时间戳。
|nonceStr	|是	 |string(32)	|sduhi123	|随机字符串。
|signType	|是	 |string(32)	|SHA1	|签名方式，目前仅支持SHA1
|cardSign	|是	 |string(64)	|abcsdijcous123	|签名。

cardSign详见附录4。开发者特别注意：签名错误会导致拉取卡券列表异常为空，请仔细检查参与签名的参数有效性。

**特别提醒**

拉取列表仅与用户本地卡券有关，拉起列表异常为空的情况通常有三种：签名错误、时间戳无效、筛选机制有误。请开发者依次排查定位原因。

### 批量添加卡券接口
```javascript
wx.addCard({
    cardList: [{
        cardId: '',
        cardExt: ''
    }], // 需要添加的卡券列表
    success: function (res) {
        var cardList = res.cardList; // 添加的卡券列表信息
    }
});
```

cardExt详见附录4，值得注意的是，这里的card_ext参数必须与参与签名的参数一致，格式为字符串而不是Object，否则会报签名错误。

### 查看微信卡包中的卡券接口
```javascript
wx.openCard({
    cardList: [{
        cardId: '',
        code: ''
    }]// 需要打开的卡券列表
});
```

### 核销后再次赠送卡券接口
```javascript
wx.consumeAndShareCard({
    cardId: '',
    code: ''
});
```

参数说明：

|参数	|说明
| --- | ---
|cardId	 |上一步核销的card_id，若传入错误的card_id会报错
|code	 |上一步核销的code，若传入错误的code会报错

注意：
该接口只支持微信6.3.6以上版本的客户端，开发者在调用时需要注意两点：

1. 需要引入1.1.0版本的js文件： https://res.wx.qq.com/open/js/jweixin-1.1.0.js
2. 需要判断用户客户端版本号，做出容错处理，详情点击：判断当前客户端版本是否支持指定JS接口

## 微信支付

### 发起一个微信支付请求
```javascript
wx.chooseWXPay({
    timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
    nonceStr: '', // 支付签名随机串，不长于 32 位
    package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
    signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
    paySign: '', // 支付签名
    success: function (res) {
        // 支付成功后的回调函数
    }
});
```

备注：prepay_id 通过微信支付统一下单接口拿到，paySign 采用统一的微信支付 Sign 签名生成方法，注意这里 appId 也要参与签名，appId 与 config 中传入的 appId 一致，即最后参与签名的参数有appId, timeStamp, nonceStr, package, signType。

**请注意该接口只能在你配置的支付目录下调用，同时需确保支付目录在JS接口安全域名下。**

微信支付开发文档：[https://pay.weixin.qq.com/wiki/doc/api/index.html](https://pay.weixin.qq.com/wiki/doc/api/index.html)
