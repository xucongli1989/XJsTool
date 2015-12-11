define(['global'], function (g) {
    /**
    * 是否为int（私有）
    * @param {string} val
    * @returns {Boolean}
    */
    var _isInteger = function (val) {
        var digits = "1234567890";
        for (var i = 0; i < val.length; i++) {
            if (digits.indexOf(val.charAt(i)) == -1) { return false; }
        }
        return true;
    };
    /**
     * 获取int（私有）
     * @param {string} str
     * @param {int} i
     * @param {int} minlength
     * @param {int} maxlength
     */
    var _getInt = function (str, i, minlength, maxlength) {
        for (var x = maxlength; x >= minlength; x--) {
            var token = str.substring(i, i + x);
            if (token.length < minlength) { return null; }
            if (_isInteger(token)) { return token; }
        }
        return null;
    };
    /**
     * 月份名数组
     * @type Array
     */
    var MONTH_NAMES = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
    /**
     * 星期名数组
     * @type Array
     */
    var DAY_NAMES = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    var LZ = function (x) { return (x < 0 || x > 9 ? "" : "0") + x };
    
    
    
    
    /**
     * 日期时间处理相关
     */
    return {
        /**
         * 格式化date
         * 参考于：Matt Kruse's Blog （Date Functions: http://javascripttoolbox.com/lib/date/）
         * @param {Date} date
         * @param {string} format
         * @returns {String}
         */
        FormatDate: function (date, format) {
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
            //var yyyy, yy, MMM, MM, dd, hh, h, mm, ss, ampm, HH, H, KK, K, kk, k;
            // Convert real date parts into formatted versions
            var value = new Object();
            if (y.length < 4) { y = "" + (y - 0 + 1900); }
            value["y"] = "" + y;
            value["yyyy"] = y;
            value["yy"] = y.substring(2, 4);
            value["M"] = M;
            value["MM"] = LZ(M);
            value["MMM"] = MONTH_NAMES[M - 1];
            value["NNN"] = MONTH_NAMES[M + 11];
            value["d"] = d;
            value["dd"] = LZ(d);
            value["E"] = DAY_NAMES[E + 7];
            value["EE"] = DAY_NAMES[E];
            value["H"] = H;
            value["HH"] = LZ(H);
            if (H == 0) { value["h"] = 12; }
            else if (H > 12) { value["h"] = H - 12; }
            else { value["h"] = H; }
            value["hh"] = LZ(value["h"]);
            if (H > 11) { value["K"] = H - 12; } else { value["K"] = H; }
            value["k"] = H + 1;
            value["KK"] = LZ(value["K"]);
            value["kk"] = LZ(value["k"]);
            if (H > 11) { value["a"] = "PM"; }
            else { value["a"] = "AM"; }
            value["m"] = m;
            value["mm"] = LZ(m);
            value["s"] = s;
            value["ss"] = LZ(s);
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
            val = val + "";
            format = format + "";
            var iVal = 0;
            var iFormat = 0;
            var c = "";
            var token = "";
            //var token2 = "";
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
                    year = _getInt(val, iVal, x, y);
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
                    for (var i = 0; i < MONTH_NAMES.length; i++) {
                        var monthName = MONTH_NAMES[i];
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
                    for (var n = 0; n < DAY_NAMES.length; n++) {
                        var dayName = DAY_NAMES[n];
                        if (val.substring(iVal, iVal + dayName.length).toLowerCase() === dayName.toLowerCase()) {
                            iVal += dayName.length;
                            break;
                        }
                    }
                } else if (token === "MM" || token === "M") {
                    month = _getInt(val, iVal, token.length, 2);
                    if (month === null || (month < 1) || (month > 12)) {
                        return NaN;
                    }
                    iVal += month.length;
                } else if (token === "dd" || token === "d") {
                    date = _getInt(val, iVal, token.length, 2);
                    if (date === null || (date < 1) || (date > 31)) {
                        return NaN;
                    }
                    iVal += date.length;
                } else if (token === "hh" || token === "h") {
                    hh = _getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 1) || (hh > 12)) {
                        return NaN;
                    }
                    iVal += hh.length;
                } else if (token === "HH" || token === "H") {
                    hh = _getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 0) || (hh > 23)) {
                        return NaN;
                    }
                    iVal += hh.length;
                } else if (token === "KK" || token === "K") {
                    hh = _getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 0) || (hh > 11)) {
                        return NaN;
                    }
                    iVal += hh.length;
                } else if (token === "kk" || token === "k") {
                    hh = _getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 1) || (hh > 24)) {
                        return NaN;
                    }
                    iVal += hh.length;
                    hh--;
                } else if (token === "mm" || token === "m") {
                    mm = _getInt(val, iVal, token.length, 2);
                    if (mm === null || (mm < 0) || (mm > 59)) {
                        return NaN;
                    }
                    iVal += mm.length;
                } else if (token === "ss" || token === "s") {
                    ss = _getInt(val, iVal, token.length, 2);
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
            var result = null;
            if (format) {
                result = this.GetDateFromFormat(date, format);
            }
            else {
                var timestamp = Date.parse(date), minutesOffset = 0, match;
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

                result = timestamp;
            }
            return result ? new Date(result) : null;
        },
        /*
        * 将字符串"/Date(...)/"的日期转为js Date对象
        * @param {string} dateStr date字符串，如"/Date(1441036800000)/"
        * @returns {Date} 如果转换成功，则返回Date对象，否则返回null
        */
        Parse: function (dateStr) {
            if (!dateStr || typeof dateStr !== "string") return null;
            var date = null;
            var mts = dateStr.match(/(\/Date\((\d+)\)\/)/);
            if (mts && mts.length >= 3) {
                date = new Date(parseInt(mts[2]));
            }
            if (!date || date.toUTCString() == "Invalid Date") {
                return null;
            }
            return date;
        }
    };


});