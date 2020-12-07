<?php
extract($_GET);
$file = fopen("scores.txt", "w");
$updates = rand(50, 100) . ";" . rand(100, 300) . ";" . rand(30, 700);
fwrite($file, $updates); //write to the file
fclose($file);
$file = fopen("scores.txt", "r");
$data = fread($file, 500);
echo $data; //send to client
if ($sleep % 2 == 1)
    echo "console.log($sleep)";
ob_end_flush();
flush();
