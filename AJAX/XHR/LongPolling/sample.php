<?php
//read the file
$extract($_GET);
set_time_limit(2); //if server doesnt respond in 2 seconds, (EMULATE FAILURE)
$data = fopen("data.txt", "r");
$res = array(); //latest time stamp and contents of the file only if time stamo is new

//check the time stamp of last modified event
//constant checking

while (true) {
    //stat() and lstat() derived functions are cached by php
    // so this filemtime functions caches the last modified data and we need to clear cache so that we get the correct result

    clearstatcache(); //clear previous info 
    $last_mod = filemtime("data.txt"); //last modified timestamp in milli
    if ($last_mod > $timestamp) {
        //if timestamp is new  : send info back to client
        $r = fread($data, filesize("data.txt"));
        $res["r"] = $r;
        $res["t"] = $last_mod;
        echo json_encode($res); //response , //state 4; status = 200
        break;
    } else {
        sleep(1); // to give a COFFEE break to the server 
    }
}
