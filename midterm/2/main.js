const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
var app = express();

var User = require('./user.js')
let username, email;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

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

app.post('/data', (req, res) => {
    username = req.body.name;
    email = req.body.email;
    insert(username, email);
    res.send(username + email);
});

app.get('/all', (req, res) => {
    User.find({},{username:1, emailAddress:1, _id:0}, (err, result) => {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log('Res: ' + result);
            var message = JSON.stringify(result);
            console.log(message);
            //message = "Username: " + message[0] + " email: " + message[1];
            res.json(message);
        }
    });
});

app.get('/one/:name', (req, res) => {
    const name = req.params.name;
    User.findOne({username: name},{emailAddress:1, _id:0}, (err, result) => {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log('Res: ' + result);
            var message = JSON.stringify(result);
            console.log(message);
            //message = "Username: " + message[0] + " email: " + message[1];
            res.json(message);
        }
    });
})

app.listen(port, () => console.log(`Server listening on port ${port}`));

function insert(name, email) {
    var user = new User ({
        username: name,
        emailAddress: email
    });

    user.save(function (err, res) {
        if (err) {
            console.log('Error:' + err);
        } else {
            console.log("Res:" +res);
        }
    });
}

function read() {
    
}