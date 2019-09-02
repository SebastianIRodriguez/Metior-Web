<?php
include "variables.php";

$mysqli = new mysqli($host, $user, $pass, $base) or die("No se pudo conectar con la base de datos");

$result = $mysqli->query("select * from clientes");

echo json_encode($result->fetch_all());