<?php 
function login() {
    require_once '/config.php';

    session_start();

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

    $conn = mysqli_connect(FORUM_DB_HOST, FORUM_DB_USER, FORUM_DB_PASS, FORUM_DB_NAME);
    mysqli_set_charset($conn,'utf8');
    if(!$conn) {
        exit('<h1>链接数据库失败</h1>');
    }

    $query = mysqli_query($conn,"select * from users where username = '{$username}' limit 1;");
    
    if(!$query) {
        $GLOBALS['message'] = '登录失败,请重试';
    }

    $user = mysqli_fetch_assoc($query);
    
    if($user['password'] != $password) {
        $GLOBALS['message'] = '用户名密码不匹配';
        return;
    }

    $_SESSION['current_login_user'] = $user;
    header('Location:/index.php');

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
    <script src="/static/assets/vendors/jquery/jquery.js"></script>
    <script src="/static/assets/js/login-register.js"></script>
</head>

<body>

    <div id="box">
        <div class="change">
            <div class="move"></div>
            <a href="javascript:;" class="change-register-btn">注册</a>
            <a href="javascript:;" class="change-login-btn">登录</a>
        </div>
        <div id="register" class="chose">
            <form class="form-horizontal login" action="/api/register.php" method="post">
                <?php if(isset($message)):?>
                <div class="alert alert-danger" role="alert"><?php echo $message;?></div>
                <?php endif?>
                <div class="form-group" >
                    <input type="username" name="username" class="form-control" id="inputEmail3" placeholder="用户名">
                </div>
                <div class="form-group">
                    <input type="password" name="password" class="form-control" id="inputEmail3" placeholder="密码">
                </div>
                <div class="form-group">
                    <input type="password" name="repassword" class="form-control" id="inputEmail3" placeholder="密码">
                </div>
                <button class="btn btn-primary login-btn">注册</button>
            </form>
        </div>
        <div id="login" class="chose">
            <form class="form-horizontal login" action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
                <?php if(isset($message)):?>
                <div class="alert alert-danger" role="alert"><?php echo $message;?></div>
                <?php endif?>
                <div class="form-group" >
                    <input type="username" name="username" class="form-control" id="inputEmail3" placeholder="用户名">
                </div>
                <div class="form-group">
                    <input type="password" name="password" class="form-control" id="inputEmail3" placeholder="密码">
                </div>
                <button class="btn btn-primary login-btn">登录</button>
            </form>
        </div>
    </div>
</body>

</html>