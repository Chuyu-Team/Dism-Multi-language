/**
 * @desc amWiki Web端·主执行模块
 * @author Tevin
 * @see {@link https://github.com/TevinLi/amWiki}
 * @license MIT - Released under the MIT license.
 */

$(function () {

    'use strict';

    /*
     引入
     */

    //工具集
    var tools = window.tools;
    //文档管理器
    var docs = new AWDocs();
    //本地存储
    var storage = new AWStorage();
    //全文库搜索
    var search = new AWSearch(storage);
    //启用接口ajax测试
    if (window.AWTesting) {
        var testing = new AWTesting();
    }
    //是否支持history.state的API (IE9不支持)
    var HISTORY_STATE = 'pushState' in history;

    /*
     页面基本
     */

    //页面元素
    var $win = $(window),
        $body = $('body'),
        $menuIcon = $('#menuIcon'),            //顶部折叠显示导航按钮
        $container = $('#container'),            //页面主容器
        $nav = $('#nav'),                      //左侧导航
        $menuBar = $('#menuBar'),              //左侧导航内容
        $filter = $('#menuFilter'),
        $filterClean = $filter.next('i'),
        $main = $('#main'),
        $mainSibling = $('#mainSibling'),      //其他文章
        $contents = $('#contents');            //目录

    //是否为移动端
    var isMobi = window.isMobi = (function () {
        var winW = $win.width();
        var threshold = 720;
        var onResize = function () {
            winW = $win.width();
            if (winW <= threshold) {
                $container.removeAttr('style');
            } else {
                $container.height($win.height() - 70 - 15 - 20 * 2);
            }
        };
        onResize();
        $win.on('resize', onResize);
        return function () {
            return winW <= threshold;
        };
    })();

    //页面基本显示与操作
    (function () {
        //菜单折叠
        $menuBar.on('click', 'h5', function () {
            var $this = $(this),
                $next = $this.next('ul');
            if ($this.hasClass('on')) {
                $this.removeClass('on');
                $next.slideUp(200, function () {
                    $menuBar.trigger('scrollbar');
                });
            } else {
                $this.addClass('on');
                $next.slideDown(200, function () {
                    $menuBar.trigger('scrollbar');
                });
            }
        });
        $menuBar.on('click', 'h4', function () {
            var $this = $(this);
            if (!$this.hasClass('on')) {
                $this.addClass('on');
                $menuBar.find('a').removeClass('on');
            }
            $menuBar.find('h5').removeClass('on').next('ul').hide();
        });
        $menuBar.on('click', 'strong', function () {
            var $this = $(this),
                $next = $this.next('ul');
            if ($this.hasClass('on')) {
                $this.removeClass('on');
                $next.slideUp(200, function () {
                    $menuBar.trigger('scrollbar');
                });
            } else {
                $this.addClass('on');
                $next.slideDown(200, function () {
                    $menuBar.trigger('scrollbar');
                });
            }
        });
        //响应式菜单
        $menuIcon.on('click', function () {
            var $this = $(this);
            if ($this.hasClass('close')) {
                $this.removeClass('close');
                $menuIcon.find('use').attr('xlink:href', '#icon:navStart');
                $nav.removeClass('on');
            } else {
                $this.addClass('close');
                $menuIcon.find('use').attr('xlink:href', '#icon:navClose');
                $nav.addClass('on');
            }
        });
        $menuBar.on('click', 'li a', function () {
            $nav.removeClass('on');
        });
        $menuBar.on('click', 'h4', function () {
            $nav.removeClass('on');
        });
        //页面筛选
        $filter.on('input propertychange', function () {
            var value = $filter.val();
            if (value != '') {
                $filterClean.removeClass('off');
                $menuBar.find('h5').removeClass('on').next('ul').hide();
                $menuBar.find('a').each(function () {
                    var $this = $(this);
                    if ($this.text().indexOf(value) >= 0) {
                        $this.html($this.text().replace(value, '<mark>' + value + '</mark>'));
                        var $prev = $this.parent().removeClass('off').parent().show().prev();
                        //一级目录
                        if ($prev.is('h5')) {
                            $prev.addClass('on');
                        }
                        //二级目录
                        else if ($prev.is('strong')) {
                            $prev.addClass('on').parent().removeClass('off').parent().show().prev().addClass('on');
                        }
                    } else {
                        if ($this.find('mark').length > 0) {
                            $this.text($this.text());
                        }
                        $this.parent().addClass('off');
                    }
                });
            } else {
                $filterClean.addClass('off');
                $menuBar.find('a').each(function () {
                    var $this = $(this);
                    if ($this.find('mark').length > 0) {
                        $this.text($this.text());
                    }
                });
                $menuBar.find('a').parent().removeClass('off');
            }
            $menuBar.trigger('scrollbar');
        });
        $filterClean.on('click', function () {
            $filter.val('').trigger('change');
        });
        //显示svg图标
        if (sessionStorage['AMWikiIconsSvg']) {
            $('#svgSymbols').append(sessionStorage['AMWikiIconsSvg']);
        } else {
            $.get('amWiki/images/icons.svg', function (svg) {
                sessionStorage['AMWikiIconsSvg'] = svg;
                $('#svgSymbols').append(svg);
            }, 'text');
        }
        //目录悬浮窗展开折叠
        $contents.children('.btn').on('click', function (e) {
            $contents.toggleClass('on').removeClass('hover');
        });
        $contents.hover(function () {
            $contents.addClass('hover');
        }, function () {
            $contents.removeClass('hover');
        });
        //开启滚动条
        $('.scroller').scrollbar();
        $('#backTop').on('click', function () {
            $main.children('.main-inner').scrollTop(0);
        });
        //全局点击
        $(document).on('click', function (e) {
            var $tag = $(e.target);
            //移动端
            if (isMobi()) {
                //折叠目录悬浮窗
                if ($tag.closest('#contents').length == 0) {
                    $contents.removeClass('on').removeClass('on');
                }
            }
        });
    })();

    /*
     业务操作函数
     */

    //改变底部上下篇目
    var changeSibling = function ($item) {
        //如果未传导航项进来，隐藏上下篇目栏位
        if (!$item) {
            $mainSibling.removeClass('on');
            return;
        }
        //获取平级文档链接
        var getDocLink = function (type, $elm) {
            var $other = $elm[type]();
            if ($other.length == 0) {
                return null;
            }
            if ($other.children('ul').length > 0) {
                return getDocLink(type, $other);
            } else {
                return $other.children('a');
            }
        };
        //设置上下篇目导航
        var setSiblingNav = function (num, $other) {
            if ($other) {
                $mainSibling.find('a').eq(num)
                    .attr('href', $other.attr('href'))
                    .text($other.text());
            } else {
                $mainSibling.find('a').eq(num)
                    .removeAttr('href')
                    .text('没有了');
            }
        };
        setSiblingNav(0, getDocLink('prev', $item));
        setSiblingNav(1, getDocLink('next', $item));
        $mainSibling.addClass('on');
    };

    //改变导航显示
    var changeNav = function (path) {
        if (path == '欢迎') {
            $menuBar.find('h4').addClass('on');
            $menuBar.find('a').removeClass('on');
            changeSibling(null);
        } else {
            var hsLink = false;
            $menuBar.find('a').each(function () {
                var $this = $(this);
                var path2 = $this.attr('href').split('file=')[1];
                if (path2 == path) {
                    hsLink = true;
                    //本层加高亮
                    var $prev = $this.addClass('on').parent().parent().show().prev().addClass('on');
                    //如果本层处于第二层，对应的第一层加高亮
                    if ($prev[0].tagName.toLowerCase() == 'strong') {
                        $prev.parent().parent().show().prev().addClass('on');
                    }
                    changeSibling($this.parent());
                } else {
                    $this.removeClass('on');
                }
            });
            if (hsLink) {
                $menuBar.find('h4').removeClass('on');
            }
        }
        curPath = path;
        $menuBar.trigger('scrollbar');
    };

    //改变页面
    var changePage = function (path, withOutPushState) {
        //第一步，从本地缓存读取并渲染页面
        var localDoc = storage.read(path);
        docs.renderDoc(localDoc);
        testing && testing.crawlContent();
        $main.trigger('scrollbar');
        $main.children('.main-inner').scrollTop(0);  //返回顶部
        //更新history记录
        if (!withOutPushState && HISTORY_STATE) {
            history.pushState({path: path}, '', '?file=' + path);
        }
        //第二步，加载服务器上的文档资源，如果有更新重新渲染
        docs.loadPage(path, function (state, content) {
            //读取服务器文档失败时
            if (state == 'error') {
                //如果本地缓存为空，且服务器文档读取失败时，跳回首页
                if (localDoc == '') {
                    docs.loadPage('欢迎', function (state, content) {
                        if (state == 'success') {
                            docs.renderDoc(content);
                            storage.saveDoc('欢迎', content);
                            $main.trigger('scrollbar');
                        }
                    });
                    if (HISTORY_STATE) {
                        history.replaceState({path: '欢迎'}, '', '?file=欢迎');
                    }
                }
                //如果本地缓存不为空，但服务器文档读取失败时
                else {
                    //记录文档打开数
                    storage.increaseOpenedCount(path);
                }
            }
            //读取服务器文档成功时
            else if (state == 'success') {
                //如果服务器文档有更新，更新本地缓存、重新渲染页面、重新判断接口测试
                if (content != localDoc) {
                    docs.renderDoc(content);
                    storage.saveDoc(path, content);
                    testing && testing.crawlContent();
                    $main.trigger('scrollbar');
                }
                //如果服务器文档与本地缓存一致，不进行任何操作
                else {
                }
                //记录文档打开数
                storage.increaseOpenedCount(path);
            }
        });
    };

    //读取目录导航
    var loadNav = function (callback) {
        $.get('library/$navigation.md?t=' + Date.now(), function (data) {
            $menuBar.find('.scroller-content').html(marked(data));
            $menuBar
                .find('h4').prepend('<svg><use xlink:href="#icon:navHome"></use></svg>').end()
                .find('h5').prepend('<svg><use xlink:href="#icon:navArrow"></use></svg>');
            $menuBar.trigger('scrollbar');
            var pathList = [];
            //支持history api时，改变默认事件，导航不再跳转页面
            $menuBar.find('a').each(function () {
                if (HISTORY_STATE) {
                    var $this = $(this);
                    var path = $this.attr('href').split('file=')[1];
                    pathList.push(path);
                    $this.on('click', function () {
                        search.displayBox('off'); //关闭搜索面板
                        changeNav(path);
                        changePage(path);
                        return false;
                    });
                }
            });
            $mainSibling.find('a').on('click', function () {
                if (HISTORY_STATE) {
                    var $this = $(this);
                    var href = $this.attr('href');
                    if (typeof href != 'undefined' && href != '') {
                        var path = href.split('file=')[1];
                        changeNav(path);
                        changePage(path);
                    }
                    return false;
                }
            });
            callback && callback(pathList);
        }, 'text');
    };

    /*
     启动应用
     */

    //解析地址参数
    var curPath = tools.getURLParameter('file');
    curPath = !curPath ? '欢迎' : decodeURI(curPath);

    //加载导航
    loadNav(function (list) {
        //核对本地存储
        storage.checkLibChange(list);
        //首次打开改变导航
        changeNav(curPath);
        //首次打开改变页面
        changePage(curPath, true);
    });

    //history api 浏览器前进后退操作响应
    if (HISTORY_STATE) {
        $win.on('popstate', function (e) {
            var path;
            //当有状态记录时，直接跳转
            if (e.originalEvent.state) {
                path = e.originalEvent.state.path;
                //改变导航
                changeNav(path);
                //改变页面
                changePage(path, true);
            }
            //当没有状态记录时
            else {
                path = tools.getURLParameter('file');
                path = !path ? '欢迎' : decodeURI(path);
                //判断url是否和当前一样，不一样才跳转（同页hash变化不跳转）
                if (path != curPath) {
                    //改变导航
                    changeNav(path);
                    //改变页面
                    changePage(path, true);
                }
            }
        });
    }

    /*
     回调中转
     */

    //重建缓存
    search.onNeedRebuildStorage = function (callback) {
        storage.clearLibraries();
        var list = storage.getIndexList();
        var count = 0;
        var load = function (path, i) {
            //为避免重建缓存频率过高，人为增设每个请求时间间隔
            setTimeout(function () {
                docs.loadPage(path, function (state, content) {
                    //文档读取成功时保存到内存
                    if (state == 'success') {
                        storage.saveDocToDB(path, content);
                    }
                    //循环结束后完成重建
                    if (++count >= list.length) {
                        storage.saveRebuild();
                        callback && callback();
                    }
                });
            }, i * 100);
        };
        for (var i = 0, item; item = list[i]; i++) {
            load(item, i);
        }
    };

});
