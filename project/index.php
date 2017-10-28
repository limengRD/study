
<?php 

$connection = mysqli_connect('localhost','root','123456','test');
mysqli_set_charset($connection,'utf8');
if(!$connection) {
    exit('<h1>连接数据库失败</h1>');
}
$query = mysqli_query($connection,'select * from users;');


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
    <h1 class="heading">用户管理 <a class="btn btn-link btn-sm" href="add.php">添加</a></h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>头像</th>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th class="text-center" width="140">操作</th>
        </tr>
      </thead>
      <tbody>
        <?php while($item = mysqli_fetch_assoc($query)) :?>
        <tr>
          <th scope="row"><?php echo $item['id'];?></th>
          <td><img src="<?php echo $item['avatar'];?>" class="rounded" alt="张三"></td>
          <td><?php echo $item['name'];?></td>
          <td><?php echo $item['gender']==0?'♀':'♂';?></td>
          <td>
              <?php
              date_default_timezone_set('Asia/Shanghai');
              $now_year = date('Y',time());
              $year = date('Y',strtotime($item['birthday']));

              $now_month = date('m',time());
              $month = date('m',strtotime($item['birthday']));

              $now_day = date('d',time());
              $day = date('d',strtotime($item['birthday']));
             
              $age = $now_year - $year -1;
              if($now_month > $month) {
                  $age++;
              } else if($now_month == $month) {
                if($now_day > $day) {
                    $age++;
                }
              }
              echo $age;
              ?>
          </td>
          <td class="text-center">
            <button class="btn btn-info btn-sm">编辑</button>
            <a class="btn btn-danger btn-sm" href="delete.php?id=<?php echo $item['id'] ?>">删除</a>
          </td>
        </tr>
        <?php endwhile; ?>
      </tbody>
    </table>
    <ul class="pagination justify-content-center">
      <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
    </ul>
  </main>
</body>
</html>
