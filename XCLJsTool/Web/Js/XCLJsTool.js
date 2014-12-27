/**
 * 欢迎使用本程序，您可以任意修改、复制、分享本程序所有代码，只需要保留本注释即可，谢谢！
 * 项目地址：https://github.com/xucongli1989/XCLJsTool
 * By:XCL @ 2014.11 in Shanghai China
 * 使用说明：
 * 本程序部分功能依赖于jquery插件，本项目中使用的是jquery-1.11.1
 */

(function (win){
    "use strict";
    
    if(win.XCLJsTool){
        return win.XCLJsTool;
    }
    
    var doc = win.document;
    var $ = $ || win.jQuery || {};

    var XCLJsTool={
        Version:"1.0",
        /**
         * 公共model
         */
        Models:{},
        /**
         * 公共方法
         */    
        Common:{},
        /**
         * Dom操作
         */    
        Dom:{},
        /**
         * 正则相关
         */    
        Regex:{},
        /**
         * 字符串操作相关
         */    
        String:{},
        /**
         * Cookie操作相关
         */    
        Cookie:{},
        /**
         * Http操作相关
         */    
        Http:{},
        /**
         * Ajax操作相关
         */    
        Ajax:{},
        /**
         * 数据处理操作相关
         */    
        Data:{},
        /**
         * 日期时间处理相关
         */    
        Date:{},
        /**
         * 事件相关
         */
        Events:{},
        /**
         * 浏览器相关
         */
        Browser:{},
        /**
         * 移动端相关
         */
        Mobile:{},
        /**
         * 数学计算相关
         */
        Math:{},
        /**
         * 随机数相关
         */
        Random:{},
        /**
         * 数组相关
         */
        Array:{},
        /**
         * Url处理相关
         */
        URL:{}
    };


    XCLJsTool.Models={
        /**
         * key value 模型
         * @param {string} key
         * @param {object} value
         */
        Dictionary:function(key,value){
            this.key=key;
            this.value=value;
        }
    };



    XCLJsTool.Common = {
        /**
         * 向document输出字符串
         * @param {string} str
         */
        Write: function (str) {
            doc.write(str);
        }
    };

    XCLJsTool.Dom = {
        /**
         * 根据id，获取或设置指定元素的value
         * @param {string} id 元素的id值
         * @value {string} value 要设置的value值（可选）
         */
        Val: function (id,value) {
            var obj = doc.getElementById(id);
            if(arguments.length===1){
                if (obj) {
                    return obj.value;
                }
                return null;
            }else if(arguments.length===2){
                if (obj) {
                    obj.value = val;
                }                
            }
        },
        /**
         * 根据指定value，选中select对象中option
         * @param {object} $selectObj
         * @param {string} val
         */
        SelectOption: function ($selectObj, val) {
            $selectObj.find("option[value='" + val + "']").prop({ "selected": true });
        },
        /**
         * 向form追加hidden，key为name和id
         * @param {object} $container 被追加的容器（默认为form对象）
         * @param {json array} data json数组，如[{key:key1,value:value1},{key:key2,value:value2}]
         */
        AddHiddens:function($container,data){
            $container=$container || $("form");
            if(data && data.length>0){
                var html="";
                for(var i=0;i<data.length;i++){
                    html+=(XCLJsTool.String.Format("<input type='hidden' name='{0}' id='{0}' value='{1}' />",data[i].key,data[i].value));
                }
                $container.append(html);
            }
        }
    };

    /**
     * 正则常量
     */
    XCLJsTool.Regex.Regexs = {
        /**
         * Email
         * @type RegExp
         */
        Email: /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$/,
        /**
         * Url
         * @type RegExp
         */
        Url: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
        /**
         * 中文
         * @type RegExp
         */
        Chinese: /[\u4e00-\u9fa5]/,
        /**
         * 双字节
         * @type RegExp
         */
        DoubleByte: /[^\x00-\xff]/,
        /**
         * 负整数
         * @type RegExp
         */
        NegativeInt: /^-[0-9]*[1-9][0-9]*$/,
        /**
         * 非负整数
         * @type RegExp
         */
        NotNegativeInt: /^d+$/,
        /**
         * 正整数
         * @type RegExp
         */
        PositiveInt: /^[0-9]*[1-9][0-9]*$/,
        /**
         * 非正整数
         * @type RegExp
         */
        NotPositiveInt: /^((-d+)|(0+))$/,
        /**
         * 整数
         * @type RegExp
         */
        Int: /^-?d+$/,
        /**
         * 非负浮点
         * @type RegExp
         */
        NotNegativeFloat: /^d+(.d+)?$/,
        /**
         * 正浮点
         * @type RegExp
         */
        PositiveFloat: /^((0-9)+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*)$/,
        /**
         * 非正浮点
         * @type RegExp
         */
        NotPositiveFloat: /^((-d+.d+)?)|(0+(.0+)?)$/,
        /**
         * 负浮点数
         * @type RegExp
         */
        NegativeFloat:/^(-(((0-9)+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*)))$/,
        /**
         * 英文字母
         * @type RegExp
         */
        English:/^[A-Za-z]+$/,
        /**
         * 英文大写字母
         * @type RegExp
         */
        EnglishUpper:/^[A-Z]+$/,
        /**
         * 英文小写字母
         * @type RegExp
         */
        EnglishLower:/^[a-z]+$/,
        /**
         * 英文字母+数字组合
         * @type RegExp
         */
        EnglishOrNumber:/^[A-Za-z0-9]+$/,
        /**
         * 英文字母+数字+下划线组合
         * @type RegExp
         */
        EnglishOrNumberOrUnderline:/^w+$/,
        /**
         * html
         * @type RegExp
         */
        Html:/<(.*)>.*<\/\1>|<(.*) \/>/,
        /**
         * 国内电话号码
         * @type RegExp
         */
        ChinaTel:/\d{3}-\d{8}|\d{4}-\d{7}/,
        /**
         * 国内邮编
         * @type RegExp
         */
        ChinaPostCode:/[1-9]\d{5}(?!\d)/,
        /**
         * 国内身份证号
         * @type RegExp
         */
        ChinaIDCard:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    };
    /**
     * 正则验证
     */
    XCLJsTool.Regex.ValidRegex = {
        /**
         * 验证指定值是否与正则匹配
         * @param {RegExp} regex
         * @param {string} str
         * @returns {bool}
         */
        IsValid: function (regex, str) {
            return regex.test(str);
        }
    };

    XCLJsTool.String = {
        /**
         * 去左右空格
         * @param {string} str
         * @returns {string}
         */
        Trim: function (str) {
            return str.replace(/^\s+|\s+$/g, "");
        },
        /**
         * 去左空格
         * @param {string} str
         * @returns {string}
         */
        LTrim: function (str) {
            return str.replace(/^\s+/, "");
        },
        /**
         * 去右空格
         * @param {string} str
         * @returns {string}
         */
        RTrim: function (str) {
            return str.replace(/\s+$/, "");
        },
        /**
         * 格式输出
         * @param {string} str
         * @returns {string}
         */
        Format: function (str) {
            if (arguments.length <= 1) {
                return str;
            }
            var tokenCount = arguments.length - 2;
            for (var token = 0; token <= tokenCount; token++) {
                str = str.replace(new RegExp("\\{" + token + "\\}", "gi"), arguments[token + 1]);
            }
            return str;
        },
        /**
         * 指定源字符串sourceStr中是否包含str字符串
         * @param {string} sourceStr 源字符串
         * @param {string} str 要查找的字符串
         * @param {Boolean} isIgnoreCase 是否忽略大小写
         * @returns {Boolean}
         */
        Contains:function(sourceStr, str,isIgnoreCase){
            if(sourceStr){
                if(isIgnoreCase){
                    sourceStr=sourceStr.toUpperCase();
                    str=str.toUpperCase();
                }
                return sourceStr.indexOf(str)>=0;
            }else{
                return false;
            }
        }
    };

    XCLJsTool.Cookie = {
        /**
         * 根据cookie名，获取cookie
         * @param {string} name
         * @returns {string}
         */
        GetCookie: function (name) {
            var nameEQ = name + "=";
            var ca = doc.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ')
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0)
                    return c.substring(nameEQ.length, c.length);
            }
            return null;
        },
        /**
         * 设置cookie
         * @param {string} name cookie名
         * @param {string} value cookie值
         * @param {int} days 过期时间（天数）
         */
        SetCookie: function (name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";
            doc.cookie = name + "=" + value + expires + "; path=/";
        },
        /**
         * 删除cookie
         * @param {string} name 名称
         */
        DelCookie: function (name) {
            this.SetCookie(name, "", -1);
        }
    };

    XCLJsTool.Http = {
        /**
         * 获取HttpRequest对象
         * @returns {XMLHttpRequest|ActiveXObject|Boolean}
         */
        GetHttpRequestObject: function () {
            var xmlhttp = false;

            try {
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (E) {
                    xmlhttp = false;
                }
            }

            if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
                try {
                    xmlhttp = new XMLHttpRequest();
                } catch (e) {
                    xmlhttp = false;
                }
            }
            if (!xmlhttp && win.createRequest) {
                try {
                    xmlhttp = win.createRequest();
                } catch (e) {
                    xmlhttp = false;
                }
            }
            return xmlhttp;
        }
    };

    XCLJsTool.Ajax = {
        /**
         * 获取同步请求的数据
         * @param {object} ajaxOption 自定义option
         * @returns {object} 请求结果
         */
        GetSyncData: function (ajaxOption) {
            var result = "";
            ajaxOption.async=false;
            ajaxOption.success=function(data){
                result = data;
            };
            $.ajax(ajaxOption);
            return result;
        }
    };

    XCLJsTool.Data = {
        /**
         * 将值转为int型，若失败，则返回0
         * @param {string} val
         * @returns {int}
         */
        GetInt: function (val) {
            return this.GetIntDefault(val, 0);
        },
        /**
         * 将值转为int型，若失败，则返回null
         * @param {string} val
         * @returns {int?}
         */
        GetIntNull: function (val) {
            return this.GetIntDefault(val, null);
        },
        /**
         * 将值转为int型，若失败，则返回defaultValue
         * @param {string} val
         * @param {int} defaultValue
         * @returns {int}
         */
        GetIntDefault: function (val, defaultValue) {
            return parseInt(val, 10) || defaultValue;
        },
        /**
         * 将值转为float型，若失败，则返回0
         * @param {string} val
         * @returns {float}
         */
        GetFloat: function (val) {
            return this.GetFloatDefault(val, 0);
        },
        /**
         * 将值转为float型，若失败，则返回null
         * @param {string} val
         * @returns {float?}
         */
        GetFloatNull: function (val) {
            return this.GetFloatDefault(val, null);
        },
        /**
         * 将值转为float型，若失败，则返回defaultValue
         * @param {string} val
         * @param {float} defaultValue
         * @returns {float}
         */
        GetFloatDefault: function (val, defaultValue) {
            return parseFloat(val) || defaultValue;
        },
        /**
         * 将值转为object(eval)
         * @param {string} val
         * @returns {object}
         */
        GetObject: function (val) {
            return eval(val);
        },
        /**
         * 判断val是否为数字
         * @param {object} val
         * @returns {Boolean}
         */
        IsNumber: function (val) {
            return (typeof(val) === 'number' || typeof(val) === 'string') && val !== '' && !isNaN(val);
        },
        /**
         * 判断指定值是否为一个对象
         * @param {object} val
         * @returns {Boolean}
         */
        IsObject: function (val) {
            return val !== null && typeof val === 'object';
        },
        /**
         * 判断指定值是否为Date对象
         * @param {object} val
         * @returns {Boolean|Date}
         */
        IsDate: function (val) {
            return val instanceof Date && !isNaN(val.valueOf());
        },
        /**
         * 判断指定值是否为数组
         * @param {object} val
         * @returns {Boolean}
         */
        IsArray: function (val) {
            return Object.prototype.toString.call(val) === "[object Array]";
        },
        /**
         * 判断指定值为null或为空字符串
         * @param {string} val
         * @returns {Boolean}
         */
        IsNullOrEmpty: function (val) {
            return null===val || val==="";
        },
        /**
         * 判断指定值为null，或为空字符串，或为空白字符串
         * @param {string} val
         * @returns {Boolean}
         */
        IsNullOrWhiteSpace:function (val){
            return this.IsNullOrEmpty(XCLJsTool.String.Trim(val));
        },
        /**
         * 判断指定值是否为html元素
         * @param {object} val
         * @returns {obj|Boolean}
         */
        IsElement: function (val) {
             return typeof HTMLElement === "object" ? o instanceof HTMLElement :  o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string";
        },
        /**
         * 判断指定值是否为function
         * @param {object} val
         * @returns {Boolean}
         */
        IsFunction: function (val) {
            return Object.prototype.toString.call(val) == '[object Function]';
        },
        /**
         * 判断指定值是否为String
         * @param {object} val
         * @returns {Boolean}
         */
        IsString: function (val) {
            return typeof val == 'string' || val instanceof String;
        },
        /**
         * 判断指定字符串是否为"true"
         * @param {string} val
         * @returns {bool}
         */
        IsBoolean: function (val) {
            return /^true$/i.test(val);
        },
        /**
         * 判断指定值是否为RegExp对象
         * @param {object} val
         * @returns {bool}
         */
        IsRegExp: function (val) {
            return val && val instanceof RegExp;
        },
        /**
         * 判断指定值是否为NaN
         * @param {object} val
         * @returns {Boolean}
         */
        IsNaN: function (val) {
            return isNaN(val);
        },
        /**
         * 判断指定值是否为null
         * @param {object} val
         * @returns {Boolean}
         */
        IsNull: function (val) {
            return val===null;
        },
        /**
         * 判断指定值是否为undefined
         * @param {object} val
         * @returns {Boolean}
         */
        IsUndefined: function (val) {
            return val===undefined || typeof(val)==="undefined";
        },
        /**
         * 指定值是否全部为大写
         * @param {string} val
         * @returns {Boolean}
         */
        IsUpper:function (val){
            return val.toUpperCase()===val;
        },
        /**
         * 指定值是否全部为小写
         * @param {string} val
         * @returns {Boolean}
         */
        IsLower:function(val){
            return val.toLowerCase()===val;
        }
    };

    XCLJsTool.Date = {
        /**
         * 是否为int（私有）
         * @param {string} val
         * @returns {Boolean}
         */
        _isInteger: function (val) {
            var digits = "1234567890";
            for (var i = 0; i < val.length; i++) {
                if (digits.indexOf(val.charAt(i)) == -1) { return false; }
            }
            return true;
        },
        /**
         * 获取int（私有）
         * @param {string} str
         * @param {int} i
         * @param {int} minlength
         * @param {int} maxlength
         */
        _getInt: function (str, i, minlength, maxlength) {
            var _this = this;
            for (var x = maxlength; x >= minlength; x--) {
                var token = str.substring(i, i + x);
                if (token.length < minlength) { return null; }
                if (_this._isInteger(token)) { return token; }
            }
            return null;
        },
        /**
         * 月份名数组
         * @type Array
         */
        MONTH_NAMES: new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
        /**
         * 星期名数组
         * @type Array
         */
        DAY_NAMES: new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'),
        LZ: function (x) { return (x < 0 || x > 9 ? "" : "0") + x },
        /**
         * 格式化date
         * @param {Date} date
         * @param {string} format
         * @returns {String}
         */
        FormatDate: function (date, format) {
            var _this = this;
            format = format + "";
            var result = "";
            var i_format = 0;
            var c = "";
            var token = "";
            var y = date.getYear() + "";
            var M = date.getMonth() + 1;
            var d = date.getDate();
            var E = date.getDay();
            var H = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            var yyyy, yy, MMM, MM, dd, hh, h, mm, ss, ampm, HH, H, KK, K, kk, k;
            // Convert real date parts into formatted versions
            var value = new Object();
            if (y.length < 4) { y = "" + (y - 0 + 1900); }
            value["y"] = "" + y;
            value["yyyy"] = y;
            value["yy"] = y.substring(2, 4);
            value["M"] = M;
            value["MM"] = _this.LZ(M);
            value["MMM"] = _this.MONTH_NAMES[M - 1];
            value["NNN"] = _this.MONTH_NAMES[M + 11];
            value["d"] = d;
            value["dd"] = _this.LZ(d);
            value["E"] = _this.DAY_NAMES[E + 7];
            value["EE"] = _this.DAY_NAMES[E];
            value["H"] = H;
            value["HH"] = _this.LZ(H);
            if (H == 0) { value["h"] = 12; }
            else if (H > 12) { value["h"] = H - 12; }
            else { value["h"] = H; }
            value["hh"] = _this.LZ(value["h"]);
            if (H > 11) { value["K"] = H - 12; } else { value["K"] = H; }
            value["k"] = H + 1;
            value["KK"] = _this.LZ(value["K"]);
            value["kk"] = _this.LZ(value["k"]);
            if (H > 11) { value["a"] = "PM"; }
            else { value["a"] = "AM"; }
            value["m"] = m;
            value["mm"] = _this.LZ(m);
            value["s"] = s;
            value["ss"] = _this.LZ(s);
            while (i_format < format.length) {
                c = format.charAt(i_format);
                token = "";
                while ((format.charAt(i_format) == c) && (i_format < format.length)) {
                    token += format.charAt(i_format++);
                }
                if (value[token] != null) { result = result + value[token]; }
                else { result = result + token; }
            }
            return result;
        },
        /**
         * 根据指定格式，返回 1970 年 1 月 1 日至val的毫秒数
         * @param {string} val
         * @param {string} format
         * @returns {Number}
         */
        GetDateFromFormat: function (val, format) {
            var _this=this;
            val = val + "";
            format = format + "";
            var iVal = 0;
            var iFormat = 0;
            var c = "";
            var token = "";
            var token2 = "";
            var x, y;
            var now = new Date();
            var year = now.getYear();
            var month = now.getMonth() + 1;
            var date = 1;
            var hh = 0;
            var mm = 0;
            var ss = 0;
            var ampm = "";

            while (iFormat < format.length) {
                // Get next token from format string
                c = format.charAt(iFormat);
                token = "";
                while ((format.charAt(iFormat) === c) && (iFormat < format.length)) {
                    token += format.charAt(iFormat++);
                }
                // Extract contents of value based on format token
                if (token === "yyyy" || token === "yy" || token === "y") {
                    if (token === "yyyy") {
                        x = 4;
                        y = 4;
                    }
                    if (token === "yy") {
                        x = 2;
                        y = 2;
                    }
                    if (token === "y") {
                        x = 2;
                        y = 4;
                    }
                    year = _this._getInt(val, iVal, x, y);
                    if (year === null) {
                        return NaN;
                    }
                    iVal += year.length;
                    if (year.length === 2) {
                        if (year > 70) {
                            year = 1900 + (year - 0);
                        } else {
                            year = 2000 + (year - 0);
                        }
                    }
                } else if (token === "MMM" || token === "NNN") {
                    month = 0;
                    for (var i = 0; i < monthsAll.length; i++) {
                        var monthName = monthsAll[i];
                        if (val.substring(iVal, iVal + monthName.length).toLowerCase() === monthName.toLowerCase()) {
                            if (token === "MMM" || (token === "NNN" && i > 11)) {
                                month = i + 1;
                                if (month > 12) {
                                    month -= 12;
                                }
                                iVal += monthName.length;
                                break;
                            }
                        }
                    }
                    if ((month < 1) || (month > 12)) {
                        return NaN;
                    }
                } else if (token === "EE" || token === "E") {
                    for (var n = 0; n < daysAll.length; n++) {
                        var dayName = daysAll[n];
                        if (val.substring(iVal, iVal + dayName.length).toLowerCase() === dayName.toLowerCase()) {
                            iVal += dayName.length;
                            break;
                        }
                    }
                } else if (token === "MM" || token === "M") {
                    month = _this._getInt(val, iVal, token.length, 2);
                    if (month === null || (month < 1) || (month > 12)) {
                        return NaN;
                    }
                    iVal += month.length;
                } else if (token === "dd" || token === "d") {
                    date = _this._getInt(val, iVal, token.length, 2);
                    if (date === null || (date < 1) || (date > 31)) {
                        return NaN;
                    }
                    iVal += date.length;
                } else if (token === "hh" || token === "h") {
                    hh = _this._getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 1) || (hh > 12)) {
                        return NaN;
                    }
                    iVal += hh.length;
                } else if (token === "HH" || token === "H") {
                    hh = _this._getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 0) || (hh > 23)) {
                        return NaN;
                    }
                    iVal += hh.length;
                } else if (token === "KK" || token === "K") {
                    hh = _this._getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 0) || (hh > 11)) {
                        return NaN;
                    }
                    iVal += hh.length;
                } else if (token === "kk" || token === "k") {
                    hh = _this._getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 1) || (hh > 24)) {
                        return NaN;
                    }
                    iVal += hh.length;
                    hh--;
                } else if (token === "mm" || token === "m") {
                    mm = _this._getInt(val, iVal, token.length, 2);
                    if (mm === null || (mm < 0) || (mm > 59)) {
                        return NaN;
                    }
                    iVal += mm.length;
                } else if (token === "ss" || token === "s") {
                    ss = _this._getInt(val, iVal, token.length, 2);
                    if (ss === null || (ss < 0) || (ss > 59)) {
                        return NaN;
                    }
                    iVal += ss.length;
                } else if (token === "a") {
                    if (val.substring(iVal, iVal + 2).toLowerCase() === "am") {
                        ampm = "AM";
                    } else if (val.substring(iVal, iVal + 2).toLowerCase() === "pm") {
                        ampm = "PM";
                    } else {
                        return NaN;
                    }
                    iVal += 2;
                } else {
                    if (val.substring(iVal, iVal + token.length) !== token) {
                        return NaN;
                    } else {
                        iVal += token.length;
                    }
                }
            }
            // If there are any trailing characters left in the value, it doesn't match
            if (iVal !== val.length) {
                return NaN;
            }
            // Is date valid for month?
            if (month === 2) {
                // Check for leap year
                if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) { // leap year
                    if (date > 29) {
                        return NaN;
                    }
                } else {
                    if (date > 28) {
                        return NaN;
                    }
                }
            }
            if ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
                if (date > 30) {
                    return NaN;
                }
            }
            // Correct hours value
            if (hh < 12 && ampm === "PM") {
                hh = hh - 0 + 12;
            } else if (hh > 11 && ampm === "AM") {
                hh -= 12;
            }
            var newdate = new Date(year, month - 1, date, hh, mm, ss);
            return newdate.getTime();
        },
        /**
         * 将date字符串转为Date对象
         * @param {string} date
         * @param {string} format
         * @returns {Date}
         */
        ParseDate: function (date, format) { 
            var result=null;
            if (format) {
                result= this.GetDateFromFormat(date, format);
            }
            else
            {
                var timestamp =Date.parse(date), minutesOffset = 0, match;
                if (isNaN(timestamp) && (match = /^(\d{4}|[+\-]\d{6})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?))?/.exec(date))) {
                    if (match[8] !== 'Z') {
                        minutesOffset = +match[10] * 60 + (+match[11]);

                        if (match[9] === '+') {
                            minutesOffset = 0 - minutesOffset;
                        }
                    }

                    match[7] = match[7] || '000';

                    timestamp = Date.UTC(+match[1], +match[2] - 1, +match[3], +match[4], +match[5] + minutesOffset, +match[6], +match[7].substr(0, 3));
                }

                result= timestamp;
            }
            return result ? new Date(result) : null;
        }
    };
    
    XCLJsTool.Events={
        /**
         * 阻止事件，默认类名（私有）
         */
        _stopEventClassName:"XCLJsToolStopEvent",
        /**
         * 阻止指定事件
         * @param {object} $obj 被操作的元素
         * @param {string} eventName 事件名，默认为click
         * @param {string} className 绑定阻止事件时给元素$obj添加的类名，默认为"XCLJsToolStopEvent"
         * @returns {Boolean}
         */
        StopEvent:function($obj,eventName,className){
            var _this=this;
            eventName=eventName || "click";
            className=className || _this._stopEventClassName;
            $obj.addClass(className);
            $(doc).on(eventName,"."+className,function(){
                return false;
            })
            return  false;
        },
        /**
         * 移除阻止的事件
         * @param {object} $obj 被操作的元素
         * @param {string} className 移除的类名
         */
        RemoveStopEvent:function($obj,className){
            var _this=this;
            className=className || _this._stopEventClassName;
            $obj.removeClass(className);
        }
    };


    XCLJsTool.Browser={
        /**
         * 判断是否为IE
         * @param {int} version（6，7，8，9） 当指定此参数时，返回判断指定的IE版本结果，否则，则返回是否为IE
         * @returns {bool}
         */
        IsIE:function(version){
            var ie=(!-[1,]);
            if(!version){
                return ie;
            }
            var result=false;
            switch(version){
                case 6:
                    result=/msie 6/i.test(navigator.userAgent);
                    break;
                case 7:
                    result=/msie 7/i.test(navigator.userAgent);
                    break;
                case 8:
                    result=/msie 8/i.test(navigator.userAgent);
                    break;
                case 9:
                    result=ie && navigator.appVersion.match(/9./i)=="9.";
                    break;
            }
            return result;
        },
        
        /**
         * 判断是否为Firefox
         */
        IsFirefox:function(){
            return navigator.userAgent.indexOf("Firefox")>=0;
        },
        
        /**
         * 判断是否为Chrome
         */
        IsChrome:function(){
            return navigator.userAgent.indexOf("Chrome") >=0 ;
        }
    };

    XCLJsTool.Mobile={
        /**
         * 判断是否为Android
         */
        IsAndroid:function(){
            return navigator.userAgent.match(/Android/i);
        },
        /**
         * 判断是否为BlackBerry
         */        
        IsBlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        /**
         * 判断是否为IOS
         */        
        IsIOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        /**
         * 判断是否为Opera
         */        
        IsOpera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        /**
         * 判断是否为IEMobile
         */        
        IsIEMobile: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        /**
         * 判断是否为移动端
         */        
        IsMobile: function() {
            return (this.IsAndroid() || this.IsBlackBerry() || this.IsIOS() || this.IsOpera() || this.IsWindows());
        }
    };
    
    XCLJsTool.Math={
        /**
         * 返回指定值中的最小值
         * @param {type} val 可以为一个数组，也可以为多个参数
         * @returns {Number}
         */
        Min:function(val){
            if(XCLJsTool.Data.IsArray(val)){
                return Math.min.apply(null,val);
            }else{
                return Math.min(arguments);
            }
        },
        /**
         * 返回指定值中的最大值
         * @param {type} val 可以为一个数组，也可以为多个参数
         * @returns {Number}
         */        
        Max:function(val){
            if(XCLJsTool.Data.IsArray(val)){
                return Math.max.apply(null,val);
            }else{
                return Math.max(arguments);
            }
        }
    };
    
    XCLJsTool.Random={
        /**
         * 生成指定范围内的随机数
         * @param {type} min 最小值
         * @param {type} max 最大值
         * @returns {Number}
         */
        Range:function(min,max){
            return Math.random()*(max-min)+min;
        },
        /**
         * 生成guid（此guid可能会重复，如果是关键的地方，请勿使用）
         * @returns {String} 所生成的guid
         */
        Guid:function(){
            var S4=function() {
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
            };
            var guid = (S4() + S4() + "-" + S4() + S4() + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
            return guid;  
        }
    };
    
    XCLJsTool.Array={
        /**
         * 合并多个数组为一个数组
         * @param {type} args 要合并的数组参数，如：arr1,arr2,arr3...
         * @returns {Array} 合并后的结果数组
         */
        Concat:function(args){
            return [].concat.apply([],arguments);
        },
        /**
         * 将一个或多个数组合并为一个字符串
         * @param {type} separator 指定分隔符
         * @param {type} args 要合并的数组参数(arr1,arr2,arr3...)
         * @returns {string} 合并后的字符串
         */
        Join:function(separator,args){
            var source=[];
            if(arguments.length>2){
                for(var i=1;i<arguments.length;i++){
                    source=source.concat(arguments[i]);
                }
            }else{
                source=arguments[1];
            }
            return source.join(separator);
        }
    };
    
    XCLJsTool.URL={
        /**
         * 向URL中添加新的参数
         * @param {type} url
         * @param {type} params json参数,如：{k1:v1,k2:v2}
         * @returns {String}
         */
        AddParam: function (url, params) {
            var query="";
            if(params){
                query=$.param(params);
            }
            if (url.indexOf('?') > -1) {
                url = url + '&' + query;
            } else {
                url = url + '?' + query;
            }
            return url;
        }
    };
    
    win.XCLJsTool=win.XCLJsTool || XCLJsTool;

})(window); 