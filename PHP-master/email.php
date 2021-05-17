<?php // Get information from the Form and Email It.
if (isset($_POST['submit'])) {
	$to = 'internextmedical@gmail.com' . ', '; // Send to this email

	$headers = "Cc:" . $_POST['email'] . "\r\n"; // CC to this Email
    
	$subject = 'App Email'; // Subject in Body

	$message = 'Store Name: ' . $_POST['store_name'] . "\r\n";
	$message .= 'License#: ' . $_POST['license'] . "\r\n";
	$message .= 'Date: ' . $_POST['date'] . "\r\n";
	$message .= 'Email: ' . $_POST['email'] . "\r\n";
	$message .= 'Mobile App: ' . $_POST['app'] . "\r\n\r\n";
	$message .= 'Message: ' . $_POST['message'] . "\r\n";

	$success = mail($to, $subject, $message, $headers, '-femail@domaintest.com'); 
}
?>

<?php if (isset($success) && $success) { ?>
<h1>Thank You</h1>
Your Message has been sent.
<?php } else { ?>
<h1>Oops!</h1>
Sorry, there was a problem sending your message.  Click the back button and try again.
<?php } ?>