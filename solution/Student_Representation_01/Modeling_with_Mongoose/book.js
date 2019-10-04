var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
    booktitle: {type: String},
    author: {type: String},
    yearpublish: {type: Date},
    quantity: {type: Number},
    description: {type: String},
    ISBN: {type: String}
});

module.exports = mongoose.model('Book', BookSchema);