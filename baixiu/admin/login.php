<?php
require_once '../config.php';

session_start();

function login () {
  echo $_POST['email'];
  echo $_POST['password'];
  // 1. 接收并校验
  if(empty($_POST['email'])) {
    $GLOBALS['message'] = '请输入用户名';
    return;
  }

  if(empty($_POST['password'])) {
    $GLOBALS['message'] = '请输入密码';
    return;
  }

  // 2. 持久化
  $email = $_POST['email'];
  $password = $_POST['password'];
  $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS , DB_NAME);

  if(!$conn) {
    exit('<h1>连接数据库失败</h1>');
  }
  $query = mysqli_query($conn,"select * from users where email = '{$email}' limit 1;");
  if(!$query) {
    $GLOBALS['message'] = '登录失败,请重试!';
    return;
  }

  $user = mysqli_fetch_assoc($query);
  var_dump($user);
  if(!$user) {
    $GLOBALS['message'] = '邮箱与密码不匹配1';
    return;
  }

  if($user['password'] !== $password) {
    $GLOBALS['message'] = '邮箱与密码不匹配2';
    return;
  }

  $_SESSION['current_login_user'] = $user;
  // 3. 响应
  header('Location: /admin/');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  login();
}

?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Sign in &laquo; Admin</title>
  <link rel="stylesheet" href="/static/assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="/static/assets/css/admin.css">
</head>
<body>
  <div class="login">
    <!-- 可以通过在 form 上添加 novalidate 取消浏览器自带的校验功能 -->
    <!-- autocomplete="off" 关闭客户端的自动完成功能 -->
    <form class="login-wrap" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" novalidate autocomplete="off">
      <img class="avatar" src="/static/assets/img/default.png">
      <!-- 有错误信息时展示 -->
      <?php if(isset($message)) :?>
      <div class="alert alert-danger">
        <strong><?php echo $message;?></strong>
      </div>
      <?php endif?>
      <div class="form-group">
        <label for="email" class="sr-only">邮箱</label>
        <input id="email" name="email" type="email" class="form-control" placeholder="邮箱" value="<?php echo empty($_POST['email']) ? '' : $_POST['email'] ?>" autofocus>
      </div>
      <div class="form-group">
        <label for="password" class="sr-only">密码</label>
        <input id="password" name="password" type="password" class="form-control" placeholder="密码">
      </div>
      <button class="btn btn-primary btn-block">登 录</button>
    </form>
  </div>
</body>
</html>