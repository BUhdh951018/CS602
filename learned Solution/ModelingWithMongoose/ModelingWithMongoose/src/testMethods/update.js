let Database = require('../database.js');
let mongoose = require('mongoose');

let BookModel = require('../models/book.js');
let ClassModel = require('../models/class.js');
let StudentModel = require('../models/student.js');

// Update document in database
const testUpdate = () => {
    console.log('\nWe update some documents on the database and display them.\n');

    // Books
    BookModel.findOneAndUpdate({
        TitleOfTheBook: 'The Brothers Karamazov'
    },
    {
        TitleOfTheBook: 'The Sisters Karamazov'
    },
    {
        new: true,
        runValidators: true
    }, function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            console.log('\nSuccessfully updated The Brothers Karamazov.\n');
            console.log(doc);
        }
    })
        
    // Classes
    ClassModel.findOneAndUpdate({
        NameOfClass: 'Philosophy 101'
    },
    {
        NameOfClass: 'Politics 101'
    },
    {
        new: true,
        runValidators: true
    }, function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            console.log('\nSuccessfully updated Philosophy 101.\n');
            console.log(doc);
        }
    })
    
    // Students
    StudentModel.findOneAndUpdate({
        FirstName: "Peter",
        LastName: "Parker"
    },
    {
        FirstName: "Spider-",
        LastName: "Man"
    },
    {
        new: true,
        runValidators: true
    }, function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            console.log('\nSuccessfully updated Peter Parker.\n');
            console.log(doc);
        }
    })
};

testUpdate();