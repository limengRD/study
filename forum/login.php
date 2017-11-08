<?php 
function login() {
    // echo '123';
    if(empty($_POST['username'])) {
        $GLOBALS['message'] = '请输入用户名'; 
        return;
    }
    if(empty($_POST['password'])) {
        $GLOBALS['message'] = '请输入密码';
        return;
    }
    
    $username = $_POST['username'];
    $password = $_POST['password'];

    
}

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    login();
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="/static/assets/vendors/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="/static/assets/css/mystyle.css">
    <link rel="stylesheet" href="/static/assets/css/base.css">
</head>

<body>
    <div>
        
        <form class="form-horizontal" id="login" action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
            <img src="/static/assets/img/default.png" alt="" class="img-thumbnail">
            <?php if(isset($message)):?>
            <div class="alert alert-danger" role="alert"><?php echo $message;?></div>
            <?php endif?>
            <div class="form-group" >
                <input type="username" name="username" class="form-control" id="inputEmail3" placeholder="用户名">
            </div>
            <div class="form-group">
                <input type="password" name="password" class="form-control" id="inputEmail3" placeholder="密码">
            </div>
            <button class="btn btn-primary" id="login-btn">登录</button>
        </form>
    </div>
</body>

</html>