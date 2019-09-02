<?php
include "variables.php";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$db = new mysqli($host, $user, $pass, $base) or die("Unable to connect");

$cliente = $db->query("create table clientes (
	orden		int not null primary key auto_increment,
	cant 		int,
	apellido	varchar(60),	
	nombre		varchar(60),
	email 		varchar(60),
	direccion	varchar(60),
	provincia	int,
	pais 		int,
	cod_post    int
)");

$db->close();
?>

