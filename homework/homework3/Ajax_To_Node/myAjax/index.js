var express = require('express')
var app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json");
    next();
});

app.get('/', function (req, res) {
    res.json(['Airbus', 'Boeing', 'Bombardier', 'Embraer']);
});

app.listen(3000, () => {
    console.log("Server started on 3000");
});
