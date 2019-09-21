const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const dec2metric = require('./dec2metric');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

let newConvertType = "";
let newInchValue = 0.0;

readline.question(`Convert inches to what: Meters (M), Centimeters (cm), or Millimetres (mm): `, (convertType) => {

    readline.question(`Enter the value in inches to convert: `, (inchValue) => {

        console.log(`Converting ${inchValue} inches to ${convertType}`)

        newConvertType = convertType;
        newInchValue = inchValue;

        myEmitter.emit('event');
        readline.close();
    });  
});

myEmitter.on('event', () => {
    if (newConvertType == "mm") {
        console.log(`The number of millimeters in ${newInchValue} inches equals ${dec2metric.inch2millimeter(newInchValue)}`)
    };

    if (newConvertType == "cm") {
        console.log(`The number of centimeters in ${newInchValue} inches equals ${dec2metric.inch2centimeter(newInchValue)}`)
    };

    if (newConvertType == "M") {
      console.log(`The number of meters in ${newInchValue} inches equals ${dec2metric.inch2meter(newInchValue)}`)
    };
});
