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

/*
function getPlayerChoice(){
	let input = prompt().toLowerCase();
	return input;
}
*/

function rules(a, b){
	let winnerChoice;
	if((a == "rock" || b == "rock") && (a == "scissors" || b == "scissors")) winnerChoice = "rock" // rock vs scissors > rock wins
	else if ((a == "scissors" || b == "scissors") && (a == "paper" || b == "paper")) winnerChoice = "scissors" // scissors vs paper > scissors wins
	else if ((a == "rock" || b == "rock") && (a == "paper" || b == "paper")) winnerChoice = "paper" // rock vs paper > paper wins
	else winnerChoice = "not valid"
	return winnerChoice;
}

const body = document.body;
const results = document.createElement('div');
body.append(results);

let winnerText = document.createElement('p');

let displayChoices = document.createElement('p');
let displayTieScore = document.createElement('p');
let displayScore = document.createElement('p');

function displayResults(playerSelection, computerSelection, winner){
	displayChoices.textContent = `You picked ${playerSelection}, Computer picked ${computerSelection}`
	results.append(displayChoices);

	winnerText.textContent = `The winner of the round is ${winner}`;
	results.append(winnerText);

	getScores(winner);
	displayScore.textContent = `Player score: ${scores[2]}, Computer Score: ${scores[1]}, Tied ${scores[0]} times`
	results.append(displayScore);
}

// 0 is tie, 1 is cpu, 2 is player
let scores = [0, 0, 0]

function getScores(winner){
	if(winner == "computer") scores[1]++;
	else if(winner == "player") scores[2]++;
	else scores[0]++;

	scoreChecker(scores);
	return scores;
}

let gameOver = document.createElement('p');
let gameWinner;

//if any value in scores is 5 then end game
function scoreChecker(scores){
	for(let i = 1; i < scores.length ; i++){
		if(scores[i] == 5){ //game ends
			if(i == 1) gameWinner = "computer"
			else if(i == 2) gameWinner = "player"
			gameOver.textContent = `Game Over! ${gameWinner} wins!`
			results.append(gameOver);
			removeEvent();
		} //if
	} //for
}

function removeEvent(){
	console.log("game end")
	//buttons.removeEventListener('');
}

function playRound(playerSelection, computerSelection){

	let winnerChoice; // holds the winning choice
	let winner;

	if (playerSelection === computerSelection) winner = "no one" // player and cpu picks same choice
	else { // not a tie
		// find the winning choice
		winnerChoice = rules(playerSelection, computerSelection);

		// determine who picked the winning choice
		if(computerSelection == winnerChoice) winner = "computer"
		else if (playerSelection == winnerChoice) winner = "player"
	} 
	displayResults(playerSelection, computerSelection, winner);
	//return winner;
}


const buttons = document.querySelectorAll('button'); // select all buttons

// add event listeners to buttons, button is parameters
buttons.forEach((button) => {
	button.addEventListener('click', () => playRound(button.id, getComputerChoice())); // addEventListener
}); // forEach 


/*
function game(){
	let playerScore = 0;
	let computerScore = 0;
	let tieScore = 0;

	while(playerScore < 5 && computerScore < 5){
		let winner = playRound(getPlayerChoice(), getComputerChoice());

		if(winner == "computer") computerScore++;
		else if(winner == "player") playerScore++;
		else tieScore++;

		if(winner) console.log(winner + " wins!");
		else console.log("it's a tie!");

		console.log("Current scoreboard: ");
		console.log("Computer score: " + computerScore);
		console.log("Player score: " + playerScore);
	}
	//printResults(computerScore, playerScore, tieScore);
}

/*
function printResults(computerScore, playerScore, tieScore){
	console.log("Final results: ");
	console.log("Computer score: " + computerScore);
	console.log("Player Score: " + playerScore);
	console.log("You tied: " + tieScore + " time(s)")
} game */


//game();

