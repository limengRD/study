$(function(){
    window.productId = lt.getParamsByUrl().productId;
    console.log(window.productId)
    /*1.初始化下拉加载效果*/
    mui.init({
        pullRefresh: {
            container: '#refreshContainer',
            down: {
                auto: true,
                callback: function () {
                    var that = this;
                    /*2.根据商品ID渲染页面*/
                    getProductDetailData(function (data) {
                        console.log(data)
                        $('.mui-scroll').html(template('productDetailTemplate', data));
                        /*页面渲染后要初始化轮播图*/
                        mui('.mui-slider').slider();
                        that.endPulldownToRefresh();
                    });
                }
            }
        }
    });
    
})
var getProductDetailData = function (callback) {
    $.ajax({
        type: 'get',
        url: '/product/queryProductDetail',
        data: {
            id:window.productId
        },
        dataType: 'json',
        success: function(data) {
            callback && callback(data);
        }
    })
}