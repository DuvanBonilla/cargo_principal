<?php

include_once ("conexion.php");
include_once ("../login/val_login.php");

$conexion = new conexion();
$con = $conexion->conMysql();

$codigo = $_POST['codigo'];

$val_usuario = new val_usuario($codigo,$con);

if($val_usuario->validar($codigo,$con)){
    echo "Usuario valido";
}
else{
    echo "Usuario no valido";
}

$conexion->cerrarConexion($con);

