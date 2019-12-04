<?php
$dbms = 'mysql';
$host = 'localhost';
$dbName = 'project';
$user = 'root';
$pass = '';
$dsn = "$dbms:host=$host;dbname=$dbName";

try {
    $dbn = new PDO($dsn, $user, $pass);
    echo "connect success<br/>";

    $dbh = null;
} catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}

?>