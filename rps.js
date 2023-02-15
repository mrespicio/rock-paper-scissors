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

function rules(a, b){
	let winnerChoice;
	if((a == "rock" || b == "rock") && (a == "scissors" || b == "scissors")) winnerChoice = "rock" // rock vs scissors > rock wins
	else if ((a == "scissors" || b == "scissors") && (a == "paper" || b == "paper")) winnerChoice = "scissors" // scissors vs paper > scissors wins
	else if ((a == "rock" || b == "rock") && (a == "paper" || b == "paper")) winnerChoice = "paper" // rock vs paper > paper wins
	else winnerChoice = "not valid"
	return winnerChoice;
}

let buttonsContainer = document.getElementById('buttons-container');
const buttons = buttonsContainer.querySelectorAll('img'); // select all playable buttons

// add event listeners to buttons
buttons.forEach((button) => {
	button.addEventListener('click', () => playRound(button.id, getComputerChoice()));
});

const gameContainer = document.getElementById('game-container');
const results = document.getElementById('results');
results.style.marginTop = '40px';
results.style.fontSize = '24px'
gameContainer.append(results);

let winnerText = document.createElement('p');

let displayChoices = document.createElement('p');
let displayScore = document.createElement('p');

const resetButton = document.createElement('button');
resetButton.textContent = 'play again'
resetButton.style.backgroundColor = '#ffffff';
resetButton.style.fontSize = '18px'
resetButton.style.color = '#4c5454';
resetButton.style.padding = '1em'
resetButton.addEventListener('click', clearGame);

function displayResults(playerSelection, computerSelection, winner){
	displayChoices.textContent = `You picked ${playerSelection}, Computer picked ${computerSelection}`
	results.append(displayChoices);

	winnerText.textContent = `The winner of the round is ${winner}`;
	results.append(winnerText);

	getScores(winner);
	displayScore.textContent = `Player score: ${scores[2]} Computer Score: ${scores[1]}`
	results.append(displayScore);
}

// 0 is tie, 1 is cpu, 2 is player
// keeps track of scores, returns array with updated scores
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
let gameStatus;

//if any value in scores is 5 then end game
function scoreChecker(scores){
	for(let i = 1; i < scores.length ; i++){
		if(scores[i] == 5){ //game ends
			if(i == 1) gameWinner = "computer"
			else if(i == 2) gameWinner = "player"
			gameOver.textContent = `Game Over! ${gameWinner} wins!`
			results.append(gameOver);
			gameStatus = "done";
			gameContainer.append(resetButton);
			//alert('game over!');
			break;
		}
	}
}

function playRound(playerSelection, computerSelection){
	playerSelection = playerSelection.toLowerCase();

	let winnerChoice;
	let winner;
	if (gameStatus == "done") return false

	if (playerSelection === computerSelection) winner = "no one" // player and cpu picks same choice
	else { // not a tie
		// find the winning choice
		winnerChoice = rules(playerSelection, computerSelection);

		// determine who picked the winning choice
		if (computerSelection == winnerChoice) winner = "computer"
		else if (playerSelection == winnerChoice) winner = "player"
	} 
	displayResults(playerSelection, computerSelection, winner);
	return winner;
}

function clearGame(){
	console.log('game reset')
	gameContainer.removeChild(resetButton);
	scores = [0, 0, 0]
	displayScore.textContent = `Player score: ${scores[2]}, Computer Score: ${scores[1]}`
	gameOver.textContent = ''
	gameStatus = '';
	displayChoices.textContent = ''
	winnerText.textContent = ''
	displayScore.textContent = ''
}