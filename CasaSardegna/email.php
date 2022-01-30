<?php

	$to = "mattia.messina993@gmail.com";
	$subject = "Casa Sardegna";

	// corpo messaggio
	$body = "\n";
	$body .= "Inviata da: " . trim(stripslashes($_POST["name"])) . "\n";
	$body .= "Email: " . trim(stripslashes($_POST["email"])) . "\n";
	$body .= "Telefono: " . trim(stripslashes($_POST["phone"])) . "\n\n";
	$body .= "Messaggio: " . "\n" . trim(stripslashes($_POST["message"])) . "\n\n";

	// invio mail
	mail($to, $subject, $body); 

?>
