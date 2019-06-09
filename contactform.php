<? php
	

if(isset($_POST['submit'])) {


	$firstname = $_POST['first-name'];
	$lastname = $_POST['last-name'];
	$mailFrom = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$mailTo = "armte@justatom.one";
	$headers = "From: ".$mailFrom;
	$txt = "You have received an email from ".$firstname." ".$lastname."\n\n".$message;

	mail($mailTo, $subject, $txt, $headers);
	header("Location: contact.html?mailsent");

}

?>