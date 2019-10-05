let mongoose = require('mongoose');

let classSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    NameOfClass: {
        type: String,
        required: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    },
    Building: {
        type: String,
        required: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    },
    Location: {
        type: String,
        required: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    },
    Room: {
        type: String,
        required: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    },
    HoursOfInstruction: {
        type: String,
        required: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    },
    Instructor: {
        type: String,
        required: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    },
    RequiredBooks: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Book'
    }],
    OptionalBooks: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Book'
    }]
});

module.exports = mongoose.model('Class', classSchema);