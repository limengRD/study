<?php
function add() {
    if(empty($_POST["title"])) {
        $GLOBALS['message'] = '请输入标题';
        return;
    }    
    
    if(empty($_POST["artist"])) {
        $GLOBALS['message'] = '请输入歌手';
        return;
    }
//验证上传 图片文件
    if(empty($_FILES['images'])) {
      $GLOBALS['message'] = '请正确提交图片文件';
      return;
    }

    $images = $_FILES['images'];

    if($images['error'] !== UPLOAD_ERR_OK) {
      $GLOBALS['message'] = '请选择图片文件';
      return;
    }

    if($images['size'] > 1 * 1024 * 1024) {
      $GLOBALS['message'] = '图片文件过大';
      return;
    }
    $allowed_types = array('image/jpeg', 'image/png', 'image/gif');
    if(!in_array($images['type'],$allowed_types)) {
      $GLOBALS['message'] = '上传图片文件格式不正确';
      return;
    }
    $images_target = './uploads/'.$images['name'];
    if (!move_uploaded_file($images['tmp_name'], $images_target)) {
      $GLOBALS['error_message'] = '上传音乐失败';
      return;
    }
//验证上传 音乐文件
    if(empty($_FILES["source"])) {
        $GLOBALS['message'] = '请正确提交音乐文件';
        return;
    }
    
    $source = $_FILES["source"];

    if($source['error'] !== UPLOAD_ERR_OK) {
      $GLOBALS['message'] = '请选择音乐文件';
      return;
    }

    if($source['size'] > 10 * 1024 * 1024) {
      $GLOBALS['message'] = '音乐文件过大';
      return;
    }
    if($source['size'] < 1 * 1024 * 1024) {
      $GLOBALS['message'] = '音乐文件过小';
      return;
    }
    $allowed_types = array('audio/mp3', 'audio/wma');
    if(!in_array($source['type'],$allowed_types)) {
      $GLOBALS['message'] = '上传音乐文件格式不正确';
      return;
    }

    $music_target = './uploads/'.$source['name'];
    if (!move_uploaded_file($source['tmp_name'], $music_target)) {
      $GLOBALS['error_message'] = '上传音乐失败';
      return;
    }

    $images_target = substr($images_target,2);
    $music_target = substr($music_target,2);
    $origin = json_decode(file_get_contents('storage.json'),true);
    $origin[] = array(
      'id' => uniqid(),
      'title' => $_POST['title'],
      'artist' => $_POST['artist'],
      'images' => $images_target,
      'source' => $music_target
    );
    file_put_contents('storage.json',json_encode($origin));
    header("Location: index.php");
}

    //将数据储存到json文件中

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    add();
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>添加新音乐</title>
  <link rel="stylesheet" href="bootstrap.css">
</head>
<body>
  <div class="container py-5">
    <h1 class="display-4">添加新音乐</h1>
    <hr>
    <?php if(isset($message)) :?>
    <p class="bg-danger">
        <?php echo $message;?>
    </p>
    <?php endif?>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
      <div class="form-group">
        <label for="title">标题</label>
        <input type="text" class="form-control" id="title" name="title" value="<?php echo isset($_POST['title'])?$_POST['title']:'' ?>">
      </div>
      <div class="form-group">
        <label for="artist">歌手</label>
        <input type="text" class="form-control" id="artist" name="artist" value="<?php echo isset($_POST['artist'])?$_POST['artist']:'' ?>">
      </div>
      <div class="form-group">
        <label for="images">海报</label>
        <input type="file" class="form-control" id="images" name="images">
      </div>
      <div class="form-group">
        <label for="source">音乐</label>
        <input type="file" class="form-control" id="source" name="source">
      </div>
      <button class="btn btn-primary btn-block">保存</button>
    </form>
  </div>
</body>
</html>