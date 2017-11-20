window.onload = function () {        
    //搜索条透明的渐变 
    var banner = document.querySelector('.jd_banner');
    var header = document.querySelector('.jd_header'); 
    var height = banner.offsetHeight;
    // console.log(height);
    // console.log(banner);
    // console.log(header);
    window.onscroll = function () {
        var top = document.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //    console.log(top); 
        var opacity = 0;
        if(top < height) {
            opacity = top / height * 0.85;
        } else {
            opacity = 0.85;
        }
        header.style.background = 'rgba(201,21,35,'+ opacity +')';
    }

    //轮播图
    var banner_ul = document.querySelector('.jd_banner ul:first-child');
    var banner_li = document.querySelectorAll('.jd_banner ul:last-child li');
    var width = banner.offsetWidth;
    //定义一个index 记录当前图片的位置
    var index = 1; 
    //定时器 定时 给index ++ 进行图片的切换
    var timer = setInterval(function () {
        index ++;
        banner_ul.style.transform = 'translateX('+ -index * width +'px)'; 
        banner_ul.style.transition = 'all 0.5s';
    },2000);
    banner_ul.addEventListener('transitionend',function () {
        
        if(index >=9) {
            index = 1;
            banner_ul.style.transition = 'none';
            banner_ul.style.transform = 'translateX('+ -index * width +'px)';
        } else if (index <= 0 ){
            index = 8;
            banner_ul.style.transition = 'none';
            banner_ul.style.transform = 'translateX(' + -index * width + 'px)';
        }
        point()
    })

    function point() {
        for(var i = 0; i < banner_li.length; i++) {
            banner_li[i].classList.remove('now');
        }
        banner_li[index - 1].classList.add('now');
    }
    var isMove = false;
    var movestart = 0;
    var moveall = 0;
    banner_ul.addEventListener('touchstart',function(e) {

        movestart = e.touches[0].clientX;
        clearInterval(timer);
    });
    banner_ul.addEventListener('touchmove',function(e)  {
        idMove = true;
        moveall = e.touches[0].clientX - movestart;
        banner_ul.style.transition = 'none';
        var a = -index*width+moveall;
        banner_ul.style.transform = 'translateX('+a+'px)';
    });
    banner_ul.addEventListener('touchend',function() {
        if(idMove) {

        if(Math.abs(moveall) < width /3)  {
            banner_ul.style.transition = 'all 0.2s';
            banner_ul.style.transform = 'translateX(' + -index * width + 'px)';
        } else {
            if(moveall > 0) {
                index--;
            } else {
                index++;
            }
            console.log(index)
            banner_ul.style.transition = 'all 0.2s';
            banner_ul.style.transform = 'translateX(' + -index * width + 'px)';
        }
        }
        movestart = 0;
        moveall = 0;
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            banner_ul.style.transform = 'translateX('+ -index * width +'px)'; 
            banner_ul.style.transition = 'all 0.5s';
        },2000)
    })
    var downTime = function () {
    var time = 3 * 60 * 60;
    var spans = document.querySelectorAll('.sk_time span');

    var timer = setInterval(function () {
        time--;
        var h = Math.floor(time / 3600);
        var m = Math.floor(time % 3600 / 60);
        var s = Math.floor(time % 60);
        spans[0].innerHTML = Math.floor(h / 10);
        spans[1].innerHTML = h % 10;

        spans[3].innerHTML = Math.floor(m / 10);
        spans[4].innerHTML = m % 10;

        spans[6].innerHTML = Math.floor(s / 10);
        spans[7].innerHTML = s % 10;
        if(time <=0){
            clearInterval(timer);
        }
    }, 1000);
};
downTime();
}
