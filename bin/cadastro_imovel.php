<?php

// require_once 'phpmailer/PHPMailerAutoload.php';

// check if fields passed are empty
if(empty($_POST['inputName'])  		||
   empty($_POST['inputPhone']) 		||
   empty($_POST['inputEmail']) 		||
   empty($_POST['inputFinalidade']) ||
   empty($_POST['inputImovelPara']) ||
   empty($_POST['inputTipo'])	||
   empty($_POST['inputEndereco'])	||
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
$finalidade = $_POST['inputFinalidade'];
$imovelPara = $_POST['inputImovelPara'];
$tipo = $_POST['inputTipo'];
$endereco = $_POST['inputEndereco'];
$area_total = $_POST['inputAreaTotal'];
$area_privativa = $_POST['inputAreaPrivativa'];
$area_construida = $_POST['inputAreaConstruida'];
$numero_dormitorios = $_POST['inputNumeroDormitorios'];
$vagas_garagem = $_POST['inputVagasDeGaragem'];
$numero_banheiros = $_POST['inputNumeroDeBanheiros'];
$valor_venda = $_POST['inputValorVenda'];
$valor_locacao = $_POST['inputValorLocacao'];
$situacao = $_POST['inputSituacao'];
$message = $_POST['inputMessage'];
$deseja_informacoes = $_POST['inputInformacoes'];

// create email body and send it
$to = 'contato@imobiliariaflorenca.com.br'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "Mensagem enviada pelo site por:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$part1 = "Olá, <br />Você recebeu uma nova mensagem do formulário: CADASTRE SEU IMÓVEL CONOSCO ! do website da Imobiliaria Florença.<br /><br />";
$part2 = "Aqui estão os Detalhes do Remente:<br /><br />Nome: $name<br />Telefone: $phone<br />E-mail: $email_address<br /><br />";
$part3 = "Aqui estão os Detalhes do Imóvel:<br/><br/>";
$part4 = "<strong>Finalidade do Imóvel:</strong> $finalidade<br/>";
$part5 = "<strong>Imóvel Para:</strong> $imovelPara<br/>";
$part6 = "<strong>Tipo:</strong> $tipo<br />";
$part7 = "<strong>Imóvel Para:</strong> $imovelPara<br/>";
$part8 = "<strong>Endereço Completo:</strong> $endereco<br/>";
$part9 = "<strong>Área Total (M²):</strong> $area_total<br/";
$part10 = "<strong>Área Privativa (M²):</strong> $area_privativa<br />";
$part11 = "<strong>Área Construída (M²):</strong> $area_construida<br />";
$part12 = "<strong>Número de Dormitórios:</strong> $numero_dormitorios<br />";
$part13 = "<strong>Vagas de Garagem:</strong> $vagas_garagem<br />";
$part14 = "<strong>Número de Banheiros:</strong> $numero_banheiros<br />";
$part15 = "<strong>Valor de Venda aproximado em R$:</strong> $valor_venda<br />";
$part16 = "<strong>Valor de Locação aproximado em R$:</strong> $valor_locacao<br />";
$part17 = "<strong>Situação do Imóvel:</strong> $situacao<br />";
$part18 = "<h4>Observações:</h4><br />$message";
$part19 = "<br /><br /><strong>Deseja Receber Informações da Imobiliaria:</strong> $deseja_informacoes";

$email_body = $part1 . $part2 . $part3 . $part4 . $part5 . $part6 . $part7 . $part8 . $part9 . $part10 . $part11 . $part12 . $part13 . $part14 . $part15 . $part16 . $part17 . $part18 . $part19;

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
