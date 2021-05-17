<?php
if (isset($_POST['submit'])) {
	
	$to = 'internextmedical@gmail.com';
	$headers = "From: " . $_POST['name'];
	// soggetto della mail
	$subject = "Modulo proveniente da nextmedical.it";

	// corpo messaggio
	$body = "Contenuto del modulo:\n\n";
	$body .= "Inviata da: " . trim(stripslashes($_POST["name"])) . "\n\n";
	$body .= "Email: " . trim(stripslashes($_POST["email"])) . "\n\n";
	$body .= "Telefono: " . trim(stripslashes($_POST["phone"])) . "\n\n";
	$body .= "Messaggio: " . trim(stripslashes($_POST["message"])) . "\n\n";





	// invio mail
	$success = mail($to, $subject, $body, $headers, 'internextmedical@gmail.com'); // SE L'INOLTRO E' ANDATO A BUON FINE...

	echo "La mail è stata inviata con successo. Grazie per averci contattato";

?>


<?php if (isset($success) && $success) { ?>
<h1>Thank You</h1>
Your Message has been sent.
<?php } else { ?>
<h1>Oops!</h1>
Sorry, there was a problem sending your message.  Click the back button and try again.
<?php } ?>