const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello world!'))

app.post('/post', (req, res) => res.send('Got a POST request'))

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next()
}, (req, res) => {
    res.send('Hello from B!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))