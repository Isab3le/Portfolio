<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // Configure o seu email aqui
    $to = "isabele.dev@gmail.com";
    $subject = "Novo formulário de contato: $subject";
    $body = "Nome: $name\nEmail: $email\nTelefone: $phone\n\n$message";
    
    // Envie o email
    if (mail($to, $subject, $body)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
} else {
    echo "Este arquivo não pode ser acessado diretamente.";
}
?>
