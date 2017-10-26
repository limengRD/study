<?php 

$id = $_GET["id"];

$arr = json_decode(file_get_contents('storage.json'),true);

foreach($arr as $item) {
    if($item['id'] == $id) {
        $index = array_search($item,$arr);
        array_splice($arr, $index, 1);
        $newarr = json_encode($arr);
        file_put_contents('storage.json',$newarr);
        break;
    }
    
}
header('Location: index.php');
?>