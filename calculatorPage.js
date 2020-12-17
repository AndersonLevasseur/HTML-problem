let calc = new Calculator();
let display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");

let buttonHandler = function(event) {
	// if it's not a number, check if it's a clear, see if it's an operation, 
	if (event.srcElement.dataset.value === undefined) {
		// If it's a clear 
		if (event.srcElement.dataset.clear === "c") {
			calc.reset();
			display.innerText = calc.runningTotal;
		// If it's an operation
		} else if (event.srcElement.dataset.operation) {
			calc.executeOperation(event.srcElement.dataset.operation); 
			display.innerText = calc.runningTotal;
		// If it's an Undo
		} else if (event.srcElement.dataset.undo) {
			// Not completed in calculator.js 
			calc.undoValue();
			display.innerText = calc.workingValue
		} 
		// If it's unexpected
		else {
			throw "Unexpected input";
		}
	// If it is a number
	} else {
		calc.inputValue(event.srcElement.dataset.value);
		display.innerText = calc.workingValue;
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