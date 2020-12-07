<?php
header("Content-type:text/event-stream");
ob_start();
ob_flush();
flush();
for ($i = 0; $i < 4; $i++) {
    echo "event:data\n";
    echo "retry:5000\n";
    echo "data:hello" . $i . "\n\n";
    flush();
    ob_flush();
    sleep(3);
}

echo "event:end\n";
echo "data:Its done\n\n";
