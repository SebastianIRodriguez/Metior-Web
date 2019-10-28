<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\OAuth;

use League\OAuth2\Client\Provider\Google;

require 'mailer/Exception.php';
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';
require 'mailer/OAuth.php';

require 'mailer/vendor/autoload.php';

$email = "webmetior@gmail.com";
$clientId = "375408461516-ko3issb0infpv7lcrhms19evc9jgsos2.apps.googleusercontent.com";
$clientSecret = "a2uAwGa_P81HWfhAJ9wwzJ2g";
$refreshToken = "1//0d6bW3tpqIu4GCgYIARAAGA0SNwF-L9Ir4Z6CFpsR_80y-EPKS9MLIkf1la_IlKp3Ltl4RwhDKdvCHxH-uQrE_3MSvej45DGSbNA";

$obj = json_decode($_POST['x'], false);
//$obj = new stdClass;
//$obj->mensaje = "hola";
//$obj->nombre= "caca";
//$obj->apellido = "cacnoa";
//$obj->mail = "polipibe2001@gmail.com";

//Create a new PHPMailer instance
$mail = new PHPMailer();

$mail->Debugoutput = 'html';

$mail->isSMTP();

$mail->SMTPDebug = 2;

$mail->Host = 'tls://smtp.gmail.com:587';

$mail->SMTPAuth = true;

$mail->SMTPAutoTLS = false;

$mail->AuthType = 'XOAUTH2';

//$mail->Username = 'webmetior@gmail.com';
//$mail->Password = 'ggphpsjkjxxtvdze';

$mail->oauthUserEmail = $email;
$mail->oauthClientId = $clientId;
$mail->oauthClientSecret = $clientSecret;
$mail->oauthRefreshToken = $refreshToken;

//Create a new OAuth2 provider instance
$provider = new Google(
    [
        'clientId' => $clientId,
        'clientSecret' => $clientSecret,
    ]
);
//Pass the OAuth provider instance to PHPMailer
$mail->setOAuth(
    new OAuth(
        [
            'provider' => $provider,
            'clientId' => $clientId,
            'clientSecret' => $clientSecret,
            'refreshToken' => $refreshToken,
            'userName' => $email,
        ]
    )
);

$mail->setFrom($obj->mail, $obj->nombre . $obj->apellido);

$mail->addReplyTo('webmetior@gmail.com');

$mail->addAddress('webmetior@gmail.com');

$mail->Subject = 'My subject line' . rand(0, 999999);

$mail->Body = $obj->mensaje;

if (!$mail->send()) {
    echo 'Mailer Error: '. $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}
