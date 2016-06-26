<?php

// require_once 'phpmailer/PHPMailerAutoload.php';

// check if fields passed are empty
if(empty($_POST['inputName'])  		||
   empty($_POST['inputPhone']) 		||
   empty($_POST['inputEmail']) 		||
   empty($_POST['inputMessage'])	||
   !filter_var($_POST['inputEmail'],FILTER_VALIDATE_EMAIL))
   {
	//echo "Dados inválidos fornecidos !";
	//return false;
    $data = array('success' => false, 'message' => 'Por favor !, preencha os dados do formulário corretamente  !.');
    echo json_encode($data);
    exit;
   }

$name = $_POST['inputName'];
$phone = $_POST['inputPhone'];
$email_address = $_POST['inputEmail'];
$message = $_POST['inputMessage'];

// create email body and send it
$to = 'vendas@imobiliariaflorenca.com.br'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "Mensagem enviada pelo site por:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$email_body = "Olá, <br />Você recebeu uma nova mensagem do form de contato do website da Imobiliaria Florença !.<br />"."Aqui estão os Detalhes:<br />Remetente: $name<br />Telefone: $phone<br />E-mail: $email_address<br /><br />Mensagem:<br /><br />$message";
$headers = "From: contato@imobiliariaflorenca.com.br\n";
$headers .= "Reply-To: $email_address";
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
mail($to,$email_subject,$email_body,$headers);
// header("location:$redirect");
//return true;
$data = array('success' => true, 'message' => 'Muito Obrigado! Nós recebemos sua mensagem e em breve estaremos entrando em contato.');
echo json_encode($data);
?>
