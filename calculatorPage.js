// Calculator
let display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");

let buttonHandler = function(event) {
	if (event.srcElement.dataset.value === undefined) {
		if (event.srcElement.dataset.clear === undefined) {
			operationHandler(event.srcElement.dataset.operation);
		} else if (event.srcElement.dataset.clear === "c") {
			// calc.reset
		} else {
			display.innerHTML = "NAN";
		}
	} else {
		display.innerHTML = display.innerHTML.concat(event.srcElement.dataset.value); 
	}
}
 

let operationHandler = function(element) {
	switch (element) {
		case "+":
			// calc.add;
			break;
		case "-":
			// calc.subtract
			break;
		case "*":
			// calc.multiply;
			break;
		case "/":
			// calc.divide;
			break;
		case ".":
			// calc.addDecimal;
			break;
	}
}

for(let button of buttons) {
	button.addEventListener("click", buttonHandler);
}

// for(let button of buttons) {
// 	button.addEventListener("click", clearHandler);
// }

// for(let button of buttons) {
// 	button.addEventListener("click", operationHandler);
// }
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