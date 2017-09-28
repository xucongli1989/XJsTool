/**
 * XJsTool
 * @module XJsTool
 */
define(['global', 'require'], function (g, r) {
	

    /** @alias module:XJsTool  */
    var app = {};

    /**
     * 版本信息
     */
    app.Version = "V1.5,By:XCL @ 2017.09 in Shenzhen China,project url:https://github.com/xucongli1989/XJsTool";


    /**
     * 释放全局变量"XJ/XJsTool"的控制权
     * @param {bool} deep 若为true，则也释放全局变量"XJsTool"的控制权；若为false，则仅释放全局变量"XJ"的控制权
     * @returns {object} 原始类的变量
     */
    app.noConflict = function (deep) {
        if (window.XJ === app) {
            window.XJ = g._XJ;
        }
        if (deep && window.XJsTool === app) {
            window.XJsTool = g._XJsTool;
        }
        return app;
    };


    app.Array = r('array');
    app.Browser = r('browser');
    app.Common = r('common');
    app.ContentType = r('contentType');
    app.Cookie = r('cookie');
    app.Data = r('data');
    app.Date = r('date');
    app.Dom = r('dom');
    app.Http = r('http');
    app.Json = r('json');
    app.Math = r('math');
    app.Mobile = r('mobile');
    app.Models = r('models');
    app.Random = r('random');
    app.Regex = r('regex');
    app.String = r('string');
    app.Url = r('url');


    if ((typeof window.define === "function" && window.define.amd)) {
        window.define("XJsTool", [], function () {
            return app;
        });
    } else {
        window.XJsTool = window.XJ = app;
    }

    return app;

});