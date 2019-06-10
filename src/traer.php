<?php
include "variables.php";
$mysqli = new mysqli($host, $user, $pass, $base);
$outp= array();
$resu = $mysqli->query("select * from clientes order by apellido, nombre, direccion ");

for ($i=0; $i<$resu->num_rows; $i++) 
	$outp[$i] = $resu->fetch_array(MYSQLI_ASSOC);
echo json_encode($outp);
?>
