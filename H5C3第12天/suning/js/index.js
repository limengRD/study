$(function () {
    var index = 1;
    var width = $('.sn_banner').width();
    console.log(width)
    var timer = setInterval(function () {
        index ++;
        // 属性对象,动画事件,动画速度,结束的回调函数
        moveImg();
    },2000)

    function moveImg () {
        $('.sn_banner ul:first').animate({transform:'translateX('+ -index*width +'px)'},900,'easing',function () {
            if(index >=9) {
                index =1;
                $('.sn_banner ul:first').css({transform:'translateX('+(-index*width)+'px)'});
            } else if (index <=0 ) {
                index = 8;
                $('.sn_banner ul:first').css({transform:'translateX('+(-index*width)+'px)'});                
            }
            $('.sn_banner ul:last').find('li').removeClass('now').eq(index-1).addClass('now');
        });
    }
    $('.sn_banner').on('swipeLeft',function () {
        index++;
        moveImg();
    }).on('swipeRight',function () {
        index--;
        moveImg();
    })
})