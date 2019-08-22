<?php
include "variables.php";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$mysqli = new mysqli($host, $user, $pass, $base) or die("No se pudo conectar con la base de datos");
header("Content-Type: application/json; charset=UTF-8");

$obj = json_decode($_POST['x'], false);

//file_put_contents("logs.txt", "POST received: " + $obj)

$mysqli->query("insert into clientes (apellido, nombre, direccion) values ('".$obj->apellido."','".$obj->nombre."','".$obj->direccion."')");

echo  $mysqli->insert_id;

?>
