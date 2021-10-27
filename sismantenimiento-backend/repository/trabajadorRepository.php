<?php

class TrabajadorRepository {

    public $codigoTrabajador;
    public $dniTrabajador;
    public $apellidosTrabajador;
    public $nombresTrabajador;
    public $sueldoTrabajador;
    public $estadoTrabajador;

    private $conn;

    private $dbTabla = 'trabajador';

    public function __construct($db){
        $this->conn = $db;
    }

    // OBTENER LISTA DE TRABAJADORES
    public function obtenerTrabajadores(){
        $sqlQuery = "SELECT * FROM " . $this->dbTabla;
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    // CREAR TRABAJADOR
    public function crearTrabajador(){
        $sqlQuery = "INSERT INTO
                    ". $this->dbTabla ."
                    (dni_trabajador,
                    apellidos_trabajador,
                    nombres_trabajador,
                    sueldo_trabajador,
                    estado_trabajador)                
                    ".
                "VALUES (
                    :dniTrabajador,
                    :apellidosTrabajador, 
                    :nombresTrabajador,
                    :sueldoTrabajador,
                    :estadoTrabajador)";
    
        $stmt = $this->conn->prepare($sqlQuery);
                    
        $this->dniTrabajador=htmlspecialchars(strip_tags($this->dniTrabajador));
        $this->apellidosTrabajador=htmlspecialchars(strip_tags($this->apellidosTrabajador));
        $this->nombresTrabajador=htmlspecialchars(strip_tags($this->nombresTrabajador));
        $this->sueldoTrabajador=htmlspecialchars(strip_tags($this->sueldoTrabajador));
        $this->estadoTrabajador=htmlspecialchars(strip_tags($this->estadoTrabajador));
    
        $stmt->bindParam(":dniTrabajador", $this->dniTrabajador);
        $stmt->bindParam(":apellidosTrabajador", $this->apellidosTrabajador);
        $stmt->bindParam(":nombresTrabajador", $this->nombresTrabajador);
        $stmt->bindParam(":sueldoTrabajador", $this->sueldoTrabajador);
        $stmt->bindParam(":estadoTrabajador", $this->estadoTrabajador);
    
        if($stmt->execute()){
           return true;
        }
        return false;
    }

    // OBTENER TRABAJADOR POR CODIGO
    public function obtenerTrabajadorPorCodigo(){
        $sqlQuery = "SELECT * FROM
                    ". $this->dbTabla ."
                WHERE 
                   codigo_trabajador = ?
                LIMIT 0,1";

        $stmt = $this->conn->prepare($sqlQuery);

        $stmt->bindParam(1, $this->codigoTrabajador);

        $stmt->execute();

        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $this->dniTrabajador = $dataRow['dni_trabajador'];
        $this->apellidosTrabajador = $dataRow['apellidos_trabajador'];
        $this->nombresTrabajador = $dataRow['nombres_trabajador'];
        $this->sueldoTrabajador = $dataRow['sueldo_trabajador'];
        $this->estadoTrabajador = $dataRow['estado_trabajador'];
    }        

    // EDITAR
    public function editarTrabajador(){
        $sqlQuery = "UPDATE
                    ". $this->dbTabla ."
                SET
                    dni_trabajador = :dniTrabajador,
                    apellidos_trabajador = :apellidosTrabajador, 
                    nombres_trabajador = :nombresTrabajador,
                    sueldo_trabajador = :sueldoTrabajador,
                    estado_trabajador = :estadoTrabajador
                WHERE 
                    codigo_trabajador = :codigoTrabajador";
    
        $stmt = $this->conn->prepare($sqlQuery);
    
        $this->dniTrabajador=htmlspecialchars(strip_tags($this->dniTrabajador));
        $this->apellidosTrabajador=htmlspecialchars(strip_tags($this->apellidosTrabajador));
        $this->nombresTrabajador=htmlspecialchars(strip_tags($this->nombresTrabajador));
        $this->sueldoTrabajador=htmlspecialchars(strip_tags($this->sueldoTrabajador));
        $this->estadoTrabajador=htmlspecialchars(strip_tags($this->estadoTrabajador));
        $this->codigoTrabajador=htmlspecialchars(strip_tags($this->codigoTrabajador));
            
        $stmt->bindParam(":dniTrabajador", $this->dniTrabajador);
        $stmt->bindParam(":apellidosTrabajador", $this->apellidosTrabajador);
        $stmt->bindParam(":nombresTrabajador", $this->nombresTrabajador);
        $stmt->bindParam(":sueldoTrabajador", $this->sueldoTrabajador);
        $stmt->bindParam(":estadoTrabajador", $this->estadoTrabajador);
        $stmt->bindParam(":codigoTrabajador", $this->codigoTrabajador);
    
        if($stmt->execute()){
           return true;
        }
        return false;
    }

    // ELIMINAR
    function eliminarTrabajador(){
        
        $sqlQuery = "DELETE FROM " . $this->dbTabla . " WHERE codigo_trabajador = ?";
        $stmt = $this->conn->prepare($sqlQuery);
    
        $this->codigoTrabajador=htmlspecialchars(strip_tags($this->codigoTrabajador));
    
        $stmt->bindParam(1, $this->codigoTrabajador);
    
        if($stmt->execute()){
            return true;
        }
        return false;
    }


}
