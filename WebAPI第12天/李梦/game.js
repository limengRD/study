
function bind(obj,evType,evFn) {
	if(obj.addEventListener){
		obj.addEventListener(evType,evFn,false);
	}else if(obj.attachEvent) {
		obj.attachEvent("on"+evType,evFn);
	}else {
		obj["on"+evType] = evFn;
	}
}
(function(window){
    function Game(map,jie) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        this.jie = jie;
    }
    Game.prototype.start = function () {
        this.food.render(this.map);
        this.snake.render(this.map);
        runSnake(this);
        bindKey(this);
    }
    function runSnake (that) {
        var timer = setInterval(function () {
            // console.log(that.jie)
            that.snake.move(that.food,that.map,that.jie);
            var headX = that.snake.body[0].x * that.snake.width;
            var headY = that.snake.body[0].y * that.snake.height;

            var maxX = that.map.offsetWidth;
            var maxY = that.map.offsetHeight;

            for(var i = 4 ; i < that.snake.body.length ; i++) {
                if(headX == that.snake.body[i].x*that.snake.width && headY == that.snake.body[i].y*that.snake.height) {
                    alert('Game Over');
                    clearInterval(timer);
                    return;
                }
            }
            if(headX < 0 || headX >= maxX) {
                alert('Game Over');
                clearInterval(timer);
                return;
            }
            if(headY < 0 || headY >= maxY) {
                alert('Game Over');
                clearInterval(timer);
                return;
            }   
            that.snake.render(that.map);
        },50)
    
    }
    
    
    function bindKey (that) {
        bind(document,'keydown',function (e) {
            switch(e.keyCode){
                case 37 :
                if(that.snake.direction != 'right'){
                   that.snake.direction = 'left'; 
                }
                break;
                case 38 :
                if(that.snake.direction != 'down'){
                   that.snake.direction = 'up'; 
                }
                break;
                case 39 :
                if(that.snake.direction != 'left'){
                    that.snake.direction = 'right';
                }
                break;
                case 40 :
                if(that.snake.direction != 'up'){
                    that.snake.direction = 'down';
                }
                break;
            }
        })
    }
    window.Game = Game;
})(window)
