// Think about how you're going to solve the problem 

// 1. Assign variables to rock, scissors, and paper
// 2. Create the computer's choice function which will randomly pick between one of three options.
// 3. 

var computerSelection = getComputerChoice(); 
var playerSelection = getPlayerSelection();

function getComputerChoice() {
	let result = Math.floor(Math.random() * 3)
	if (result === 0) {
		document.querySelector('#GameChoices').textContent = "Selected rock";
	}
	if (result === 1) {
		document.querySelector('#GameChoices').textContent = "Selected paper";
	}
	if (result === 2) {
		document.querySelector('#GameChoices').textContent = "Selected scissors";
	}
}

function getPlayerSelection() {
	
}

function determineWinner() {

}
