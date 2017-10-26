<?php 

$text = file_get_contents('storage.json');
$arr = json_decode($text,true);
$count = count($arr);
if(isset($_GET["k"])){
    $k = $_GET["k"]*10;
} else {
    $k = 0;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="bootstrap.css" type="text/css" rel="stylesheet">
    <style>
        header {
            height: 70px; 
            background: #242424; 
        }
        .w {
            width: 1200px;
            margin: 0 auto;
        }
        .inheader {
            line-height: 70px;
        }
        .inheader a{
            color: #fff;
            font-size: 16px;
            
        }
        .main {
            margin-top: 50px;
        }
    </style>
    <script src="index.js"></script>
</head>
<body>
    <header>
        <div class="inheader w">
            <a href="javascrip:;">音乐</a>
        </div>
    </header>
    <div class="container py-5">
    <h1 class="display-4">音乐列表</h1>
    <hr>
    <div class="mb-3">
      <a href="add.php" class="btn btn-primary btn-sm">添加</a>
    </div>
    <table class="table table-bordered table-striped">
        <thead class="thead-dark">
            <tr>
                <th class="text-center">标题</th>
                <th class="text-center">歌手</th>
                <th class="text-center">海报</th>
                <th class="text-center">音乐</th>
                <th class="text-center">操作</th>
            </tr>
        </thead>
        <tbody class="text-center">
        <?php if($k+10 < $count) { ?>
            <?php for($i=$k;$i<$k+10 ;$i++):?>

                <tr>
                    <td><?php echo $arr[$i]['title'];?></td>
                    <td><?php echo $arr[$i]['artist'];?></td>
                    <td><img style="width:40px; height: 40px;"src="<?php echo $arr[$i]['images']?>" alt=""></td>
                    <td><audio src="<?php echo $arr[$i]['source']?>" controls></audio></td>
                    <td class="align-middle">
                        <a class="btn btn-outline-danger btn-sm" href="del.php?id=<?php echo $arr[$i]['id']; ?>">删除</a>
                    </td>
                </tr>
            <?php endfor;?>
        <?php } else {?>
            <?php for($i=$k;$i<$k+10-($k+10-$count) ;$i++):?>
                <tr>
                    <td><?php echo $arr[$i]['title'];?></td>
                    <td><?php echo $arr[$i]['artist'];?></td>
                    <td><img style="width:40px; height: 40px;"src="<?php echo $arr[$i]['images']?>" alt=""></td>
                    <td><audio src="<?php echo $arr[$i]['source']?>" controls></audio></td>
                    <td class="align-middle">
                        <a class="btn btn-outline-danger btn-sm" href="del.php?id=<?php echo $arr[$i]['id']; ?>">删除</a>
                    </td>
                </tr>
            <?php endfor;?>
        <?php }?>

        </tbody>
    </table>
    <div style="text-align: center;">
    <nav aria-label="..." style="display: inline-block;">
        <ul class="pagination">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <?php for($i=0 ; $i < ceil($count/10) ; $i++):?>
                 <?php if($i == $k/10){?>
                    <li class="page-item active"><a class="page-link" href="<?php echo "index.php?k=$i"?>"><?php echo $i+1?></a></li>
                 <?php } else {?>
                    <li class="page-item"><a class="page-link" href="<?php echo "index.php?k=$i"?>"><?php echo $i+1?></a></li>
                 <?php }?>
            <?php endfor;?>
            <li class="page-item">
            <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
    </div>
  </div>    

</body>
</html>