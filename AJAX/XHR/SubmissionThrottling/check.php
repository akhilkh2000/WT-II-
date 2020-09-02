<?php
$name = $_GET['name'];
if ($name == "") {
    echo "Enter the name of the character";
} else {
    $avengers = array("Iron Man", "Black Widow", "Thor", "Hulk", "Captain America");
    if (in_array($name, $avengers,)) {
        echo $name . " is an Avenger";
    } else {
        echo $name . " is not an avenger";
    }
}
