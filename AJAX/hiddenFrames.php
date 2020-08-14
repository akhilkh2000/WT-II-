<html>

<body>
    <script>
        <?php
        extract($_POST);
        if ($uid == 'aruna' || $uid === "tom") {
            echo "parent.setStatus('$uid; User already taken')";
        } else {
            echo "parent.setStatus('$uid; Username is still available')";
        }
        ?>
    </script>
</body>

</html>