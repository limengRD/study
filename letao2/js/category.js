$(function () {
    getFirstCategoryData(function (data) {
        $('.lt_product_first ul').html(template('queryTopCategory',data));
        var firstCategoryId = data.rows[0].id;
        getSecondCategoryData({id:firstCategoryId},function (data) {
            $('.lt_product_seconed ul').html(template('secondTemplate',data));
        })
    });
})

$('.lt_product_first ul').on('click','li a',function () {
    var firstCategoryId = $(this).data('id');
    $('.lt_product_first li a').removeClass('now');
    $(this).addClass('now');
    getSecondCategoryData({id:firstCategoryId},function(data){
        $('.lt_product_seconed ul').html(template('secondTemplate',data));
    })
})

var getFirstCategoryData = function (callback) {
    $.ajax({
        type: 'get',
        url: '/category/queryTopCategory',
        data: {},
        dataType: 'json',
        success: function (data) {
            callback && callback(data);
        }
    })
}

var getSecondCategoryData = function (params,callback) {
    $.ajax({
        type: 'get',
        url: '/category/querySecondCategory',
        data: params,
        success: function (data) {
            callback && callback(data);
        } 
    })
}