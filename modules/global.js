/**
* 全局
* @module Global
*/
define(function () {

    /** @alias module:Global  */
    var g = {};

    //页面加载时的全局变量
    g._XJ = window.XJ, g._XJsTool = window.XJsTool, g.doc = window.document;

    g.userAgent = navigator.userAgent;
    g.appVersion = navigator.appVersion;

    /**
     * html转义实体
     */
    g.entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };



    return g;

});




