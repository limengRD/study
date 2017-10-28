<?php 
function add() {
    if(empty($_POST['name'])) {
        $GLOBALS['message'] = '请输入姓名';
        return;
    }
    
    if(!(isset($_POST['gender']) && $_POST['gender'] != -1)) {
        $GLOBALS['message'] = '请选择性别';
        return;
    }
    
    if(empty($_POST['birthday'])) {
        $GLOBALS['message'] = '请输入出生日期';
        return;
    }

    $name = $_POST['name'];
    $gender = $_POST['gender'];
    $birthday = $_POST['birthday'];

    if(empty($_FILES['avatar'])) {
        $GLOBALS['message'] = '请上传头像';
        return;
    }

    $ext = pathinfo($_FILES['avatar']['name'], PATHINFO_EXTENSION);

    $target = './unloads/avatar-'. uniqid() .'.'.$ext;

    if(!move_uploaded_file($_FILES['avatar']['tmp_name'],$target)){
        $GLOBALS['message'] = '上传头像失败';
        return;
    }

    $avatar = substr($target,2);

    //连接数据库
    $connection = mysqli_connect('localhost','root','123456','test');

    mysqli_set_charset($connection,'utf8');

    if(!$connection) {
        exit('<h1>连接数据库失败</h1>');
    }

    $query = mysqli_query($connection,"insert into users values(null,'{$name}',{$gender},'{$birthday}','{$avatar}');");

    if(!$query) {
        $GLOBALS['message'] = '查询过程失败';
        return;
    }

    $finish_change = mysqli_affected_rows($connection);

    if($finish_change !== 1) {
        $GLOBALS['meassage'] = '添加数据失败';
        return;
    }

    header('Location: index.php');
}



if($_SERVER['REQUEST_METHOD'] === 'POST') {
    add();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>XXX管理系统</title>
  <link rel="stylesheet" href="assets/css/bootstrap.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">XXX管理系统</a>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="index.html">用户管理</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">商品管理</a>
      </li>
    </ul>
  </nav>
  <main class="container">
    <h1 class="heading">添加用户</h1>      
    <?php if(isset($message)):?>
      <div class="alert"> 
          <?php echo $message;?>
      </div>
      <?php endif;?>
    <form action"<?php $_SERVER['PHP_SELF']?>" method="post" enctype="multipart/form-data" autocomplete="off">
      <div class="form-group">
        <label for="avatar">头像</label>
        <input type="file" class="form-control" id="avatar" name="avatar" >
      </div>

      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" class="form-control" id="name" name="name">
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <select class="form-control" id="gender" name="gender">
          <option value="-1">请选择性别</option>
          <option value="1">男</option>
          <option value="0">女</option>
        </select>
      </div>
      <div class="form-group">
        <label for="birthday">生日</label>
        <input type="date" class="form-control" id="birthday" name="birthday">
      </div>
      <button class="btn btn-primary">保存</button>
    </form>
  </main>
</body>
</html>
