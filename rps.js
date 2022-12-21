console.log("Hello World!");


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

function playRound(playerSelection, computerSelection){
	playerSelection = playerSelection.toLowerCase();

	console.log("Computer choice: " + computerSelection)
	console.log("Player choice: " + playerSelection)
	if(playerSelection === computerSelection) console.log("Tie!")
	else console.log("Not a tie")
}



playRound(getPlayerChoice(), getComputerChoice());




