<?php

if (isset($_POST["name"]) && isset($_POST["phonenumber"]) ) { 
    $result = array(
    	'email' => $_POST["email"],
    	'phonenumber' => $_POST["phonenumber"]
    ); 
    echo json_encode($result); 
}

?>