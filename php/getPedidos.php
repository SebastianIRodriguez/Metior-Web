<?php
include "variables.php";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$mysqli = new mysqli($host, $user, $pass, $base) or die("No se pudo conectar con la base de datos");

$result = $mysqli->query("select * from clientes");

$array = array();
while($row = $result->fetch_assoc())
    $array[] = $row;

echo json_encode($array);

$mysqli->close();