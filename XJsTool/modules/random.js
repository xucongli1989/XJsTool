/**
* 随机数相关
* @module Random
*/
define(['global'], function (g) {
	
    /** @alias module:Random  */
    var app = {
        /**
         * 生成指定范围内的随机数
         * @param {Number} min 最小值
         * @param {Number} max 最大值
         * @returns {Number}
         */
        Range: function (min, max) {
            return Math.random() * (max - min) + min;
        },
        /**
         * 生成guid（此guid可能会重复，如果是关键的地方，请勿使用）
         * @returns {String} 所生成的guid
         */
        Guid: function () {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            var guid = (S4() + S4() + "-" + S4() + S4() + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
            return guid;
        }
    };
    return app;

});