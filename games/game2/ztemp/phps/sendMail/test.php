<?PHP
  $tmp_name=$FILES["myfile"]["tmp_name"];
  $uploadfilename = $_FILES['myfile']['name'];
  $saveddate = date("mdy-Hms");
  $newfilename="../../PublicsNew/uploads/".$saveddate."_".$uploadfilename;
  $uploadurl='http://'.$_SERVER['SERVER_NAME'].dirname($_server['REQUEST_URI']).'/'.$newfilename;
  if(move_uploaded_file($tmp_name, $newfilename)){
    $msg = "file uploaded";
    
  }else{
    $msg = "SORRY".$_FILES['file']['error'];
  }
?> 