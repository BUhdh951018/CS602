'use strict';

const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

const convert = require('./convert');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

let newConvertType = "";
let newInchValue = 0.0;

rl.question(`Convert inches to what: Meters (M), Centimeters (cm), or Millimetres (mm): `, (convertType) => {

    rl.question(`Enter the value in inches to convert: `, (inchValue) => {

        console.log(`Converting ${inchValue} inches to ${convertType}`)

        newConvertType = convertType;
        newInchValue = inchValue;

        myEmitter.emit('event');
        rl.close();
    });
});

myEmitter.on('event', () => {
    if (newConvertType == "mm") {
        console.log(`The number of millimeters in ${newInchValue} inches equals ${convert.inch2millimeter(newInchValue)}`)
    };

    if (newConvertType == "cm") {
        console.log(`The number of centimeters in ${newInchValue} inches equals ${convert.inch2centimeter(newInchValue)}`)
    };

    if (newConvertType == "M") {
        console.log(`The number of meters in ${newInchValue} inches equals ${convert.inch2meter(newInchValue)}`)
    };
});