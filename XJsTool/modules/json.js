/**
* JSON处理相关
* @module Json
*/
define(['global', 'data'], function (g, dataLib) {
	
	
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
});