var flight = /** @class */ (function () {
    function flight(date, flight, dep_arr, times, flight_with, seat, cabin, gate_dep, gate_arr, aricraft, rego, block_time, distance, altitude, parking_bay1, parking_bay2, chocks1, chocks2, runaway1, runaway2) {
        this.date = date;
        this.flight = flight;
        this.dep_arr = dep_arr;
        this.times = times;
        this.flight_with = flight_with;
        this.seat = seat;
        this.cabin = cabin;
        this.gate_dep = gate_dep;
        this.gate_arr = gate_arr;
        this.aricraft = aricraft;
        this.rego = rego;
        this.block_time = block_time;
        this.distance = distance;
        this.altitude = altitude;
        this.parking_bay1 = parking_bay1;
        this.parking_bay2 = parking_bay2;
        this.chocks1 = chocks1;
        this.chocks2 = chocks2;
        this.runaway1 = runaway1;
        this.runaway2 = runaway2;
    }
    return flight;
}());
var flights = [];
var count = 0;
function addFlight() {
    var dateInput = document.getElementById("date");
    var date = dateInput.value;
    var flightInput = document.getElementById("flight");
    var flight_n = parseInt(flightInput.value);
    var dep_arrInput = document.getElementById("d-a");
    var dep_arr = dep_arrInput.value;
    var timesInput = document.getElementById("times");
    var times = parseInt(timesInput.value);
    var flight_withInput = document.getElementById("code");
    var flight_with = flight_withInput.value;
    var seatInput = document.getElementById("seat");
    var seat = seatInput.value;
    var cabinInput = document.getElementById("cabin");
    var cabin = cabinInput.value;
    var gate_depInput = document.getElementById("gate_d");
    var gate_dep = gate_depInput.value;
    var gate_arrInput = document.getElementById("gate_a");
    var gate_arr = gate_arrInput.value;
    var aricraftInput = document.getElementById("aricraft");
    var aricraft = aricraftInput.value;
    var regoInput = document.getElementById("rego");
    var rego = regoInput.value;
    var block_timeInput = document.getElementById("time");
    var block_time = block_timeInput.value;
    var distanceInput = document.getElementById("distance");
    var distance = parseInt(distanceInput.value);
    var altitudeInput = document.getElementById("altitude");
    var altitude = parseInt(altitudeInput.value);
    var parking_bay1Input = document.getElementById("bay_d");
    var bay_d = parking_bay1Input.value;
    var parking_bay2Input = document.getElementById("bay_a");
    var bay_a = parking_bay2Input.value;
    var chocks1Input = document.getElementById("chock_off");
    var off = chocks1Input.value;
    var chocks2Input = document.getElementById("chock_on");
    var on = chocks2Input.value;
    var runaway1Input = document.getElementById("runaway_d");
    var runaway_d = runaway1Input.value;
    var runaway2Input = document.getElementById("runaway_a");
    var runaway_a = runaway2Input.value;
    flights[this.count] = new flight(date, flight_n, dep_arr, times, flight_with, seat, cabin, gate_dep, gate_arr, aricraft, rego, block_time, distance, altitude, bay_d, bay_a, off, on, runaway_d, runaway_a);
    this.count++;
    showFlights();
}
function showFlights() {
    var currentCount = count - 1;
    var add = document.getElementById("flight");
    var row = add.insertRow(-1);
    var col1 = row.insertCell(0);
    var day = document.createTextNode(flights[currentCount].date);
    col1.appendChild(day);
    var col2 = row.insertCell(1);
    var foo = "" + flights[currentCount].flight;
    var fli = document.createTextNode(foo);
    col2.appendChild(fli);
    var col3 = row.insertCell(2);
    var d_a = document.createTextNode(flights[currentCount].gate_arr);
    col3.appendChild(d_a);
    var col4 = row.insertCell(3);
    var too = "" + flights[currentCount].times;
    var tim = document.createTextNode(too);
    col4.appendChild(tim);
    var col5 = row.insertCell(4);
    var fli_with = document.createTextNode(flights[currentCount].flight_with);
    col5.appendChild(fli_with);
    var col6 = row.insertCell(5);
    var sea = document.createTextNode(flights[currentCount].seat);
    col6.appendChild(sea);
    var col7 = row.insertCell(6);
    var cab = document.createTextNode(flights[currentCount].cabin);
    col7.appendChild(cab);
    var col8 = row.insertCell(7);
    var ga_d = document.createTextNode(flights[currentCount].gate_dep);
    col8.appendChild(ga_d);
    var col9 = row.insertCell(8);
    var ga_a = document.createTextNode(flights[currentCount].gate_arr);
    col9.appendChild(ga_a);
    var ins = document.getElementById("plane");
    var row2 = ins.insertRow(1);
    var line1 = row2.insertCell(0);
    var air = document.createTextNode(flights[currentCount].aricraft);
    line1.appendChild(air);
    var line2 = row2.insertCell(1);
    var re = document.createTextNode(flights[currentCount].rego);
    line2.appendChild(re);
    var line3 = row2.insertCell(2);
    var blo = document.createTextNode(flights[currentCount].block_time);
    line3.appendChild(blo);
    var line4 = row2.insertCell(3);
    var doo = "" + flights[currentCount].distance;
    var dis = document.createTextNode(doo);
    line4.appendChild(dis);
    var line5 = row2.insertCell(4);
    var aoo = "" + flights[currentCount].altitude;
    var alt = document.createTextNode(aoo);
    line5.appendChild(alt);
    var line6 = row2.insertCell(5);
    var bay = document.createTextNode(flights[currentCount].parking_bay1) + "-" + document.createTextNode(flights[currentCount].parking_bay2);
    line6.appendChild(bay);
    var line7 = row2.insertCell(6);
    var cho = document.createTextNode(flights[currentCount].chocks1) + "-" + document.createTextNode(flights[currentCount].chocks2);
    line7.appendChild(cho);
    var line8 = row2.insertCell(7);
    var run = document.createTextNode(flights[currentCount].runaway1) + "-" + document.createTextNode(flights[currentCount].runaway2);
    line8.appendChild(run);
}
