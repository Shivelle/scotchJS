const startButton 	= document.querySelector('[data-action="start"]'); 
const stopButton 	= document.querySelector('[data-action="stop"]'); 
const resetButton 	= document.querySelector('[data-action="reset"]'); 
const hours			= document.querySelector('.hours'); 
const minutes 		= document.querySelector('.minutes'); 
const seconds 		= document.querySelector('.seconds'); 
let timerTime		= 00; 
let isRunning		= false; 
let interval; 




// functions 
function startTimer() {
	if (isRunning) return; 

	isRunning = true; 
	interval = setInterval(incrementTimer, 1000); 
}

function stopTimer() {
	if(!isRunning) return; 
	isRunning = false; 
	clearInterval(interval); 
}

function resetTimer() {
	stopTimer(); 

	timerTime= 0; 
	hours.innerText ='00'; 
	minutes.innerText = '00'; 
	seconds.innerText = '00'; 		
}

function incrementTimer() {
		timerTime++; 
		
		const numOfHours = Math.floor( timerTime / 3600); 
		const numOfMinutes = Math.floor((timerTime / 60)) % 60; 
		const numOfSeconds = timerTime % 60; 

		hours.innerText = pad(numOfHours); 
		minutes.innerText = pad(numOfMinutes); 
		seconds.innerText = pad(numOfSeconds); 
}

function pad(number) {
	// return () ?___ : ___; 
	return (number < 10) ? '0' + number : number;
/*	if (number < 10) {
		return '0' + number; 
	} else {
		return number; 
	}*/
}


// event listeners
startButton.addEventListener('click', startTimer); 
stopButton.addEventListener('click', stopTimer); 
resetButton.addEventListener('click', resetTimer); 