<?php
include "variables.php";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$db = new mysqli($host, $user, $pass, $base) or die("Unable to connect");

$cliente = $db->query("drop table clientes");

$db->close();
?>

