<?php
include "variables.php";
$mysqli = new mysqli($host, $user, $pass, $base);
header("Content-Type: application/json; charset=UTF-8");

$obj = json_decode($_POST['x'], false);

$mysqli->query("insert into clientes (apellido, nombre, direccion) values ('".$obj->apellido."','".$obj->nombre."','".$obj->direccion."')");
echo  $mysqli->insert_id;

?>
