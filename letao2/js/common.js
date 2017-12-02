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

lt.ajax = function (options) {
    $.ajax({
        type: options.type || 'get',
        url: options.url || '#',
        data:options.data || '',
        dataType:options.dataType || 'json',
        success: function (data) {
            if(data.error == '400') {
                console.log(123);
                location.href = '/m37/login.html?returnUrl=' + encodeURIComponent(location.href);
            }else {
                options.success && options.success(data);
            }
        }
    })
}
lt.serialize2object = function (serialize) {
    var obj = {};
    if(serialize) {
        var serializeArr = serialize.split('&');
        serializeArr.forEach(function (item,i) {
            var itemArr = item.split('=');
            obj[itemArr[0]] = itemArr[1];
        })
    }
    return obj;
}


