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
  case "DELETE":

  $path = explode('/', $_SERVER['REQUEST_URI']);
  // $data = json_decode(file_get_contents("php://input"), TRUE);

  // echo $path[5] ;
    $sql = " DELETE FROM `menu` WHERE  no_producto=:id ";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":id", $path[5]);
    if($stmt->execute()){
      http_response_code(200);
    }else{
      http_response_code(404);
    }
   
    // break;
  }
?>