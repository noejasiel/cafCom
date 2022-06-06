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
  case "POST":
    $data = json_decode(file_get_contents("php://input"), TRUE);
    print_r($data);
    $noProducto = $data['noProducto'];
    $nameItem = $data['nameItem'];
    $descItem = $data['descItem'];
    $timeItem = $data['timeItem'];
    $itemPrice = $data['itemPrice'];
    $itemFile = $data['itemFile'];

    // // $sqll = " SELECT * FROM cliente where nombre=:nombre  AND contras_cliente=:passcliente ";
    $sql = "INSERT INTO `menu`(`no_producto`, `nom_producto`, `desc_producto`, `precio_producto`, `tiempo_coccion`, `rutaImg`) VALUES (:noProducto, :nameItem, :descItem, :timeItem, :itemPrice, :itemFile)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":noProducto", $noProducto);
    $stmt->bindParam(":nameItem", $nameItem);
    $stmt->bindParam(":descItem", $descItem);
    $stmt->bindParam(":timeItem", $timeItem);
    $stmt->bindParam(":itemPrice", $itemPrice);
    $stmt->bindParam(":itemFile", $itemFile);
    // $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if($stmt->execute()){
      http_response_code(200);
    }else{
      http_response_code(404);
    }
   
    break;
  }
?>