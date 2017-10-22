<?php 

$menu = array("新款连衣裙","四件套","潮流T恤","时尚女鞋","短裤","半身裙","男士外套","墙纸","行车记录仪","新款男鞋","耳机" );
$length = count($menu);
?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        ul,li {
            margin: 0;
            padding: 0;
        }
        ul {
            background-color: red;
        }
        li {
            list-style: none;
            float: left;
            margin-right: 10px;
            padding: 5px 0 ;
            cursor: pointer;
        }
        li:hover {
            color: yellow;
        }

        .clearfix:after  {
            display: block;
            content: '.';
            visibility: hidden;
            height: 0;
            clear: both;
        }
        .clearfix {
            *zoom: 1;
        }
    </style>
</head>
<body>
    <ul class="clearfix">
        <?php for($i = 0 ; $i < $length ; $i++) { ?>
            <li><?php echo $menu[$i]?></li>
        <?php }?>
        
    </ul>
</body>
</html>