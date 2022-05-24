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


$method = $_SERVER['REQUEST_METHOD'];
switch($method){
  case "POST":
    $data = json_decode(file_get_contents("php://input"), TRUE);
   
    $usr = $data['usr'];
    $pass = $data['pass'];
    $boleta = $data['boleta'];
    $apellido = $data['apellido'];
    $sql = "INSERT INTO `cliente`(`num_boleta`, `contras_cliente`, `nombre`, `apellidos`) VALUES (:boleta, :pass, :usr, :apellido)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":boleta", $boleta);
    $stmt->bindParam(":pass", $pass);
    $stmt->bindParam(":usr", $usr);
    $stmt->bindParam(":apellido", $apellido);
    // $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if($stmt->execute()){
      http_response_code(200);
    }else{
      http_response_code(404);
    }
   
    break;
  }
?>