<?php
$name = $_POST['name4'];
$phone = $_POST['phone4'];
$email = $_POST['user_email'];

// if ($_POST['formsinf']) {
// 	return $formsinfo = $_POST['formsinf'];
// } elseif ($_POST['formsinf1']) {
// 	return $formsinfo1 = $_POST['formsinf1'];
// }elseif ($_POST['formsinf2']) {
// 	return $formsinfo2 = $_POST['formsinf2'];
// }elseif ($_POST['formsinf3']) {
// 	return $formsinfo3 = $_POST['formsinf3'];
// }
// elseif ($_POST['formsinf4']) {
// 	return $formsinfo4 = $_POST['formsinf4'];
// }

$formsinfo4 = $_POST['formsinf4'];



$token = "489421184:AAGvW6kWCE9V07T0yl8QrpQ8dIb9ZQpH5gQ";
$chat_id = "-219253860";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Отправленно с формы' => $formsinfo4 
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: /');
} else {
  echo "Error";
}
?>