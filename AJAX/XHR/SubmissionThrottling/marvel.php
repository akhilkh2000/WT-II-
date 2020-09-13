<?php
//1. extract term to be compared 
extract($_GET);
$res = array();
if ($term == "")
    echo json_encode($res);
else {
    //2. open file 
    $file = fopen("avengers.txt", "r");
    //parse throught file
    while (!feof($file)) {
        $line = trim(fgets($file)); //to remove whitespace chars
        if (strncasecmp($line, $term, strlen($term)) == 0) {
            //compares the first len(term) chars and if its equal then return the whole line
            array_push($res, $line);
        }
    }
    //4. send results to the server
    echo json_encode($res);
}
