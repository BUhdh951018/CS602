const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/bu')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
 
const Book = mongoose.model('Book', new mongoose.Schema({
    titleOfBook: String,
    author: String,
    yearPublished: Number,
    price: Number,
    quantityOnHand: Number,
    descriptionOfBook: String,
    ISBN: String
}));
 
const Classs = mongoose.model('Classs', new mongoose.Schema({
    building: String,
    location: String,
    room: String,
    hoursOfInstruction: String,
    instructor: String,
    book: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    optionalBook: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
}));

const Student = mongoose.model('Student', new mongoose.Schema({
    hasClasses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classs'
    }],
    name: String,
    buID: Number
}));
 
async function createBook(titleOfBook, author, yearPublished, price, quantityOnHand, descriptionOfBook, ISBN) {
    const book = new Book({
        titleOfBook,
        author,
        yearPublished,
        price,
        quantityOnHand,
        descriptionOfBook,
        ISBN
    });
 
    const result = await book.save();
    console.log(result);
}
 
async function createClasss(building, location, room, hoursOfInstruction, instructor, book, optionalBook) {
    const classs = new Classs({
        building,
        location,
        room,
        hoursOfInstruction,
        instructor,
        book,
        optionalBook
    });
 
    const result = await classs.save();
    console.log(result);
}

async function createStudent(hasClasses, name, buID) {
    const student = new Student({
        hasClasses,
        name,
        buID
    });
 
    const result = await student.save();
    console.log(result);
}