
<?php 

require_once '../functions.php';

xiu_get_current_user();

//添加用户
function adduser () {
  if(empty($_POST['email']) || empty($_POST['slug']) || empty($_POST['nickname']) || empty($_POST['password'])){
    $GLOBALS['message'] = '请填写完整的表单';
    return;
  }

  $email = $_POST['email'];
  $slug = $_POST['slug'];
  $nickname = $_POST['nickname'];
  $password = $_POST['password'];

  xiu_execute("insert into users values (null,'{$slug}','{$email}','{$nickname}','管理员','/static/uploads/avatar.jpg',null,'{$password}') ");

}

function changeuser() {

  global $e_user;
  $id = $_GET['id'];
  $email = empty($_POST['email']) ? $e_user['email'] : $_POST['email'];
  $e_user['email'] = $email;

  $slug = empty($_POST['slug']) ? $e_user['slug'] : $_POST['slug'];
  $e_user['slug'] = $email;
  
  $nickname = empty($_POST['nickname']) ? $e_user['nickname'] : $_POST['nickname'];
  $e_user['nickname'] = $nickname;
  
  $password = empty($_POST['password']) ? $e_user['password'] : $_POST['password'];
  $e_user['password'] = $password;

  echo $id;
  echo $slug;
  echo $nickname;
  echo $email;
  echo $password;

  xiu_execute("update users set slug='{$slug}' , email='{$email}' , nickname='{$nickname}' , password='{$password}' where id = {$id}");

}

if($_SERVER['REQUEST_METHOD'] === 'POST') {
  if(isset($_GET['id'])) {

    changeuser();

  }else {
    adduser();
  }
  
}


//编辑用户表单

$id = $_GET['id'];

$e_user = xiu_fetch_one("select * from users where id={$id}");

//查询所有用户

$users = xiu_fetch_all('select * from users;');

?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Users &laquo; Admin</title>
  <link rel="stylesheet" href="/static/assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="/static/assets/vendors/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="/static/assets/vendors/nprogress/nprogress.css">
  <link rel="stylesheet" href="/static/assets/css/admin.css">
  <script src="/static/assets/vendors/nprogress/nprogress.js"></script>
</head>
<body>
  <script>NProgress.start()</script>

  <div class="main">
    <?php include 'inc/navbar.php'; ?>

    <div class="container-fluid">
      <div class="page-title">
        <h1>用户</h1>
      </div>
      <!-- 有错误信息时展示 -->
      <?php if(isset($message)) :?>
      <div class="alert alert-danger">
        <strong>错误！</strong><?php echo $message; ?>
      </div>
      <?php endif;?>
      <div class="row">
        <div class="col-md-4">
          <?php if(isset($e_user)):?>
          <form action="<?php echo $_SERVER['PHP_SELF'].'?id='.$e_user['id'];?>" method="post">
            <h2>编辑用户<< <?php echo $e_user['nickname']?> >></h2>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input id="email" class="form-control" name="email" type="email" placeholder="邮箱" value="<?php echo $e_user['email'] ?>">
            </div>
            <div class="form-group">
              <label for="slug">别名</label>
              <input id="slug" class="form-control" name="slug" type="text" placeholder="slug" value="<?php echo $e_user['slug'] ?>">
              <p class="help-block">https://zce.me/author/<strong>slug</strong></p>
            </div>
            <div class="form-group">
              <label for="nickname">昵称</label>
              <input id="nickname" class="form-control" name="nickname" type="text" placeholder="昵称" value="<?php echo $e_user['nickname'] ?>">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input id="password" class="form-control" name="password" type="text" placeholder="密码" value="<?php echo $e_user['password'] ?>">
            </div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit">保存</button>
            </div>
          </form>
          <?php else:?>
          <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
            <h2>添加新用户</h2>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input id="email" class="form-control" name="email" type="email" placeholder="邮箱">
            </div>
            <div class="form-group">
              <label for="slug">别名</label>
              <input id="slug" class="form-control" name="slug" type="text" placeholder="slug">
              <p class="help-block">https://zce.me/author/<strong>slug</strong></p>
            </div>
            <div class="form-group">
              <label for="nickname">昵称</label>
              <input id="nickname" class="form-control" name="nickname" type="text" placeholder="昵称">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input id="password" class="form-control" name="password" type="text" placeholder="密码">
            </div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit">添加</button>
            </div>
          </form>
          <?php endif;?>
        </div>
        <div class="col-md-8">
          <div class="page-action">
            <!-- show when multiple checked -->
            <a id="much_delete" class="btn btn-danger btn-sm" href="/admin/user-delete.php" style="display: none">批量删除</a>
          </div>
          <table class="table table-striped table-bordered table-hover">
            <thead>
               <tr>
                <th class="text-center" width="40"><input type="checkbox"></th>
                <th class="text-center" width="80">头像</th>
                <th>邮箱</th>
                <th>别名</th>
                <th>昵称</th>
                <th>状态</th>
                <th class="text-center" width="100">操作</th>
              </tr>
            </thead>
            <tbody>
              <?php foreach($users as $item):?>
              <tr>
                <td class="text-center"><input type="checkbox" data-id="<?php echo $item['id'] ?>"></td>
                <td class="text-center"><img class="avatar" src="<?php echo $item['avatar']?>"></td>
                <td><?php echo $item['email']?></td>
                <td><?php echo $item['slug']?></td>
                <td><?php echo $item['nickname']?></td>
                <td><?php echo $item['status']?></td>
                <td class="text-center">
                  <a href="<?php echo '/admin/users.php?id='.$item['id']?>" class="btn btn-default btn-xs">编辑</a>
                  <a href="<?php echo '/admin/user-delete.php?id='.$item['id'] ?>" class="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>
              <?php endforeach;?>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <?php $current_page = 'users'; ?>
  <?php include 'inc/sidebar.php'; ?>

  <script src="/static/assets/vendors/jquery/jquery.js"></script>
  <script src="/static/assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script>NProgress.done()</script>
  <script>
    var arr = [];
    var much_delete = $('#much_delete')
    $('tbody input').on('click',function() {


      if($(this).prop('checked')) {
        console.log(123)
        arr.push($(this).data('id'))
      }else {
        arr.splice(arr.indexOf($(this).data('id')),1)
      }

      console.log(arr)
      arr.length > 0 ? much_delete.fadeIn() : much_delete.fadeOut() 
      much_delete.prop('search','?id='+arr);
    })

  </script>
</body>
</html>
