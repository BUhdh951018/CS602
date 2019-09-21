const emoji = require('node-emoji');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const EventEmitter = require('events');

const happyFace = emoji.get('sunglasses');
const sadFace = emoji.get('disappointed');
const ambivalentFace = emoji.get('anguished');

const happyArray = ["happy", "joy", "cheerful", "joyful", "delighted", "sunny", "buoyant", "glowing", "gleeful", "merry"];
const sadArray = ["sad", "glum", "unhappy", "sorrowful", "dejected", "miserable", "douw", "blue", "melancholy", "heartbroken"];
const ambivalentArray = ["ambivalent", "uncertain", "unsure", "doubtful", "torn", "mixed", "wavering", "undecided", "unresolved", "equivocal"];
let arrayWord = "";
let testWord = ""
let happy = false;
let sad = false;
let ambivalent = false;

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

readline.question(`Enter your word: `, (word) => {
    testWord = word;

    myEmitter.emit('event');
    readline.close();
});

myEmitter.on('event', () => {

    for (let i=0; i<happyArray.length; i++) {
        arrayWord = happyArray[i].valueOf();
        if (testWord == arrayWord)
            happy = true;
    }

    for (let i=0; i<sadArray.length; i++) {
        arrayWord = sadArray[i].valueOf();
        if (testWord == arrayWord)
            sad = true;
    }

    for (let i=0; i<ambivalentArray.length; i++) {
        arrayWord = ambivalentArray[i].valueOf();
        if (testWord == arrayWord)
            ambivalent = true;
    }

    if (happy)
        console.log(`Hi ${happyFace}`);
    else if (sad)
        console.log(`Hi ${sadFace}`);
    else if(ambivalent)
        console.log(`Hi ${ambivalentFace}`);
    else
        console.log(`No match found`);

});

