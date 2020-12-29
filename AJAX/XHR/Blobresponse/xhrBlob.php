<?php
header("Content-type:video/mp4");
header("Access-Control-Allow-Origin:*");

$file = fopen("E:/PROJECTS/MATLAB/rec2.mp4", "rb");
$f = fread($file, filesize("E:/PROJECTS/MATLAB/rec2.mp4"));
echo $f;
fclose($file);
