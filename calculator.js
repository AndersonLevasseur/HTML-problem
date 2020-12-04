// Calculator
let display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");
let buttonHandler = function(element) {
	display.innerHTML = display.innerHTML.concat(element.dataset.value); 
}

for(let button of buttons) {
	button.addEventListener("click", buttonHandler);
}
