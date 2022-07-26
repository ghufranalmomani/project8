<?php

header("Access-Control-Allow-Origin: *");

$dbsn = "localhost";
$dbun = "root";
$password = "";
$dbname = "redux-login";

$dsn ="mysql:host=$dbsn;dbname=$dbname";

$conn = new PDO($dsn,$dbun,$password);

// if($conn)
// {
    
// echo "connection succesed";

// }else
// {
//     echo "connection failed";
// }

?>