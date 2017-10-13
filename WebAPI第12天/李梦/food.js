(function (window) {
    var oldFood = [];
    function Food (width,height,x,y,color) {
    this.width = width || 20;
    this.height = height || 20;
    this.x = 0;
    this.y = 0;
    this.color = 'green';
}
Food.prototype.render = function (map) {

    if(oldFood[0]){
        remove();
    }

    this.x = parseInt(Math.random()*(map.offsetWidth/this.width))*this.width;
    this.y = parseInt(Math.random()*(map.offsetHeight/this.height))*this.height;

    var oDiv = document.createElement('div');
    oDiv.style.width = this.width + 'px';
    oDiv.style.height = this.height + 'px';
    oDiv.style.left = this.x + 'px';
    oDiv.style.top = this.y + 'px';
    this.color = 'rgb('+ Math.round(Math.random()*255) +','+ Math.round(Math.random()*255) +','+ Math.round(Math.random()*255) +')'
    oDiv.style.background = this.color;
    oDiv.style.position = 'absolute';
    map.appendChild(oDiv);
    oldFood.push(oDiv)
}

function remove () {
    oldFood[0].parentNode.removeChild(oldFood[0]);
    oldFood.splice(0,1);
}
window.Food = Food;
})(window);
