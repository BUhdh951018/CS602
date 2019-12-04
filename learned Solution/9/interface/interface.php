<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
session_start();


interface Command{
    public function execute($controller);
}

class SaveAccountCommand implements Command{
    public $account;
    
    public function execute($controller){
        // used email as primary key
        $key = $this->account->data['email'];
        $controller->accounts[$key] = $this->account;
        return 'success';
    }
}
class UpdateAccountCommand implements Command{
    public function execute($controller){
        $key = $this->account->data['email'];
        $controller->accounts[$key] = $this->account;
        return 'success';
    }
}
class GetAccountCommand implements Command{
    public $key;
    public function execute($controller){

        if(! isset($controller->accounts[$this->key])){
            return 'not data found';
        }else{
            return json_encode($controller->accounts[$this->key]->data);
        }
    }
}
class DeleteAccountCommand implements Command{
    public $key;
    public function execute($controller){
        if(! isset($controller->accounts[$this->key])){
            return 'not data found';
        }else{
            unset($controller->accounts[$this->key]);
            return $this->key.' deleted ';
        }
        
       
    }
}
 
abstract class AbstractCommand{
    abstract public function executeCommand($command);
}

class AccountHandler extends AbstractCommand {
    // used to store all the accounts information
    public $accounts = array();
    
    public function executeCommand($command){
        return $command->execute($this);

    }

}

class Account{
    public $data;
    function setdetail($a){
        $this->data['email'] = $a['email'];
        $this->data['first_name'] = $a['first_name'];
        $this->data['last_name']=$a['last_name'];
        $this->data['phone']=$a['phone'];
    }

}
function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if (! isset($_SESSION['controller'])){
    $lifetime = 60*2;
    session_set_cookie_params($lifetime,'/');
    $_SESSION['controller'] = new AccountHandler();
}

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $data = array();
    foreach($_POST as $x=>$value){
        $data[$x] = test_input($value);
    }
    
    switch($data['type']){
        case 'create':
            
            $command = new SaveAccountCommand();
            $account = new Account();
            $account->setdetail($data);
            $command->account = $account;
            break;
        case 'retrieve':
            
            $command = new GetAccountCommand();
            $command->key = $data['email'];

            // print_r($data['email']);
            break;
        case 'update':
            $command = new UpdateAccountCommand();
            $account = new Account();
            $account->setdetail($data);
            $command->account = $account;
            break;

        case 'delete':
            $command = new DeleteAccountCommand();
            $command->key = $data['email'];
            break;

            

    }
    echo $_SESSION['controller']->executeCommand($command);

    // print_r($_SESSION['controller']->accounts);

}




?>