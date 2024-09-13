<?php
session_start();
if(!isset($_SESSION['codigo'])){
    header("Location: ../index.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Estilizado</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="main.css">
</head>
<body>
<a href="session_destroyer.php" class="icon-back-menu">
<i class="fa-solid fa-angles-left fa-beat"></i> 
       </a>
    <div class="container">
        <form class="form" action = "ctr_nuestros_numeros.php" method = "POST">
            <h2>Nuestros numeros</h2>
            <input type="text" name = "cajas_anuales"placeholder="Cajas anuales" class="input">
            <input type="text" name = "contenedores_anuales" placeholder="Contenedores anuales" class="input">
            <input type="text" name = "pallets_anuales" placeholder="Pallets anuales" class="input">
            <input type="text" name = "años_experiencia"placeholder="Años de experiencia" class="input">
            <button type="submit" class="btn">Enviar</button>
        </form>
    </div>
</body>
</html>
