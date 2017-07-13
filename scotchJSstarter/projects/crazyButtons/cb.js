// grab everything we need
const crazyButtons = document.querySelectorAll('.btn-crazy'); 

// define our functions
function goCrazy(e) {
	const button = e.target; 
	// get a random number for the left offset
	const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
	// get a random number for top offset 
	const offsetTop = Math.random() * (window.innerWidth - this.clientHeight); 


	// apply those number to the button	
	this.style.top = offsetTop + 'px'; 
	this.style.left = offsetLeft + 'px'; 
}


function randomize () {
	for (i = 0; i < crazyButtons.length; i++) {
		const button = crazyButtons[i]; 
		// get a random number for the left offset
		const offsetLeft = Math.random() * (window.innerWidth - button.clientWidth);
		// get a rbuttonm number for top offset 
		const offsetTop = Math.random() * (window.innerWidth - button.clientHeight); 


		// apply those number to the button	
		button.style.top = offsetTop + 'px'; 
		button.style.left = offsetLeft + 'px'; 
	}	
}


// add event listeners
crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy)); 
crazyButtons.forEach(button => document.addEventListener('DOMContentLoaded', randomize)); 

