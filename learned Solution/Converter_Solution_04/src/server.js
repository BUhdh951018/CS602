// We require the standards
const http = require('http');
const express = require('express');
const path = require('path');

// We create and setup the server using express and on port 8000
const app = express();
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
const server = http.createServer(app);
const port = process.env.PORT || 8000;

// We set up the paths for serving public views
const publicDirectoryPath = path.join(__dirname, '../public/');
app.use(express.static(publicDirectoryPath));
app.set('views', path.join(__dirname, '../public/views'));

// Default response for a get request
app.get('/', function (req, res) {
    res.sendFile(publicDirectoryPath + 'views/pomeh.html')
})

// Server is up and running
server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})