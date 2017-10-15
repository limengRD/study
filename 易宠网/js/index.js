$(function () {
    $(".eFoot-right-tab-ul li").mouseover(function () {
        console.log(123)
        $(this).addClass('active').children('span').addClass('active1').parent()
            .siblings().removeClass('active').children('span').removeClass('active1');
        $(this).prev().children('span').addClass('active1');
        $(this).parent().parent().next().children().eq($(this).index()).css('display','block');
        $(this).parent().parent().next().children().eq($(this).index()).siblings().css('display','none')
    })


    $(".place-div").on({
        'mouseenter': function () {
            $(this).children('.place-hidden').stop().slideDown(200);
            $(this).children('.place-show').children('b').css('backgroundPosition', '0 -46px')
        }, 'mouseleave': function () {
            $(this).children('.place-hidden').stop().slideUp(200);
            $(this).children('.place-show').children('b').css('backgroundPosition', '0 -31px')
        }
    })

    $(".mye").on({
        'mouseenter': function () {
            $(this).children('.mye-hidden').stop().slideDown(200);
            $(this).children('.topgz').find('b').css({ 'transform': 'rotate(180deg)', 'transition': '0.5s', 'transform-origin': '50% 25%' })
        }, 'mouseleave': function () {
            $(this).children('.mye-hidden').stop().slideUp(200);
            $(this).children('.topgz').find('b').css({ 'transform': 'rotate(0deg)', 'transition': '0.5s' })
        }
    })

    $(".collect").on({
        'mouseenter': function () {
            $(this).children('.collect-hidden').stop().slideDown(200);
            $(this).children('.topgz').find('b').css({ 'transform': 'rotate(180deg)', 'transition': '0.5s', 'transform-origin': '50% 25%' })
        }, 'mouseleave': function () {
            $(this).children('.collect-hidden').stop().slideUp(200);
            $(this).children('.topgz').find('b').css({ 'transform': 'rotate(0deg)', 'transition': '0.5s' })
        }
    })
// 二级菜单
    var timer = null;
    var index = 0;
    $('.classify-body ul li').on({
        'mouseenter': function () {
            console.log(123)
            clearTimeout(timer);
            index = $(this).index();
            var idx = $(this).index() + 1;
            $(this).find('em').addClass('box-b');
            $(this).find('h3').css({ 'background': 'url()' }).stop().animate({ 'paddingLeft': '30' }, 500);
            $(this).prev().css({ 'background': '#fff url()' })
            $(this).css({ 'border-top': '1px solid #459d36', 'border-bottom': '1px solid #459d36', 'background': '#fff url()' }).parent().parent().next().show().find('.cate' + idx).siblings().hide();
            $(this).parent().parent().next().show().find('.cate' + idx).show();
        }, 'mouseleave': function () {
            var idx = $(this).index() + 1;
            $(this).prev().css({ 'background': '#fff url(img/menuLine1.png) no-repeat bottom' })
            $(this).css({ 'border-top': '', 'border-bottom': '', 'background': '#fff url(img/menuLine1.png) no-repeat bottom' })
            $(this).find('em').removeClass('box-b');
            $(this).find('h3').css({ 'background': 'url(img/bg2.png) no-repeat right -1206px' }).stop().animate({ 'paddingLeft': '5' }, 500);
            timer = setTimeout(function () {

                $('.classify-body ul li').parent().parent().next().hide().find('.cate' + idx).hide();
            }, 10);
        }
    })
    $('.classify-hidden').on({
        'mouseenter': function () {
            clearTimeout(timer);
            // console.log(index)
            $('.classify-body ul li').eq(index).find('em').addClass('box-b');
            $('.classify-body ul li').eq(index).find('h3').css({ 'background': 'url()' }).stop().animate({ 'paddingLeft': '30' });
            $('.classify-body ul li').eq(index).css({ 'background': '#fff url()' })
            $('.classify-body ul li').eq(index).css({ 'border-top': '1px solid #459d36', 'border-bottom': '1px solid #459d36', 'background': '#fff url()' })
        }, 'mouseleave': function () {
            $(this).hide();
            $('.classify-body ul li').eq(index).prev().css({ 'background': '#fff url(img/menuLine1.png) no-repeat bottom' })
            $('.classify-body ul li').eq(index).css({ 'border-top': '', 'border-bottom': '', 'background': '#fff url(img/menuLine1.png) no-repeat bottom' })
            $('.classify-body ul li').eq(index).find('em').removeClass('box-b');
            $('.classify-body ul li').eq(index).find('h3').css({ 'background': 'url(img/bg2.png) no-repeat right -1206px' }).stop().animate({ 'paddingLeft': '5' });
        }
    })
   
    // 轮播图右侧的三个图片
    $('.gn div img').on({
        'mouseenter': function () {
            $(this).stop().animate({ 'marginLeft': '-12' }, 500)
        }, 'mouseleave': function () {
            $(this).stop().animate({ 'marginLeft': '0' }, 500)
        }
    })



    // 淡入淡出轮播图
    var attr = ['rgb(255, 243, 220)','rgb(248, 237, 245)','rgb(217, 211, 211)','rgb(176, 206, 214)','rgb(0, 0, 0)','rgb(29, 120, 255)','rgb(157, 29, 243)']
    var timer = null;
    var k = 0;

    function code() {
        $('.playpic a').eq(k).addClass('playpicActive').siblings().removeClass('playpicActive');
        $('.ma').eq(k).fadeIn().siblings().fadeOut();
        $('.playShow').stop().animate({'backgroundColor':attr[k]},500);
        $('.classify-title span').eq(spanIndex).stop().animate({'backgroundColor':attr[k]},500);
    }
    function autoplay(){
        timer = setInterval(function(){
            k++;
            if(k>$('.playpic a').length-1){
                k=0;
            }
            code();
        },2000)
    }
    autoplay();
    $('.playpic-all').on({
        'mouseenter':function(){
            clearInterval(timer);
        },
        'mouseleave':function(){
            autoplay();
        }
    })
    $('.playpic a').mouseenter(function(){
        k = $(this).index();
        code();
    })
    

    // 切换首页
    var spanIndex = 0;
    $('.classify-title span').on({
        'mouseenter':function(){
            spanIndex = $(this).index();
            var bg = $('.playShow').css('backgroundColor');
            $(this).find('b').css({'transform': 'rotate(180deg)', 'transition': '0.5s', 'transform-origin': '50% 50%'});
            $(this).css({'backgroundColor':bg}).find('a').css({'color':'#fff'});
            $(this).siblings().css({'backgroundColor':"#fff"}).find('a').css({'color':'#000'})
        },
        'mouseleave':function(){
            $(this).find('b').css({'transform': 'rotate(0deg)', 'transition': '0.5s' })
        }
    })

    $('.classify-title span').eq(0).mouseenter(function(){
        $('.classify-bodyf').stop().fadeIn();
        $('.classify-body').stop().fadeOut();
        $(this).find('b').css({'backgroundPosition':'0 -1257px'});
        $(this).siblings().find('b').css({'backgroundPosition':'-17px -1276px'})
    })
    $('.classify-title span').eq(1).mouseenter(function(){
        $('.classify-bodyf').stop().fadeOut();
        $('.classify-body').stop().fadeIn();
        $(this).find('b').css({'backgroundPosition':'0 -1276px'});
        $(this).siblings().find('b').css({'backgroundPosition':'-17px -1257px'})
    })

    // 小骨头旋转
    $('.menu li').on({
        'mouseenter':function(){
        $(this).find('b').css({
            'transform':'rotate(360deg)',
            'transition':'0.5s'
        })
    },
    'mouseleave':function(){
        $(this).find('b').css({
            'transform':'rotate(0deg)',
            'transition':''
        })
    }
    })


    // 商品列表滑动
    $('.aRight').click(function(){
        var ulLeft = $(this).parent().find('ul').position().left;
        if(ulLeft > -215*6){
            $(this).parent().find('ul').animate({"left":''+ ulLeft -215+'px'},500);
        } 
    })
    $('.aLeft').click(function(){
        var ulLeft = $(this).parent().find('ul').position().left;
        if(ulLeft < 0){
            $(this).parent().find('ul').animate({"left": ulLeft + 215+'px'},500);
        } 
    })

    $('li').on({
        'mouseenter':function(){
            $(this).find('img').stop().animate({ 'top': '-8' }, 500)
        },
        'mouseleave':function(){
            $(this).find('img').stop().animate({ 'top': '0' }, 500)
        }
    })

    $('dd').on({
        'mouseenter':function(){
            $(this).find('div').stop().animate({ 'left': '-27','opacity':'1' }, 500)
        },
        'mouseleave':function(){
            $(this).find('div').stop().animate({ 'left': '0','opacity':'0' }, 500)
        }
    })



    $(".gundong>li").mouseenter(function(){
        $(this).find("p").stop().animate({"top":"0"},500).parent().siblings().find("p").stop().animate({"bottom":"-93px"},500)
    })
    $(".gundong>li").mouseleave(function(){
        $(this).find("p").stop().animate({"top":"80"},500)
    })
})