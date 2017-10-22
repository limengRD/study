<?php 
	//导入文件 把文件内容导入到$text 里面  
	$text = file_get_contents("names.txt");
	//获取这个 text的长度
	$array = explode("\n", $text);
	$array_len = count($array);

	


?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		td,th {
            border: 1px solid red;
            padding: 10px 100px;
        }

	</style>
</head>
<body>
	<table cellspacing="0">
		<thead>
			<tr>
				<th>id</th>
				<th>名字</th>
				<th>年龄</th>
				<th>邮箱</th>
				<th>主页</th>
			</tr>
		</thead>
		<tbody>
			<?php for( $i = 0; $i < $array_len; $i++) { ?>
				<tr>
					<?php $array2 = explode("|", $array[$i])  ?>;
					<?php $array2_len = count($array2) ?>;
					<?php for( $j = 0; $j < $array2_len; $j++) {?>
						<td>
							<?php if($j == 4) { ?>
								<a href="<?php echo strtolower($array2)?>"><?php echo substr($array2, 8)?></a>
							<?php } else { ?>
							<?php echo $array2[$j]?>
							<?php } ?>
						</td>
				<?php } ?>
				</tr>
			<?php } ?>
		</tbody>

	</table>
</body>
</html>