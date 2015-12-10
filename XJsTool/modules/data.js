define(['global','string'],function(g,stringLib){
	
	
    /**
     * 数据处理操作相关
     */
    return  {
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
            return (typeof (val) === 'number' || typeof (val) === 'string') && val !== '' && !isNaN(val);
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
            return null === val || val === "";
        },
        /**
         * 判断指定值为null，或为空字符串，或为空白字符串
         * @param {string} val
         * @returns {Boolean}
         */
        IsNullOrWhiteSpace: function (val) {
            return this.IsNullOrEmpty(stringLib.Trim(val));
        },
        /**
         * 判断指定值是否为html元素
         * @param {object} val
         * @returns {obj|Boolean}
         */
        IsElement: function (val) {
            return typeof HTMLElement === "object" ? val instanceof HTMLElement : val && typeof val === "object" && val !== null && val.nodeType === 1 && typeof val.nodeName === "string";
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
            return val === null;
        },
        /**
         * 判断指定值是否为undefined
         * @param {object} val
         * @returns {Boolean}
         */
        IsUndefined: function (val) {
            return val === undefined || typeof (val) === "undefined";
        },
        /**
         * 指定值是否全部为大写
         * @param {string} val
         * @returns {Boolean}
         */
        IsUpper: function (val) {
            return val.toUpperCase() === val;
        },
        /**
         * 指定值是否全部为小写
         * @param {string} val
         * @returns {Boolean}
         */
        IsLower: function (val) {
            return val.toLowerCase() === val;
        }
    };

	
});