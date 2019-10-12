import {temConvert } from './modules/temperature.js';

let btn = document.querySelector("#convert");

let temp;
btn.addEventListener('click', () => {
    temp = document.querySelector("#tempF").value;
    temp = temConvert(temp);
    document.querySelector("#show").innerHTML = temp;
});