<?php

    $x=5;//Global Variable

    function localVariable(){
        $y=10;//Local Variable

       
        echo $y;
    }


    localVariable();
    echo "\n, $x";

?>