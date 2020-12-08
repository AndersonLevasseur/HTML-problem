// Calculator
let display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");

let buttonHandler = function(element) {
	display.in1nerHTML = display.innerHTML.concat(element.dataset.value, display.innerHTML); 
}

for(let button of buttons) {
	button.addEventListener("click", buttonHandler, false);
}

console.log(buttons.dataset.value)

/* 
let display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");

buttons.onclick(display.changevalue(data-value OF SPECIFIC BUTTON))
*/ 
/*
let display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");

NOTES

dataset can't read html collections

let buttonHandler = function(element) {
	display.innerHTML = display.innerHTML.concat(element.dataset.value); 
}

for(let button of buttons) {
	button.addEventListener("click", buttonHandler);
}
*/