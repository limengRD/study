<?php 

require_once '../functions.php';

if(empty($_GET['id'])) {
    exit('缺少参数');
}

$id = $_GET['id'];
echo $id;

xiu_execute("delete from users where id in ({$id})");

header('Location:users.php');

