const express = require('express');
const router = express.Router();

router.all("*", (req, res, next) => {
	//retrieve or store [] in session passwords
	let books = req.session.books || [];
	req.session.books = books;

	next();
});

router.get('/', (req, res) => {
    res.json(req.session.books);
});

router.post('/', (req, res) => {
    let {bookname, author} = req.body;

    const entry = {
        bookname: bookname,
        author: author
    };

    req.session.books.push(entry);
    res.json('post a new book');
});

router.put("/:bookname", (req, res) => {
    book.bookname = book.bookname;
    book.previous = book.author;
    book.author = req.body.author;

    res.json(req.session.books);
});

router.delete('/:bookname', (req, res) => {
    req.session.username = req.session.username.fliter(
        entry => entry.usernam,e != req.params.username
    );

    res.json(req.session.books);
});

module.exports = router;