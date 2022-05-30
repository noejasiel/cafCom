<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: *");

error_reporting(E_ALL);
ini_set('display_errors', 1);

include './../DbConnect.php';
$objDb = new DbConnect();
$conn = $objDb->connect();



$method = $_SERVER['REQUEST_METHOD'];

switch($method){
  case "GET":

  $path = explode('/', $_SERVER['REQUEST_URI']);
  // print_r( $path);
  
  
    $sql = " SELECT * FROM empleado where nombre=:name ";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":name", $path[5]);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if($users){
      echo json_encode( $users);
    }else{
      http_response_code(404);
    }
   
    break;
  }
?>