<?php
  $nombre = $_POST['nombre'];
  $mail = $_POST['mail'];
  $mensaje = $_POST['mensaje'];

  if(mail('tomy-pitinari@hotmail.com', $mail, $mensaje)){
    echo "<script type=\"text/javascript\">window.alert('El mail fue enviado con exito.');
    window.location.href = 'contacto.html';</script>";
    exit;
  }else{
    echo "<script type=\"text/javascript\">window.alert('El mail no se pudo enviar.');
    window.location.href = 'contacto.html';</script>";
    exit;
  }
?>
