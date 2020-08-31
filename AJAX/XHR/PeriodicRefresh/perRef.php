 <?php
    $file = fopen("score.txt", "w"); //to rewrite existing info as well
    //generate random scores string
    $update = rand(50, 100) . ";" . rand(100, 200) . ";" . rand(120, 240); //joining with ; as seperator
    //write it to the file
    fwrite($file, $update);
    fclose($file);
    $file = fopen("score.txt", "r");
    //send file data back to client
    sleep(5); //now  server will be bombarded with requests as every 3 seconds we do a periodic refresh and server 
    // we have made server sleep for 5 seconds so now we need to implement a fallback plan when server is unresponsive
    echo fread($file, filesize("score.txt"));
    ?>