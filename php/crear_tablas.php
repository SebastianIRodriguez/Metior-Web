<?php
include "variables.php";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$db = new mysqli($host, $user, $pass, $base) or die("Unable to connect");

$db->query("create table if not exists clientes (
	orden		int not null primary key auto_increment,
	cant 		int,
	apellido	varchar(60),	
	nombre		varchar(60),
	email 		varchar(60),
	direccion	varchar(60),
	provincia	varchar(60),
	pais 		varchar(60),
	cod_post    varchar(60)
)");

$db->query("create table if not exists users (
	id 			mediumint primary key auto_increment,
	email		varchar(60),
	password 	varchar(128),
	name		varchar(60)
)");

$password = password_hash("admin", PASSWORD_DEFAULT);

$db->query("insert into users (email, password, name) VALUES('admin@mail.com', '$password', 'admin')");



$db->close();
?>

