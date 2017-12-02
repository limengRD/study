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
    
    $('.mui-scroll').on('tap','.pro_size span',function () {
        $(this).addClass('now').siblings().removeClass('now');
        console.log($(this).html())
    })
    $('.mui-scroll').on('tap','.pro_num span',function () {
        if($(this).data('type') == 1) {
            if(parseInt($('.pro_num input').val()) >= $('.pro_num input').attr('max')) {
                mui.toast('亲,没货了');
                // return false;
            } else {
                $('.pro_num input').val(parseInt($('.pro_num input').val()) +1)  ;
            }

        } else {
            if(parseInt($('.pro_num input').val()) <= 0) {
                mui.toast('不能再少了');
            }else {
                $('.pro_num input').val(parseInt($('.pro_num input').val()) -1)
            }
               
        }
    })

})
$('.addCart').on('tap',function (){
    var size = $('.btn_size.now').html();
    if(!size) {
        mui.toast('亲,请选择尺码');
        return false;
    }
    var num = parseInt($('.pro_num input').val());
 
    if(!num) {
        mui.toast('亲,请选择数量');
        return false;
    }
    console.log(size , num)
    var productId = window.productId;
    lt.ajax({
        type: 'post',
        url: '/cart/addCart',
        data: {
            productId: productId,
            size: size,
            num: num
        },
        success: function (data) {
            console.log(data)
            if(data.success == true) {
                mui.confirm('亲添加成功,去购物车看看吗？','温馨提示',['否','是'],function (e){
                    if(e.index ==1) {
                        location.href = '/m37/cart.html'
                    } else {

                    }
                })
            }
            
        }
    })
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