const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// enter localhost:8080/?page=2&limit=3
app.get('/', async function(req, res) {

    // Access the provided 'page' and 'limt' query parameters
    let page = req.query.page;
    let limit = req.query.limit;

    res.send(page + " " + limit);
});

// enter localhost:8080/tag/2
app.get('/tag/:id', async function (req, res) {
    
    // Retrieve the tag from our URL path
    var id = req.params.id;

    res.send(id);
});

app.listen(8080, function() {
    console.log('Server is listening on port 8080')
});