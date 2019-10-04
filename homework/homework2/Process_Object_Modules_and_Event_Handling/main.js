'use strict';
const readline = require('readline');
const convert = require('./convert.js');

var rl = readline.createInterface(process.stdin, process.stdout);

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new  MyEmitter();

var newConvertType = '';
var newInchValue = 0.0;

rl.question(`Convert inches to what: Millimeters(mm), Centimeters(cm) or Meters(m): `, (convertType) => {
    rl.question(`Enter the value in inches:`, (inchValue) => {
        console.log(`Converting ${inchValue} inches to ${convertType}`);

        newConvertType = convertType;
        newInchValue = inchValue;

        myEmitter.emit('convert');
        rl.close();
    });
});

myEmitter.on('convert', () => {
    if (newConvertType == "cm") {
        console.log(`The number of centimeters in ${newInchValue} inches equals ${convert.inchToCM(newInchValue)}`);
    }

    if (newConvertType == "mm") {
        console.log(`The number of millimeters in ${newInchValue} inches equals ${convert.inchToMM(newInchValue)}`);
    }

    if (newConvertType == "m") {
        console.log(`The number of meters in ${newInchValue} inches equals ${convert.inchToM(newInchValue)}`);
    }
});