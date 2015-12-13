
/**
* ContentType处理相关
* @module ContentType
*/
define(['global'], function (g) {

    /** @alias module:ContentType  */
    var app = {
        /**
        * 判断Content-Type(Mime-Type) 是否为gif格式
        */
        IsGif: function (type) {
            return /^image\/gif$/i.test(type);
        },
        /**
        * 判断Content-Type(Mime-Type) 是否为jpg/jpeg格式
        */
        IsJpg: function (type) {
            return /^(image\/jpeg)|(application\/x\-jpg)$/i.test(type);
        },
        /**
        * 判断Content-Type(Mime-Type) 是否为png格式
        */
        IsPng: function (type) {
            return /^(image\/png)|(application\/x\-png)$/i.test(type);
        },
        /**
        * 判断Content-Type(Mime-Type) 是否为bmp格式
        */
        IsBmp: function (type) {
            return /^application\/x\-bmp$/i.test(type);
        },
        /**
        * 判断Content-Type(Mime-Type) 是否为gif/jpg/jpeg/png/bmp格式
        */
        IsImage: function (type) {
            return /^(image\/(gif|jpeg|png))|(application\/(x\-jpg|x\-png|x\-bmp))$/i.test(type);
        }
    };

    return app;
});