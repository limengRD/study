$(function(){
    mui.init({
        pullRefresh: {
            container: ".mui-scroll-wrapper",
            indicators: false,
            down: {
                auto: true,
                callback: function () {
                    var that = this;
                    getCartData(function (data) {
                        console.log(data);
                        /*渲染列表*/
                        $('#cartList').html(template('cartListTemplate', {list: data}));
                        that.endPulldownToRefresh();
                    })
                }
            }
        }
    });
})
var  getCartData = function (callback) {
    lt.ajax({
        url: '/cart/queryCart',

        success: function(data) {
            window.data = data;
            callback && callback(data);
        }
    })
}