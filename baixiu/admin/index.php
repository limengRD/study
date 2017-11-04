<?php
require_once '../config.php';
session_start();

if (empty($_SESSION['current_login_user'])) {
  header('Location: /admin/login.php');
}

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS , DB_NAME);

  if(!$conn) {
    exit('<h1>连接数据库失败</h1>');
  }

  //评论
  $query = mysqli_query($conn,"select * from comments");
  if(!$query) {
    $GLOBALS['message'] = '查询过程失败';
    return;
  }
  $comments_count = 0;
  $comments_held_count = 0;
  while($comments = mysqli_fetch_assoc($query)){
    if($comments['status'] == 'held') {
      $comments_held_count +=1;
    }
    $comments_count += 1;
  }

  //文章
  $query1 = mysqli_query($conn,"select * from posts");
  if(!$query) {
    $GLOBALS['message'] = '查询过程失败';
    return;
  }
  $posts_count = 0;
  $posts_status_count = 0;
  while($posts = mysqli_fetch_assoc($query1)){
    if($posts['status'] == 'drafted') {
      $posts_status_count +=1;
    }
    $posts_count += 1;
  }

  //分类

  
  $query2 = mysqli_query($conn,"select * from categories");
  if(!$query) {
    $GLOBALS['message'] = '查询过程失败';
    return;
  }
  $categories_count = 0;
  while($categories = mysqli_fetch_assoc($query2)){
    $categories_count += 1;
  }

?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Dashboard &laquo; Admin</title>
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
      <div class="jumbotron text-center">
        <h1>One Belt, One Road</h1>
        <p>Thoughts, stories and ideas.</p>
        <p><a class="btn btn-primary btn-lg" href="post-add.html" role="button">写文章</a></p>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">站点内容统计：</h3>
            </div>
            <ul class="list-group">
              <li class="list-group-item"><strong><?php echo $posts_count;?></strong>篇文章（<strong><?php echo $posts_status_count;?></strong>篇草稿）</li>
              <li class="list-group-item"><strong><?php echo $categories_count;?></strong>个分类</li>
              <li class="list-group-item"><strong><?php echo $comments_count;?></strong>条评论（<strong><?php echo $comments_held_count;?></strong>条待审核）</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>

  <?php $current_page = 'index'; ?>
  <?php include 'inc/sidebar.php'; ?>

  <script src="/static/assets/vendors/jquery/jquery.js"></script>
  <script src="/static/assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script>NProgress.done()</script>
</body>
</html>
