/**
 * ******************************************************************************************
 * 本文件编译时间：Fri Dec 18 2015 10:28:11 GMT+0800 (中国标准时间)
 * 1：基本信息：
 * 开源协议：https://raw.githubusercontent.com/xucongli1989/XJsTool/master/LICENSE
 * 项目地址：https://github.com/xucongli1989/XJsTool
 * 贡献者：xucongli1989（https://github.com/xucongli1989）
 * 电子邮件：80213876@qq.com
 * Create By: XCL @ 2014.11 in Shanghai. China
 ********************************************************************************************
 * 2：使用说明：
 * 本插件不依赖于其它js库
 * 当前版本：v1.2.2
 * 更新时间：2015-11-21
 * 更新内容：
 *              1、增加其它方法
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * XJsTool
	 * @module XJsTool
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__], __WEBPACK_AMD_DEFINE_RESULT__ = function (g, r) {
		

	    /** @alias module:XJsTool  */
	    var app = {};

	    /**
	     * 版本信息
	     */
	    app.Version = "V1.2.2,By:XCL @ 2014.11 in Shanghai China,project url:https://github.com/xucongli1989/XJsTool";


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


	    app.Array = __webpack_require__(2);
	    app.Browser = __webpack_require__(3);
	    app.Common = __webpack_require__(4);
	    app.ContentType = __webpack_require__(5);
	    app.Cookie = __webpack_require__(6);
	    app.Data = __webpack_require__(7);
	    app.Date = __webpack_require__(9);
	    app.Dom = __webpack_require__(10);
	    app.Http = __webpack_require__(11);
	    app.Json = __webpack_require__(12);
	    app.Math = __webpack_require__(13);
	    app.Mobile = __webpack_require__(14);
	    app.Models = __webpack_require__(15);
	    app.Random = __webpack_require__(16);
	    app.Regex = __webpack_require__(17);
	    app.String = __webpack_require__(8);
	    app.Url = __webpack_require__(18);


	    if ((typeof window.define === "function" && window.define.amd)) {
	        window.define("XJsTool", [], function () {
	            return app;
	        });
	    } else {
	        window.XJsTool = window.XJ = app;
	    }

	    return app;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	* 全局
	* @module Global
	*/
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {

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

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));






/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * 数组相关
	 * @module Array
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {
	    
	    /** @alias module:Array  */
	    var app = {
	        /**
	         * 合并多个数组为一个数组
	         * @param {Array} args 要合并的数组参数，如：arr1,arr2,arr3...
	         * @returns {Array} 合并后的结果数组
	         */
	        Concat: function (args) {
	            return [].concat.apply([], arguments);
	        },
	        /**
	         * 将一个或多个数组合并为一个字符串
	         * @param {String} separator 指定分隔符
	         * @param {Array} args 要合并的数组参数(arr1,arr2,arr3...)
	         * @returns {String} 合并后的字符串
	         */
	        Join: function (separator, args) {
	            var source = [];
	            if (arguments.length > 2) {
	                for (var i = 1; i < arguments.length; i++) {
	                    source = source.concat(arguments[i]);
	                }
	            } else {
	                source = arguments[1];
	            }
	            return source.join(separator);
	        },
	        /**
	        * 判断指定val是否在数组array中
	        * @param {Object} val 需要判断的值
	        * @param {Array} array 所在的数组
	        * @param {Number} idx 从数组array的idx处开始判断，若未指定，则从整个数组array中判断
	        * @returns {Number} val在array中的位置，若不在，则返回-1
	        */
	        InArray: function (val, array, idx) {
	            if (!array) return -1;
	            var arrLen = array.length;
	            idx = idx || 0;
	            idx = (idx < 0 || idx > array.length - 1) ? 0 : idx;
	            for (; idx < arrLen; idx++) {
	                if (array[idx] === val) {
	                    return idx;
	                }
	            }
	            return -1;
	        },
	        /**
	         * 去掉array中的重复项
	         * @param {Array} arr 需要去重的数组
	         * @returns {Array} 去重后的新数组
	         */
	        Unique: function (arr) {
	            if (!arr || arr.length <= 1) {
	                return arr;
	            }
	            var _arr = arr.sort(), duplicateIdx = [], idxLength = 0;
	            for (var i = 1; i < _arr.length; i++) {
	                if (_arr[i] === _arr[i - 1]) {
	                    idxLength = duplicateIdx.push(i);
	                }
	            }
	            if (idxLength > 0) {
	                while (idxLength--) {
	                    _arr.splice(duplicateIdx[idxLength], 1);
	                }
	                arr = _arr;
	            }
	            return arr;
	        },
	        /**
	         * 在指定数组中删除指定的数据
	         * @param {Array} sourceArr 待操作的数组
	         * @param {Array} removeArr 需要删除的项
	         * @returns {Array} 新的数组
	         */
	        Remove: function (sourceArr, removeArr) {
	            if (!sourceArr || !removeArr || removeArr.length == 0) {
	                return sourceArr;
	            }
	            removeArr = this.Unique(removeArr);
	            var sourceLen = sourceArr.length,
	                removeLen = removeArr.length,
	                tempIdx = -1;

	            for (var i = 0; i < sourceLen; i++) {
	                for (var j = 0; j < removeLen; j++) {
	                    tempIdx = this.InArray(removeArr[j], sourceArr);
	                    if (tempIdx >= 0) {
	                        sourceArr.splice(tempIdx, 1);
	                        sourceLen = sourceArr.length;
	                    }
	                }
	            }

	            return sourceArr;
	        }
	    };
	    return app;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * 浏览器相关
	 * @module Browser
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {
		
	    /** @alias module:Browser  */
	    var app = {
	        /**
	         * 判断是否为IE
	         * @param {int} version（6，7，8，9，10，11） 当指定此参数时，返回判断指定的IE版本结果，否则，则返回是否为IE
	         * @returns {bool} 判断结果
	         */
	        IsIE: function (version) {
	            var ie = (!-[1, ]);
	            if (!version) {
	                return ie;
	            }
	            var result = false;
	            switch (version) {
	                case 6:
	                    result = /msie 6/i.test(g.userAgent);
	                    break;
	                case 7:
	                    result = /msie 7/i.test(g.userAgent);
	                    break;
	                case 8:
	                    result = /msie 8/i.test(g.userAgent);
	                    break;
	                case 9:
	                    result = g.appVersion.match(/9./i) && g.appVersion.match(/9./i)[0] == "9.";
	                    break;
	                case 10:
	                    result = (g.doc.all && g.doc.addEventListener && window.atob);
	                    break;
	                case 11:
	                    result = !!g.userAgent.match(/Trident\/7\./);
	                    break;
	            }
	            return result;
	        },

	        /**
	         * 判断是否为Firefox
	         * @returns {bool} 判断结果
	         */
	        IsFirefox: function () {
	            return g.userAgent.indexOf("Firefox") >= 0;
	        },

	        /**
	         * 判断是否为Chrome
	         * @returns {bool} 判断结果
	         */
	        IsChrome: function () {
	            return g.userAgent.indexOf("Chrome") >= 0;
	        },
	        /**
	        * 判断是否为Safari
	        * @returns {bool} 判断结果
	        */
	        IsSafari: function () {
	            return g.userAgent.indexOf("Safari") >= 0;
	        },
	        /**
	         * 判断是否为Edge
	         * @returns {bool} 判断结果
	         */
	        IsEdge: function () {
	            return g.userAgent.indexOf("Edge/") >= 0;
	        },
	        /**
	         * 判断浏览器是否支持html5
	         * @returns {bool} 判断结果
	         */
	        IsSupportHTML5: function () {
	            return !!navigator.geolocation;
	        },
	        /**
	         * 判断浏览器是否安装了flash
	         * @returns {bool} 判断结果
	         */
	        HasFlash: function () {
	            var obj = null;
	            try {
	                obj = this.IsIE() ? new ActiveXObject('ShockwaveFlash.ShockwaveFlash') : navigator.plugins['Shockwave Flash'];
	            } catch (e) { }
	            return !!obj;
	        }
	    };

	    return app;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * 公共方法
	 * @module Common
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(g){
		
	    /** @alias module:Common  */
	    var app= {
	        /**
	         * 向document输出字符串
	         * @param {string} str
	         */
	        Write: function (str) {
	            g.doc.write(str);
	        },
	        /**
	         * 创建全局命名空间
	         * @param {string} ns 名称，如"A.B.C"
	         * @returns {object}
	         */
	        CreateNamespace: function (ns) {
	            var obj = window, tokens = ns.split("."), token;
	            while (tokens.length > 0) {
	                token = tokens.shift();
	                if (typeof obj[token] === "undefined") {
	                    obj[token] = {};
	                }
	                obj = obj[token];
	            }
	            return obj;
	        }
	    };
	    
	    return app;
		
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	/**
	* ContentType处理相关
	* @module ContentType
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {

	    /** @alias module:ContentType  */
	    var app = {
	        /**
	        * 判断Content-Type(Mime-Type) 是否为gif格式
	        * @param {string} type ContentType
	        * @returns {bool} 判断结果
	        */
	        IsGif: function (type) {
	            return /^image\/gif$/i.test(type);
	        },
	        /**
	        * 判断Content-Type(Mime-Type) 是否为jpg/jpeg格式
	        * @param {string} type ContentType
	        * @returns {bool} 判断结果
	        */
	        IsJpg: function (type) {
	            return /^(image\/jpeg)|(application\/x\-jpg)$/i.test(type);
	        },
	        /**
	        * 判断Content-Type(Mime-Type) 是否为png格式
	        * @param {string} type ContentType
	        * @returns {bool} 判断结果        
	        */
	        IsPng: function (type) {
	            return /^(image\/png)|(application\/x\-png)$/i.test(type);
	        },
	        /**
	        * 判断Content-Type(Mime-Type) 是否为bmp格式
	        * @param {string} type ContentType
	        * @returns {bool} 判断结果
	        */
	        IsBmp: function (type) {
	            return /^application\/x\-bmp$/i.test(type);
	        },
	        /**
	        * 判断Content-Type(Mime-Type) 是否为gif/jpg/jpeg/png/bmp格式
	        * @param {string} type ContentType
	        * @returns {bool} 判断结果
	        */
	        IsImage: function (type) {
	            return /^(image\/(gif|jpeg|png))|(application\/(x\-jpg|x\-png|x\-bmp))$/i.test(type);
	        }
	    };

	    return app;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	* Cookie操作相关
	* @module Cookie
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {

	    /** @alias module:Cookie  */
	    var app = {
	        /**
	         * 根据cookie名，获取cookie
	         * @param {string} name cookie名称
	         * @returns {string} cookie值
	         */
	        GetCookie: function (name) {
	            var nameEQ = name + "=";
	            var ca = g.doc.cookie.split(';');
	            for (var i = 0; i < ca.length; i++) {
	                var c = ca[i];
	                while (c.charAt(0) == ' ')
	                    c = c.substring(1, c.length);
	                if (c.indexOf(nameEQ) == 0)
	                    return c.substring(nameEQ.length, c.length);
	            }
	            return null;
	        },
	        /**
	         * 设置cookie
	         * @param {string} name cookie名
	         * @param {string} value cookie值
	         * @param {int} days 过期时间（天数）
	         */
	        SetCookie: function (name, value, days) {
	            var expires = "";
	            if (days) {
	                var date = new Date();
	                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	                expires = "; expires=" + date.toGMTString();
	            }
	            g.doc.cookie = name + "=" + value + expires + "; path=/";
	        },
	        /**
	         * 删除cookie
	         * @param {string} name 名称
	         */
	        DelCookie: function (name) {
	            this.SetCookie(name, "", -1);
	        }
	    };

	    return app;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	* 数据处理操作相关
	* @module Data
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g, stringLib) {
		
		
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	* 字符串操作相关
	* @module String
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {
	    /** @alias module:String  */
	    var app = {
	        /**
	         * 去左右空格
	         * @param {string} str 待处理字符串
	         * @returns {string} 处理后的字符串
	         */
	        Trim: function (str) {
	            return str.replace(/^\s+|\s+$/g, "");
	        },
	        /**
	         * 去左空格
	         * @param {string} str 待处理字符串
	         * @returns {string} 处理后的字符串
	         */
	        LTrim: function (str) {
	            return str.replace(/^\s+/, "");
	        },
	        /**
	         * 去右空格
	         * @param {string} str 待处理字符串
	         * @returns {string} 处理后的值
	         */
	        RTrim: function (str) {
	            return str.replace(/\s+$/, "");
	        },
	        /**
	         * 格式输出
	         * @param {string} str 待处理字符串
	         * @param {Arguments} arguments 格式
	         * @returns {string} 处理后的值
	         */
	        Format: function (str) {
	            if (arguments.length <= 1) {
	                return str;
	            }
	            var tokenCount = arguments.length - 2;
	            for (var token = 0; token <= tokenCount; token++) {
	                str = str.replace(new RegExp("\\{" + token + "\\}", "gi"), arguments[token + 1]);
	            }
	            return str;
	        },
	        /**
	         * 指定源字符串sourceStr中是否包含str字符串
	         * @param {string} sourceStr 源字符串
	         * @param {string} str 要查找的字符串
	         * @param {Boolean} isIgnoreCase 是否忽略大小写
	         * @returns {Boolean} 结果
	         */
	        Contains: function (sourceStr, str, isIgnoreCase) {
	            if (sourceStr) {
	                if (isIgnoreCase) {
	                    sourceStr = sourceStr.toUpperCase();
	                    str = str.toUpperCase();
	                }
	                return sourceStr.indexOf(str) >= 0;
	            } else {
	                return false;
	            }
	        },
	        /**
	         * StringBuilder
	         * @constructs
	         */
	        Builder: function () {
	            this._arr = [];
	        },
	        /**
	        * 将html标签转换为实体形式
	        * @param {string} html 需要被替换的html
	        * @returns {string} 转换后的值
	        */
	        EscapeHtml: function (html) {
	            return String(html).replace(/[&<>"'\/]/g, function (s) {
	                return g.entityMap[s];
	            });
	        }
	    };
	    /**
	     * 追加字符
	     * @param str 要追加的字符串
	     */
	    app.Builder.prototype.Append = function (str) {
	        this._arr.push(str);
	    };
	    /**
	     * 带格式追加字符
	     */
	    app.Builder.prototype.AppendFormat = function () {
	        this._arr.push(app.Format.apply(null, arguments));
	    };
	    /**
	     * 返回StringBuilder的字符串
	     * @returns {string} 新的字符串
	     */
	    app.Builder.prototype.ToString = function () {
	        return this._arr.join("");
	    };
	    /**
	     * 清除StringBuilder
	     */
	    app.Builder.prototype.Clear = function () {
	        this._arr = [];
	    };
	    /**
	     * 返回StringBuilder的字符串的长度
	     * @returns {int} 长度
	     */
	    app.Builder.prototype.Length = function () {
	        return this.ToString().length;
	    };

	    return app;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	* 日期时间处理相关
	* @module Date
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {
	    /**
	    * 是否为int（私有）
	    * @param {string} val 要判断的值
	    * @returns {Boolean} 判断结果
	    */
	    var _isInteger = function (val) {
	        var digits = "1234567890";
	        for (var i = 0; i < val.length; i++) {
	            if (digits.indexOf(val.charAt(i)) == -1) { return false; }
	        }
	        return true;
	    };
	    /**
	     * 获取int（私有）
	     * @param {string} str
	     * @param {int} i
	     * @param {int} minlength
	     * @param {int} maxlength
	     */
	    var _getInt = function (str, i, minlength, maxlength) {
	        for (var x = maxlength; x >= minlength; x--) {
	            var token = str.substring(i, i + x);
	            if (token.length < minlength) { return null; }
	            if (_isInteger(token)) { return token; }
	        }
	        return null;
	    };
	    /**
	     * 月份名数组
	     * @type Array
	     */
	    var MONTH_NAMES = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
	    /**
	     * 星期名数组
	     * @type Array
	     */
	    var DAY_NAMES = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
	    var LZ = function (x) { return (x < 0 || x > 9 ? "" : "0") + x };
	    
	    
	    
	    
	    /** @alias module:Date  */
	    var app = {
	        /**
	         * 格式化date
	         * 参考于：Matt Kruse's Blog （Date Functions: http://javascripttoolbox.com/lib/date/）
	         * @param {Date} date 时间
	         * @param {string} format 格式
	         * @returns {String} 格式化后的结果
	         */
	        FormatDate: function (date, format) {
	            format = format + "";
	            var result = "";
	            var i_format = 0;
	            var c = "";
	            var token = "";
	            var y = date.getYear() + "";
	            var M = date.getMonth() + 1;
	            var d = date.getDate();
	            var E = date.getDay();
	            var H = date.getHours();
	            var m = date.getMinutes();
	            var s = date.getSeconds();
	            //var yyyy, yy, MMM, MM, dd, hh, h, mm, ss, ampm, HH, H, KK, K, kk, k;
	            // Convert real date parts into formatted versions
	            var value = new Object();
	            if (y.length < 4) { y = "" + (y - 0 + 1900); }
	            value["y"] = "" + y;
	            value["yyyy"] = y;
	            value["yy"] = y.substring(2, 4);
	            value["M"] = M;
	            value["MM"] = LZ(M);
	            value["MMM"] = MONTH_NAMES[M - 1];
	            value["NNN"] = MONTH_NAMES[M + 11];
	            value["d"] = d;
	            value["dd"] = LZ(d);
	            value["E"] = DAY_NAMES[E + 7];
	            value["EE"] = DAY_NAMES[E];
	            value["H"] = H;
	            value["HH"] = LZ(H);
	            if (H == 0) { value["h"] = 12; }
	            else if (H > 12) { value["h"] = H - 12; }
	            else { value["h"] = H; }
	            value["hh"] = LZ(value["h"]);
	            if (H > 11) { value["K"] = H - 12; } else { value["K"] = H; }
	            value["k"] = H + 1;
	            value["KK"] = LZ(value["K"]);
	            value["kk"] = LZ(value["k"]);
	            if (H > 11) { value["a"] = "PM"; }
	            else { value["a"] = "AM"; }
	            value["m"] = m;
	            value["mm"] = LZ(m);
	            value["s"] = s;
	            value["ss"] = LZ(s);
	            while (i_format < format.length) {
	                c = format.charAt(i_format);
	                token = "";
	                while ((format.charAt(i_format) == c) && (i_format < format.length)) {
	                    token += format.charAt(i_format++);
	                }
	                if (value[token] != null) { result = result + value[token]; }
	                else { result = result + token; }
	            }
	            return result;
	        },
	        /**
	         * 根据指定格式，返回 1970 年 1 月 1 日至val的毫秒数
	         * @param {string} val 时间
	         * @param {string} format 格式
	         * @returns {Number} 毫秒数
	         */
	        GetDateFromFormat: function (val, format) {
	            val = val + "";
	            format = format + "";
	            var iVal = 0;
	            var iFormat = 0;
	            var c = "";
	            var token = "";
	            //var token2 = "";
	            var x, y;
	            var now = new Date();
	            var year = now.getYear();
	            var month = now.getMonth() + 1;
	            var date = 1;
	            var hh = 0;
	            var mm = 0;
	            var ss = 0;
	            var ampm = "";

	            while (iFormat < format.length) {
	                // Get next token from format string
	                c = format.charAt(iFormat);
	                token = "";
	                while ((format.charAt(iFormat) === c) && (iFormat < format.length)) {
	                    token += format.charAt(iFormat++);
	                }
	                // Extract contents of value based on format token
	                if (token === "yyyy" || token === "yy" || token === "y") {
	                    if (token === "yyyy") {
	                        x = 4;
	                        y = 4;
	                    }
	                    if (token === "yy") {
	                        x = 2;
	                        y = 2;
	                    }
	                    if (token === "y") {
	                        x = 2;
	                        y = 4;
	                    }
	                    year = _getInt(val, iVal, x, y);
	                    if (year === null) {
	                        return NaN;
	                    }
	                    iVal += year.length;
	                    if (year.length === 2) {
	                        if (year > 70) {
	                            year = 1900 + (year - 0);
	                        } else {
	                            year = 2000 + (year - 0);
	                        }
	                    }
	                } else if (token === "MMM" || token === "NNN") {
	                    month = 0;
	                    for (var i = 0; i < MONTH_NAMES.length; i++) {
	                        var monthName = MONTH_NAMES[i];
	                        if (val.substring(iVal, iVal + monthName.length).toLowerCase() === monthName.toLowerCase()) {
	                            if (token === "MMM" || (token === "NNN" && i > 11)) {
	                                month = i + 1;
	                                if (month > 12) {
	                                    month -= 12;
	                                }
	                                iVal += monthName.length;
	                                break;
	                            }
	                        }
	                    }
	                    if ((month < 1) || (month > 12)) {
	                        return NaN;
	                    }
	                } else if (token === "EE" || token === "E") {
	                    for (var n = 0; n < DAY_NAMES.length; n++) {
	                        var dayName = DAY_NAMES[n];
	                        if (val.substring(iVal, iVal + dayName.length).toLowerCase() === dayName.toLowerCase()) {
	                            iVal += dayName.length;
	                            break;
	                        }
	                    }
	                } else if (token === "MM" || token === "M") {
	                    month = _getInt(val, iVal, token.length, 2);
	                    if (month === null || (month < 1) || (month > 12)) {
	                        return NaN;
	                    }
	                    iVal += month.length;
	                } else if (token === "dd" || token === "d") {
	                    date = _getInt(val, iVal, token.length, 2);
	                    if (date === null || (date < 1) || (date > 31)) {
	                        return NaN;
	                    }
	                    iVal += date.length;
	                } else if (token === "hh" || token === "h") {
	                    hh = _getInt(val, iVal, token.length, 2);
	                    if (hh === null || (hh < 1) || (hh > 12)) {
	                        return NaN;
	                    }
	                    iVal += hh.length;
	                } else if (token === "HH" || token === "H") {
	                    hh = _getInt(val, iVal, token.length, 2);
	                    if (hh === null || (hh < 0) || (hh > 23)) {
	                        return NaN;
	                    }
	                    iVal += hh.length;
	                } else if (token === "KK" || token === "K") {
	                    hh = _getInt(val, iVal, token.length, 2);
	                    if (hh === null || (hh < 0) || (hh > 11)) {
	                        return NaN;
	                    }
	                    iVal += hh.length;
	                } else if (token === "kk" || token === "k") {
	                    hh = _getInt(val, iVal, token.length, 2);
	                    if (hh === null || (hh < 1) || (hh > 24)) {
	                        return NaN;
	                    }
	                    iVal += hh.length;
	                    hh--;
	                } else if (token === "mm" || token === "m") {
	                    mm = _getInt(val, iVal, token.length, 2);
	                    if (mm === null || (mm < 0) || (mm > 59)) {
	                        return NaN;
	                    }
	                    iVal += mm.length;
	                } else if (token === "ss" || token === "s") {
	                    ss = _getInt(val, iVal, token.length, 2);
	                    if (ss === null || (ss < 0) || (ss > 59)) {
	                        return NaN;
	                    }
	                    iVal += ss.length;
	                } else if (token === "a") {
	                    if (val.substring(iVal, iVal + 2).toLowerCase() === "am") {
	                        ampm = "AM";
	                    } else if (val.substring(iVal, iVal + 2).toLowerCase() === "pm") {
	                        ampm = "PM";
	                    } else {
	                        return NaN;
	                    }
	                    iVal += 2;
	                } else {
	                    if (val.substring(iVal, iVal + token.length) !== token) {
	                        return NaN;
	                    } else {
	                        iVal += token.length;
	                    }
	                }
	            }
	            // If there are any trailing characters left in the value, it doesn't match
	            if (iVal !== val.length) {
	                return NaN;
	            }
	            // Is date valid for month?
	            if (month === 2) {
	                // Check for leap year
	                if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) { // leap year
	                    if (date > 29) {
	                        return NaN;
	                    }
	                } else {
	                    if (date > 28) {
	                        return NaN;
	                    }
	                }
	            }
	            if ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
	                if (date > 30) {
	                    return NaN;
	                }
	            }
	            // Correct hours value
	            if (hh < 12 && ampm === "PM") {
	                hh = hh - 0 + 12;
	            } else if (hh > 11 && ampm === "AM") {
	                hh -= 12;
	            }
	            var newdate = new Date(year, month - 1, date, hh, mm, ss);
	            return newdate.getTime();
	        },
	        /**
	         * 将date字符串转为Date对象
	         * @param {string} date Date字符串
	         * @param {string} format 格式
	         * @returns {Date} Date对象
	         */
	        ParseDate: function (date, format) {
	            var result = null;
	            if (format) {
	                result = this.GetDateFromFormat(date, format);
	            }
	            else {
	                var timestamp = Date.parse(date), minutesOffset = 0, match;
	                if (isNaN(timestamp) && (match = /^(\d{4}|[+\-]\d{6})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?))?/.exec(date))) {
	                    if (match[8] !== 'Z') {
	                        minutesOffset = +match[10] * 60 + (+match[11]);

	                        if (match[9] === '+') {
	                            minutesOffset = 0 - minutesOffset;
	                        }
	                    }

	                    match[7] = match[7] || '000';

	                    timestamp = Date.UTC(+match[1], +match[2] - 1, +match[3], +match[4], +match[5] + minutesOffset, +match[6], +match[7].substr(0, 3));
	                }

	                result = timestamp;
	            }
	            return result ? new Date(result) : null;
	        },
	        /*
	        * 将字符串"/Date(...)/"的日期转为js Date对象
	        * @param {string} dateStr date字符串，如"/Date(1441036800000)/"
	        * @returns {Date} 如果转换成功，则返回Date对象，否则返回null
	        */
	        Parse: function (dateStr) {
	            if (!dateStr || typeof dateStr !== "string") return null;
	            var date = null;
	            var mts = dateStr.match(/(\/Date\((\d+)\)\/)/);
	            if (mts && mts.length >= 3) {
	                date = new Date(parseInt(mts[2]));
	            }
	            if (!date || date.toUTCString() == "Invalid Date") {
	                return null;
	            }
	            return date;
	        }
	    };

	    return app;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	/**
	* 日期时间处理相关
	* @module Dom
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(7), __webpack_require__(2), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g, dataLib, arrayLib, stringLib) {
		
	    /** @alias module:Dom  */
	    var app = {
	        /**
	         * 根据id，获取或设置指定元素的value
	         * @param {string} id 元素的id值
	         * @value {string} value 要设置的value值（可选）
	         */
	        Val: function (id, value) {
	            var obj = g.doc.getElementById(id);
	            if (arguments.length === 1) {
	                if (obj) {
	                    return obj.value;
	                }
	                return null;
	            } else if (arguments.length === 2) {
	                if (obj) {
	                    obj.value = value;
	                }
	            }
	        },
	        /**
	         * 根据指定value，选中select对象中option
	         * @param {object} selectObj html元素对象或元素的id
	         * @param {object} val 要选中的值或值数组
	         */
	        SelectOption: function (selectObj, val) {
	            var obj = null, valArr = [];
	            if (dataLib.IsString(selectObj)) {
	                obj = g.doc.getElementById(selectObj);
	            } else {
	                obj = selectObj;
	            }
	            if (dataLib.IsArray(val)) {
	                valArr = val;
	            } else {
	                valArr.push(val);
	            }
	            if (!obj || !obj.options || !valArr) {
	                return false;
	            }
	            var ops = obj.options;
	            for (var i = 0; i < ops.length; i++) {
	                if (arrayLib.InArray(ops[i].value, valArr) > -1) {
	                    ops[i].selected = true;
	                }
	            }
	        },
	        /**
	         * 向指定容器中追加hidden，key为name和id
	         * @param {Array} data json数组，如[{key:key1,value:value1},{key:key2,value:value2}]
	         * @param {Object} containerObj 被追加的容器（默认为form对象）
	         */
	        AddHiddens: function (data, containerObj) {
	            containerObj = containerObj || g.doc.getElementsByTagName("form")[0];
	            if (data && data.length > 0) {
	                var html = "";
	                for (var i = 0; i < data.length; i++) {
	                    html += (stringLib.Format("<input type='hidden' name='{0}' id='{0}' value='{1}' />", data[i].key, data[i].value));
	                }
	                var div = g.doc.createElement("div");
	                div.style.display = "none";
	                div.innerHTML = html;
	                containerObj.appendChild(div);
	            }
	        },
	        /**
	         * 绑定select数据源
	         * @param {object} selectObj html元素对象或元素的id
	         * @param {Array} dataSource Models.Dictionary数组
	         * @param {String} defaultValue 默认选中项
	         */
	        BindSelect: function (selectObj, dataSource, defaultValue) {
	            if (!dataSource) {
	                return false;
	            }

	            var obj = null;
	            if (dataLib.IsString(selectObj)) {
	                obj = g.doc.getElementById(selectObj);
	            } else {
	                obj = selectObj;
	            }

	            if (!obj) {
	                return false;
	            }

	            var html = [], len = dataSource.length;
	            for (var i = 0; i < len; i++) {
	                html.push('<option value="' + dataSource[i].value + '"' + (dataSource[i].value == defaultValue ? ' selected="selected" ' : '') + '>' + dataSource[i].key + '</option>');
	            }
	            obj.innerHTML = html.join('');

	        }
	    };

	    return app;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	* Http操作相关
	* @module Http
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {
		
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

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	* JSON处理相关
	* @module Json
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g, dataLib) {
		
		
	    /** @alias module:Json  */
	    var app = {
	        /**
	         * 是否包含名key
	         * @param {object} json json对象
	         * @param {string} keyName key名
	         * @returns {bool} 判断结果
	         */
	        HasKey: function (json, keyName) {
	            var r = false;
	            if (json) {
	                if (keyName in json) {
	                    r = true;
	                }
	            }
	            return r;
	        },
	        /**
	         * 是否包含值value
	         * @param {object} json json对象
	         * @param {object} keyValue value值
	         * @returns {bool} 判断结果
	         */
	        HasValue: function (json, keyValue) {
	            var r = false;
	            if (json) {
	                for (var k in json) {
	                    if (json[k] === keyValue) {
	                        r = true;
	                        break;
	                    }
	                }
	            }
	            return r;
	        },
	        /**
	         * json对象转成param形式的字符串，如{a:1,b:2,c:[3,4,5]}=>"a=1&b=2&c=3&c=4&c=5"
	         * @param {object} json 待转换的json数据源
	         * @returns {string} 转换结果
	         */
	        ToParams: function (json) {
	            if (!json) return "";
	            var arr = [], temp = "";
	            for (var m in json) {
	                temp = "";
	                if (dataLib.IsArray(json[m])) {
	                    temp = json[m].join("&" + m + "=");
	                } else {
	                    temp = json[m];
	                }
	                arr.push(m + "=" + temp);
	            }
	            return arr.join("&");
	        }
	    };

	    return app;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	* 数学计算相关
	* @module Math
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g, dataLib) {
		
		
	    /** @alias module:Math  */
	    var app = {
	        /**
	         * 返回指定值中的最小值
	         * @param {array} val 可以为一个数组，也可以为多个参数
	         * @returns {Number} 最小值
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
	         * @returns {Number} 最大值
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	* 移动端相关
	* @module Mobile
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {
		
		
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

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	/**
	* 公共model
	* @module Models
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {
		
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

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	* 随机数相关
	* @module Random
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {
		
	    /** @alias module:Random  */
	    var app = {
	        /**
	         * 生成指定范围内的随机数
	         * @param {Number} min 最小值
	         * @param {Number} max 最大值
	         * @returns {Number} 结果值
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

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	* 正则相关
	* @module Regex
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {
		
	    /** @alias module:Regex  */
	    var regex = {};
	    /**
	     * 正则常量
	     */
	    regex.Regexs = {
	        /**
	         * Email
	         * @type RegExp
	         */
	        Email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
	        /**
	         * Url
	         * @type RegExp
	         */
	        Url: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
	        /**
	         * 中文
	         * @type RegExp
	         */
	        Chinese: /[\u4e00-\u9fa5]/,
	        /**
	         * 双字节
	         * @type RegExp
	         */
	        DoubleByte: /[^\x00-\xff]/,
	        /**
	         * 负整数
	         * @type RegExp
	         */
	        NegativeInt: /^-[0-9]*[1-9][0-9]*$/,
	        /**
	         * 非负整数
	         * @type RegExp
	         */
	        NotNegativeInt: /^d+$/,
	        /**
	         * 正整数
	         * @type RegExp
	         */
	        PositiveInt: /^[0-9]*[1-9][0-9]*$/,
	        /**
	         * 非正整数
	         * @type RegExp
	         */
	        NotPositiveInt: /^((-d+)|(0+))$/,
	        /**
	         * 整数
	         * @type RegExp
	         */
	        Int: /^-?d+$/,
	        /**
	         * 非负浮点
	         * @type RegExp
	         */
	        NotNegativeFloat: /^d+(.d+)?$/,
	        /**
	         * 正浮点
	         * @type RegExp
	         */
	        PositiveFloat: /^((0-9)+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*)$/,
	        /**
	         * 非正浮点
	         * @type RegExp
	         */
	        NotPositiveFloat: /^((-d+.d+)?)|(0+(.0+)?)$/,
	        /**
	         * 负浮点数
	         * @type RegExp
	         */
	        NegativeFloat: /^(-(((0-9)+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*)))$/,
	        /**
	         * 英文字母
	         * @type RegExp
	         */
	        English: /^[A-Za-z]+$/,
	        /**
	         * 英文大写字母
	         * @type RegExp
	         */
	        EnglishUpper: /^[A-Z]+$/,
	        /**
	         * 英文小写字母
	         * @type RegExp
	         */
	        EnglishLower: /^[a-z]+$/,
	        /**
	         * 英文字母+数字组合
	         * @type RegExp
	         */
	        EnglishOrNumber: /^[A-Za-z0-9]+$/,
	        /**
	         * 英文字母+数字+下划线组合
	         * @type RegExp
	         */
	        EnglishOrNumberOrUnderline: /^w+$/,
	        /**
	         * html
	         * @type RegExp
	         */
	        Html: /<(.*)>.*<\/\1>|<(.*) \/>/,
	        /**
	         * 国内电话号码
	         * @type RegExp
	         */
	        ChinaTel: /\d{3}-\d{8}|\d{4}-\d{7}/,
	        /**
	         * 国内邮编
	         * @type RegExp
	         */
	        ChinaPostCode: /[1-9]\d{5}(?!\d)/,
	        /**
	         * 国内身份证号
	         * @type RegExp
	         */
	        ChinaIDCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
	        /**
	        * 人类年龄(0~120)
	        * @type RegExp
	        */
	        HumanAge: /^(([0-9])|([1-9][0-9])|(1[0-1][0-9])|(120))$/
	    };


	    return regex;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	* Url处理相关
	* @module Url
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(12), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (g, jsonLib, dataLib) {
		
	    /** @alias module:Url  */
	    var app = {
	        /**
	         * 向URL中添加新的参数
	         * @param {string} url url字符串
	         * @param {object} params json参数,如：{k1:v1,k2:v2}
	         * @returns {String} 新的url
	         */
	        AddParam: function (url, params) {
	            var query = "";
	            if (params) {
	                query = jsonLib.ToParams(params);
	            }
	            if (query === "") {
	                return url;
	            }
	            if (url.indexOf('?') > -1) {
	                url = url + '&' + query;
	            } else {
	                url = url + '?' + query;
	            }
	            return url;
	        },
	        /**
	         * 将url查询参数转为json对象，如果该url中多个参数名一样，则该参数名对应的值是array类型
	         * 如："www.a.com?a=1&b=2&c=3&c=4" -> {"a":"1","b":"2","c":["3","4"]}
	         * @param {string} url url字符串
	         * @returns {object} json对象
	         */
	        GetUrlParamsJson: function (url) {
	            var m = {};
	            var strUrl = [];
	            strUrl = url.substring(url.indexOf('?') + 1, url.length).split('&');
	            for (var i = 0; i < strUrl.length; i++) {
	                var curStr = strUrl[i].split('=');
	                if (curStr.length === 2) {
	                    var k = curStr[0];
	                    var v = curStr[1];
	                    if (jsonLib.HasKey(m, k)) {
	                        //如果key已经存在，则该key值为数组类型，将值放入数组即可
	                        if (dataLib.IsArray(m[k])) {
	                            m[k].push(v);
	                        } else {
	                            var arr = [];
	                            arr.push(m[k], v);
	                            m[k] = arr;
	                        }
	                    } else {
	                        m[k] = v;
	                    }
	                }
	            }
	            return m;
	        }
	    };

	    return app;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);