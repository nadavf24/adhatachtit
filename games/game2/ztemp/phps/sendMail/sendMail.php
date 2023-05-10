<?
  $s_name = $_POST['sender_name'];
    $s_mail = $_POST['sender_mail'];
     $s_to = $_POST['sender_to'];
   $subject = stripslashes($_POST['sender_subject']);
    $body = stripslashes($_POST['sender_message']);
   $body .= "\n\n---------------------------\n";
    $body .= "Mail sent by: $s_name <$s_mail>\n";
    $header = "From: $s_name <$s_mail>\n";
    $header .= "Reply-To: $s_name <$s_mail>\n";
   $header .= "X-Mailer: PHP/" . phpversion() . "\n";
    $header .= "X-Priority: 1";
mail($s_to ,$subject, $body, $header);
?> 