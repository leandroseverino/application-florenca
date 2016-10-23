<?php

// require_once 'phpmailer/PHPMailerAutoload.php';

// check if fields passed are empty
if(empty($_POST['inputName'])  		||
   empty($_POST['inputCargo']) 		||
   empty($_POST['inputPhone']) 		||
   empty($_POST['inputCelular']) 	||
   empty($_POST['inputEmail']) 		||
   empty($_POST['inputEndereco']) 	||
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
$cargo = $_POST['inputCargo'];
$phone = $_POST['inputPhone'];
$celular = $_POST['inputCelular'];
$email_address = $_POST['inputEmail'];
$endereco = $_POST['inputEndereco'];
$numero = $_POST['inputNumero'];
$complemento = $_POST['inputComplemento'];
$bairro = $_POST['inputBairro'];
$cidade = $_POST['inputCidade'];
$uf = $_POST['inputUf'];
$message = $_POST['inputMessage'];

// create email body and send it
$to = 'contato@imobiliariaflorenca.com.br'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "Mensagem enviada pelo site por:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$part1 = "Olá, <br />Você recebeu uma nova mensagem do formulário: TRABALHE CONOSCO do website da Imobiliaria Florença !.<br /><br />";
$part2 = "Aqui estão os Detalhes:<br /><br />Remetente: $name<br />Telefone: $phone<br />Celular: $celular<br />E-mail: $email_address<br /><br />";
$part3 = "Endereço: $endereco , Número: $numero, Complemento: $complemento - Bairro: $bairro - Cidade: $cidade - UF: $uf<br /><br />";
$part4 = "<h4>Dados do Currículo:</h4><br /><br />$message";
$email_body = $part1 . $part2 . $part3 . $part4;
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
