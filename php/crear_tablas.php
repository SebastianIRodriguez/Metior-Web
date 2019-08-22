<?php
include "variables.php";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$db = new mysqli($host, $user, $pass, $base) or die("Unable to connect");

$cliente = $db->query("create table if not exists clientes (
	apellido	varchar(60),	
	nombre		varchar(60),
	direccion	varchar(60),
	orden		int not null primary key auto_increment,
	key(apellido)
)");
/*if ($cliente == 1) 
	echo 'La tabla de <font color="red" size="+2">clientes</font> se cre&oacute; con &eacute;xito <br>';
else
	echo 'problemas con la tabla de clientes'.'<br>';
*/
?>

