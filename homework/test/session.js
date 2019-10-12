var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')

var app = express()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use((req, res, next) => {
    if (!req.session.views) {
        req.session.views = {}
    }

    var pathname = parseurl(req).pathname

    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    next()
})

app.get('/foo', (req, res, next) => {
    res.send('you viewed this pafe ' + req.session.views['/foo'] + ' times')
})

app.get('/bar', (req, res, next) => {
    res.send('you viewws this page ' + req.session.views['/bar'] + ' times')
})

app.listen(3000, () => console.log('running on port 3000'))