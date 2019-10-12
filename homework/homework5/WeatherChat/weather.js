const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let weather = new Array();
let hour = new Array();

fs.readFile(__dirname + '/weather.json', (err, data) => {
    data = JSON.parse(data);
    data.forEach(element => {
        weather.push({
            day: element.day,
            weather: element.weather,
            high: element.tempH,
            low: element.tempL
        });
    });
});

fs.readFile(__dirname + '/hour.json', (err, data) => {
    data = JSON.parse(data);
    data.forEach(element => {
        hour.push({
            hour: element.hour,
            temp: element.temp,
            rain: element.rain
        });
    });
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");

    next();
    app.options("x", (req, res) => {
        res.header(
            "Access-Control-Allow-Methods",
            "GET, PATCH, PUT, POST, DELETE, OPTIONS"
        );
        res.send();
    });
});

app.get('/indices', (req, res) => {
    //console.log(weather);
    res.json(weather);
});

app.get('/today', (req, res) => {
    res.json(hour);
});

app.get('/search/:location', (req, res) => {
    const location = req.params.location;
    res.send(location);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', (socket) => {
    socket.emit('news', 'hello world!');

    socket.on('other event', (msg) => {
        console.log(msg);
    });
});

http.listen(8000, () => {
    console.log('Server is listening on 8000');
});