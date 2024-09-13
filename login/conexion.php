<?php

class Conexion
{
    private $host = "localhost:3307";
    private $username = "root";
    private $password = "";
    private $database = "cargoban_principal";

    public function conMysql()
    {
        $connection = new mysqli($this->host, $this->username, $this->password, $this->database);

        if ($connection->connect_error) {
            exit('conexión fallida: '.$connection->connect_error);
        }

        return $connection;
    }

    public function cerrarConexion($connection)
    {
        $connection->close();
    }
}