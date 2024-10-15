<?php 
include_once('config.php'); 

if (isset($_POST['submit'])) {
    $emri = $_POST['emri'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $tempPass = $_POST['password'];
    $password = password_hash($tempPass, PASSWORD_DEFAULT); // Hashimi i fjalëkalimit
    $tempConfirm = $_POST['confirm_password'];
    $confirm_password = password_hash($tempConfirm, PASSWORD_DEFAULT); // Hashimi i fjalëkalimit të konfirmuar

    // Kontrollimi nëse të gjitha fushat janë plotësuar
    if (empty($emri) || empty($username) || empty($email) || empty($password) || empty($confirm_password)) {
        echo "YOU HAVE NOT FILLED ALL FIELDS";
    } else {
        // Krijimi i SQL për futjen e të dhënave në tabelën 'users'
        $sql = "INSERT INTO users (emri, username, email, password, confirm_password) 
                VALUES (:emri, :username, :email, :password, :confirm_password)";
        
        // Përgatitja e deklaratës së SQL për futje
        $insertSQL = $conn->prepare($sql);

        // Lidhja e parametrave me vlerat përkatëse
        $insertSQL->bindParam(':emri', $emri);
        $insertSQL->bindParam(':username', $username);
        $insertSQL->bindParam(':email', $email);
        $insertSQL->bindParam(':password', $password);
        $insertSQL->bindParam(':confirm_password', $confirm_password);

        // Ekzekutimi i deklaratës së SQL
        $insertSQL->execute();

        // Pas futjes së suksesshme, ridrejtohet te faqja e login-it
        header("Location: login.php");
    }
}
?>
