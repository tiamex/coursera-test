<?php
	if ((trim($_POST['name-da97']) != "") && (trim($_POST['email-da97']) != "") && (trim($_POST['message-da97']) != "")) {
	//questo fa si che se i campi "oggetto" e "messaggio" sono vuoti la form non invia nessuna mail
	$to = " \n internextmedcal@gmail.com";
	$headers = "From: " . $_POST['email-da97'] . "\n";
	// soggetto della mail
	$subject = "Modulo proveniente da nextmedical.it";

	// corpo messaggio
	$body = "Contenuto del modulo:\n\n";
	$body .= "Inviata da: " . trim(stripslashes($_POST["name-da97"])) . "\n";
	$body .= "Email: " . trim(stripslashes($_POST["email-da97"])) . "\n";
	$body .= "Telefono: " . trim(stripslashes($_POST["phone-4ee7"])) . "\n";
	$body .= "Messaggio: " . trim(stripslashes($_POST["message-da97"])) . "\n";





	// invio mail
	mail($to, $subject, $body, $headers); // SE L'INOLTRO E' ANDATO A BUON FINE...

	echo "La mail è stata inviata con successo. Grazie per averci contattato";

	} else {// altrimenti
	echo "Deve compilare il form prima di inviare.";

	}

?>