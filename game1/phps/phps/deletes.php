<?php
$city = $_POST['city'];
$local = $_POST['local'];
$tableName = $_POST['tableName'];
$ids = $_POST['ids'];
$type = $_POST['type'];//part,all

if($local=="true"){
 header('Access-Control-Allow-Origin: *');
}
$array = [];
$results = [];
$length = count($ids);
?>
<?php include("../../../PublicsNew/includes/include/connection.php"); ?>
<?php
for($i=0;$i<$length;$i++){
 switch($tableName){
   case "escorts":
    if($type=="part"){
     $query = "DELETE FROM escorts WHERE id= {$ids[$i]}  LIMIT 1";
    }else if($type=="all"){
     $query = "TRUNCATE TABLE  escorts";
    }
 break;
case "grades":
 if($type=="part"){
     $query = "DELETE FROM grades WHERE id= {$ids[$i]}  LIMIT 1";
    }else if($type=="all"){
     $query = "TRUNCATE TABLE  grades";
    }
 break;
case "parameters":
 if($type=="part"){
     $query = "DELETE FROM parameters WHERE id= {$ids[$i]}  LIMIT 1";
    }else if($type=="all"){
     $query = "TRUNCATE TABLE  parameters";
    }
 break;
case "passengers":
if($type=="part"){
     $query = "DELETE FROM passengers WHERE id= {$ids[$i]}  LIMIT 1";
    }else if($type=="all"){
     $query = "TRUNCATE TABLE  passengers";
    }
 break;
case "routes":
 if($type=="part"){
     $query = "DELETE FROM routes WHERE id= {$ids[$i]}  LIMIT 1";
    }else if($type=="all"){
     $query = "TRUNCATE TABLE  routes";
    }
 break;
case "targets":
if($type=="part"){
     $query = "DELETE FROM targets WHERE id= {$ids[$i]}  LIMIT 1";
    }else if($type=="all"){
     $query = "TRUNCATE TABLE  targets";
    }
 break;
case "teachers":
if($type=="part"){
     $query = "DELETE FROM teachers WHERE id= {$ids[$i]}  LIMIT 1";
    }else if($type=="all"){
     $query = "TRUNCATE TABLE  teachers";
    }
 break;
case "transportations":
 if($type=="part"){
     $query = "DELETE FROM transportations WHERE id= {$ids[$i]}  LIMIT 1";
    }else if($type=="all"){
     $query = "TRUNCATE TABLE  transportations";
    }
 break;
  case "users":
if($type=="part"){
     $query = "DELETE FROM users WHERE id= {$ids[$i]}  LIMIT 1";
    }else if($type=="all"){
     $query = "TRUNCATE TABLE  users";
    }
  break;
 }
if(mysqli_query($connection,$query)){
  if($type=="part"){
      array_push($results,$ids[$i],"1");
    }else if($type=="all"){
     array_push($results,"0","1");
    $results = "1";
    };
}else{
   if($type=="part"){
       array_push($results,$ids[$i],"0");
        }else if($type=="all"){
      array_push($results,"0","0");
    }
}
}
?>
<?php
 echo json_encode($results);

?>
<?php mysqli_close($connection); ?>