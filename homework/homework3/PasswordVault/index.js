const express = require('express');
//const port = 3000;
const session = require('cooike-session');

var app = express();

var expiryDate = new Date(Date.now() + 60*60*1000);

app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    cooike: {
        secure: true,
        httpOnly: true,
        domain: 'example.com',
        path:'foo/bar',
        expires: expiryDate
    }
}));