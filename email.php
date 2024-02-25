<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['nome']; // Mudança aqui, correspondendo ao atributo 'name' do input
    $email = $_POST['email'];
    $phone = $_POST['numero']; // Mudança aqui, correspondendo ao atributo 'name' do input
    $subject = $_POST['assunto']; // Mudança aqui, correspondendo ao atributo 'name' do input
    $message = $_POST['mensagem']; // Mudança aqui, correspondendo ao atributo 'name' do textarea
    
    // Configure o seu email aqui
    $to = "isabele.dev@gmail.com";
    $subject = "Novo formulário de contato: $subject";
    $body = "Nome: $name\nEmail: $email\nTelefone: $phone\n\n$message";
    
    // Envie o email
    if (mail($to, $subject, $body)) {
        echo "Mensagem enviada com sucesso.";
    } else {
        echo "Erro ao enviar mensagem.";
    }
} else {
    echo "Método inválido de envio.";
}
?>
