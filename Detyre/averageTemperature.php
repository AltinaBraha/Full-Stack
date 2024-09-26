<?php



    $temperature = array(34.6,24.4,36.5,32.1,20.0,28.4,39.2);

    $sum = array_sum($temperature); 
    $count = count($temperature);    

    $average = $sum / $count;        

    echo "Vlera mesatare e temperaturave eshte: " . $average;


?>