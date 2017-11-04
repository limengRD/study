<?php 

//引入文件
require_once '../config.php';
//连接数据库
// $connection = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
$connection = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
mysqli_set_charset($connection,'utf8');

if(!$connection){
  exit('连接数据库不成功');

}
//获取查询对象
//文章
$posts = mysqli_query($connection,'select * from posts');
//分类
$categories = mysqli_query($connection,'select * from categories');
//用户
$users = mysqli_query($connection,'select * from users');

if(!$posts){
  exit('查询文章不成功');
}
if(!$categories){
  exit('查询分类不成功');
}
if(!$users){
  exit('查询用户不成功');
}
//抓取对象
//  while ($row = mysqli_fetch_assoc($query)){

//   $data[] = $row;
//  }
//分类
 while ($row1 = mysqli_fetch_assoc($categories)){

  $data[] = $row1;
 }
 //用户
  while ($row2 = mysqli_fetch_assoc($users)){

  $data2[] = $row2;
 }


// var_dump($data);

?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Posts &laquo; Admin</title>
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
        <h1>所有文章</h1>
        <a href="post-add.html" class="btn btn-primary btn-xs">写文章</a>
      </div>
      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->
      <div class="page-action">
        <!-- show when multiple checked -->
        <a class="btn btn-danger btn-sm" href="javascript:;" style="display: none">批量删除</a>
        <form class="form-inline">
          <select name="" class="form-control input-sm">
            <option value="">所有分类</option>
            <option value="">未分类</option>
          </select>
          <select name="" class="form-control input-sm">
            <option value="">所有状态</option>
            <option value="">草稿</option>
            <option value="">已发布</option>
          </select>
          <button class="btn btn-default btn-sm">筛选</button>
        </form>
        <ul class="pagination pagination-sm pull-right">
          <li><a href="#">上一页</a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">下一页</a></li>
        </ul>
      </div>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th class="text-center" width="40"><input type="checkbox"></th>
            <th>标题</th>
            <th>作者</th>
            <th>分类</th>
            <th class="text-center">发表时间</th>
            <th class="text-center">状态</th>
            <th class="text-center" width="100">操作</th>
          </tr>
        </thead>
        <tbody>
          <?php  while ($row = mysqli_fetch_assoc($posts)): ?>
            <tr>
             <td class="text-center"><input type="checkbox"></td>
             <td><?php echo $row['title']; ?></td>
             <td><?php echo $data2[$row['user_id']-1]['nickname']; ?></td>
             <td><?php echo $data[$row['category_id']-1]['name']; ?></td>
             <td class="text-center"><?php echo $row['created']; ?></td>
             <td class="text-center"><?php echo $row['status']; ?></td>
              <td class="text-center">
              <a href="javascript:;" class="btn btn-default btn-xs">编辑</a>
              <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
            </td>
           </tr>
          <?php endwhile ?>
        </tbody>
      </table>
    </div>
  </div>

  <?php $current_page = 'posts'; ?>
  <?php include 'inc/sidebar.php'; ?>

  <script src="/static/assets/vendors/jquery/jquery.js"></script>
  <script src="/static/assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script>NProgress.done()</script>
</body>
</html>