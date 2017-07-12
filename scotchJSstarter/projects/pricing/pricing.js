// grab everything we need from the dom
const priceInput 	= document.querySelector('[name=price]'); 
const quantityInput = document.querySelector('[name=quantity]'); 
const total 		= document.querySelector('.total'); 
const quantityLabel = document.querySelector('.quantity-label'); 

// create the functions that we'll need
function calculateIceCreamCost() {
	const price = priceInput.value; 
	const quantity = quantityInput.value; 

	const cost = price * quantity; 

	total.innerText = '€' + cost.toFixed(2); 
}

function updateQuantityLabel() {
	const quantity = quantityInput.value; 
	quantityLabel.innerText = quantity; 
}

// on first run
calculateIceCreamCost(); 

// add our event listeners
priceInput.addEventListener('input', calculateIceCreamCost); 
quantityInput.addEventListener('input', calculateIceCreamCost); 
quantityInput.addEventListener('input', updateQuantityLabel); 