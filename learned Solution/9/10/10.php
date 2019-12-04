<?php
header("Content-type:text/html;charset=utf-8");
$option=$_POST["option"];
session_start();

interface Command{
    function execute();
}
class SaveAccountCommand implements Command{
    public function execute(){
        $email=$_POST["email"];
        $firstname=$_POST["firstname"];
        $lastname=$_POST["lastname"];
        $phone=$_POST["phone"];
        $_SESSION["email"]=$email;
        $_SESSION["firstname"]=$firstname;
        $_SESSION["lastname"]=$lastname;
        $_SESSION["phone"]=$phone;
        echo "The new account has been saved!";
    }
}
class UpdateAccountCommand implements Command{
    public function execute(){
        $email=$_POST["email"];
        $firstname=$_POST["firstname"];
        $lastname=$_POST["lastname"];
        $phone=$_POST["phone"];
        if($email){
            $_SESSION["email"]=$email;
        }
        if($firstname){
            $_SESSION["firstname"]=$firstname;
        }
        if($lastname){
            $_SESSION["lastname"]=$lastname;
        }
        if($phone){
            $_SESSION["phone"]=$phone;
        }
        echo "The account has been updated!";
    }
}
class GetAccountCommand implements Command{
    public function execute(){
        $arr=array("email"=>$_SESSION['email'],"firstname"=>$_SESSION['firstname'],
        "lastname"=>$_SESSION['lastname'],"phone number"=>$_SESSION['phone']);
        echo json_encode($arr);
    }
}
class DeleteAccountCommand implements Command{
    public function execute(){
        session_unset();
        session_destroy();
        echo "The account has been deleted!";
    }
}

abstract class AbstractCommand{
    abstract protected function execute();
    public function print(){
        echo "This is PHP.";
    }
}
class AccountHandler extends AbstractCommand{
    protected function execute(){
        echo "Success!";
    }
}
if(!$option){
    $x=new SaveAccountCommand;
    $x->execute();
    $y=new GetAccountCommand;
    $y->execute();
}
else if($option=="get"){
    $y=new GetAccountCommand;
    $y->execute();
}
else if($option=="update"){
    $x=new UpdateAccountCommand;
    $x->execute();
    $y=new GetAccountCommand;
    $y->execute();
}
else if($option=="delete"){
    $x=new DeleteAccountCommand;
    $x->execute();
    $y=new GetAccountCommand;
    $y->execute();
}
?>