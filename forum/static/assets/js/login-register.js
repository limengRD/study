$(function() {
    $('.change a').on('click',function () {
        console.log(3123)
        $(this).css({"color":"#0f88bb"}).siblings().css({"color":"#000"})
        var index = $(this).index()
        console.log(index)
        $('.chose').eq(index-1).show().siblings('.chose').hide()
        $('.move').animate({"left": $(this).position().left+26})
    })
})