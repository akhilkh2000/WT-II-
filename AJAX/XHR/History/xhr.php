<?php
$res=array();
extract($_GET);
if($fname=="holige")
{
    $res["cs"]="south indian";
    $res["price"]="60";
    $res["veg"]="veg";
}
if($fname=="dosa")
{
    $res["cs"]="south indian";
    $res['price']="50";
    $res['veg']="veg";
}
$ret=json_encode($res);
echo $ret;
