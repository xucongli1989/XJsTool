/**
* Cookie操作相关
* @module Cookie
*/
define(['global'], function (g) {

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
                if (c.indexOf(nameEQ) === 0)
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

});