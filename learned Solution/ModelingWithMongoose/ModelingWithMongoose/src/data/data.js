let mongoose = require('mongoose');

let BookModel = require('../models/book.js');
let ClassModel = require('../models/class.js');
let StudentModel = require('../models/student.js');

// Creating Instants of Models

// Books
let BrothersKaramazov = new BookModel({
    _id: new mongoose.Types.ObjectId(),
    TitleOfTheBook: 'The Brothers Karamazov',
    Author: 'Fyodor Dostoyevsky',
    YearPublished: 1880,
    Price: 9.99,
    QuantityOnHand: 100,
    DescriptionOfTheBook: "A passionate philosophical novel set in 19th-century Russia, that enters deeply into the ethical debates of God, free will, and morality.",
    ISBN: '9785521005567'
});

let HitchhikersGuide = new BookModel({
    _id: new mongoose.Types.ObjectId(),
    TitleOfTheBook: "The Hitchhiker's Guide to the Galaxy",
    Author: 'Douglas Adams',
    YearPublished: 1979,
    Price: 9.99,
    QuantityOnHand: 20,
    DescriptionOfTheBook: "The broad narrative of Hitchhiker follows the misadventures of the last surviving man, Arthur Dent, following the demolition of the planet Earth by a Vogon constructor fleet to make way for a hyperspace bypass.",
    ISBN: '9781447297017'
});

let Alchemist = new BookModel({
    _id: new mongoose.Types.ObjectId(),
    TitleOfTheBook: 'The Alchemist',
    Author: 'Paulo Coelho',
    YearPublished: 1988,
    Price: 9.99,
    QuantityOnHand: 60,
    DescriptionOfTheBook: "An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.",
    ISBN: '9788576653721'
});

let YearOne = new BookModel({
    _id: new mongoose.Types.ObjectId(),
    TitleOfTheBook: 'Batman: Year One',
    Author: 'Frank Miller',
    YearPublished: 1987,
    Price: 19.99,
    QuantityOnHand: 10,
    DescriptionOfTheBook: "A retelling of Batman's first year as a crime-fighter.",
    ISBN: '9782809413908'
});

let Reign = new BookModel({
    _id: new mongoose.Types.ObjectId(),
    TitleOfTheBook: 'Spider-Man: Reign',
    Author: 'Kaare Andrews',
    YearPublished: 2007,
    Price: 19.99,
    QuantityOnHand: 10,
    DescriptionOfTheBook: "Set 30 years into Spider-Man's future, in Earth-70237, it features a retired Spider-Man who returns to combat the injustices of a vastly different New York City.",
    ISBN: '9780785126652'
});

// Classes

let Philosophy = new ClassModel({
    _id: new mongoose.Types.ObjectId(),
    NameOfClass: 'Philosophy 101',
    Building: 'CAS',
    Location: 'CRC',
    Room: '206',
    HoursOfInstruction: 'R: 18:00 - 20:45',
    Instructor: 'Socrates',
    RequiredBooks: [BrothersKaramazov._id,],
    OptionalBooks: [HitchhikersGuide._id, Alchemist._id]
});

let ComicBooks101 = new ClassModel({
    _id: new mongoose.Types.ObjectId(),
    NameOfClass: 'Comic Books 101',
    Building: 'MET',
    Location: 'CRC',
    Room: '310',
    HoursOfInstruction: 'T: 18:00 - 20:45',
    Instructor: 'Stan Lee',
    RequiredBooks: [YearOne._id,],
    OptionalBooks: [Reign._id]
});

// Students

let ComicGeek = new StudentModel({
    _id: new mongoose.Types.ObjectId(),
    FirstName: "Peter",
    LastName: "Parker",
    BUID: 'U55555555',
    Classes: [ComicBooks101._id]
});

let WisdomLover = new StudentModel({
    _id: new mongoose.Types.ObjectId(),
    FirstName: "Francois-Marie",
    LastName: "Arouet",
    BUID: 'U00000000',
    Classes: [Philosophy._id]
});

let AverageJoe = new StudentModel({
    _id: new mongoose.Types.ObjectId(),
    FirstName: "Arthur",
    LastName: "Dent",
    BUID: 'U55555557',
    Classes: [Philosophy._id, ComicBooks101._id]
});

let Grandpa = new StudentModel({
    _id: new mongoose.Types.ObjectId(),
    FirstName: "Old",
    LastName: "Man",
    BUID: 'U00000001',
    Classes: [Philosophy._id, ComicBooks101._id]
});

module.exports = {
    BrothersKaramazov,
    HitchhikersGuide,
    Alchemist,
    YearOne,
    Reign,
    Philosophy,
    ComicBooks101,
    ComicGeek,
    WisdomLover,
    AverageJoe,
    Grandpa
}