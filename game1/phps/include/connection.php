<?php
require("constant.php");

$connection = mysqli_connect(SERVER,USER_NAME,PASSWORD,"orhshachar");
//$connection = mysqli_connect("localhost","vps-admin","HR67cr",$city);
mysqli_set_charset($connection,"utf8");
if (!$connection) {
   // echo "Error: Unable to connect to MySQL." . PHP_EOL;
   // echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    //echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    //exit;
}
//echo "Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL;
//echo "Host information: " . mysqli_get_host_info($connection) . PHP_EOL;
?>
