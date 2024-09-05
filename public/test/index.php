<?php
header('Access-Control-Allow-Origin: *');
$db = new mysqli('localhost', 'root', '', 'users');

if(!$db){
    die('Could not connect');
} else {
  $name = $_POST['name'];
  $mobile = $_POST['mobile'];
  $email = $_POST['email'];

  $sql = "INSERT INTO user VALUES('$name', '$mobile', '$email')";
  $result = $db->query($sql);
  $db->close();
}

?>