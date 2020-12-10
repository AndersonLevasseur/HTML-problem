// Calculator
let display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");

let buttonHandler = function(event) {
	if (event.srcElement.dataset.value === undefined) {
		display.innerHTML = display.innerHTML.concat(event.srcElement.dataset.function); 
	} else {
		display.innerHTML = display.innerHTML.concat(event.srcElement.dataset.value); 
	}
}

for(let button of buttons) {
	button.addEventListener("click", buttonHandler);
}
const Calculator = require("./2020.11.05 - objects.problem.calculator.js")


// console.log(buttons.dataset.value);

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