
/**
* 公共model
* @module Models
*/
define(['global'], function (g) {
	
    /** @alias module:Models  */
    var app = {
        /**
         * key value 模型
         * @param {string} key key名
         * @param {object} value value值
         */
        Dictionary: function (key, value) {
            this.key = key;
            this.value = value;
        }
    };

    return app;

});