/**
* 移动端相关
* @module Mobile
*/
define(['global'], function (g) {
	
	
    /** @alias module:Mobile  */
    var app = {
        /**
         * 判断是否为Android
         */
        IsAndroid: function () {
            return g.userAgent.match(/Android/i);
        },
        /**
         * 判断是否为BlackBerry
         */
        IsBlackBerry: function () {
            return g.userAgent.match(/BlackBerry/i);
        },
        /**
         * 判断是否为IOS
         */
        IsIOS: function () {
            return g.userAgent.match(/iPhone|iPad|iPod/i);
        },
        /**
         * 判断是否为Opera
         */
        IsOpera: function () {
            return g.userAgent.match(/Opera Mini/i);
        },
        /**
         * 判断是否为IEMobile
         */
        IsIEMobile: function () {
            return g.userAgent.match(/IEMobile/i);
        },
        /**
         * 判断是否为移动端
         */
        IsMobile: function () {
            return (this.IsAndroid() || this.IsBlackBerry() || this.IsIOS() || this.IsOpera() || this.IsIEMobile());
        }
    };

    return app;

});