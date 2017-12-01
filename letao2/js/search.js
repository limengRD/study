$(function () {
    var localStorageString = localStorage.getItem("localStorage") || '[]';
    var localStorageArr = JSON.parse(localStorageString);
    console.log(localStorageArr);
    $('.lt_history').html(template('localStorage',{list:localStorageArr}));
    
    // 删除功能
    $('.lt_history').on('click','ul li span',function () {
        localStorageArr.splice($(this).data('index'),1);

        localStorage.setItem('localStorage',JSON.stringify(localStorageArr));
        $('.lt_history').html(template('localStorage',{list:localStorageArr}));
    });
    // 批量删除
    $('.lt_history').on('click','.clear_history',function () {
        localStorageArr = [];
        localStorage.setItem('localStorage',JSON.stringify(localStorageArr));
        $('.lt_history').html(template('localStorage',{list:localStorageArr}));        
    })

    //跳转页面

    $('.search_btn').on('click',function () {
        location.href = 'searchList.html?key='+$('.search_input').val();
        var onOff = false;
        var index = 0;
        var addLocalStorage = $('.search_input').val();
        $.each(localStorageArr,function(i,item){
            if(item == addLocalStorage) {
                onOff = true;
                index = i;
            }
        })
        console.log(onOff)
        if(onOff) {
            localStorageArr.splice(index,1); 
            localStorageArr.push(addLocalStorage);
        }else {
            localStorageArr.push(addLocalStorage);
            if(localStorageArr.length > 10 ) {
                localStorageArr.splice(0,localStorageArr.length -10);
            }
        }
        localStorage.setItem('localStorage',JSON.stringify(localStorageArr));
        $('.lt_history').html(template('localStorage',{list:localStorageArr}));
        

    })
})