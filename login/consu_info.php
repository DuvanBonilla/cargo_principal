<?php
include 'conexion.php';

// Crear una instancia de la clase Conexion
$conexionObj = new Conexion();
$conexion = $conexionObj->conMysql(); // Establecer la conexión

// Consulta a la base de datos
$query = "SELECT cajas_anuales, contenedores_anuales, pallets_anuales, años_experiencia FROM nuestros_numeros LIMIT 1";
$result = $conexion->query($query);

// Verificar si la consulta fue exitosa y obtener los datos
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $cajas_anuales = $row['cajas_anuales'];
    $contenedores_anuales = $row['contenedores_anuales'];
    $pallets_anuales = $row['pallets_anuales'];
    $anios_experiencia = $row['años_experiencia'];
} else {
    // Valores predeterminados en caso de error
    $cajas_anuales = 0;
    $contenedores_anuales = 0;
    $pallets_anuales = 0;
    $anios_experiencia = 0;
}

// Cerrar la conexión
$conexionObj->cerrarConexion($conexion);
?>
