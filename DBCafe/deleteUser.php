<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: *");


error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'DbConnect.php';
$objDb = new DbConnect();
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case "DELETE":
      $path = explode('/', $_SERVER['REQUEST_URI']);
        print_r($path[4]);
        $sqll = "DELETE FROM `orden` WHERE no_orden=:noOrden  ";
        $stmt = $conn->prepare($sqll);
        $stmt->bindParam(':noOrden', $path[4]);
        if($stmt->execute()){
          http_response_code(200);
        }else{
          http_response_code(404);
        }
    }
    
?>