/**
 * @desc amWiki Web端·搜索子进程
 * @author Tevin
 */


(function (self) {

    'use strict';

    //计算器
    var searcher = (function () {

        var Searcher = function () {
            //文档存储
            this._documents = null;
            //搜索处理结果
            this._processing = {};
            //设置
            this._data = {
                //标题命中得分
                titleScore: 100,
                //接口地址命中得分
                apiScore: 50,
                //单次内容命中得分
                textScore: 5
            }
        };

        //初始文档
        Searcher.prototype.initDocs = function (docs) {
            this._documents = docs;
            for (var id in this._documents) {
                if (this._documents.hasOwnProperty(id)) {
                    this._preDoc(this._documents[id]);
                }
            }
        };

        //文档预处理
        Searcher.prototype._preDoc = function (doc) {
            doc.content = doc.content
                .replace(/^\s+|\s+$/g, '')
                //分离h1标题
                .replace(/^#\s?(.*?)[\r|\n]/, function (match, s1) {
                    doc.title = s1;
                    return '';
                })
                //分离测试文档请求地址
                .replace(/([^#]#{3} *请求地址[\n\r]{1,4})([-\w:\/\.]+?)[\n\r]{1,}(#{3} *请求类型[\s\S]+?#{3} *请求参数)/,
                function (match, s1, s2, s3) {
                    doc.api = s2;
                    return s1 + s3;
                })
                //清除 Markdown 标题标记
                .replace(/#{1,6}(.*?)#{0,6}\s*[\r\n]/g, '$1')
                //清除 Markdown 强调斜体删除线标记
                .replace(/[_\*~]{1,2}(.*?)[_\*~]{1,2}/g, '$1')
                //直接删除 Markdown 图片
                .replace(/!\[.*?]\(.*?\)/g, '')
                //清除 Markdown 链接标记，还原为显示文本
                .replace(/\[(.*?)]\(.*?\)/g, '$1')
                //清除 Markdown 代码段标记
                .replace(/`{3}.*?[\n\r]([\s\S]*?)`{3}/g, '$1')
                //清除 Markdown 代码标记
                .replace(/`(.*?)`/g, '$1')
                //直接删除所有 html 标签
                .replace(/<.+?>/g, '')
                //清除 Markdown 引用标记
                .replace(/> *(.+?)[n\r]/g, '$1')
                //清除 Markdown 分割线标记
                .replace(/-{3,} *[\n\r]/g, '')
                //清除 Markdown 表格标记
                .replace(/(\|.*?[\n\r]{1,2}){3,}/g, function (match) {
                    return match.replace(/\|.*?[\n\r]{1,2}/g, function (match) {
                        if (match.indexOf('---') >= 0) {
                            return '';
                        } else {
                            return match.replace(/\|/g, '');
                        }
                    });
                })
                //转换一个空白符为一空格
                .replace(/[\n\r\t]/g, ' ')
                //合并多个空白符为一个空格
                .replace(/\s{2,}/g, ' ');
        };

        //给中转处理添加属性
        Searcher.prototype._addPorcessing = function (id, key, value) {
            //如果不存在此id则创建
            if (typeof this._processing[id] == 'undefined') {
                this._processing[id] = {};
                this._processing[id][key] = value;
            }
            //如果存在此id
            else {
                //如果不存在此属性，直接赋值
                if (typeof this._processing[id][key] == 'undefined') {
                    this._processing[id][key] = value;
                }
                //如果存在此属性，则相加（仅得分一项）
                else {
                    this._processing[id][key] += value;
                }
            }
        };

        //匹配搜索词与得分计算
        Searcher.prototype.matchWords = function (words) {
            var wordsReg = new RegExp(words, 'gi');
            for (var id in this._documents) {
                if (this._documents.hasOwnProperty(id)) {
                    //标题命中
                    if (this._documents[id].title) {
                        var titleMatch = this._documents[id].title.match(wordsReg);
                        if (titleMatch && titleMatch.length > 0) {
                            var title = this._documents[id].title.replace(wordsReg, function (match) {
                                return '<mark>' + match + '</mark>';
                            });
                            this._addPorcessing(id, 'title', title);
                            this._addPorcessing(id, 'score', this._data.titleScore);
                        }
                    }
                    //接口地址命中
                    if (this._documents[id].api) {
                        var apiMatch = this._documents[id].api.match(wordsReg);
                        if (titleMatch && titleMatch.length > 0) {
                            var api = '<p class="p1"><em>接口</em>' +
                                this._documents[id].api.replace(wordsReg, function (match) {
                                    return '<mark>' + match + '</mark>';
                                }) + '</p>';
                            this._addPorcessing(id, 'api', api);
                            this._addPorcessing(id, 'score', this._data.apiScore);
                        }
                    }
                    //内容命中
                    var contentMatch = this._documents[id].content.match(new RegExp('.{0,15}' + words + '.{0,30}', 'gi'));
                    if (contentMatch) {
                        var content = '<p>';
                        for (var i = 0, item; item = contentMatch[i]; i++) {
                            if (i < 2) {
                                content += item.replace(wordsReg, function (match) {
                                        return '<mark>' + match + '</mark>';
                                    }) + '... ';
                            }
                        }
                        content += '</p>';
                        this._addPorcessing(id, 'content', content);
                        this._addPorcessing(id, 'score', contentMatch.length * this._data.textScore);
                    }
                }
            }
            this._auxiliary();
        };

        //辅助得分
        Searcher.prototype._auxiliary = function () {
        };

        //排序与属性补齐
        Searcher.prototype._sortByScore = function () {
            var list = [];
            for (var id in this._processing) {
                if (this._processing.hasOwnProperty(id)) {
                    if (typeof this._processing[id].title == 'undefined') {
                        this._processing[id].title = this._documents[id].title ? this._documents[id].title : '';
                    }
                    if (typeof this._processing[id].api == 'undefined') {
                        this._processing[id].api = '';
                    }
                    if (typeof this._processing[id].content == 'undefined') {
                        this._processing[id].content = '<p>' + this._documents[id].content.substr(0, 45) + '...</p>';
                    }
                    this._processing[id].path = this._documents[id].uri;
                    this._processing[id].timestamp = this._documents[id].timestamp;
                    list.push(this._processing[id]);
                }
            }
            list.sort(function (a, b) {
                return a.score > b.score ? -1 : 1;
            });
            return list;
        };

        //获取结果
        Searcher.prototype.getResult = function () {
            return this._sortByScore();
        };

        return new Searcher();

    })();

    self.onmessage = function (event) {
        var data = event.data;
        if (data.type == 'docs') {
            searcher.initDocs(data.docs);
            self.postMessage({type: 'ready'});
        } else if (data.type == 'search') {
            searcher.matchWords(data.words);
            self.postMessage({type: 'result', result: searcher.getResult()});
        }
    };

    self.postMessage({type: 'loaded'});

})(self);