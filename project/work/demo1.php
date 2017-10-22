<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #container {
            
        }
        .row {
            background-color: #ccc;
            width: 1098px;
        }
        .com{
            margin-right: 20px;
            margin-top: 10px;
            float: left;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border: 1px solid red;
        }
        .clear {
            clear: both;
        }
    </style>
</head>
<body>
    <div id="container">
       
           
                    
        <?php    for($i = 1 ; $i < 10 ; $i++){ ?>
            <div class="row">   
                <?php for($j = 1; $j <= $i; $j++){ ?>
                    <div class="com"><?php printf("%d * %d =  %d",$j,$i,$i*$j)?></div>
                <?php }?>
                <div class="clear"></div>
            </div>
        <?php } ?>
                        

      
        
    </div>
</body>
</html>
