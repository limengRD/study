window.onload = function () {
    var aLi = document.getElementsByTagName('li');
    for(var i = 0 ; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onclick =function () {
            for(var i = 0 ; i < aLi.length ; i++) {
                aLi[i].className = 'page-item';
            }
            aLi[this.index].className = 'page-item active';
        }
    }
}