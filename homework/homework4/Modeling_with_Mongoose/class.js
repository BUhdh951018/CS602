var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var ClassSchema = new Schema({
    building: {type: String},
    location: {type: String},
    room: {type: Number},
    time: {type: Date},
    instructor: {type: String},
    requiredbook: {type: String},
    optionalbook: {type: String}
});

module.exports = mongoose.model('Class', ClassSchema);