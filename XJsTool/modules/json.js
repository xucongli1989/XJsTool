/**
* JSON处理相关
* @module Json
*/
define(['global', 'data'], function (g, dataLib) {
	
	
    /** @alias module:Json  */
    var app = {
        /**
         * 是否包含名key
         * @param {json} json
         * @param {string} keyName
         * @returns {bool}
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
         * @param {json} json
         * @param {string} keyValue
         * @returns {bool}
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
         * @param {json} json 待转换的数据源
         * @returns {string}
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
});