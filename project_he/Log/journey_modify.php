<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flight Log</title>
    <!-- Font Awesome -->
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="../css/mdb.min.css" rel="stylesheet">
    <!-- Your custom styles (optional) -->
    <link href="../css/style.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../css/flaticon.css">
    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">
    <!--<script src="flight.js"></script>-->
    <!--<script src="../js/angular16.js"></script>-->
    <style>
        body{
            height:1800px;
        }
        /*nav_panel*/
        #panel{
            height:300px;
            background-color:#212121;
            display:none;
            color: white
        }
        #panel>.row{
            padding: 30px;
        }
        .panel_slide{
            border-right: 1px solid #cfd8dc;
            float: left;
            height: 250px;
        }
        .nav_p{
            font-family: 'Merriweather Sans', sans-serif;
        }
        /*underline*/
        .underline{
            position: relative;
            text-decoration: none;
            color: #fff;
            font-family: 'Merriweather Sans', sans-serif;
        }
        .underline:before{
            content: "";
            position: absolute;
            left: 50%;
            bottom: -2px;
            width: 0;
            height: 2px;
            background: #fff;
            transition: all .3s;
        }
        .underline:hover:before{
            width: 100%;
            left: 0;
            right: 0;
        }
        /*top*/
        #top{
            background: url(../img/5.jpg);
            height:377px;
        }
        .top2{
            background-color: rgba(0, 0, 0, 0.5);
            color:white;
            height:100px;
            /*margin-top:99px;*/
        }
        .top2_title{
            text-align:center;
            margin-top:30px;
            font-family: 'Merriweather Sans', sans-serif;
        }
        .top2_select{
            margin-left: 50px;
        }
        #content{
            width:1000px;
            font-family: 'Roboto Slab', serif;
        }
    </style>
</head>

<body>
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark elegant-color-dark">
        <!-- Navbar brand -->
        <a class="navbar-brand" href="../index.html" style="margin-left:300px">Flight Log</a>
        <!-- Collapse button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="basicExampleNav">
            <form class="form-inline">
                <div class="md-form my-0" style="margin-left:600px">
                    <i class="fa fa-search" aria-hidden="true" style="color:white"></i>
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                </div>
            </form>
            <!-- Links -->
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" id="flip" href="#">menu
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
            </ul>
            <!-- Links -->
        </div>
        <!-- Collapsible content -->
    </nav>
    <!--/.Navbar-->

    <div id="panel">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-2">
                <p class="nav_p">JOURNEY</p>
                <a href="hainan.html">
                    <p class="underline">Hainan&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a href="changbai.html">
                    <p class="underline">Changbai Mountains&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a href="zhangjiajie.html">
                    <p class="underline">Zhangjiajie&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a href="">
                    <p class="underline">Hangzhou&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a href="">
                    <p class="underline">Wuzhen&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
            </div>
            <div class="col-md-2">
                <p></p>
                <br>
                <a href="">
                    <p class="underline">Suzhou&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a href="">
                    <p class="underline">Nanjing&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a href="">
                    <p class="underline">Xi'an&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a href="">
                    <p class="underline">Chengdu&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a href="">
                    <p class="underline">White Mountain&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
            </div>
            <div class="panel_slide"></div>
            <div class="col-md-2">
                <p class="nav_p">AIRLINE</p>
                <a href="https://www.google.com">
                    <p class="underline">Hainan Airlines&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a>
                    <p class="underline">Sichuan Airlines&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a>
                    <p class="underline">Delta Air Lines&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a>
                    <p class="underline">American Airlines&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a>
                    <p class="underline">JetBlue&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
            </div>
            <div class="col-md-2">
                <p></p>
                <br>
                <a>
                    <p class="underline">Alaska Airlines&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a>
                    <p class="underline">Cathay Pacific Airways&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a>
                    <p class="underline">Alitalia&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a>
                    <p class="underline">Iberia&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a>
                    <p class="underline">All Nippon Airways&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
            </div>
            <div class="panel_slide"></div>
            <div class="col-md-2">
                <p class="nav_p">JOURNEY&FLIGHT LOG</p>
                <a href="journey.php">
                    <p class="underline">Journey Log&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
                <a href="flight.php">
                    <p class="underline">Flight Log&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></p>
                </a>
            </div>
        </div>
    </div>
    <div id="top" class="container-fluid">
        <div class="row" style="height:280px;">

        </div>
        <div class="row top2">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 top2_title">
                        <h2>Journey Log</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container" id="content">
<?php

    ini_set("display_errors", "on");
    error_reporting(E_ALL|E_STRICT);
    $show = "";
    $add= "";
    $dbms='mysql';
    $host='localhost';
    $dbName='project';
    $user='root';
    $pass='root';
    $dsn="$dbms:host=$host;dbname=$dbName";
    $dbh;

    interface OSeclect_Delete {
        public function execute($date, $city);
    }

    class ShowJourney implements OSeclect_Delete {
        public function execute($date, $city) {
            global $show, $dbh;

            $date = str_replace("-", "", $date);
            $sql = "select * from journey where DATE_FORMAT(date,'%Y%m%d')=$date and city='$city'";
            $show = $dbh->query($sql);
        }
    }

    class DeleteJourney implements OSeclect_Delete {
        public function execute($date, $city) {
            global $dbh;

            $date = str_replace("-", "", $date);
            $sql = "delete from journey where DATE_FORMAT(date,'%Y%m%d')=$date and attraction='$city'";
            $dbh->query($sql);
        }
    }

    interface OUpdate_Add {
        public function execute($date, $country, $city, $attr, $time, $price, $tips);
    }

    class UpdateJourney implements OUpdate_Add {
        public function execute($date, $country, $city, $attr, $time, $price, $tips) {
            global $dbh;

            $date = str_replace("-", "", $date);
            $sql = "update journey set time='$time', country='$country', city='$city', price='$price', tips='$tips'
            where attraction='$attr' and DATE_FORMAT(date,'%Y%m%d')=$date";
            $answer = $dbh->query($sql);
        }
    }

    class AddJourney implements OUpdate_Add {
        public function execute($date, $country, $city, $attr, $time, $price, $tips){
            global $dbh;

            $sql = "insert into journey(date, country, city, attraction, time, price, tips)
            values('$date', '$country', '$city', '$attr', '$time', '$price', '$tips')";
            $dbh->query($sql);
        }
    }

    try {
        $dbh = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT=>true));

        if ($_GET['operate'] == 0) {
            $date = $_GET["date"];
            $city = $_GET["city"];
            /*$date = str_replace("-", "", $date);

            $sql = "select * from journey where DATE_FORMAT(date,'%Y%m%d')=$date and city='$city'";
            $result = $dbh->query($sql);*/
            $detail = new ShowJourney();
            $detail -> execute($date, $city);
            $result = $show;
?>
        <div style="margin-top:30px" class="row">
            <h3>about this flight</h3>
            <table class="table table-bordered table-striped" id="flight">
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Country</td>
                        <td>City</td>
                        <td>Attraction</td>
                        <td>Time</td>
                        <td>Price</td>
                        <td>Tips</td>
                        <td>Modify</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <?php
                    foreach($result as $row) { 
                ?>
                <tr>
                    <td><?php echo $row["date"];?></td>
                    <td><?php echo $row["country"];?></td>
                    <td><?php echo $row["city"];?></td>
                    <td><?php echo $row["attraction"];?></td>
                    <td><?php echo $row["time"];?></td>
                    <td><?php echo $row["price"];?></td>
                    <td><?php echo $row["tips"];?></td>
                    <td>
                        <a href="journey_modify.php?operate=1&date=<?php echo $row["date"];?>&attr=<?php echo $row["attraction"];?>">
                            <button class="btn btn-sm btn-primary" id="operate" type="button" name="modify">Modify</button>
                        </a>
                    </td>
                    <td>
                        <a href="journey_modify.php?operate=2&date=<?php echo $row["date"];?>&attr=<?php echo $row["attraction"];?>">
                            <button class="btn btn-sm btn-primary" id="operate" type="button" name="delete">Delete</button>
                        </a>
                    </td>
                </tr>
                <?php }?>
            </table>   
        </div>
    <?php 
        } elseif($_GET['operate'] == 1) {
            $date = $_GET['date'];
            $attr = $_GET['attr'];
    ?>
        <br/>
        <h3>Edit this journey</h3>
        <form action="journey_modify.php?operate=4&date=<?php echo $date;?>&attr=<?php echo $attr;?>" method="post">
            <div class="row">
                <div class="input-group input-group-lg col-sm-8" style="margin-top:10px">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">DATE</span>
                    </div>
                    <input name="date" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">TIME</span>
                    </div>
                    <input name="time" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>
            <div class="row">
                <div class="input-group input-group-lg col-sm-8" style="margin-top:10px">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">Country</span>
                    </div>
                    <input name="country" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">City</span>
                    </div>
                    <input name="city" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                </div>
            </div>
            <div class="row">
                <div class="input-group input-group-lg col-sm-8" style="margin-top:10px">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">ATTRACTION</span>
                    </div>
                    <input name="attraction" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">PRICE</span>
                    </div>
                    <input name="price" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                    
                </div>
            </div>
            <div class="row">
                <div class="input-group input-group-lg col-md-8" style="margin-top:10px">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">TIPS</span>
                    </div>
                    <input name="tips" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                    
                </div>
            </div>

            <br/>
            <input id="add" class="btn btn-primary" type="submit" value="Edit Journey">
            <input id="reset" class="btn btn-primary" type="reset" value="Reset">
        </form>
    <?php 
        } elseif($_GET['operate'] == 2) {
            $date = $_GET['date'];
            $attr = $_GET['attr'];
            $del = new DeleteJourney();
            $del->execute($date, $attr);
        ?>
    <button class="btn btn-primary">
        <a href="journey.php" style="color:white">Success, back to the log page.</a>
    </button>
    <?php
        } elseif($_GET['operate'] == 3) {
    ?>
        <br/>
        <h3>Add new journey</h3>
        <form action="journey_modify.php?operate=4" method="post">
            <div class="row">
                <div class="input-group input-group-lg col-sm-8" style="margin-top:10px">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">DATE</span>
                    </div>
                    <input name="date" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">TIME</span>
                    </div>
                    <input name="time" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>
            </div>
            <div class="row">
                <div class="input-group input-group-lg col-sm-8" style="margin-top:10px">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">Country</span>
                    </div>
                    <input name="country" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">City</span>
                    </div>
                    <input name="city" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                </div>
            </div>
            <div class="row">
                <div class="input-group input-group-lg col-sm-8" style="margin-top:10px">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">ATTRACTION</span>
                    </div>
                    <input name="attraction" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">PRICE</span>
                    </div>
                    <input name="price" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                    
                </div>
            </div>
            <div class="row">
                <div class="input-group input-group-lg col-md-8" style="margin-top:10px">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">TIPS</span>
                    </div>
                    <input name="tips" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                    
                </div>
            </div>

            <br/>
            <input id="add" class="btn btn-primary" type="submit" value="Add New Journey">
            <input id="reset" class="btn btn-primary" type="reset" value="Reset">
        </form>
    <?php
        } elseif($_GET['operate'] == 4) {
            if(isset($_GET['date']) and isset($_GET['attr'])){
                $date = $_GET['date'];
                $attr = $_GET['attr'];
                //$date = str_replace("-", "", $date);

                $time = $_POST['time'];
                $country = $_POST['country'];
                $city = $_POST['city'];
                $price = $_POST['price'];
                $tip = $_POST['tips'];

                $update = new UpdateJourney();
                $update->execute($date, $country, $city, $attr, $time, $price, $tip);
                /*$sql = "update journey set time='$time', country='$country', city='$city', price='$price', tips='$tip'
                where attraction='$attr' and DATE_FORMAT(date,'%Y%m%d')=$date";
                //echo $sql;
                $conn->query($sql);*/
        ?>
        <button class="btn btn-primary">
            <a href="journey.php" style="color:white">Success, back to the log page.</a>
        </button>
        <?php
            } else{
                $date = $_POST['date'];
                $country = $_POST['country'];
                $time = $_POST['time'];
                $city = $_POST['city'];
                $attraction = $_POST['attraction'];
                $price = $_POST['price'];
                $tips = $_POST['tips'];

                $add = new AddJourney();
                $add->execute($date, $country, $city, $attraction, $time, $price, $tips);
                /*$sql = "insert into journey(date, country, city, attraction, time, price, tips)
                values('$date', '$country', '$city', '$attraction', '$time', '$price', '$tips')";
                $conn->query($sql);*/
        ?>
        <button class="btn btn-primary">
            <a href="journey.php" style="color:white">Success, back to the log page.</a>
        </button>
        <?php
            }
        }
        $dbn = null;
    } catch (PDOExecption $e) {
        die("Error!: ".$e->getMessage()."<br/>");
    }
    ?>
    </div>

    <!-- SCRIPTS -->
    <!-- JQuery -->
    <script type="text/javascript" src="../js/jquery-3.3.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="../js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="../js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="../js/mdb.min.js"></script>

    <script>
        $(document).ready(function () {
            $("#flip").click(function () {
                $("#panel").slideToggle("slow");
            });
        });
    </script>
    
</body>

</html>