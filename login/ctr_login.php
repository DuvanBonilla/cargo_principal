<?php
include_once ("conexion.php");
include_once ("../login/val_login.php");


$conexion = new conexion();
$con = $conexion->conMysql();

$codigo = $_POST['codigo'];

$val_usuario = new val_usuario();

if($val_usuario->validar($codigo,$con)){
    header("Location: main.php");
    exit(); 
}
else{
    header("Location: ../index.php");
    exit(); 
}


