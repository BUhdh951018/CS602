<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome</title>
</head>

<body>
    <div class="container">
        <h1>Welcome</h1>

        <form id="upload_form" action="welcome.php" method="POST" enctype="multipart/form-data">
            <label for="file">File name：</label>
            <input type="file" name="file" id="file"><br>
            <input type="submit" name="submit" value="upload">
        </form>

        <?php
    //ini_set("display_errors", "On"); 
    //error_reporting(E_ALL | E_STRICT);
    session_start();
    if (!isset($_SESSION['name'])) {
        $_SESSION['name'] = array();
    }
    //echo $_SESSION['name'];
    $fileName = $_FILES["file"]["name"];
 
    if ($_FILES["file"]["error"] > 0)
    {
        echo "  Error：: " . $_FILES["file"]["error"] . "<br>";
    }
    else
    {
        /*echo "File name: " . $_FILES["file"]["name"] . "<br>";
        echo "File type: " . $_FILES["file"]["type"] . "<br>";
        echo "File size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
        echo "File temporary location: " . $_FILES["file"]["tmp_name"] . "<br>";
        */
    
        if (file_exists("upload/" . $fileName))
        {
            //echo $fileName . " file has exist. ". "<br>";
            if (!unlink(("upload/" .$fileName))) {
            	//echo "Error deleting $fileName". "<br>";
            }else{
            	//echo ("Deleted $fileName"). "<br>";
            	//echo "start save file ". "<br>";
            	
           		move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
            	//echo "File save at: " . "upload/" . $_FILES["file"]["name"]. "<br>";
            }
        }
        else
        {
            move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
            //echo "文件存储在: " . "upload/" . $_FILES["file"]["name"]. "<br>";
        }
    } 
    $files = $_SESSION['name'];
    array_push($files, $fileName);
    $_SESSION['name'] = $files;

    ?>
        <div class="row">
            <ul class="list-group">
                <?php 
            $files = $_SESSION['name'];
            
            foreach ($files as $filename) {
                if ($filename == ""){
                    continue;
                }
                $file_url = 'upload/'.$filename;
            ?>
                <li class="list-group item">
                    <a href="<?php echo $file_url; ?>"><?php echo $filename; ?></a>
                </li>
                <?php } ?>
            </ul>
        </div>
    </div>
</body>

</html>