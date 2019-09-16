<?php
include "variables.php";

$mysqli = new mysqli($host, $user, $pass, $base) or die("No se pudo conectar con la base de datos");
header("Content-Type: application/json; charset=UTF-8");

$obj = json_decode($_POST['x'], false);

$mysqli->query("insert into clientes (apellido, nombre, email, direccion, provincia, pais, cod_post) values ('".$obj->apellido."','".$obj->nombre."','".$obj->email."','".$obj->direccion."','".$obj->provincia."','".$obj->pais."','".$obj->cod_post."')");

$mysqli->close();
