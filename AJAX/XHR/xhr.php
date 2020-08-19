<?php
extract($_GET);
if ($pid == 'covid') {
    echo "cold,cough";
} else {
    echo "Couldnt identify this pandemic!";
}
