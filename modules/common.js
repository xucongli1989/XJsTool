/**
 * 公共方法
 * @module Common
 */
define(['global'],function(g){
	
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
	
});