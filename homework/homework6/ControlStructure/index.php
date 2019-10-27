<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <title>Control Structure</title>
</head>

<body>
    <?php 
        error_reporting();
        $pwd = "";
        $pwdErr = "";
        $pwdSuccess = "";
        $arr = '\.+*?[]^$()';
    
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($_POST["password"])) {
                $pwdErr = "Must have a password!";
            } else {
                $pwd = test_input($_POST["password"]);
                if (strlen($pwd) < 8) {
                    $pwdErr = "Password must have a minimum length of 8 characters";
                } elseif (!check_case($pwd)) {
                    $pwdErr = "Pasword must have 1 uppercase character";
                } elseif (check_meta($pwd, $arr)) {
                    $pwdErr = "Password must have 1 meta character";
                } else {
                    $pwdSuccess = "This password is ok";
                }
            }
        }
    
        // change the input password to a string which can be read
        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            
            return $data;
        }
    
        // check whether the password has a uppercase character
        function check_case($str) {
            for ($i = 0; $i < strlen($str); $i++) {
                if ( (ord($str[$i]) >= ord('A')) && (ord($str[$i]) <= ord('Z')) ) {
                    return true;
                }
            }
            return false;
        }
    
        // check whether the password has a meta-character
        function check_meta($str, $arr) {
            for ($i = 0;$i < 11; $i++) {
                if ($str[0] == $arr[$i]){
                    return false;
                } elseif (strpos($str, $arr[$i])) {
                    return false;
                }
            }
            return true;
        }
    ?>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h2>Homework: Control Structure</h2>

                <form action="index.php" method="POST">
                    <p>Please enter a password:</p>
                    <input type="text" name="password" id="pwd">

                    <input type="submit" value="submit" name="submit">
                </form>

                <span class="error" style="color:red"> <?php echo $pwdErr; ?> </span>
                <span class="success"> <?php echo $pwdSuccess; ?></span>
                <hr>
            </div>
        </div>
    </div>
</body>

</html>