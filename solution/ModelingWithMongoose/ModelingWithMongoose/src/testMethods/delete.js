let Database = require('../database.js');
let mongoose = require('mongoose');

let BookModel = require('../models/book.js');
let ClassModel = require('../models/class.js');
let StudentModel = require('../models/student.js');

// Delete documents in database
const testDelete = () => {
    // Books
    BookModel.find().deleteMany({}, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully deleted books.');
        }
    });
    
    // Classes
    ClassModel.find().deleteMany({}, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully deleted classes.');
        }
    });
    
    // Students
    StudentModel.find().deleteMany({}, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully deleted students.');
        }
    });
};

testDelete();