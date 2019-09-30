<?php
// Connection info. file
include 'variables.php';	

// Connection variables
$conn = new mysqli($host, $user, $pass, $base);
// Check connection
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

// data sent from form login.html 
$obj = json_decode($_POST["x"]);

$email = $obj->email; 
$password = $obj->password;

// Query sent to database
$result = $conn->query("SELECT email, password, name FROM users WHERE email = '$email'");

// Variable $row hold the result of the query
$row = $result->fetch_array(MYSQLI_ASSOC);

// Variable $hash hold the password hash on database
$hash = $row['password'];

/* 
password_Verify() function verify if the password entered by the user
match the password hash on the database. If everything is OK the session
is created for one minute. Change 1 on $_SESSION[start] to 5 for a 5 minutes session.
*/
if (password_verify($password, $hash)) {						
	
	echo json_encode(array("valid" => TRUE));	

} else {
	//echo json_encode(array("valid" => FALSE));			
	echo json_encode($_POST);			
}	
?>