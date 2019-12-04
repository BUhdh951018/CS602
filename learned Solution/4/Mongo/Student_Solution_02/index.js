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
 
// async function listClasss() {
//     const classs = await Classs
//         .find()
//         .select('building');
//     console.log(classs);
// }

// async function listStudent() {
//     const student = await Student
//         .find()
//         .select('name');
//     console.log(student);
// }
 
//createBook('sjdaf', "sffs", '11311', 1, 1, "book1", "ISBN1");
//createBook('sjdsdff', "as", '234', 12, 13, "book2", "ISBN3");
//createClasss('ad3d', "boston", "CAS503", "5-8", "Sheehan", ['5d93d4b52fac2bbd5f8cc5fe','5d93d4e5147684bd60f833d6'], ['5d93d4e5147684bd60f833d6','5d93d4e5147684bd60f833d7']);
//createClasss('adds', "boston", "CAS501", "5-8", "Sheehan", ['5d93d4b52fac2bbd5f8cc5fe','5d93d4e5147684bd60f833d7'], ['5d93d4e5147684bd60f833d7','5d93d4e5147684bd60f833d6']);
//createStudent(['5d93d543512a55bd63d099b7', '5d93d543512a55bd63d099b8'], "johny john", 45552234);