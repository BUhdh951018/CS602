var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
    class: {type: String}, 
    firstname: {type: String},
    lastname: {type: String},
    BUID: {type: Number}
});

module.exports = mongoose.model('Student', StudentSchema);