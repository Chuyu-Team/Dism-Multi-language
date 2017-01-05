/**
 * @desc amWiki Web端·全库搜索
 * @author Tevin
 */

;
(function (win) {

    'use strict';

    /**
     * @class 创建全局搜索
     */
    var Search = function (_storage) {
        this._storage = _storage;
        this.elm = {
            //显示搜索面板按钮
            $searchShow: $('#searchShow'),
            //更新全部缓存按钮
            $searchUpdate: this._storage.elm.$searchUpdate,
            //搜索面板
            $searchBox: $('#searchBox'),
            //搜索结果列表
            $results: $('#results'),
            //搜索结果信息提示
            $resultMsg: $('#resultMsg'),
            //搜素结果显示更多
            $resultMore: $('#resultMore'),
            //搜索按钮
            $search: $('#search'),
            //搜索文本
            $searchText: $('#searchText')
        };
        this._data = {
            //搜素结果
            result: [],
            //单条结果的模板
            template: $('#template\\:searchResult').text(),
            //每页结果数
            pageSize: 15,
            //当前页码
            pagination: 0
        };
        this._bindCtrl();
        //用户执行重建缓存的回调
        this.onNeedRebuildStorage = null;
    };

    //初始化
    Search.prototype._bindCtrl = function () {
        var that = this;
        //展开折叠搜索面板
        this.elm.$searchShow.on('click', function () {
            if (that.elm.$searchBox.hasClass('on')) {
                that.displayBox('off');
            } else {
                that.displayBox('on', function () {
                    resetResHeight();
                });
            }
        });
        //设置结果区域高度
        var resetResHeight = function () {
            var hOut = that.elm.$searchBox.height();
            var dt = that.elm.$results.offset().top - that.elm.$searchUpdate.offset().top;
            that.elm.$results.height(hOut - dt);
        };
        $(win).on('resize', function () {
            if (that.elm.$searchBox.hasClass('on')) {
                resetResHeight();
            }
        });
        //重建缓存
        this.elm.$searchUpdate.on('click', function () {
            //开启重建缓存时，如果存在搜索子进程，则干掉子进程
            if (that._worker) {
                that._worker.terminate();
                that._worker = null;
                that.elm.$resultMsg.hide();
            }
            that.elm.$search.prop('disabled', true);
            that.elm.$searchUpdate.prop('disabled', true);
            that.onNeedRebuildStorage(function () {
                that.elm.$search.prop('disabled', false);
                that.elm.$searchUpdate.val('请勿频繁使用');
            });
        });
        //更新全部缓存按钮使用的时间限制：一小时内不允许重复使用
        var lastBuild = this._storage.getLastBuildTs();
        if (lastBuild) {
            var lave = Date.now() - lastBuild;
            if (lave < 60 * 60 * 1000) {
                this.elm.$searchUpdate.prop('disabled', true).val('请勿频繁使用');
            }
        }
        //点击搜索
        this.elm.$search.on('click', function () {
            that._search();
        });
        this.elm.$searchText.on('keyup', function (e) {
            if (e.keyCode == 13) {
                that._search();
            }
        });
        //结果翻页
        this.elm.$resultMore.on('click', function () {
            that._nextResultPage();
        });
    };

    //显示隐藏搜索面板
    Search.prototype.displayBox = function (type, callback) {
        var that = this;
        var $box = this.elm.$searchBox;
        if (type == 'on' && !$box.hasClass('on')) {
            $box
                .addClass('on')
                .css({
                    'display': 'block',
                    'width': '0',
                    'opacity': 0
                })
                .animate({
                    'width': '100%',
                    'opacity': 1
                }, 300, 'swing', function () {
                    callback && callback();
                });
        } else if (type == 'off' && $box.hasClass('on')) {
            $box
                .removeClass('on')
                .animate({
                    'width': '30%',
                    'opacity': 0
                }, 200, 'swing', function () {
                    $box.removeAttr('style');
                    callback && callback();
                });
        }
    };

    //启动搜素
    Search.prototype._search = function () {
        var that = this;
        if (this.elm.$searchText.val() == '') {
            this.elm.$searchText.focus();
            return;
        }
        var words = this.elm.$searchText.val();
        if (typeof win.Worker !== "undefined") {
            //开启一次新搜索时，如果存在搜索子进程，则干掉子进程
            if (this._worker) {
                this._worker.terminate();
                this._worker = null;
                this.elm.$resultMsg.hide();
            }
            this.elm.$resultMsg.show().text('创建搜索中...');
            //创建子进程
            this._worker = new win.Worker('amWiki/js/amWiki.search.worker.js');
            //收到子进程搜素消息
            this._worker.onmessage = function (event) {
                var data = event.data;
                //加载成功后发送文档数据
                if (data.type == 'loaded') {
                    that._worker.postMessage({type: 'docs', docs: that._storage.getAllDocs()});
                }
                //文档预处理完成后开始搜索
                else if (data.type == 'ready') {
                    that.elm.$resultMsg.show().html('正在搜索，请稍后...');
                    that._worker.postMessage({type: 'search', words: words});
                }
                //搜索结果排行
                else if (data.type == 'result') {
                    that._data.result = data.result;
                    that._showResultList();
                    that._worker.terminate();
                    that._worker = null;
                }
            };
            //子进程出错
            this._worker.onerror = function (e) {
                console.error(e);
                that._worker.terminate();
                that._worker = null;
            };
        } else {
            this.elm.$resultMsg.show().text('Sorry，您的浏览器不支持搜索！');
            this.elm.$search.prop('disabled', true);
        }

    };

    //显示结果列表
    Search.prototype._showResultList = function () {
        this.elm.$results.children('ul').children().remove();
        this.elm.$resultMsg.hide();
        this._data.pagination = 0;
        this._nextResultPage();
    };

    //显示结果列表下一页
    Search.prototype._nextResultPage = function () {
        var html = '';
        var count = 0;
        for (var i = this._data.pagination * this._data.pageSize, item; item = this._data.result[i]; i++) {
            html += this._renderRankItem(this._data.template, item);
            //超过页码跳出
            if (++count >= this._data.pageSize) {
                break;
            }
        }
        this.elm.$results.children('ul').append(html);
        this._data.pagination++;
        //如果还有结果没显示完，显示显示更多按钮
        if (this._data.pagination * this._data.pageSize >= this._data.result.length) {
            this.elm.$resultMore.hide();
        } else {
            this.elm.$resultMore.show();
        }
    };

    //渲染单条模板
    Search.prototype._renderRankItem = function (template, data) {
        var tmpl = template;
        data.time = win.tools.formatTime(data.timestamp);
        delete data.timestamp;
        for (var p in data) {
            if (data.hasOwnProperty(p)) {
                tmpl = tmpl.replace(new RegExp('{{' + p + '}}', 'g'), data[p]);
            }
        }
        return tmpl;
    };

    return win.AWSearch = Search;

})(window);