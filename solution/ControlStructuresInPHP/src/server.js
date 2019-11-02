const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const key = fs.readFileSync('./encryption/server.key');
const cert = fs.readFileSync('./encryption/server.crt');

const app = express();
const server = https.createServer({
        key: key,
        cert: cert
    }, app);

const port = process.env.port || 8000;
const publicDirectoryPath = path.join(__dirname, '../public/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(publicDirectoryPath));

app.get('/', function(req, res) {
    res.sendFile(publicDirectoryPath + 'views/passwordValidation.html');
});

server.listen(port, () => {
    console.log(`Server up and running on port ${port}.`);
});