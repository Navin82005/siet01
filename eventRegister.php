<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['number'];

    
    $hostname = "localhost"; 
    $username = "id20510373_root";
    $password = "Siet@2727";
    $database = "id20510373_sietweb";

    //connection to the database
    try {
        $conn = mysqli_connect($hostname, $username, $password, $database);
        if (!$conn) {
            echo "Unable to connect to the server";
            exit();
        }
    } catch (Exception $e) {
        echo "Unable to connect to the server";
        exit();
    }
    
    $result = mysqli_query($conn, "select * from eventregistration");

    if (($sno = mysqli_num_rows($result)) == 0) {
        $sno = 0;
    } else {
        $sno = $sno + 1;
    }

    $request = mysqli_query($conn, "insert into eventregistration(sno, name, email, phone) values($sno, '$name', '$email', $phone)");

    if (mysqli_error($conn)) {
        echo mysqli_error($conn);
    } else {
        echo "Registered Successfully!,$sno";
    }

    mysqli_close($conn);
?>