function getComputerChoice(){
	let choice;
	let choiceRandomized = Math.floor(Math.random() * 3)
	switch (choiceRandomized){
		case 0:
			choice = "rock";
			break;
		case 1:
			choice = "paper";
			break;
		case 2:
			choice = "scissors";
			break;
		}
	return choice;
}

function getPlayerChoice(){
	let input = prompt().toLowerCase();
	return input;
}

function rules(a, b){
	let winnerChoice;
	if((a == "rock" || b == "rock") && (a == "scissors" || b == "scissors")) winnerChoice = "rock" // rock vs scissors > rock wins
	else if ((a == "scissors" || b == "scissors") && (a == "paper" || b == "paper")) winnerChoice = "scissors" // scissors vs paper > scissors wins
	else if ((a == "rock" || b == "rock") && (a == "paper" || b == "paper")) winnerChoice = "paper" // rock vs paper > paper wins
	else winnerChoice = "not valid"
	return winnerChoice;
}

function playRound(playerSelection, computerSelection){
	//playerSelection = playerSelection.toLowerCase();
	let winnerChoice; // holds the winning choice
	let winner;

	console.log("Computer picks: " + computerSelection)
	console.log("Player picks: " + playerSelection)

	if (playerSelection === computerSelection) winner = "" // player and cpu picks same choice
	else { // not a tie
		// find the winning choice
		winnerChoice = rules(playerSelection, computerSelection);

		// determine who picked the winning choice
		if(computerSelection == winnerChoice) winner = "computer"
		else if (playerSelection == winnerChoice) winner = "player"
	} 
	return winner;
}


function game(){
	let playerScore = 0;
	let computerScore = 0;
	let tieScore = 0;

	//while(playerScore < 5 && computerScore < 5){
		let winner = playRound(getPlayerChoice(), getComputerChoice());

		if(winner == "computer") computerScore++;
		else if(winner == "player") playerScore++;
		else tieScore++;

		if(winner) console.log(winner + " wins!");
		else console.log("it's a tie!");

		console.log("Current scoreboard: ");
		console.log("Computer score: " + computerScore);
		console.log("Player score: " + playerScore);
	//}
	//printResults(computerScore, playerScore, tieScore);
}

/*
function printResults(computerScore, playerScore, tieScore){
	console.log("Final results: ");
	console.log("Computer score: " + computerScore);
	console.log("Player Score: " + playerScore);
	console.log("You tied: " + tieScore + " time(s)")
} */

function tester(){
	console.log('tester');
}
const buttons = document.querySelectorAll('button'); // select all buttons

// add event listeners to buttons, buttons is parameters
buttons.forEach((button) => {
	button.addEventListener('click', () => playRound(button.id, getComputerChoice())); // addEventListener
}); // forEach 

game();




