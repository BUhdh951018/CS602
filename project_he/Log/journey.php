<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="../css/mdb.min.css" rel="stylesheet">
    <!-- Your custom styles (optional) -->
    <link href="../css/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">
    <style>
        body{
            height:2000px;
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
            background: url(../img/4.jpg);
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
            
            height:2000px;
            width:1000px;
            font-family: 'Roboto Slab', serif;
        }
    </style>
</head>

<body>
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark elegant-color-dark">
        <!-- Navbar brand -->
        <a class="navbar-brand" href="../index.html" style="margin-left:300px">Journey Log</a>
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
        <div style="margin-top:30px">
            <?php

            //ini_set("display_errors", "on");
            //error_reporting(E_ALL|E_STRICT);

                $dbms='mysql';
                $host='localhost';
                $dbName='project';
                $user='root';
                $pass='root';
                $dsn="$dbms:host=$host;dbname=$dbName";

                try {
                    $dbh = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT=>true));
            ?>
            <h3>journey record</h3>
            <table class="table table-bordered table-striped" id="flight">
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>City</td>
                        <td>View Detail</td>
                    </tr>
                </thead>
            <?php 
                $date_temp = array('2019-1-1');
                foreach($dbh->query('select date,city from journey') as $row){
                    //$city_temp = array();
                    $array = $date_temp;
                    $flag = 0;
                    array_push($date_temp, $row["date"]);
                    //print_r($date_temp);
                    for ($i=0; $i<count($date_temp)-1; $i++){
                        if ($row["date"] == $date_temp[$i]) {
                            $flag = 1;
                            array_pop($date_temp);
                        } 
                        //array_push($city_temp, $row["city"]);
                    }
                    if ($flag == 1) {
                        continue;
                    } else {
            ?>
                <tr>
                    <td><?php echo $row["date"];?></td>
                    <td><?php echo $row["city"];?></td>
                    <td>
                        <a href="journey_modify.php?operate=0&date=<?php echo $row["date"];?>&city=<?php echo $row["city"];?>">
                            <button class="btn btn-sm btn-primary" id="operate" type="button" name="show">Show Detail</button>
                        </a>
                    </td>
                </tr>
            <?php
                    }
                }
                $dbh = null;
            } catch (PDOExecption $e) {
                die("Error!: ".$e->getMessage()."<br/>");
            }
            ?>
            </table>
            <button class="btn btn-primary">
                <a href="journey_modify.php?operate=3" style="color:white">Add new log</a>
            </button>
        </div>
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