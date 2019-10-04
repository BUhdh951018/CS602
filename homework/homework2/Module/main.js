import { ceiling, cube, floor, mod, squareRoot } from './modules/math.js';

let btnCeil = document.querySelector("#btnCeil");
let btnCube = document.querySelector("#btnCube");
let btnFloor = document.querySelector("#btnFloor");
let btnMod = document.querySelector("#btnMod");
let btnSquare = document.querySelector("#btnSquare");

let number;
let x,y;

btnCeil.addEventListener('click', () => {
    number = document.querySelector("#ceil").value;
    number = ceiling(number);
    document.querySelector("#showCeil").innerHTML = number;
});

btnCube.addEventListener('click', () => {
    number = document.querySelector("#cube").value;
    number = cube(number);
    document.querySelector("#showCube").innerHTML = number;
});

btnFloor.addEventListener('click', () => {
    number = document.querySelector("#floor").value;
    number = floor(number);
    document.querySelector("#showFloor").innerHTML = number;
});

btnMod.addEventListener('click', () => {
    x = document.querySelector("#modX").value;
    y = document.querySelector("#modY").value;
    number = mod(x, y);
    document.querySelector("#showMod").innerHTML = number;
});

btnSquare.addEventListener('click', () => {
    number = document.querySelector("#squareRoot").value;
    number = squareRoot(number);
    document.querySelector("#showSquareRoot").innerHTML = number;
});