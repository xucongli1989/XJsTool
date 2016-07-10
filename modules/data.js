/**
* 数据处理操作相关
* @module Data
*/
define(['global', 'string'], function (g, stringLib) {
	
	
    /** @alias module:Data  */
    var app = {
        /**
         * 将值转为int型，若失败，则返回0
         * @param {string} val 要转换的值
         * @returns {int}
         */
        GetInt: function (val) {
            return this.GetIntDefault(val, 0);
        },
        /**
         * 将值转为int型，若失败，则返回null
         * @param {string} val 要转换的值
         * @returns {int?} 如果转换失败，则返回null
         */
        GetIntNull: function (val) {
            return this.GetIntDefault(val, null);
        },
        /**
         * 将值转为int型，若失败，则返回defaultValue
         * @param {string} val 要转换的值
         * @param {int} defaultValue 默认值
         * @returns {int} 转换结果
         */
        GetIntDefault: function (val, defaultValue) {
            return parseInt(val, 10) || defaultValue;
        },
        /**
         * 将值转为float型，若失败，则返回0
         * @param {string} val 要转换的值
         * @returns {float} 转换结果
         */
        GetFloat: function (val) {
            return this.GetFloatDefault(val, 0);
        },
        /**
         * 将值转为float型，若失败，则返回null
         * @param {string} val 要转换的值
         * @returns {float?} 转换结果
         */
        GetFloatNull: function (val) {
            return this.GetFloatDefault(val, null);
        },
        /**
         * 将值转为float型，若失败，则返回defaultValue
         * @param {string} val 要转换的值
         * @param {float} defaultValue 默认值
         * @returns {float} 转换结果
         */
        GetFloatDefault: function (val, defaultValue) {
            return parseFloat(val) || defaultValue;
        },
        /**
         * 将值转为object(eval)
         * @param {string} val 要转换的值
         * @returns {object} 转换结果
         */
        GetObject: function (val) {
            return eval(val);
        },
        /**
         * 判断val是否为数字
         * @param {object} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsNumber: function (val) {
            return (typeof (val) === 'number' || typeof (val) === 'string') && val !== '' && !isNaN(val);
        },
        /**
         * 判断指定值是否为一个对象
         * @param {object} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsObject: function (val) {
            return val !== null && typeof val === 'object';
        },
        /**
         * 判断指定值是否为Date对象
         * @param {object} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsDate: function (val) {
            return val instanceof Date && !isNaN(val.valueOf());
        },
        /**
         * 判断指定值是否为数组
         * @param {object} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsArray: function (val) {
            return Object.prototype.toString.call(val) === "[object Array]";
        },
        /**
         * 判断指定值为null或为空字符串
         * @param {string} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsNullOrEmpty: function (val) {
            return null === val || val === "";
        },
        /**
         * 判断指定值为null，或为空字符串，或为空白字符串
         * @param {string} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsNullOrWhiteSpace: function (val) {
            return this.IsNullOrEmpty(stringLib.Trim(val));
        },
        /**
         * 判断指定值是否为html元素
         * @param {object} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsElement: function (val) {
            return typeof HTMLElement === "object" ? val instanceof HTMLElement : val && typeof val === "object" && val !== null && val.nodeType === 1 && typeof val.nodeName === "string";
        },
        /**
         * 判断指定值是否为function
         * @param {object} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsFunction: function (val) {
            return Object.prototype.toString.call(val) == '[object Function]';
        },
        /**
         * 判断指定值是否为String
         * @param {object} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsString: function (val) {
            return typeof val == 'string' || val instanceof String;
        },
        /**
         * 判断指定字符串是否为"true"
         * @param {string} val 要判断的值
         * @returns {bool} 判断结果
         */
        IsBoolean: function (val) {
            return /^true$/i.test(val);
        },
        /**
         * 判断指定值是否为RegExp对象
         * @param {object} val 要判断的值
         * @returns {bool} 判断结果
         */
        IsRegExp: function (val) {
            return val && val instanceof RegExp;
        },
        /**
         * 判断指定值是否为NaN
         * @param {object} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsNaN: function (val) {
            return isNaN(val);
        },
        /**
         * 判断指定值是否为null
         * @param {object} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsNull: function (val) {
            return val === null;
        },
        /**
         * 判断指定值是否为undefined
         * @param {object} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsUndefined: function (val) {
            return val === undefined || typeof (val) === "undefined";
        },
        /**
         * 指定值是否全部为大写
         * @param {string} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsUpper: function (val) {
            return val.toUpperCase() === val;
        },
        /**
         * 指定值是否全部为小写
         * @param {string} val 要判断的值
         * @returns {Boolean} 判断结果
         */
        IsLower: function (val) {
            return val.toLowerCase() === val;
        }
    };

    return app;
});