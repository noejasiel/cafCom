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
    date_default_timezone_set('America/Mexico_City');
    $fecha = date("H:i:s");
    $newDate = date("g:i:s ",strtotime($fecha));
    print_r($data);
    $lugarEscom = "";
    $edificio = 0;
    $salon = 0;
    $pedido = $data['pedidos'];
    $hora = $data['hr'];
    $min = $data['min'];
    $nota = $data["nota"];
    $total = $data["total"];
    
    $usr = $data['usr'];
    if (isset ($data['lugaresEscom'] )) {
      $lugarEscom = $data['lugaresEscom'];
    }
    if (isset($data['edificio']) && isset($data['salon'])) {
      $edificio = $data['edificio'];
      $salon = $data['salon'];
    }
    
    $sql = "INSERT INTO `orden`( `status`, `tiempo_entrega`, `total`, `edificio`, `salon`, `zona`, `pedido`, `usuario`, `fecha`,`nota`) VALUES ('Solicitud',0,:total,:edificio,:salon,:lugar,:pedidos,:usr, :fecha, :nota )";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":lugar", $lugarEscom);
    $stmt->bindParam(":pedidos", $pedido);
     $stmt->bindParam(":usr", $usr);
     $stmt->bindParam(":edificio", $edificio);
     $stmt->bindParam(":salon", $salon);
    $stmt->bindParam(":fecha", $newDate);
    $stmt->bindParam(":nota", $nota);
    $stmt->bindParam(":total", $total);
    if($stmt->execute()){
      http_response_code(200);
    }else{
      http_response_code(404);
    }
    break;
  }
?>