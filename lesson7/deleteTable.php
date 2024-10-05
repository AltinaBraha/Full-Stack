<?php

    try{
        $pdo = new PDO("mysql:host=localhost;dbname=testdb", "root", "");

        $sql = "DROP TABLE products";

        $pdo->exec($sql);

        echo "Table was dropped";
        
    }catch(Exception $e){
        echo $e->getMessage();
    }
?>