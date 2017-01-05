/**
 * @desc amWiki Web端·工具集
 * @author Tevin
 */

;
(function (win) {

    'use strict';

    return win.tools = {

        /**
         * @desc 获取url参数
         * @param name {string}
         * @returns {string|null} - 获取的参数
         */
        getURLParameter: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return r[2];
            } else {
                return null;
            }
        },

        /**
         * @desc 转换字符中每个汉字为两个字符
         * @param str {string} - 要编码的字符串
         * @param [mod] {string} - 编码模式选择，可选，normal(默认)一个汉字对应两位字符，short一个汉字对应一位字符
         * @returns {string} - 编码后的字符串
         */
        simString: function (str, mod) {
            mod = mod == 'short';  //短字符串
            var str2 = '';
            var s = '';
            var encodeURI = win.encodeURI;
            for (var i = 0; i < str.length; i++) {
                s = str.substr(i, 1);
                if (/[\u4e00-\u9fa5]/.test(s)) {
                    encodeURI(s).split('%').forEach(function (item) {
                        if (item == '') {
                            s = [];
                        } else {
                            s.push(parseInt('0x' + item));
                        }
                    });
                    if (mod) {
                        str2 += (s[0] + s[1] + s[2]).toString(16).substr(-1, 1);
                    } else {
                        str2 += (s[0] + s[1] + s[2]).toString(16).substr(-2, 2);
                    }
                } else {
                    str2 += s;
                }
            }
            return str2;
        },

        /**
         * @desc json格式化
         * @param str {string} - 需要格式化的json字符串
         * @returns {string} - 格式化后的json字符串
         */
        formatJson: function (str) {
            var json = decodeURI(str.replace(/%([^0-9A-Z]{2})/g, '%25$1'));
            var reg = null,
                formatted = '',
                pad = 0,
                PADDING = '    ';
            var options = {};
            // remove newline where '{' or '[' follows ':'
            options.newlineAfterColonIfBeforeBraceOrBracket = options.newlineAfterColonIfBeforeBraceOrBracket === true;
            // use a space after a colon
            options.spaceAfterColon = options.spaceAfterColon !== false;
            // begin formatting...
            if (typeof json !== 'string') {
                json = JSON.stringify(json);
            } else {
                json = JSON.parse(json);
                json = JSON.stringify(json);
            }
            // add newline before and after curly braces
            reg = /([\{\}])/g;
            json = json.replace(reg, '\r\n$1\r\n');
            // add newline before and after square brackets
            reg = /([\[\]])/g;
            json = json.replace(reg, '\r\n$1\r\n');
            // add newline after comma
            reg = /(\,)/g;
            json = json.replace(reg, '$1\r\n');
            // remove multiple newlines
            reg = /(\r\n\r\n)/g;
            json = json.replace(reg, '\r\n');
            // remove newlines before commas
            reg = /\r\n\,/g;
            json = json.replace(reg, ',');
            // optional formatting...
            if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
                reg = /\:\r\n\{/g;
                json = json.replace(reg, ':{');
                reg = /\:\r\n\[/g;
                json = json.replace(reg, ':[');
            }
            if (options.spaceAfterColon) {
                reg = /"\s*\:/g;
                json = json.replace(reg, '": ');
            }
            $.each(json.split('\r\n'), function (index, node) {
                var i = 0,
                    indent = 0,
                    padding = '';
                if (node.match(/\{$/) || node.match(/\[$/)) {
                    indent = 1;
                } else if (node.match(/\}/) || node.match(/\]/)) {
                    if (pad !== 0) {
                        pad -= 1;
                    }
                } else {
                    indent = 0;
                }
                for (i = 0; i < pad; i++) {
                    padding += PADDING;
                }
                formatted += padding + node + '\r\n';
                pad += indent;
            });
            return formatted;
        },

        /**
         * @desc 时间戳格式化为日期时间
         * @param timestamp {number} - 时间戳
         * @returns {string} - 日期时间
         */
        formatTime: function (timestamp) {
            var time = new Date(timestamp);
            var year = time.getFullYear() + '';
            var month = time.getMonth() + 1;
            month = month <= 9 ? '0' + month : month;
            var date = time.getDate();
            date = date <= 9 ? '0' + date : date;
            var hour = time.getHours();
            hour = hour <= 9 ? '0' + hour : hour;
            var minute = time.getMinutes();
            minute = minute <= 9 ? '0' + minute : minute;
            var second = time.getSeconds();
            second = second <= 9 ? '0' + second : second;
            return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
        }
    }

})(window);