<?php

// Set the message and login success variables  
$userValidMessage = ""; 
$passwordValidMessage = ""; 
$secondPasswordValidMessage = ""; 
$successfulLogin = true; 
$loginMessage = ""; 


// Set the username and password variables to the entries in the form
$username = $_POST["username"];
$password = $_POST["password"];
$secondPassword = $_POST["secondPassword"];

// Funtion to validate the username 
function validateUsername() { 

        // Declare as global
        global $username, $userValidMessage, $successfulLogin; 

        // Check if the username is at least 6 characters
        $hasSixChars = strlen($username) >= 6; 

        // Check if the username is valid
        if($hasSixChars) { 
            $userValidMessage = '<span class="text-success font-weight-bold">Success!</span> The username entered is valid. '; 
        } else {
            $userValidMessage = '<span class="text-danger font-weight-bold">Error: </span>The username must be at least 6 characters.';
            $successfulLogin = false;
        }
    }

// Funtion to validate the password
function validatePassword() { 

    // Declare as global
    global $password, $passwordValidMessage, $successfulLogin; 

    // Check if the password has at least 1 uppercase letter
    $hasUppercase = preg_match("/[A-Z]/", $password); 

    // Check if the password is at least 8 characters
    $hasEightChars = strlen($password) >= 8; 

    // Check if the password contains a meta-character using preg_quote method to define the regex
    $metaPattern = preg_quote('#$%^&*()+=-[]\';,./{}|\":<>?~', '#');
    $hasMetaChar = preg_match("#[{$metaPattern}]#", $password); 

    // Check if the password is valid
    if($hasEightChars && $hasUppercase && $hasMetaChar) { 
        $passwordValidMessage = '<span class="text-success font-weight-bold">Success!</span> The password entered is valid. '; 
    } else {

        // If invalid, checks each condition and appends to error message
        $passwordValidMessage = '<span class="text-danger font-weight-bold">Error: </span>'; 
        if(!$hasEightChars) { 
            $passwordValidMessage.= "The password must be at least 8 characters. ";
        } 

        if(!$hasMetaChar) { 
            $passwordValidMessage.= "The password must contain at least 1 meta-character. "; 
        } 

        if(!$hasUppercase) { 
            $passwordValidMessage .= "The password must have at least 1 uppercase letter. ";
        }
        $successfulLogin = false; 
    }
}

// Funtion to validate the second password
function validatesecondPassword() { 

    // Declare as global
    global $password, $secondPassword, $secondPasswordValidMessage, $successfulLogin; 

    // Check if the passwords match and the second password is valid
    if($password == $secondPassword) { 
        $secondPasswordValidMessage = '<span class="text-success font-weight-bold">Success!</span> The passwords match and are valid. '; 
    } else {
        $secondPasswordValidMessage = '<span class="text-danger font-weight-bold">Error: </span> The re-entered password must match the original password. ';
        $successfulLogin = false;
    }
}

// Run the validation methods
validateUsername();
validatePassword(); 
validatesecondPassword();

// Check if the login was successful, specify a success/error message
if($successfulLogin) { 
    $loginMessage = '<h2 class="text-success font-weight-bold">Success!<small class="text-dark"> Login was successful.</small></h2>';
} else {
    $loginMessage = '<h2 class="text-danger font-weight-bold">Error:<small class="text-dark"> There were errors with the login.</small></h2>';
}
// Declare an array with the messages that will be converted to JSON
$messages = [ 'validUser' => $userValidMessage, 'validPassword' => $passwordValidMessage, 'validSecondPass' => $secondPasswordValidMessage, 'validLogin' => $loginMessage]; 

// Echo the JSON results to the front end
echo json_encode($messages); 

?>
