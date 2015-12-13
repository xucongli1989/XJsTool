
/**
* 公共model
* @module Models
*/
define(['global'], function (g) {
	
    /** @alias module:Models  */
    var app = {
        /**
         * key value 模型
         * @param {string} key
         * @param {object} value
         */
        Dictionary: function (key, value) {
            this.key = key;
            this.value = value;
        }
    };

    return app;

});