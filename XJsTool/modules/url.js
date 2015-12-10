define(['global','json','data'],function(g,jsonLib,dataLib){
	
    /**
     * Url处理相关
     */
    return  {
        /**
         * 向URL中添加新的参数
         * @param {string} url
         * @param {json} params json参数,如：{k1:v1,k2:v2}
         * @returns {String}
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
         * @param {string} url
         * @returns {json}
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
	
});