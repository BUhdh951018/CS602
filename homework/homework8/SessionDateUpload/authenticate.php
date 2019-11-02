<?php
session_start();
if (!isset($_SESSION['count']) || $_SESSION['count'] < 1) {
    $_SESSION['count'] = 3;
}

if (isset($_POST["userName"]) && isset($_POST["password"])) {
    $user = (string)$_POST["userName"];
    $pwd = (string)$_POST["password"];

    //$results = '';
    if ($user == 'test' && $pwd == 'test') {
        $results = 'authenticated-standard_user';

        $message = array(
            'results' => $results,
            'msg' => '',
            'success' => 1
        );
        echo json_encode($message);
    } else {
        $results = 'authenticated-failed';
        $_SESSION['count'] -= 1;
        if ($_SESSION['count'] == 0){
            $message = array(
                'results' => $results,
                'msg' => 'You are not allow to log in your account!',
                'success' => 2
            );
        } else {
            $message = array(
                'results' => $results,
                'msg' => 'Either your username or password was incorrect. You have '.$_SESSION['count'].' more attempts before that account is locked out',
                'success' => 0
            );
        }
        
        echo json_encode($message);
    }

} else {
    echo json_encode(array(
        'results' => 'authenticated-failed',
        'msg' => 'input empty',
        'success' => 0));
}
    
?>