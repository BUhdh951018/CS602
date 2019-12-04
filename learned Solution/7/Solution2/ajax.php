<?php
$data = array();

if (isset($_POST['userName']) && isset($_POST['email']) && isset($_POST['password'])) {
    $name = strval($_POST['userName']);
    $email = strval($_POST['email']);
    $password = strval($_POST['password']);
    $valid = true;
    
    if(!preg_match('/^(?=.*[A_Za-z]).{6,}$/',$name)){
        $valid = false;
        $data1 = 'User name invalid ';
    }
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $valid = false;
        $data2 = 'Email invalid ';
    }
    if(!preg_match('/^(?=.*[A_Z]).{8,}$/', $password)){
        $valid = false;
        $data3 = 'Password invalid ';
    }
    
    if($valid){
        $data = 'Your username is '.$name.' with email '.$email.' and password '.$password;
        echo json_encode($data);
    }
    else{
        $data = $data1.$data2.$data3;
        echo json_encode($data);
    }
}
?>