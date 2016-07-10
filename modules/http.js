/**
* Http操作相关
* @module Http
*/
define(['global'], function (g) {
	
    /** @alias module:Http  */
    var app = {
        /**
         * 获取HttpRequest对象,若创建失败，则返回null
         * @returns {object} XMLHttpRequest或ActiveXObject或Null
         */
        GetHttpRequestObject: function () {
            var xmlhttp = null;
            if (window.ActiveXObject) {
                xmlhttp = new window.ActiveXObject("Msxml2.XMLHTTP") || new window.ActiveXObject("Microsoft.XMLHTTP");
            }
            if (!xmlhttp && window.XMLHttpRequest) {
                xmlhttp = new window.XMLHttpRequest();
            }
            if (!xmlhttp && window.createRequest) {
                xmlhttp = window.createRequest();
            }
            return xmlhttp || null;
        }
    };

    return app;

});