<?php
$city = $_POST['city'];
$local = $_POST['local'];
$jsons = $_POST['jsons'];
$ids = $_POST['ids'];
$tableName = $_POST['tableName'];
$i=0;
$array = [];
$length = count($jsons);
if($local=="true"){
 header('Access-Control-Allow-Origin: *');
}

?>
<?php include("../../../PublicsNew/includes/include/connection.php"); ?>
<?php
for($i=0;$i<$length;$i++){
 switch($tableName){
   case "escorts":
   $query = "UPDATE escorts SET  json = '{$jsons[$i]}' WHERE id =  '{$ids[$i]}'";
 break;
case "grades":
  $query = "UPDATE grades SET  json = '{$jsons[$i]}' WHERE id =  '{$ids[$i]}'";
 break;
case "parameters":
  $query = "UPDATE parameters SET  json = '{$jsons[$i]}' WHERE id =  '{$ids[$i]}'";
 break;
case "passengers":
  $query = "UPDATE passengers SET  json = '{$jsons[$i]}' WHERE id =  '{$ids[$i]}'";
 break;
case "routes":
 $query = "UPDATE routes SET  json = '{$jsons[$i]}' WHERE id =  '{$ids[$i]}'";
 break;
case "targets":
  $query = "UPDATE targets SET  json = '{$jsons[$i]}' WHERE id =  '{$ids[$i]}'";
 break;
case "teachers":
  $query = "UPDATE teachers SET json = '{$jsons[$i]}' WHERE id =  '{$ids[$i]}'";
 break;
case "transportations":
  $query = "UPDATE transportations SET json = '{$jsons[$i]}' WHERE id =  '{$ids[$i]}'";
 break;
  case "users":
    $query = "UPDATE users SET json = '{$jsons[$i]}' WHERE id =  '{$ids[$i]}'";
  break;
 }
if(mysqli_query($connection,$query)){
  array_push($array,$ids[$i],"1");
}else{
   array_push($array,$ids[$i],"0");
}
}
?>
<?php
echo json_encode($array);
?>
<?php mysqli_close($connection); ?>