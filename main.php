<?php
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];

// Sanitize the input
$name = filter_var($name, FILTER_SANITIZE_STRING);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$message = filter_var($message, FILTER_SANITIZE_STRING);

// Set the recipient and subject
$recipient = "maphuthaaggrey83@gmail.com";
$subject = "Message from $name";

// Set the mail header
$mailheader = "From: $name <$email>\r\n";

// Set the mail message
$mailmessage = "Name: $name\nEmail: $email\nTel: $tel\nMessage: $message";

// Send the mail
if (mail($recipient, $subject, $mailmessage, $mailheader)) {
    echo "Message sent successfully!";
} else {
    echo "Error sending message!";
}
