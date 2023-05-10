<?php
$city = $_POST['city'];
$local = $_POST['local'];
$array = [];

?>
<?php include("../include/connection.php"); ?>
<?php
$result = mysqli_query($connection,"SELECT * FROM members " );
while($value = mysqli_fetch_array($result))  {
     $str=json_decode($value['json'],true);
    
     $str['id']=$value['id'];
     array_push($array, $str);
}
 echo json_encode($array,true);


?>
<?php mysqli_close($connection); ?>