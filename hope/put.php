<?php
$_GET["name"] = "\n".$_GET["name"]."|";
$_GET["text"] = $_GET["text"];

file_put_contents("json.txt",$_GET,FILE_APPEND);