
/**
* 日期时间处理相关
* @module Dom
*/
define(['global', 'data', 'array', 'string'], function (g, dataLib, arrayLib, stringLib) {
	
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
         * @param {element object or element's id string} selectObj html元素对象或元素的id
         * @param {string or array} val 要选中的值或值数组
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
         * @param {jsonArray} data json数组，如[{key:key1,value:value1},{key:key2,value:value2}]
         * @param {object} containerObj 被追加的容器（默认为form对象）
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
         * @param {element object or element's id string} selectObj html元素对象或元素的id
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
});