<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'mailer/Exception.php';
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';

$obj = json_decode($_POST['x'], false);

//Create a new PHPMailer instance
$mail = new PHPMailer();

$mail->Debugoutput = 'html';

$mail->isSMTP();

$mail->SMTPDebug = 2;

$mail->Host = 'tls://smtp.gmail.com:587';

$mail->SMTPAuth = true;

$mail->SMTPAutoTLS = false;

$mail->Username = 'webmetior@gmail.com';
$mail->Password = 'peifndoemujiiknt';

$mail->setFrom($obj->mail, $obj->nombre . $obj->apellido);

$mail->addReplyTo('webmetior@gmail.com');

$mail->addAddress('webmetior@gmail.com');

$mail->Subject = 'Mail de contacto';
$mail->Body = $obj->mensaje;

if (!$mail->send()) {
    echo 'Mailer Error: '. $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}
