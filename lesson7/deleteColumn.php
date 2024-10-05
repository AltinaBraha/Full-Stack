<?php

    try{
        $pdo = new PDO("mysql:host=localhost;dbname=testdb", "root", "");

        $sql = "ALTER TABLE users DROP COLUMN email";

        $pdo->exec($sql);

        echo "Colum was dropped";
        
    }catch(Exception $e){
        echo $e->getMessage();
    }
?>