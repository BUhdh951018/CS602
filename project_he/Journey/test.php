<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #map {
            margin: 5px;
            width: 970px;
            height: 600px;
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <div class="container" id="content">
        <div class="content_title">
            <h1>Map of Carribbean</h1>
            <div id="map" ></div>
        </div>
    </div>
    <?php 
    ini_set("display_errors", "on");
    error_reporting(E_ALL|E_STRICT);
        $servername = "localhost";
        $username = "root";
        $password = "root";
        $dbname = "project";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("Connect error: ".$conn->connect_error);
        }

        $sql = "select * from Carribbean";
        $result = $conn->query($sql);
        $lat = array();
        $lng = array();
        $code = array();
        while ($row=mysqli_fetch_assoc($result)){
            array_push($lat, $row['lat']);
            array_push($lng, $row['lng']);
            array_push($code, $row['code']);
        }
        print_r($lat);
    ?>

    <script type="text/javascript" src="../js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript">
        var temp ="";
        console.log(temp);
        var map;
        
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 5.5,
                center: {
                    lat: 19,
                    lng: -69
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var flightPlanCoordinates = [
                {
                    lat: 25.038889,
                    lng: -77.466111,
                    code: 'Bahamas'
                }, /*NAS*/
                {
                    lat: 21.773611,
                    lng: -72.265833,
                    code: 'Turks and Caicos Islands'
                }, /*PLS*/
                {
                    lat: 18.58,
                    lng: -72.2925,
                    code: 'Haiti'
                }, /*PAP*/
                {
                    lat: 17.935556,
                    lng: -76.7875,
                    code: 'Jamaica'
                }, /*KIN*/
                {
                    lat: 18.431944,
                    lng: -69.671944,
                    code: 'Dominican Republic'
                }, /*SDQ*/
                {
                    lat: 18.439167,
                    lng: -66.001944,
                    code: 'Puerto Rico'
                }, /*SJU*/
                {
                    lat: 18.337222,
                    lng: -64.973333,
                    code: 'US Virgin'
                }, /*STT*/
                {
                    lat: 18.445556,
                    lng: -64.543056,
                    code: 'UK Virgin'
                }, /*EIS*/
                {
                    lat: 18.040833,
                    lng: -63.109444,
                    code: 'Sint Maarten'
                }, /*SXM*/
                {
                    lat: 17.311389,
                    lng: -62.718611,
                    code: 'Saint Kitts and Nevis'
                }, /*SKB*/
                {
                    lat: 17.136667,
                    lng: -61.793056,
                    code: 'Antigua and Barbuda'
                }, /*ANU*/
                {
                    lat: 16.791389,
                    lng: -62.193333,
                    code: 'Montserrat'
                }, /*MNI*/
                {
                    lat: 15.546944,
                    lng: -61.3,
                    code: 'Dominica'
                }, /*DOM*/
                {
                    lat: 13.074722,
                    lng: -59.4925,
                    code: 'Barbados'
                }, /*BGI*/
                {
                    lat: 12.004167,
                    lng: -61.786111,
                    code: 'Grenada'
                }, /*GND*/
            ];
            
            var infowindow = new google.maps.InfoWindow();

            for (var i = 0; i < 15; i++) {
                
                var currentPath = [];
                currentPath.push(flightPlanCoordinates[i]);
                var temp = flightPlanCoordinates[i].code;

                var location = new google.maps.LatLng(currentPath.lat, currentPath.lng);
                var marker = new google.maps.Marker({
                    position: flightPlanCoordinates[i],
                    map: map,
                    title: flightPlanCoordinates[i].code
                });
                addContent(marker, temp, infowindow); 
            }
        }

        function addContent(marker, temp, infowindow) {
            var contentString = '<div>' + '<a href="Carribbean/Trans/' + temp + '.html" style="color:black">' +temp+ '</a>' + '</div>';

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(contentString);
                infowindow.open(map, marker);
            });
        }
        </script>

        <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDaqp86Dew7QGyrmtCMV8cv83u0KN9ueAE&callback=initMap&language=en">
        </script>
        <?php $conn->close();?>
</body>
</html>