import { ceiling } from './modules/math.js';

let btnCeil = document.querySelector(".btnCeil");
let number = document.querySelector("#ceil").innerHTML;
console.log(number);
console.log("1");

btnCeil.addEventListener('click', () => {
    let number = document.querySelector("#ceil").innerHTML;
    console.log(number);
    number = ceiling(number);
    document.querySelector("#ceil").innerHTML = number;
});