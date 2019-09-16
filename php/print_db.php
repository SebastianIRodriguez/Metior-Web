<?php
include "variables.php";
$mysqli = new mysqli($host, $user, $pass, $base) or die("Unable to connect");

$sql = "SELECT * FROM clientes";
$result = $mysqli->query($sql); // First parameter is just return of "mysqli_connect()" function
echo "<br>";
echo "<table border='1'>";
while ($row = $result->fetch_assoc()) { // Important line !!! Check summary get row on array ..
    echo "<tr>";
    foreach ($row as $field => $value) { // I you want you can right this line like this: foreach($row as $value) {
        echo "<td>" . $value . "</td>"; // I just did not use "htmlspecialchars()" function. 
    }
    echo "</tr>";
}
echo "</table>";

var_dump($result);