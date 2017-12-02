$(function (){
    $('.mui-btn-primary').on('tap',function () {
        var formData = $('form').serialize();
        var data = lt.serialize2object(formData);
        if(!data.username) {
            mui.toast('请输入用户名');
            return false;
        }
        if(!data.password) {
            mui.toast('请输入密码');
            return false;
        }
        $.ajax({
            type: 'post',
            url: '/user/login',
            data: data,
            dataType: 'json',
            success: function (data) {
                if(data.success == true) {
                    var returnUrl = lt.getParamsByUrl().returnUrl;
                    
                    location.href = returnUrl;
                } else {
                    mui.toast(data.message);
                }
            }
        })
    })
})