<?php

if(isset($_POST["username"]) && strlen(trim($_POST["username"])) !=0 && isset($_POST["password"]) && strlen(trim($_POST["password"]))!=0   ){
    $username = $_POST["username"];
    $password = $_POST["password"];
} else {
    exit("没有权限");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1><?php echo $username?></h1>
    <h1><?php echo $password?></h1>
</body>
</html>