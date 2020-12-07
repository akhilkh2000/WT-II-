 <?php
    ob_start();
    ob_flush();
    flush();

    $data = fopen("data.txt", "r");
    $oldmod = filemtime("data.txt"); //old time
    while (true) {
        clearstatcache(); //clear cache to get new time 
        $lastmod = filemtime("data.txt");
        if ($lastmod > $oldmod) {
            //file changed 
            //send response

            $r = fread($data, filesize("data.txt"));
            $retstr = "File changed at :" . date('H:i:s', $lastmod) . "" . $str;
            echo "<script>parent.obj.updateDiv('$retstr');</script>";
            ob_flush();
            flush();
            $oldmod = $lastmod;
        } else {
            //heartbeat function to tell the client that server is holding connection and data has not changed
            echo "<script>parent.obj.heartbeat();</script>";
            ob_flush();
            flush();
        }

        //  sleep(2); //every 2 seconds server monitors changes
    } 

    // echo "<script>parent.obj.updateDiv('HELLO');</script>";
