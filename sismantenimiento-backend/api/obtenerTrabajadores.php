<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/connection.php';
include_once '../repository/trabajadorRepository.php';

$database = new Connection();
$db = $database->getConnection();

$trabajadorRepository = new TrabajadorRepository($db);

$stmt = $trabajadorRepository->obtenerTrabajadores();
$itemCount = $stmt->rowCount();

if ($itemCount > 0) {

    $trabajadorArr = array();
    $trabajadorArr["body"] = array();
    $trabajadorArr["itemCount"] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $e = array(
            'codigoTrabajador' => $row['codigo_trabajador'],
            'dniTrabajador' => $row['dni_trabajador'],
            'apellidosTrabajador' => $row['apellidos_trabajador'],
            'nombresTrabajador' => $row['nombres_trabajador'],
            'sueldoTrabajador' => $row['sueldo_trabajador'],
            'estadoTrabajador' => $row['estado_trabajador']
        );

        array_push($trabajadorArr["body"], $e);
    }
    echo json_encode($trabajadorArr);
} else {
    http_response_code(404);
    echo json_encode(
        array('message' => 'No se encontraron registros.')
    );
}
