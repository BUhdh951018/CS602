var Book = require('./book.js');

function insert() {
    var book = new Book({
        booktitle : 'NodeJS',
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

function read() {
    var wherestr = {'booktitle': 'NodeJS'};

    Book.find(wherestr, (err, res) => {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log('Res: ' + res);
        }
    })
}

read();