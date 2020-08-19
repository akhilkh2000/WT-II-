<?php
header("Content-type:image/jpeg");
extract($_GET);
if ($uid == "aruna") {
    $img = imagecreate(1, 1);
} else {
    $img = imagecreate(2, 2);
}
imagecolorallocate($img, 233, 3, 23);
imagejpeg($img);
