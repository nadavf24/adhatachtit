<?php
$city = $_POST['city'];
$local = $_POST['local'];
$userName=$_POST['userName'];
$password=$_POST['password'];
$routeType = $_POST['routeType'];
$id = "not";
$array = [];
$targetId="0";
 if($local=="true"){
 header('Access-Control-Allow-Origin: *');
}

?>
<?php include("../../../PublicsNew/includes/include/connection.php"); ?>
<?php
 $result = mysqli_query($connection,"SELECT * FROM teachers " );
 while($value = mysqli_fetch_array($result))  {
     $str=json_decode($value['json'],true);
     $str['id']=$value['id'];
     $str['type']="teacher";
    if($str['password']==$password&&$str['userName']==$userName){
     array_push($array, $str);
     break;
    }
}
?>
<?php

if(count($array)==0){
  $result = mysqli_query($connection,"SELECT * FROM escorts " );
 while($value = mysqli_fetch_array($result))  {
     $str=json_decode($value['json'],true);
     $str['id']=$value['id'];
     $id = $value['id'];
     $str['type']="escort";
    if($str['password']==$password&&$str['userName']==$userName){  
     $result = mysqli_query($connection,"SELECT * FROM routes " );
      while($value = mysqli_fetch_array($result))  {
     $str1=json_decode($value['json'],true);
     if($routeType=="collecting"){
      if($str1['collecting']==$id){
       $targetId=$str1['targetId'];
       break;
      }
     }else if($routeType=="demonstation"){
      if($str1['demonstation']==$id){
      $targetId=$str1['targetId'];
       break;
      }
     }
      }
      $str['targetId'] = $targetId;
     array_push($array, $str);
     break;
    }
}
}
?>
<?php
header('Content-Type: application/json;charset=utf-8');
echo json_encode($array,true);
?>
<?php mysqli_close($connection); ?>