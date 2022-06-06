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
    //print_r($data['select']);
    $typeUser = $data['select'];
    $usr = $data['usr'];
    $pass = $data['pass'];
    if($typeUser == "Cliente"){
      $sqll = " SELECT `num_boleta`, `contras_cliente` FROM cliente where nombre=:nombre  AND contras_cliente=:passcliente ";
      $stmt = $conn->prepare($sqll);
      $stmt->bindParam(":nombre", $usr);
      $stmt->bindParam(":passcliente", $pass);
      $stmt->execute();
      $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
      if($users){
        http_response_code(200);
        // echo "entro aqui";
      }else{
        http_response_code(404);
      }
    }else{
      $sqll = " SELECT `cod_empleado`,`contras_empleado` FROM empleado where nombre=:nombre  AND contras_empleado=:passempleado ";
      $stmt = $conn->prepare($sqll);
      $stmt->bindParam(":nombre", $usr);
      $stmt->bindParam(":passempleado", $pass);
      $stmt->execute();
      $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
      if($users){
        http_response_code(200);
      }else{
        http_response_code(404);
      }
    }
    
   
    break;
  }
?>