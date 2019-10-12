var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var users = [{
    id: 1,
    name: 'Jhon Doe',
    age: 23,
    email: "jhon@doe.com"
}];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.post('/api/users', (req, res) => {
    var user = req.body.user;
    users.push(user);

    return res.send('User has been added successfully');
})

app.listen('3000', () => {
    console.log('Server listening on port 3000');
});