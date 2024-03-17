let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
  window.location.href = "page2.html";
});

btn2.addEventListener("click", function(){
  window.location.href = "page3.html";
});

btn3.addEventListener("click", function(){
  window.location.href = "page4.html";
});

btn4.addEventListener("click", function(){
  window.location.href = "page4.html";
});

btn5.addEventListener("click", function(){
  window.location.href = "page5.html";
});

btn6.addEventListener("click", function(){
  window.location.href = "page6.html";
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);








