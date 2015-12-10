define(['global'],function(g){
	    /**
     * 字符串操作相关
     */
    var app = {
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
        Contains: function (sourceStr, str, isIgnoreCase) {
            if (sourceStr) {
                if (isIgnoreCase) {
                    sourceStr = sourceStr.toUpperCase();
                    str = str.toUpperCase();
                }
                return sourceStr.indexOf(str) >= 0;
            } else {
                return false;
            }
        },
        /**
         * StringBuilder
         */
        Builder: function () {
            this._arr = [];
        },
        /**
        * 将html标签转换为实体形式
        * @param {string} html 需要被替换的html
        */
        EscapeHtml: function (html) {
            return String(html).replace(/[&<>"'\/]/g, function (s) {
                return g.entityMap[s];
            });
        }
    };
    /**
     * 追加字符
     */
    app.Builder.prototype.Append = function (str) {
        this._arr.push(str);
    };
    /**
     * 带格式追加字符
     */
    app.Builder.prototype.AppendFormat = function () {
        this._arr.push(app.Format.apply(null, arguments));
    };
    /**
     * 返回StringBuilder的字符串
     * @returns {string}
     */
    app.Builder.prototype.ToString = function () {
        return this._arr.join("");
    };
    /**
     * 清除StringBuilder
     */
    app.Builder.prototype.Clear = function () {
        this._arr = [];
    };
    /**
     * 返回StringBuilder的字符串的长度
     * @returns {int}
     */
    app.Builder.prototype.Length = function () {
        return this.ToString().length;
    };

	return app;
});