let mongoose = require('mongoose');
let validator = require('validator');

let bookSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    TitleOfTheBook: {
        type: String,
        required: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    },
    Author: {
        type: String,
        required: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    },
    YearPublished: {
        type: Number,
        required: true,
        validate: (value) => {
            return validator.isNumeric(value + '');
        }
    },
    Price: {
        type: Number,
        required: true,
        validate: (value) => {
            return validator.isNumeric(value + '');
        }
    },
    QuantityOnHand: {
        type: Number,
        required: true,
        validate: (value) => {
            return validator.isNumeric(value + '');
        }
    },
    DescriptionOfTheBook: {
        type: String,
        required: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    },
    ISBN: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => {
            return typeof value == 'string';
        }
    }
});

module.exports = mongoose.model('Book', bookSchema);