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
session_start();


$method = $_SERVER['REQUEST_METHOD'];
switch($method){
  case "POST":
    $data = json_decode(file_get_contents("php://input"), TRUE);
   
    $usr = $data['usr'];
    $pass = $data['pass'];
    $sqll = " SELECT * FROM cliente where nombre=:nombre  AND contras_cliente=:passcliente ";
    $stmt = $conn->prepare($sqll);
    $stmt->bindParam(":nombre", $usr);
    $stmt->bindParam(":passcliente", $pass);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if($users){
      http_response_code(200);
    }else{
      http_response_code(404);
    }
   
    break;
  }
?>