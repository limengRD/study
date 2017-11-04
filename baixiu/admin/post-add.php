
<?php 
require_once '../config.php';

session_start();



function postAdd() {
  //验证表单
  if(empty($_POST['title'])) {
    $GLOBALS['message'] = '请填写标题';
    return;
  }

  if(empty($_POST['content'])) {
    $GLOBALS['message'] = '请填写内容';
    return;
  }

  if(empty($_POST['slug'])) {
    $GLOBALS['message'] = '请填写别名';
    return;
  }

  // if(empty($_POST['created'])) {
  //   $GLOBALS['message'] = '请填写发布时间';
  //   return;
  // }

  $title = $_POST['title'];
  $content = $_POST['content'];
  $slug = $_POST['slug'];
  $created = $_POST['created'];
  //分类
  $category = $_POST['category'];
  //状态
  $status = $_POST['status'];


  if(empty($_FILES['feature'])) {
    $GLOBALS['message'] = '请上传图像';
  }

  $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS , DB_NAME);

  if(!$conn) {
    exit('<h1>连接数据库失败</h1>');
  }
  $user_id = $_SESSION['current_login_user']['id'];
  echo $title;
  $query = mysqli_query($conn,"insert into posts values(null,'{$slug}','{$title}','abc','2017-10-10 10:10','{$content}',1,1,'{$status}',{$user_id},{$category});");
  echo $query;
  if(!$query) {
    $GLOBALS['message'] = '查询过程失败';
    return;
  }

  $user = mysqli_fetch_assoc($query);

  $finish_change = mysqli_affected_rows($conn);

  if($finish_change !== 1) {
    $GLOBALS['meassage'] = '添加数据失败';
    return;
  }
}

if($_SERVER['REQUEST_METHOD'] === 'POST') {
  postAdd();
}

?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Add new post &laquo; Admin</title>
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
        <h1>写文章</h1>
      </div>
      <!-- 有错误信息时展示 -->
      <?php if(isset($message)):?>
      <div class="alert alert-danger">
        <strong><?php echo $message?></strong>
      </div>
      <?php endif;?>
      <form class="row" action="<?php echo $_SERVER['PHP_SELF']?>" method="post" enctype="multipart/form-data">
        <div class="col-md-9">
          <div class="form-group">
            <label for="title">标题</label>
            <input id="title" class="form-control input-lg" name="title" type="text" placeholder="文章标题" value="<?php echo isset($_POST['title']) ? $_POST['title'] : ''?>">
          </div>
          <div class="form-group">
            <label for="content">标题</label>
            <textarea id="content" class="form-control input-lg" name="content" cols="30" rows="10" placeholder="内容"><?php echo isset($_POST['content']) ? $_POST['content'] : ''?></textarea>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="slug">别名</label>
            <input id="slug" class="form-control" name="slug" type="text" placeholder="slug" value="<?php echo isset($_POST['slug']) ? $_POST['slug'] : ''?>">
            <p class="help-block">https://zce.me/post/<strong>slug</strong></p>
          </div>
          <div class="form-group">
            <label for="feature">特色图像</label>
            <!-- show when image chose -->
            <img class="help-block thumbnail" style="display: none">
            <input id="feature" class="form-control" name="feature" type="file">
          </div>
          <div class="form-group">
            <label for="category">所属分类</label>
            <select id="category" class="form-control" name="category">
              <option value="1">未分类</option>
              <option value="2">潮生活</option>
            </select>
          </div>
          <div class="form-group">
            <label for="created">发布时间</label>
            <input id="created" class="form-control" name="created" type="datetime-local">
          </div>
          <div class="form-group">
            <label for="status">状态</label>
            <select id="status" class="form-control" name="status">
              <option value="drafted">草稿</option>
              <option value="published">已发布</option>
            </select>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">保存</button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <?php $current_page = 'post-add'; ?>
  <?php include 'inc/sidebar.php'; ?>

  <script src="/static/assets/vendors/jquery/jquery.js"></script>
  <script src="/static/assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script>NProgress.done()</script>
</body>
</html>
