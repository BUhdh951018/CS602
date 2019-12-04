<?php
header('Access-Control-Allow-Origin: *');

$name = $_POST['name'];
$telephone = $_POST['telephone'];
$emailAddress = $_POST['emailAddress'];
$zipcode = $_POST['zipcode'];
$password = $_POST['password'];
$results = array();

if (! preg_match('/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/', $telephone)) {
    array_push($results, 'Please enter a valid phone number in the format: 888-888-8888');
};

if (! filter_var($emailAddress, FILTER_VALIDATE_EMAIL)) {
    array_push($results, 'Please enter a valid email address.');
};

if (! preg_match('/^[0-9]{5}$/', $zipcode)) {
    array_push($results, 'Please enter a valid 5-digit zip-code.');
};

if (strlen($password) < 5) {
    array_push($results, 'Password must have a minimum length of 5 characters.');
};

if (! preg_match('/[A-Z]/', $password)) {
    array_push($results, 'Password must have at least 1 uppercase character.');
};

if (! preg_match('/[a-z]/', $password)) {
    array_push($results, 'Password must have at least 1 lowercase character.');
};

if (! preg_match('/[\'^£$%&*()}{!@#~?><>,|=_+¬-]/', $password)) {
    array_push($results, 'Password must have at least 1 meta-character.');
};

echo json_encode($results);

?>