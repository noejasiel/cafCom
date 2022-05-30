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
case "PUT":
      $user = json_decode(file_get_contents('php://input'), true);
      $path = explode('/', $_SERVER['REQUEST_URI']);
      print_r( $user );
      
      //print_r(gettype( $path[5]));
      $sql = "UPDATE `orden` SET status=:statuus WHERE no_orden=:id";

      $stmt = $conn->prepare($sql);
      $stmt->bindParam(':id', $path[5]);
      $stmt->bindParam(':statuus', $user["select"]);
      if($stmt->execute()){
        http_response_code(200);
        echo "se hizo bien";
      }else{
        http_response_code(404);
      }
      break;

    }
?>