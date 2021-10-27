<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config/connection.php';
    include_once '../repository/trabajadorRepository.php';

    $database = new Connection();
    $db = $database->getConnection();

    $trabajadorRepository = new TrabajadorRepository($db);

    $trabajadorRepository->codigoTrabajador = isset($_GET['codigoTrabajador']) ? $_GET['codigoTrabajador'] : die();
  
    $trabajadorRepository->obtenerTrabajadorPorCodigo();

    if($trabajadorRepository->dniTrabajador != null){
        
        $trabajadorArr= array(
            'codigoTrabajador' =>  $trabajadorRepository->codigoTrabajador,
            'dniTrabajador' => $trabajadorRepository->dniTrabajador,
            'apellidosTrabajador' => $trabajadorRepository->apellidosTrabajador,
            'nombresTrabajador' => $trabajadorRepository->nombresTrabajador,
            'sueldoTrabajador' => $trabajadorRepository->sueldoTrabajador,
            'estadoTrabajador' => $trabajadorRepository->estadoTrabajador
        );
      
       
        echo json_encode($trabajadorArr);
    }
      
    else{
        http_response_code(404);
        echo json_encode(array('message'=>'Trabajador no encontrado.'));
    }
?>