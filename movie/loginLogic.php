<?php

    session_start();

    include_once('config.php');

    if(isset($_POST['submit'])){
        $username = $_POST['username'];
        $password = $_POST['password'];

    }

    if(empty($username) | empty($password)){
        echo "Please fill in all fields";
    }else{
        $sql = "SELECT id, emri, username, email, passsword, is_admin WHERE username=:username";

        $selectUser = $conn-> prepare($sql);

        $selectUser->bindParam(":username", $username);

        $selectUser->execute();

            $data = $selectUser-> fetch();

            if($data == false){
                echo "The user does not exist";
            }else{
                if(password_verify($password, $data['password'])){
                    $_SEESION['id'] = $data['id'];
                    $_SEESION['username'] = $data['username'];
                    $_SEESION['email'] = $data['email'];
                    $_SEESION['emri'] = $data['emri'];
                    $_SEESION['is_admin'] = $data['is_admin'];

                    header('Location:dashboard.php');

                }else{
                    echo "The password is not valid";
                }
            }

        }
?>