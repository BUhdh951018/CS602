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
                        <h2>Flight Log</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container" id="content">
        <div style="margin-top:30px">
            <?php

            /*ini_set("display_errors", "on");
            error_reporting(E_ALL|E_STRICT);*/

            $servername = "localhost";
            $username = "root";
            $password = "root";
            $dbname = "project";

            $conn = new mysqli($servername, $username, $password, $dbname);

            if ($conn->connect_error) {
                die("Connect error: ".$conn->connect_error);
            }

            $sql = "select date,airline,number from flight";
            $result = $conn->query($sql);

            
            ?>
            <h3>flight record</h3>
            <table class="table table-bordered table-striped" id="flight">
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Airline</td>
                        <td>Flight#</td>
                        <td>View Detail</td>
                    </tr>
                </thead>
                <?php 
                    while($row = mysqli_fetch_assoc($result)) {
                        //associative array(array/all)
                ?>
                <tr>
                    <td><?php echo $row["date"];?></td>
                    <td><?php echo $row["airline"];?></td>
                    <td><?php echo $row["number"];?></td>
                    <td>
                        <a href="flight_modify.php?operate=0&date=<?php echo $row["date"];?>&number=<?php echo $row["number"];?>">
                            <button class="btn btn-sm btn-primary" id="operate" type="button" name="show">Show Detail</button>
                        </a>
                    </td>
                </tr>
                <?php
                    }
                    $conn->close();
                ?>
            </table>
            <button class="btn btn-primary">
                <a href="flight_modify.php?operate=3" style="color:white">Add new log</a>
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