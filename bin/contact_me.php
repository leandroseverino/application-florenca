<?php

// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['phone']) 		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Dados inválidos fornecidos !";
	return false;
   }

$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// create email body and send it
$to = 'contato@imobiliariaflorenca.com.br'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "Mensagem enviada pelo site por:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$email_body = "Você recebeu uma nova mensagem do form de contato do website da Imobiliaria Florença.\n\n"."Aqui estão os Detalhes:\n\nRemetente: $name\n\nTelefone: $phone\n\nE-mail: $email_address\n\nMensagem:\n$message";
$headers = "From: contato@imobiliariaflorenca.com.br\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;

?>
