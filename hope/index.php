
<?php


$text = file_get_contents("json.txt");
$array = explode ( "\n", $text);
var_dump($array);
$count = count($array);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
         body {
             background-image: url(images/bg.gif);
         }
         #box {
             margin: 0 auto;
             width: 960px;
             height: 627px;
             background: url(images/content_bg.jpg) no-repeat;
             position: relative;
         }
         .smbox {
             position: absolute;
            left: 0;
            top: 0;
         }
         .tip-t {
             background: url(images/tip1_h.gif) no-repeat;
             width: 227px; 
             height: 68px;
             position: relative;
         }
         .tip-t span {
             width: 5px;
             height: 5px;
             float: right;
             margin-top: 35px;
             margin-right: 20px;
             cursor: pointer;
             user-select:none;
         }
         .tip-m {
             background: url(images/tip1_c.gif) repeat-y;
             margin: 0;
             padding: 10px;
             width: 200px;
             word-wrap:break-word;
             user-select:none;
         }
         .tip-f {
             background: url(images/tip1_f.gif) no-repeat;
             width: 227px;
             height: 73px;
         }
         .tip-f span{
            float: right;
            margin-right: 20px;
            user-select:none;
         }
    </style>
</head>
<body>
    <div id="box">

         
         <?php for($i = 0 ; $i < $count ; $i++) { ?>
            <?php $inarray = explode( "|", $array[$i]);?>
            <div class="smbox">
                <div class="tip-t">
                    <span class="close">x</span>
                </div>
                 <p class="tip-m"><?php echo $inarray[1]?></p>
                <div class="tip-f">
                    <img src="images/bpic_1.gif" alt="">
                    <span><?php echo $inarray[0]?></span>
                </div>
            </div>
            <?php } ?>
        

    </div>
    
</body>
<script>
    var box = document.getElementById('box');
    var smbox = document.getElementsByClassName('smbox');
    var close = document.getElementsByClassName('close');
    var tipT = document.getElementsByClassName('tip-t');
    var index = 1;

    for(var i = 0 ; i < smbox.length ; i++) {
        drag(smbox[i],box);   
    }



    function drag(obj,box) {
        var randomX = Math.random()*(box.clientWidth-obj.clientWidth);
        var randomY = Math.random()*(box.clientHeight-obj.clientHeight);
        obj.style.left = randomX + 'px';
        obj.style.top = randomY + 'px';
        obj.onmousedown = function (e) {
            index++;
            this.style.zIndex = index;
            e = e || event;
            var disX = e.clientX - obj.offsetLeft - box.offsetLeft;
            var disY = e.clientY - obj.offsetTop - box.offsetTop;
            // console.log(disX);
            // console.log(disY);
            var that = this;
            document.onmousemove = function (e) {
                e = e || event;
                obj.style.left = e.clientX - disX - box.offsetLeft + 'px';
                obj.style.top = e.clientY - disY - box.offsetTop + 'px';
            }
            document.onmouseup = function (){
                document.onmousemove = null;
            }
        }
    }

    for(var i = 0 ; i < close.length ; i++) {
        close[i].onclick = function (m) {

            return function closeFn1() {
                console.log(123)
                smbox[m].style.display = 'none';
            }
        }(i)
    }

    for(var i = 0 ; i < tipT.length ; i++) {
        tipT[i].ondblclick = function (m) {

            return function closeFn2() {
                console.log(123)
                smbox[m].style.display = 'none';
            }
        }(i)
    }


</script>
</html>