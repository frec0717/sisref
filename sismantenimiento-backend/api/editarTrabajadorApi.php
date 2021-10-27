<?php

include_once '../config/connection.php';
include_once '../repository/trabajadorRepository.php';

$database = new Connection();
$db = $database->getConnection();

$trabajadorRepository = new TrabajadorRepository($db);

if (
    isset($_POST['codigoTrabajador']) &&
    isset($_POST['dniTrabajador']) &&
    isset($_POST['apellidosTrabajador']) &&
    isset($_POST['nombresTrabajador']) &&
    isset($_POST['sueldoTrabajador']) &&
    isset($_POST['estadoTrabajador'])
) {
    $codigoTrabajador = $_POST['codigoTrabajador'];
    $dniTrabajador = $_POST['dniTrabajador'];
    $apellidosTrabajador = $_POST['apellidosTrabajador'];
    $nombresTrabajador = $_POST['nombresTrabajador'];
    $sueldoTrabajador = $_POST['sueldoTrabajador'];
    $estadoTrabajador = $_POST['estadoTrabajador'];

    $trabajadorRepository->codigoTrabajador = $codigoTrabajador;
    $trabajadorRepository->dniTrabajador = $dniTrabajador;
    $trabajadorRepository->apellidosTrabajador = $apellidosTrabajador;
    $trabajadorRepository->nombresTrabajador = $nombresTrabajador;
    $trabajadorRepository->sueldoTrabajador = $sueldoTrabajador;
    $trabajadorRepository->estadoTrabajador = $estadoTrabajador;

    if ($trabajadorRepository->editarTrabajador()) {
        echo json_encode(array("success" => 1));
    } else {
        echo json_encode(array("success" => 0));
    }
} else {
    echo json_encode(array("success" => 0));
}
