<?php 

    if(!isset($_GET)) {
        exit('<h1>必须传入指定参数</h1>');
    }

    $id = $_GET['id'];

    $connection = mysqli_connect('localhost','root','123456','test');

    if(!$connection) {
        exit('<h1>连接数据库失败</h1>');
    }
    $query = mysqli_query($connection,"delete from users where id=$id");
    var_dump($query);
    if(!$query) {
        exit('<h1>查询数据库失败</h1>');
    }

    $finish_delete = mysqli_affected_rows($connection);

    if($finish_delete <= 0 ) {
        exit('<h1>删除失败</h1>');
    }

    header('Location: index.php');
