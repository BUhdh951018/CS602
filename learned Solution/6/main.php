<?php

// Set the message variable
$message = ""; 

// Check if the Submit button was clicked
if(isset($_POST["submit"]))
{

    // Set the username and password variables to the entries in the form
    $username = $_POST["username"];
    $password = $_POST["password"];
        
    // Check if the password has at least 1 uppercase letter
    $hasUppercase = preg_match("/[A-Z]/", $password); 

    // Check if the password is at least 8 characters
    $hasEightChars = strlen($password) >= 8; 

    // Check if the password contains a meta-character using preg_quote method to define the regex
    $metaPattern = preg_quote('#$%^&*()+=-[]\';,./{}|\":<>?~', '#');
    $hasMetaChar = preg_match("#[{$metaPattern}]#", $password); 

    // Check if the password is valid
    if($hasEightChars && $hasUppercase && $hasMetaChar) { 
        $message = '<h3 class="text-success">Success!</h3> The password entered is valid. '; 
    } else {

        // If invalid, checks each condition and appends to error message
        $message = '<h3 class="text-danger">Error: </h3>'; 
        if(!$hasEightChars) { 
            $message .= "The password must be at least 8 characters. ";
        } 

        if(!$hasMetaChar) { 
            $message .= "The password must contain a meta-character. "; 
        } 

        if(!$hasUppercase) { 
            $message .= "The password must have at least 1 uppercase letter. ";
        }
    }
}

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Password Validator using PHP</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body style="padding:20px;">

<h1 class="font-italic text-center">Password Validator</h1>
<h3 class="text-center" >Enter a username and password to see if your password is valid.</h3>
<form method="post" action="main.php">
<div class="form-group">
    <label for="username">Username: </label>
    <input type="text" class="form-control" id="username" name="username">
</div>
<div class="form-group">
    <label for="password">Password: </label>
    <input type="password" class="form-control" id="password" name="password">
</div>
    <input type="submit" class="btn btn-primary" name="submit" value="Submit"><br /><br />
</form>
<div>
<?php
    echo $message; 
?></div>

</body>
</html>