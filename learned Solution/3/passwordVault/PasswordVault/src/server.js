const express = require('express');
const session = require('express-session');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require("method-override");
const cors = require("cors");

const port = process.env.PORT || 8000;
const sessionConfig = {
    secret: 'Only one way into the vault, no way out',
    saveUninitialized: true,
    resave: true,
    cookie: {maxAge: 300000}
};
const corsConfig = {
    credentials: true,
    origin: "http://localhost:8000"
};

const app = express();
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
const server = http.createServer(app);

const publicDirectoryPath = path.join(__dirname, '../public/');
app.use(express.static(publicDirectoryPath));
app.set('views', path.join(__dirname, '../public/views'));

app.use(session(sessionConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsConfig));
app.use(methodOverride());

app.get('/', function (req, res) {
    res.sendFile(publicDirectoryPath + 'views/passwordVault.html')
})

app.use('/passwords', require('./routes/passwords'));

server.listen(port, () => {
    console.log(`Server up and running on port ${port}.`);
});