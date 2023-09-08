function getComputerChoice () {
    rps = Math.random()
    if (rps < 0.333333) {
        return "Rock";
    } else if (rps < .666667) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == "ROCK"){
        if (computerSelection == "Rock") {
            return "You tie!";
        } else if (computerSelection == "Paper") {
            return "You lose! Paper beats Rock.";
        } else if (computerSelection == "Scissors") {
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "Paper") {
            return "You tie!";
        } else if (computerSelection == "Rock") {
            return "You win! Paper beats Rock.";
        } else if (computerSelection == "Scissors") {
            return "You lose! Scissors beats Paper.;"
        }
    } else if (playerSelection == "SCISSORS") {
        if (computerSelection == "Scissors") {
            return "You tie!";
        } else if (computerSelection == "Rock") {
            return "You lose! Rock beats Scissors.";
        } else if (computerSelection == "Paper") {
            return "You win! Scissors beats Paper.";
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));
