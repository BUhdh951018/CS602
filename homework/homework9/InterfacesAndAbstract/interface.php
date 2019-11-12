<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <title>Account</title>
</head>

<body>
    <?php
    session_start();
    if (!isset($_SESSION['account'])) {
        $_SESSION['account'] = array();
    }
    $account_array = $_SESSION['account'];
    $show = '';
    /*ini_set("display_errors", "On");
    error_reporting(E_ALL|E_STRICT);*/
    interface Command {
        public function execute($value);       
    }

    class SaveAccountCommand implements Command {
        public function execute($value) {
            global $account_array;
            array_push($account_array, $value);
            $_SESSION['account'] = $account_array;
            //print_r($account_array);
        }
    }

    class UpdateAccountCommand implements Command {
        public function execute($value) {
            global $account_array;
            $temp = $value['first'];
            for ($i=0; $i<count($account_array); $i++) {
                if ($temp == $account_array[$i]['first']) {
                    $account_array[$i] = $value;
                }
            }
            $_SESSION['account'] = $account_array;
        }
    }

    class GetAccountCommand implements Command {
        public function execute($value) {
            global $account_array, $show;
            for ($i=0; $i<count($account_array); $i++) {
                if ($value == $account_array[$i]['first']) {
                    $show = $account_array[$i];
                }
            }
        }
    }

    class DeleteAccountCommand implements Command {
        public function execute($value) {
            global $account_array;
            for ($i=0; $i<count($account_array); $i++) {
                if ($value == $account_array[$i]['first']) {
                    $account_array[$i] = "";
                }
            }
            $_SESSION['account'] = $account_array;
        }
    }

    abstract class AbstractCommand {
        private $firstName, $lastName, $email, $phone;

        public function __construct($firstName, $lastName, $email, $phone) {
            $this -> firstName = $firstName;
            $this -> lastName = $lastName;
            $this -> email = $email;
            $this -> phone = $phone;
        }

        public function getFirstName () {
            return $this -> firstName;
        }

        public function setFirstName($value) {
            $this -> firstName = $value;
        }

        public function getLastName () {
            return $this -> lastName;
        }

        public function setLastName($value) {
            $this -> lastName = $value;
        }
        
        public function getEmail () {
            return $this -> email;
        }

        public function setEmail($value) {
            $this -> email = $value;
        }

        public function getPhone () {
            return $this -> phone;
        }

        public function setPhone($value) {
            $this -> phone = $value;
        }

        abstract public function getFullName();
    }

    class AccountHandler extends AbstractCommand{
        
        //public final SaveAccountCommand $save;
        public function __construct($firstName, $lastName, $email, $phone) {
            parent::__construct($firstName, $lastName, $email, $phone);
        }

        public function getFullName() {
            return $this -> getFirstName() . ' ' . $this -> getLastName();
        }

        /*
        have no idea with the implements of the Command design pattern
    */
    }
?>
    <div class="container">

        <?php
    //print_r($account_array);
    if (isset($_GET['operate'])) {
        if ($_GET['operate'] == 0) {
            $last = $_POST['lName'];
            $first = $_POST['fName'];
            $email = $_POST['email'];
            $phone = $_POST['number'];
            
            $account = new AccountHandler($first, $last, $email, $phone);
            $value = array('first' => $account->getFirstName(), 'last' => $account->getLastName(), 'email' => $account->getEmail(), 'phone' => $account->getPhone());
            $save = new SaveAccountCommand();
            $save -> execute($value);
        
?>
        <h3>The information of the new add account</h3>
        <?php
        echo '<p>' . $account -> getFullName() . '</p>';

        }
        elseif ($_GET['operate'] == 1) {
            $temp = $_GET['first'];
?>
        <h3>Please enter information of the account which need to be update</h3>
        <form action="interface.php?operate=4&first=<?php echo $temp; ?>" method="POST">
            <div class="input-group">
                <span class="input-group-addon">First Name</span>
                <input type="text" class="form-control" name="fName" id="fName">
                <span class="input-group-addon">Last Name</span>
                <input type="text" class="form-control" name="lName" id="lName">
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">Email</span>
                <input type="email" class="form-control" name="email" id="email">
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">Phone</span>
                <input type="number" class="form-control" name="number" id="number">
            </div>
            <br>
            <div class="btn-group">
                <input type="submit" value="submit" class="btn btn-primary">
                <input type="reset" value="reset" class="btn btn-primary">
            </div>
        </form>
<?php
        }
        elseif ($_GET['operate'] == 2) {
        $value = $_GET['first'];
        $delete = new DeleteAccountCommand();
        $delete -> execute($value);
        }
        elseif ($_GET['operate'] == 3) {
        $value = $_GET['first'];
        $check = new GetAccountCommand();
        $check -> execute($value);
        ?>
        <h3>Information of the select account</h3>
        <ul>
            <li><?=$show['first']?></li>
            <li><?=$show['last']?></li>
            <li><?=$show['email']?></li>
            <li><?=$show['phone']?></li>
        </ul>
        <?php
        }
        elseif ($_GET['operate'] == 4) {
            $first = $_POST['fName'];
            $last = $_POST['lName'];
            $email = $_POST['email'];
            $phone = $_POST['number'];

            $account = new AccountHandler($first, $last, $email, $phone);
            $value = array('first' => $account->getFirstName(), 'last' => $account->getLastName(), 'email' => $account->getEmail(), 'phone' => $account->getPhone());
            $update = new UpdateAccountCommand();
            $update -> execute($value);
        }
    }
?>

        <h3>Already exist in the account table</h3>
        <table class="table table-bordered">
            <thead>
                <td>First Name</td>
                <td>Last Name</td>
                <td colspan="3">Operate</td>

            </thead>
            <?php
    foreach ($account_array as $item) {
        if ($item['first'] == "") {
            continue;
        }
?>
            <tr>
                <td><?=$item['first']?></td>
                <td><?=$item['last']?></td>
                <td><a href="interface.php?operate=1&first=<?php echo $item['first'];?>"><button
                            class="btn btn-primary">update</button></a></td>
                <td><a href="interface.php?operate=2&first=<?php echo $item['first'];?>"><button
                            class="btn btn-primary">delete</button></a></td>
                <td><a href="interface.php?operate=3&first=<?php echo $item['first'];?>"><button
                            class="btn btn-primary">check</button></a></td>
            </tr>
<?php } ?>
        </table>
    </div>

</body>

</html>