window.lt = {};
/*
* 获取地址栏参数的
* 返回类型是对象
* */
lt.getParamsByUrl = function () {
    var search = location.search;
    /*接收url参数的对象*/
    var params = {};
    if(search){
        /*去掉?*/
        search = search.substr(1);
        /*key=1&name=10 */
        var searchArr = search.split('&');
        searchArr.forEach(function (item,i) {
            /*item key=1*/
            /*item name=10 */
            /*itemArr [key,1] [name,10]*/
            var itemArr = item.split('=');
            /*encodeURIComponent 转成url编码  处理特殊字符串的传递*/
            /*decodeURIComponent 解url编码码  正常的字符串*/
            params[itemArr[0]] = decodeURIComponent(itemArr[1]);
        });
    }
    return params;
}
