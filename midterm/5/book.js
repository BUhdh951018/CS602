/*I just use the last year midterm question
route 1: /books push book to session
route 2: /books/isbn/:isbn/author show the author of the book which search by isbn
*/
const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');

const port = 3000;
const session = {
    secret: 'cook book',
    resave: false,
    saveUninitialized: true,
    cooike: {secure: false}
}

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession(session));
app.use(express.json());

app.all('*', (req, res, next) => {
    req.session.books = [
        { name: 'NodeJS', author: 'cs602', isbn: '12345'},
        { name: 'PHP', author: 'cs601', isbn: '34566'}
    ];
    next();
});

app.get('/books', (req, res) => {
    let names = [];
    req.session.books.forEach(book => {
        names.push(book.name);
    });
    res.json(names);
});

app.get('/books/isbn/:isbn/author', (req, res) => {
    const isbn = req.params.isbn;

    req.session.books.forEach(book => {
        if (book.isbn == isbn) {
            return res.send(book.author);
        }
    });
});

app.listen(port, () => {
    console.log(`Book Services listening on port ${port}`);
    console.log("session: ", JSON.stringify(session));
});