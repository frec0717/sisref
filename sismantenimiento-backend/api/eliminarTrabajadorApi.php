<?php

include_once '../config/connection.php';
include_once '../repository/trabajadorRepository.php';

$database = new Connection();
$db = $database->getConnection();

$trabajadorRepository = new TrabajadorRepository($db);

if (
    isset($_POST['codigoTrabajador'])
) {
    $codigoTrabajador = $_POST['codigoTrabajador'];

    $trabajadorRepository->codigoTrabajador = $codigoTrabajador;

    if ($trabajadorRepository->eliminarTrabajador()) {
        echo json_encode(array("success" => 1));
    } else {
        echo json_encode(array("success" => 0));
    }
} else {
    echo json_encode(array("success" => 0));
}
