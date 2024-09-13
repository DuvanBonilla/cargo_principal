<?php
session_start();
class val_usuario{
    public $codigo;
    public $conexion;

    function __construct($codigo,$conexion){
        $this->codigo = $codigo;
        $this->conexion = $conexion;
    }

    function validar($codigo,$conexion){
        
        $sql = "SELECT * FROM usuarios WHERE codigo='$codigo'";
        $resultado = mysqli_query($conexion,$sql);
        $fila = mysqli_fetch_array($resultado);
        $codigo = $fila["codigo"];
        if($fila){
            $_SESSION['codigo'] = $codigo;
            return true;
        }
        else{
            return false;
        }
    }

}