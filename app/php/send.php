<?php
function mime_header_encode($str, $data_charset = '', $send_charset = '') {
	if($data_charset != $send_charset) {
	$str = iconv($data_charset, $send_charset, $str);
	}
	return '=?' . $send_charset . '?B?' . base64_encode($str) . '?=';
}


function send_mime_mail($name_from, $email_from, $name_to, $email_to, $data_charset, $send_charset, $subject, $body){
	$to = mime_header_encode($name_to, $data_charset, $send_charset).' <' . $email_to . '>';
	$subject = mime_header_encode($subject, $data_charset, $send_charset);
	$from =  mime_header_encode($name_from, $data_charset, $send_charset).' <' . $email_from . '>';
	if($data_charset != $send_charset) {
		$body = iconv($data_charset, $send_charset, $body);
	}
	$headers = "From: $from\r\n";
	$headers .= "Content-type: text/html; charset=$send_charset\r\n";
	return mail($to, $subject, $body, $headers);
}

if(!empty($_POST)){
	$arUsers = array(
		array(
			"NAME"=>"KIDDO",
			"EMAIL"=>"alex@volta.one"
		),
        /*array(
			"NAME"=>"PARUSAN",
			"EMAIL"=>"alexrew2012@gmail.com"
		),*/
		//Потом подставить тут свои имейлы
	);

	$message = "";
	$message .= "<b>Имя: </b>" . $_POST['name'] . "<br>";
	$message .= "<b>Фамилия: </b>" . $_POST['serName'] . "<br>";
	$message .= "<b>Email: </b>" . $_POST['email'] . "<br>";
	$message .= "<b>Телефон: </b>" . $_POST['tel'] . "<br><br>";

	$message .= "<b>Товар: </b>" . $_POST['tovar'] . "<br>";
	$message .= "<b>Количество: </b>" . $_POST['col'] . "<br>";
	$message .= "<b>Цена за единицу: </b>" . $_POST['price'] . "<br>";
	$message .= "<b>Общая сумма: </b>" . $_POST['summ'] . "<br>";
	$message .= "<b>Цвета: </b>" . $_POST['colors'] . "<br><br>";

	$message .= "<b>Способ доставки: </b>" . $_POST['spos'] . "<br><br>";
	if ($_POST['sposNum'] == "1") {
		$message .= "<b>Город: </b>" . $_POST['city'] . "<br>";
		$message .= "<b>Улица: </b>" . $_POST['street'] . "<br>";
		$message .= "<b>Дом: </b>" . $_POST['build'] . "<br>";
		if (!empty($_POST['kv'])) {
			$message .= "<b>Квартира: </b>" . $_POST['kv'] . "<br>";
		}
	} else {
		$message .= "<b>Город: </b>" . $_POST['cityNP'] . "<br>";
		$message .= "<b>Отделение Новой Почты: </b>" . $_POST['numNP'] . "<br>";
	}
	if (!empty($_POST['comment'])) {
		$message .= "<b>Комментарий: </b>" . $_POST['comment'] . "<br>";
	}

	$messageToCustomer = "Вы сделали заказ на сайте kiddo.com.ua<br>";
	$messageToCustomer = "Ваши данные:<br>";
	$messageToCustomer .= "<b>Имя: </b>" . $_POST['name'] . "<br>";
	$messageToCustomer .= "<b>Фамилия: </b>" . $_POST['serName'] . "<br>";
	$messageToCustomer .= "<b>Email: </b>" . $_POST['email'] . "<br>";
	$messageToCustomer .= "<b>Телефон: </b>" . $_POST['tel'] . "<br><br>";

	$messageToCustomer = "Ваш заказ:<br>";
	$messageToCustomer .= "<b>Товар: </b>" . $_POST['tovar'] . "<br>";
	$messageToCustomer .= "<b>Количество: </b>" . $_POST['col'] . "<br>";
	$messageToCustomer .= "<b>Цена за единицу: </b>" . $_POST['price'] . "<br>";
	$messageToCustomer .= "<b>Общая сумма: </b>" . $_POST['summ'] . "<br>";
	$messageToCustomer .= "<b>Цвета: </b>" . $_POST['colors'] . "<br><br>";

	$messageToCustomer .= "<b>Способ доставки: </b>" . $_POST['spos'] . "<br><br>";
	if ($_POST['sposNum'] == "1") {
		$messageToCustomer .= "<b>Город: </b>" . $_POST['city'] . "<br>";
		$messageToCustomer .= "<b>Улица: </b>" . $_POST['street'] . "<br>";
		$messageToCustomer .= "<b>Дом: </b>" . $_POST['build'] . "<br>";
		if (!empty($_POST['kv'])) {
			$messageToCustomer .= "<b>Квартира: </b>" . $_POST['kv'] . "<br>";
		}
	} else {
		$messageToCustomer .= "<b>Город: </b>" . $_POST['cityNP'] . "<br>";
		$messageToCustomer .= "<b>Отделение Новой Почты: </b>" . $_POST['numNP'] . "<br>";
	}
	if (!empty($_POST['comment'])) {
		$messageToCustomer .= "<b>Комментарий: </b>" . $_POST['comment'] . "<br>";
	}

	foreach ($arUsers as $Item){
		$r = send_mime_mail("KIDDO", "kiddo@gmail.com", $Item['NAME'], $Item['EMAIL'], 'utf-8', 'utf-8', "Замовлення на сайті KIDDO", $message);
		//потом тут тоже на правильное поменяешь
	}

	//письмо для заказчика
	send_mime_mail("KIDDO", "kiddo@gmail.com", "KIDDO", $_POST['email'], 'utf-8', 'utf-8', "Замовлення на сайті KIDDO", $messageToCustomer);
	//потом тут тоже на правильное поменяешь
}
?>
