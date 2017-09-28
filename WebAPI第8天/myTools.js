// 这是一个封装获取元素的方法  类似于 jQuery 的 $方法
function $(selector) {
    if (selector.charAt(0) == '#') {
        return document.getElementById(selector.substring(1));
    } else {
        return document.getElementsByTagName(selector);
    }
}

//封装一个获取 样式表样式的 兼容性的函数
// 标准浏览器下: getComputedStyle(obj元素).属性
// ie内核下:obj元素.currentStyle.属性
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

//封装四个 对节点进行操作的函数
//获取父亲节点的 第一个子节点 (不会获取空白字符)

//标准浏览器 包括:谷歌 火狐 ie9及以上  
//非标准浏览器 包括: ie9以下

//1.firstchild
// 标准浏览器:获取包含空白文本节点和元素节点
//非标准浏览器下:获取只包含元素节点*******
// firstElementChild
// 标准浏览器:获取第一个元素类型的字节点*******
//非标准浏览器下:不识别

//注意如果两个方法交换位置就会出错 如果firstChild在前面 父节点的第一个子节点如果是空白节点firstChild方法就会获取他 返回一个空白文本.

function first(obj) {
    var ele = obj.firstElementChild || obj.firstChild;
    //如果只存在一个空白文本节点 就会被 firstChild方法获取到 所以要判断是节点的类型是不是1.    
    if (ele && ele.nodeType == 1) {
        return ele;
    } else {
        return null;
    }
}


function last(obj) {
    var ele = obj.lastElementChild || obj.lastChild;
    if (ele && ele.nodeType == 1) {
        return ele;
    } else {
        return null;
    }
}


function pre(obj) {
    var ele = obj.previousElementSibling || obj.previousSibling;
    if (ele && ele.nodeType == 1) {
        return ele;
    } else {
        return null;
    }
}


function next(obj) {
    var ele = obj.nextElementSibling || obj.nextElementSibling;
    if (ele && ele.nodeType == 1) {
        return ele;
    } else {
        return null;
    }
}


// 这是封装了一个绑定方式的兼容性函数

//里面要传三个参数分别是 绑定函数的对象 绑定的事件名称 事件函数
// 在标准浏览器中:obj.addEventListener(evType,evFn,false)
// 在ie内核的浏览器中:obj.attachEvent(on+evType,evFn)
function bind(obj, evType, evFn) {
    obj.handle = function () {
        evFn.call(obj);
    }
    if (obj.addEventListener) {
        obj.addEventListener(evType, evFn, false);
        obj.handle = evFn;
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + evType, obj.handle);
    } else {
        obj["on" + evType] = evFn;
    }
}

// 这是封装了解绑函数
function unbind(obj, evType, evFn) {
    if (obj.removeEventListener) {
        obj.removeEventListener(evType, obj.handle, false);
    } else if (obj.detachEvent) {
        obj.detachEvent("on" + evType, obj.handle);
    } else {
        obj["on" + evType] = null;
    }

}
//封装运动函数

function move(obj, attr, speed, target, fn) {
    obj.timer = null;
    clearInterval(obj.timer);
    var dis = parseFloat(getStyle(obj, attr));
    speed = dis > target ? -speed : speed;
    obj.timer = setInterval(function () {
        dis += speed;
        if (dis <= target && speed < 0 || dis >= target && speed > 0) {
            dis = target;
        }
        obj.style[attr] = dis + 'px';

        if (dis == target) {
            clearInterval(obj.timer);
            obj.timer = null;
            fn && fn();
        }
    }, 30)
}

function startMove(obj, json) {

    clearInterval(obj.timer);
    var cur = 0;
    var speed = 0;
    obj.timer = setInterval(function () {

        var onOff = true;

        // 传入多个属性名和属性值 然后在定时器里面 循环遍历这个对象 每一次定时器执行的时候 都会遍历一次所有的属性
        //让所有的属性都往前挪一步
        for (var attr in json) {

            var target = json[attr];

            //通过判断attr属性是什么 如果传入的属性是透明度 说明你一定是要让透明度运动
            if (attr == "opacity") {
                cur = Math.round(getStyle(obj, attr) * 100);
            } else {
                cur = parseInt(getStyle(obj, attr));
            }


            /*289:4.4       289 + 4.4 == 293.4  293
            293:2.8000000000000003  293+2.8000  = 295.8
            295:2          295+ 2   297
            297:1.2000000000000002  297 + 1.2000 = 298.20000
            298:0.8 // 298 + 0.8  298+0.8 298 */

            /*
             *  289 + 5  294 + 3 ==  297  + 2  299 +1 300
             * 
             * */


            speed = (target - cur) / 6;
            // style="width: 299.981px;" width: 298.8px;
            // 处理一下运动过程中的取整问题 将物体运动分别判断  将结果达到目标点
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            //console.log(cur + ":" + speed);


            if (cur != target) {
                onOff = false;
                if (attr == "opacity") {
                    obj.style.opacity = (cur + speed) / 100;
                    obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
                } else {
                    obj.style[attr] = cur + speed + "px";
                }
            }


        }

        if (onOff) {
            clearInterval(obj.timer);
            obj.timer = null;
        }


    }, 30);

}
