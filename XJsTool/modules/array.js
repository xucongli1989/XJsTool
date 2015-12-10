define(['global'],function(g){
	/**
     * 数组相关
     */
    return  {
        /**
         * 合并多个数组为一个数组
         * @param {array} args 要合并的数组参数，如：arr1,arr2,arr3...
         * @returns {Array} 合并后的结果数组
         */
        Concat: function (args) {
            return [].concat.apply([], arguments);
        },
        /**
         * 将一个或多个数组合并为一个字符串
         * @param {string} separator 指定分隔符
         * @param {array} args 要合并的数组参数(arr1,arr2,arr3...)
         * @returns {string} 合并后的字符串
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
        * @param {object} val 需要判断的值
        * @param {Array} array 所在的数组
        * @param {number} idx 从数组array的idx处开始判断，若未指定，则从整个数组array中判断
        * @returns {number} val在array中的位置，若不在，则返回-1
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
        }
    };
	
});