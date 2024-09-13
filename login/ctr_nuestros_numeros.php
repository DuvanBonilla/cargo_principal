<?php
require_once("../login/conexion.php");
require_once("../login/val_nuestros_numeros.php");

$conexion = new conexion();
$con = $conexion->conMysql();

$cajas_anuales = (int) $_POST['cajas_anuales'];
$contenedores_anuales = (int) $_POST['contenedores_anuales'];
$pallets_anuales =(int)  $_POST['pallets_anuales'];
$años_experiencia = (int) $_POST['años_experiencia'];

