// Think about how you're going to solve the problem 

// 1. Assign variables to rock, scissors, and paper
// 2. Create the computer's choice function which will randomly pick between one of three options.
// 3. Assign the player's choice according to the button they press
// 4. Determine the winner based on the player's choice and the computer's choice
// 5. Display the results with a "Play Again" button

const playerSelection = document.getElementById("YourChoice");
const computerSelection = document.getElementById('ComputersTurn');
const gameOverText = document.getElementById("GameOver");


function getRockSelection(Rock) {
	playerSelection.textContent = "Rock";
	return Rock; 
}

function getPaperSelection(Paper) {
	playerSelection.textContent = "Paper";
	return Paper;
}

function getScissorsSelection(Scissors) {
	playerSelection.textContent = "Scissors";
	return Scissors;
}

function getPlayerSelection(Rock, Paper, Scissors) {
	const SelectRock = document.getElementById("rock");
	const SelectPaper = document.getElementById("paper");
	const SelectScissors = document.getElementById("scissors");
	if (SelectRock.click() == true) {
		playerSelection.textContent = "Rock";
		return Rock;
	} 
	if (SelectPaper.click() == true ) {
		playerSelection.textContent = "Paper";
		return Paper;
	}
	if (SelectScissors.click() == true ) {
		playerSelection.textContent = "Scissors";
		return Scissors;
	}
}

function getComputerSelection(Rock, Paper, Scissors) {
	let result = Math.floor(Math.random() * 3);
	if (result === 0) {
		computerSelection.textContent = "Rock";
		return Rock;
	}
	if (result === 1) {
		computerSelection.textContent = "Paper";
		return Paper;
	}
	if (result === 2) {
		computerSelection.textContent = "Scissors";
		return Scissors;
		}
}

function determineWinner() {
	if (playerSelection.textContent == "Rock" && computerSelection.textContent == "Rock") {
		alert("Draw! No one wins! Play again?")
	}
	if (playerSelection.textContent == "Scissors" && computerSelection.textContent == "Scissors") {
		alert("Draw! No one wins! Play again?")
	} 
	if (playerSelection.textContent == "Paper" && computerSelection.textContent == "Paper") {
		alert("Draw! No one wins! Play again?")
	}
	if (playerSelection.textContent == "Rock" && computerSelection.textContent == "Scissors") {
		alert("You win! Rock crushes scissors!")
	}
	if (computerSelection.textContent == "Rock" && playerSelection.textContent == "Scissors") {
		alert("You lose! Rock crushes scissors!")
	}
	if (playerSelection.textContent == "Paper" && computerSelection.textContent == "Rock") {
		alert("You win! Paper covers rock!")
	}
	if (computerSelection.textContent == "Paper" && playerSelection.textContent == "Rock") {
		alert("You lose! Paper covers rock!")
	}
	if (playerSelection.textContent == "Scissors" && computerSelection.textContent == "Paper") {
		alert("You win! Scissors cut paper!")
	}
	if (computerSelection.textContent == "Scissors" && playerSelection.textContent == "Paper") {
		alert("You lose! Scissors cut paper!")
	}
	resetGame();
}

function resetGame() {
		playerSelection.textContent = " "
		computerSelection.textContent = " "
	}















