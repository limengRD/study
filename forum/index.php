<?php

require_once 'functions.php';

$articles = forum_fetch_all('select * from articles');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="/static/assets/css/index.css">
    <link rel="stylesheet" href="/static/assets/css/base.css">
</head>
<body>
    <header>
       <div class="w header-in">
           <div class="header-nav">
                <a href="javascript:;">首页</a>
                <a href="javascript:;">发现</a>
                <a href="javascript:;">话题</a>
                <input type="text" class="search" placeholder="输入搜索内容...">
                <a href="" class="question-btn" type="button" value="提问">提问</a>
           </div>
           <div class="header-information">
                <a href="" class="news">123</a>
                <a href="" class="">123</a>
                <a href="" class="avatar"><img src="/static/assets/img/default.png" alt=""></a>
           </div>
       </div> 
    </header>
    <div class="main">
        <div class="main-in w">
            <div class="hot">
                <div class="operate">
                    <ul>
                        <li class="question"><a href="">提问</a></li>
                        <li class="answer"><a href="">回答</a></li>
                        <li class="write"><a href="">写文章</a></li>
                        <li class="artice"><a href="">草稿</a></li>
                    </ul>
                </div>
                <?php foreach($articles as $item) :?>
                <div class="information">
                    <div class="title"><?php echo $item['title']?></div>
                    <div class="writer"><?php echo $item['user_id'] ?></div>
                    <div class="information-body"><img src="<?php echo $item['feature'] ?>" alt=""><?php echo $item['content']?></div>
                </div>
                <?php endforeach?>
            </div>
            <div class="tool">
                <div class="tool-top">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                    </ul>
                </div>
                <div class="tool-bottom">
                    <ul>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                        <li>e</li>
                        <li>f</li>
                        <li>g</li>
                        <li>h</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <footer></footer>
</body>
</html>