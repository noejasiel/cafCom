<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: *");

error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'DbConnect.php';
$objDb = new DbConnect();
$conn = $objDb->connect();
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}


$method = $_SERVER['REQUEST_METHOD'];

switch($method){
  case "GET":

  $path = explode('/', $_SERVER['REQUEST_URI']);
  // echo "hola";
  // print_r( $path);
  // $usr = $path[4];
  
    $sql = " SELECT * FROM  orden where usuario=:name";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":name", $path[4]);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if($users){
      echo json_encode( $users);
    }else{
      http_response_code(404);
    }
   
    // break;
  }
?>