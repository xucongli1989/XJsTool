define(['global'],function(g){
	
	

    /**
     * 浏览器相关
     */
    return  {
        /**
         * 判断是否为IE
         * @param {int} version（6，7，8，9，10，11） 当指定此参数时，返回判断指定的IE版本结果，否则，则返回是否为IE
         * @returns {bool}
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
         */
        IsFirefox: function () {
            return g.userAgent.indexOf("Firefox") >= 0;
        },

        /**
         * 判断是否为Chrome
         */
        IsChrome: function () {
            return g.userAgent.indexOf("Chrome") >= 0;
        },
        /**
        * 判断是否为Safari
        */
        IsSafari: function () {
            return g.userAgent.indexOf("Safari") >= 0;
        },
        /**
         * 判断是否为Edge
         */
        IsEdge: function () {
            return g.userAgent.indexOf("Edge/") >= 0;
        }
    };

	
});