/**
 * @desc amWiki Web端·本地缓存模块
 * @author Tevin
 */

;
(function (win) {

    'use strict';

    var tools = win.tools;
    var wikiPath = tools.simString(win.location.pathname.replace('/', '').replace(/\//g, '_')).toUpperCase();
    var LOCAL_STORAGE_NAME = 'AMWikiDataBase@' + wikiPath;  //本地数据localStorage键名

    /**
     * @class 创建一个本地存储管理对象
     */
    var Storage = function () {
        this._db = null;  //内存中的文库缓存
        this.elm = {
            $win: $(win),
            //更新全部缓存按钮
            $searchUpdate: $('#searchUpdate'),
            //缓存状态
            $cacheState: $('#cacheState'),
            //文档总数
            $cacheDocTotal: $('#cacheDocTotal'),
            //上次全部缓存更新时间
            $cacheLasttime: $('#cacheLasttime')
        };
        this._bridgeLocalStorage('read');
        this._bindCtrl();
    };

    //存取本地存储
    Storage.prototype._bridgeLocalStorage = function (type) {
        if (type == 'read') {
            var defaultStr = '{"documents":{},"lastBuild":0}';
            this._db = JSON.parse(win.localStorage[LOCAL_STORAGE_NAME] || defaultStr);
            //转换旧名称
            if (typeof this._db.libraries != 'undefined') {
                this._db.documents = this._db.libraries;
                delete this._db.libraries;
            }
        } else if (type == 'save') {
            win.localStorage[LOCAL_STORAGE_NAME] = JSON.stringify(this._db);
        }
    };

    //绑定操作
    Storage.prototype._bindCtrl = function () {
        var that = this;
        this.elm.$win.on('beforeunload', function () {
            that._bridgeLocalStorage('save');
        });
    };

    //更新一篇文档，如果相同则不操作(对应内容不用重新渲染)
    Storage.prototype.update = function (uri, content) {
        var id = tools.simString(uri, 'short');
        if (this._db.documents[id]) {
            if (this._db.documents[id].content == content) {
                return false;
            } else {
                this.saveDoc(uri, content, id);
                return true;
            }
        } else {
            this.saveDoc(uri, content, id);
            return true;
        }
    };

    /**
     * @desc 保存一篇文档
     * @param uri {string} - 文档资源地址
     * @param content {string} - 文档内容
     * @param [id] {string} - 已经编码的文档地址，可选
     */
    Storage.prototype.saveDoc = function (uri, content, id) {
        this.saveDocToDB(uri, content, id);
        this._bridgeLocalStorage('save');
        this._changeSummary('sateOnly');
    };

    //将文档存储到内存
    Storage.prototype.saveDocToDB = function (uri, content, id) {
        if (typeof uri != 'string' && uri == '') {
            throw new Error('Error, uri must be a string!');
        }
        if (typeof id == 'undefined') {
            id = tools.simString(uri, 'short');
        }
        this._db.documents[id] = {
            id: id,
            uri: uri,
            content: content || '',
            timestamp: Date.now()
        };
        this._changeSummary('sateOnly', 'prepare');
    };

    /**
     * @desc 读取一篇文档
     * @param uri {string} - 文档资源地址
     * @returns {string} - 文档内容
     */
    Storage.prototype.read = function (uri) {
        var id = tools.simString(uri, 'short');
        var article = '';
        if (this._db.documents[id]) {
            article = this._db.documents[id].content;
        }
        return article;
    };

    /**
     * @desc 删除一篇文档
     * @param uri {string} - 文档资源地址
     */
    Storage.prototype.remove = function (uri) {
        var id = tools.simString(uri, 'short');
        delete this._db.documents[id];
        this._bridgeLocalStorage('save');
        this._changeSummary('sateOnly');
    };

    //增涨文档打开数记录
    Storage.prototype.increaseOpenedCount = function (uri) {
        var id = tools.simString(uri, 'short');
        //TODO: 待续...打开次数将一定程度影响排行
    };

    /**
     * @desc 校对列表，清除失效文档
     * @param list {Array} - 由导航树偏平化生成的文档列表
     */
    Storage.prototype.checkLibChange = function (list) {
        this._indexing = list;
        var documents = {};
        var id = '';
        for (var i = 0; i < list.length; i++) {
            id = tools.simString(list[i], 'short');
            if (typeof this._db.documents[id] != 'undefined') {
                documents[id] = this._db.documents[id];
            }
        }
        this._db.documents = documents;
        this._bridgeLocalStorage('save');
        this._changeSummary();
    };

    //更新缓存摘要（位于搜素面板）
    Storage.prototype._changeSummary = function (stateOnly, prepare) {
        var libraryiesLong = 0;
        for (var p in this._db.documents) {
            if (this._db.documents.hasOwnProperty(p)) {
                libraryiesLong++;
            }
        }
        //如果是预先，百分数减1
        if (prepare == 'prepare') {
            this.elm.$cacheState.text(parseInt(libraryiesLong / this._indexing.length * 100 - 1) + '%');
        }
        //非预先则正常
        else {
            this.elm.$cacheState.text(parseInt(libraryiesLong / this._indexing.length * 100) + '%');
        }
        //如果不只是状态
        if (stateOnly != 'stateOnly') {
            this.elm.$cacheDocTotal.text(this._indexing.length);
            if (this._db.lastBuild) {
                this.elm.$cacheLasttime.text(win.tools.formatTime(this._db.lastBuild));
            } else {
                this.elm.$cacheLasttime.text('0000-00-00 00:00:00');
            }
        }
    };

    //清除内存中的库列表
    Storage.prototype.clearLibraries = function () {
        this._db.documents = {};
        this._changeSummary('sateOnly');
    };

    //完成本次缓存重建
    Storage.prototype.saveRebuild = function () {
        this._db.lastBuild = Date.now();
        this._bridgeLocalStorage('save');
        this._changeSummary();
    };

    //返回导航列表
    Storage.prototype.getIndexList = function () {
        return this._indexing;
    };

    //获取当前缓存的所有文档
    Storage.prototype.getAllDocs = function () {
        return this._db.documents;
    };

    //获取缓存最后重建时间
    Storage.prototype.getLastBuildTs = function () {
        return this._db.lastBuild;
    };

    return win.AWStorage = Storage;

})(window);