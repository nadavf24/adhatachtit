<?php
$json = $_POST['json'];
?>
<?php include("../include/connection.php"); ?>
<?php
  $query = "INSERT INTO  members(json) 
  VALUES ('{$json}')";
 
if(mysqli_query($connection,$query)){
 echo mysqli_insert_id($connection);
}else{
 echo "False";
}
?>
<?php mysqli_close($connection); ?>