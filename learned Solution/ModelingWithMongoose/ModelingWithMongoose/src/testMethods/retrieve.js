let Database = require('../database.js');
let mongoose = require('mongoose');

let BookModel = require('../models/book.js');
let ClassModel = require('../models/class.js');
let StudentModel = require('../models/student.js');

// Retrieve documents from database
const testRetrieve = () => {
    console.log('\nWe read all the documents on the database.\n');

    // Books
    BookModel.find(function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            console.log('\nSuccessfully retrieved Books.\n');
            console.log(doc);
        }
    })

    // Classes
    ClassModel.find(function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            console.log('\nSuccessfully retrieved Classes.\n');
            console.log(doc);
        }
    })

    // Students
    StudentModel.find(function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            console.log('\nSuccessfully retrieved Students.\n');
            console.log(doc);
        }
    })
};

testRetrieve();