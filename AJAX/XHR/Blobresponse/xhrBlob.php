<?php
header("Content-type:video/mp4");

$file = fopen("E:/PROJECTS/MATLAB/rec2.mp4", "rb");
$f = fread($file, filesize("E:/PROJECTS/MATLAB/rec2.mp4"));
echo $f;
fclose($file);
