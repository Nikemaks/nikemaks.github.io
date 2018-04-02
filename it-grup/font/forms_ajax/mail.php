<?php

$recepient = "legendary2591@gmail.com";
$sitename = "info@bodymass.powerlife.com.ua";


$phone = trim($_POST["phone"]);

$message = "Телефон: $phone";

$pagetitle = "Новая заявка с сайта info@bodymass.powerlife.com.ua";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");