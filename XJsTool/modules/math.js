/**
* 数学计算相关
* @module Math
*/
define(['global', 'data'], function (g, dataLib) {
	
	
    /** @alias module:Math  */
    var app = {
        /**
         * 返回指定值中的最小值
         * @param {array} val 可以为一个数组，也可以为多个参数
         * @returns {Number}
         */
        Min: function (val) {
            if (dataLib.IsArray(val)) {
                return Math.min.apply(null, val);
            } else {
                return Math.min(arguments);
            }
        },
        /**
         * 返回指定值中的最大值
         * @param {array} val 可以为一个数组，也可以为多个参数
         * @returns {Number}
         */
        Max: function (val) {
            if (dataLib.IsArray(val)) {
                return Math.max.apply(null, val);
            } else {
                return Math.max(arguments);
            }
        }
    };

    return app;
});