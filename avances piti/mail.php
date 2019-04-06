<?php
  $nombre = $_POST['nombre'];
  $mail = $_POST['mail'];
  $mensaje = $_POST['mensaje'];

  mail('tomy-pitinari@hotmail.com', $mail, $mensaje);

  
?>
