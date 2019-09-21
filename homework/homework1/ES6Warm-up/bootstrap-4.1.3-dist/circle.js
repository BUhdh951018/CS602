window.onload = init;

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM gully loaded and parsed');
});

function init() {
    //select three circles
    var circle1 = document.querySelector("#circle1");
    var circle2 = document.querySelector("#circle2");
    var circle3 = document.querySelector("#circle3");

    var number1, number2, number3;
    //when drag circle number plus one
    circle1.addEventListener('dragstart', function (event) {
        number1 = document.querySelector("#message1").innerHTML;
        document.getElementById("message1").innerHTML = parseInt(number1) + 1;
    });

    circle2.addEventListener('dragstart', function (event) {
        number1 = document.querySelector("#message2").innerHTML;
        document.getElementById("message2").innerHTML = parseInt(number1) + 1;
    });

    circle3.addEventListener('dragstart', function (event) {
        number1 = document.querySelector("#message3").innerHTML;
        document.getElementById("message3").innerHTML = parseInt(number1) + 1;
    });
}
