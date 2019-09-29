var Book = require('./book.js');

function insert() {
    var book = new Book({
        bootitle : 'NodeJS',
        author : 'hdh',
        yearpublish: '2019',
        quantity: '2',
        description: 'good',
        ISBN: 'I-123-45'
    });

    book.save(function (err, res) {
        if (err) {
            console.log('Error:' + err);
        } else {
            console.log("Res:" +res);
        }
    });
}

insert();