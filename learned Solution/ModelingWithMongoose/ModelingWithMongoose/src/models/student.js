let mongoose = require('mongoose');
let validator = require('validator');

let studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    Classes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Class',
        required: true
    }],
    FirstName: {
        type: String,
        required: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    },
    LastName: {
        type: String,
        required: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    },
    BUID: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => {
            return validator.isAlphanumeric(value + '');
        }
    }
})

module.exports = mongoose.model('Student', studentSchema);