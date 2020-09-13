<html>


<script>
    <?php
    extract($_GET);
    $file = fopen("electives.txt", "r");
    //extracting line by line
    while ($line = fgets($file)) {
        $modline = trim($line); // remove extra spaces chars
        $arr = explode(";", $modline); // as it is seperated by ;
        $found = false;
        if ($dept == $arr[0]) {
            $found = true;
            break;
        }
    }

    if ($found == true) {
        echo "parent.obj.populateElectives('$modline');";
    }

    ?>
</script>


</html>