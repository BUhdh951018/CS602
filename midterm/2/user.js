var mongoose = require('./db.js');
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type :String},
    emailAddress: {type: String}
});

module.exports = mongoose.model('User', UserSchema);