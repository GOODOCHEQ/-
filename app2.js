let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

function sendData(item) {
    tg.sendData(item);
}

btn1.addEventListener("click", function(){
    sendData("1");
});

btn2.addEventListener("click", function(){
    sendData("2");
});

btn3.addEventListener("click", function(){
    sendData("3");
});

btn4.addEventListener("click", function(){
    sendData("4");
});

btn5.addEventListener("click", function(){
    sendData("5");
});

btn6.addEventListener("click", function(){
    sendData("6");
});
