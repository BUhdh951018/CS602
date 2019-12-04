<?php
header('Access-Control-Allow-Origin: *');

$password = $_POST['passwordInput'];
$results = array();

if (strlen($password) < 8) {
    array_push($results, 'Password must have a minimum length of 8 characters.');
};

if (! preg_match('/[A-Z]/', $password)) {
    array_push($results, 'Password must have at least 1 uppercase character.');
};

if (! preg_match('/[\'^£$%&*()}{!@#~?><>,|=_+¬-]/', $password)) {
    array_push($results, 'Password must have at least 1 meta-character.');
};

echo json_encode($results);

?>