/**
 * @desc amWiki Web端·滚动条
 * @author Tevin
 */

;
(function (win, $) {

    'use strict';

    var list = [];
    setInterval(function(){
        for (var i = 0, item; item = list[i]; i++) {
            item.checkHeight();
        }
    }, 500);

    var Scroller = function (_this) {
        this.$e = {
            container: $(_this),  //主容器
            inner: null,  //正文内容
            bar: null,  //滚动条外层
            box: null,  //滚动条
            slider: null  //滑块
        };
        this.data = {
            contentH: 0,  //内容高度
            containerH: 0,  //容器高度
            containerHLast: 0,  //上次容器高度
            barH: 0,  //滚动条高度
            sliderH: 0  //滑块高度
        };
        this._init();
    };

    Scroller.prototype._init = function () {
        var that = this;
        this.$e.container.append('<div class="scrollbar" onselectstart="return false"><div><i></i></div></div>');
        this.$e.bar = this.$e.container.find('.scrollbar');
        this.$e.box = this.$e.bar.children('div');
        this.$e.slider = this.$e.bar.find('i');
        this.$e.inner = this.$e.container.children('.scroller-inner');
        this._onWinResize();
        $(window).on('resize', function () {
            that._onWinResize();
            that.checkHeight();
        });
        this.$e.container.on('scrollbar', function () {
            that.checkHeight();
        });
        this.$e.inner.on({
            'click': function () {
                that.checkHeight();
            },
            'scroll': function () {
                that._reScroll();
            }
        });
        this.checkHeight();
        this._bindAction();
    };

    //滑块操作
    Scroller.prototype._bindAction = function () {
        var that = this;
        var onDrag = false;
        var _y = 0,
            top = 0;
        this.$e.body = $('body');
        this.$e.box.on({
            'mousedown': function (e) {
                onDrag = true;
                that.$e.body.attr('onselectstart', 'return false');
                that.$e.bar.addClass('active');
                _y = e.pageY;
                top = parseFloat(that.$e.slider.css('top'));
                if (that.$e.bar.parents('#main').length > 0) {
                    that.$e.body.children('aside').hide();
                }
            }
        });
        $(document).on({
            'mousemove': function (e) {
                if (onDrag) {
                    that.scrollTo(top + e.pageY - _y);
                }
            },
            'mouseup': function () {
                onDrag = false;
                that.$e.body.removeAttr('onselectstart', 'return false');
                that.$e.bar.removeClass('active');
                that.$e.body.children('aside').show();
            }
        });
    };

    Scroller.prototype._onWinResize = function () {
        if (isMobi()) {
            this.$e.inner.removeAttr('style').removeClass('on');
        } else {
            this.$e.inner.css({
                width: this.$e.container.width() + 30,
                paddingRight: 13
            }).addClass('on');
        }
    };

    //重设滑块大小
    Scroller.prototype._resize = function () {
        var that = this;
        this.data.containerH = this.$e.inner.height();
        //当内容高度小于等于容器时，不显示滚动条
        if (this.data.contentH <= this.data.containerH) {
            this.data.contentH = this.data.containerH;
            this.$e.bar.addClass('off');
        } else {
            this.$e.bar.removeClass('off');
        }
        this.data.barH = this.$e.box.height();
        this.data.sliderH = this.data.containerH / that.data.contentH * this.data.barH;
        this.$e.slider.height(this.data.sliderH);
    };

    //重设滑块顶部距离
    Scroller.prototype._reScroll = function () {
        this.$e.slider.css('top', this.$e.inner.scrollTop() / this.data.contentH * this.data.barH);
    };

    //滚动多少距离
    Scroller.prototype.scrollTo = function (num) {
        var barTop = num;
        barTop = barTop < 0 ? 0 : barTop;
        barTop = barTop + this.data.sliderH > this.data.barH ? this.data.barH - this.data.sliderH : barTop;
        this.$e.slider.css('top', barTop);
        this.$e.inner.scrollTop(barTop / this.data.barH * this.data.contentH);
    };

    //检查高度
    Scroller.prototype.checkHeight = function(){
        var that = this;
        this.data.contentH = 0;
        this.$e.inner.children('.scroller-content').each(function () {
            that.data.contentH += $(this).outerHeight();
        });
        //如果高度未改变不进行操作
        if (this.data.contentH == this.data.contentHLast) {
            return;
        } else {
            this.data.contentHLast = this.data.contentH;
        }
        this._resize();
        this._reScroll();
    };

    //方法绑定
    $.extend($.fn, {
        scrollbar: function () {
            return this.each(function () {
                list.push(new Scroller(this));
            });
        }
    });

})(window, jQuery);