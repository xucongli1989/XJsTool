define(['global'],function(g){
	
	    /**
     * 公共model
     */
    return  {
        /**
         * key value 模型
         * @param {string} key
         * @param {object} value
         */
        Dictionary: function (key, value) {
            this.key = key;
            this.value = value;
        }
    };
	
});