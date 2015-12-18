/**
* 移动端相关
* @module Mobile
*/
define(['global'], function (g) {
	
	
    /** @alias module:Mobile  */
    var app = {
        /**
         * 判断是否为Android
         * @returns {bool} 判断结果
         */
        IsAndroid: function () {
            return g.userAgent.match(/Android/i);
        },
        /**
         * 判断是否为BlackBerry
         * @returns {bool} 判断结果
         */
        IsBlackBerry: function () {
            return g.userAgent.match(/BlackBerry/i);
        },
        /**
         * 判断是否为IOS
         * @returns {bool} 判断结果
         */
        IsIOS: function () {
            return g.userAgent.match(/iPhone|iPad|iPod/i);
        },
        /**
         * 判断是否为Opera
         * @returns {bool} 判断结果
         */
        IsOpera: function () {
            return g.userAgent.match(/Opera Mini/i);
        },
        /**
         * 判断是否为IEMobile
         * @returns {bool} 判断结果
         */
        IsIEMobile: function () {
            return g.userAgent.match(/IEMobile/i);
        },
        /**
         * 判断是否为移动端
         * @returns {bool} 判断结果
         */
        IsMobile: function () {
            return (this.IsAndroid() || this.IsBlackBerry() || this.IsIOS() || this.IsOpera() || this.IsIEMobile());
        }
    };

    return app;

});