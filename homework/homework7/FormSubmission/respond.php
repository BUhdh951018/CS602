<?php

$user = $_POST['username'];
$email =  $_POST['email'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$msg = '';
$err = '';

// some part of the input value has been check by the HTML5 at the index page
if (empty($user)) {
    $msg = '';
    $err = 'User name cannot be empty!';
    $respond = array(
        'flag' => 1,
        'msg' => $msg,
        'data' => true,
        'err' => $err
    );
} elseif (empty($phone)){
    $msg = '';
    $err = 'The phone number cannot be empty!';
    $respond = array(
        'flag' => 2,
        'msg' => $msg,
        'data' => true,
        'err' => $err
    );
} elseif (empty($email)) {
    $msg = '';
    $err = 'The email cannot be empty!';
    $respond = array(
        'flag' => 3,
        'msg' => $msg,
        'data' => true,
        'err' => $err
    );
} elseif (empty($gender)) {
    $msg = '';
    $err = 'The gender cannot be empty!';
    $respond = array(
        'flag' => 4,
        'msg' => $msg,
        'data' => true,
        'err' => $err
    );
} elseif (strlen($phone) != 10) {
    $msg = '';
    $err = 'The phone number must be 10 characters!';
    $respond = array(
        'flag' => 2,
        'msg' => $msg,
        'data' => true,
        'err' => $err
    );
} else {
    $msg = 'User: ' . $user . ' Email: ' . $email . ' Phone Number: ' . $phone;
        $err = '';
        $respond = array(
            'flag' => 0,
            'msg' => $msg,
            'data' => true,
            'err' => $err
        );
}

echo json_encode($respond); 

?>