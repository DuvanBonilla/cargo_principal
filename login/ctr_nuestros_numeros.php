<?php
require_once("../login/conexion.php");

// Crear conexión
$conexion = new conexion();
$con = $conexion->conMysql();

// Obtener los valores desde el formulario
$cajas_anuales = (int) $_POST['cajas_anuales'];
$contenedores_anuales = (int) $_POST['contenedores_anuales'];
$pallets_anuales = (int) $_POST['pallets_anuales'];
$años_experiencia = (int) $_POST['años_experiencia'];

// Consulta SQL para actualizar los valores en la tabla.
// No necesitamos WHERE porque hay un solo registro.
$sql = "UPDATE nuestros_numeros 
        SET cajas_anuales = ?, contenedores_anuales = ?, pallets_anuales = ?, años_experiencia = ? 
        LIMIT 1";  

// Preparar la consulta
$stmt = $con->prepare($sql);

// Vincular los parámetros a la consulta
$stmt->bind_param("iiii", $cajas_anuales, $contenedores_anuales, $pallets_anuales, $años_experiencia);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Registro actualizado exitosamente.";
    header("location: ../login/main.php");
} else {
    echo "Error al actualizar el registro: " . $stmt->error;
    header("location: ../login/main.php");
}

// Cerrar el statement y la conexión
$stmt->close();
$con->close();
