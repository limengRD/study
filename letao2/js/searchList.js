$(function () {
    window.key = $('.lt_search input').val();
    window.page = 1;
    $('.lt_search input').val(lt.getParamsByUrl().key);

    mui.init({
        pullRefresh : {
            container:"#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
            down : {
                auto: true,
                callback :function () {
                    window.page = 1;
                    var that = this;
                    /*setTimeout(function () {
                        /!*mui('#refreshContainer').pullRefresh().endPulldownToRefresh();*!/
                        /!*停止下拉刷新*!/
                        that.endPulldownToRefresh();
                    },2000);*/
                    getProductListData(function (data) {
                        console.log(data)
                        $('.lt_product').html(template('productListTemplate',data));
                        that.endPulldownToRefresh();
                        that.refresh(true);
                    });
                }
            },
            up: {
                callback: function () {
                    var that = this;
                    /*上拉加载之后的回调函数*/
                    /*1.需求：加载下一页内容*/
                    /*2.方案：改变当前页面页码，再次发生ajax请求，把数据渲染成html,追加到商品列表*/
                    window.page++;
                    getProductListData(function (data) {
                        /*1.需求：当没有数据的时候  禁用上拉加载功能，友情提示：没有更多数据了*/
                        /*2.方案：根据返回的data去判断，如果是空数组，禁用功能 mui提供 */
                        if (data.data && data.data.length) {
                            /*有数据*/
                            $('.lt_product').append(template('productListTemplate', data));
                            /*停止上拉加载*/
                            that.endPullupToRefresh();
                        } else {
                            /*没有数据*/
                            /*停止上拉加载 禁用上拉加载功能，友情提示：没有更多数据了*/
                            that.endPullupToRefresh(true);
                        }
                    })
                }
            }
        }
    });

})
console.log($('.search_btn'))
$('.search_btn').on('tap',function () {
    window.key = $('.search_input').val();
    mui('#refreshContainer').pullRefresh().pulldownLoading();
})

$('.lt_order a').on('tap',function () {
    console.log(123)
    if($(this).hasClass('now')) {
        if($(this).find('span').hasClass('fa-angle-up')){
            $(this).find('span').removeClass('fa-angle-up').addClass('fa-angle-down');
        }else {
            $(this).find('span').removeClass('fa-angle-down').addClass('fa-angle-up');
        }
        
    } else {
        $('.lt_order a span').removeClass('fa-angle-up').addClass('fa-angle-down');
        $('.lt_order a').removeClass('now');
        $(this).addClass('now');
    }

    var type = $(this).data('type');
    console.log(type);
    var value = $(this).find('span').hasClass('fa-angle-up')? 2 : 1;
    console.log(value);
    window.order = {};
    window.order[type] = value;
    mui('#refreshContainer').pullRefresh().pulldownLoading();
})
var getProductListData = function (callback) {
    $.ajax({
        type: 'get',
        url: '/product/queryProduct',
        data: $.extend({
        proName: window.key,//$('.lt_search input').val()
        page: window.page,
        pageSize: 4
    },window.order)
        ,
        dataType:'json',
        success:function (data) {
            /*增加一点加载时间*/
                callback && callback(data);
        }
    });
}
