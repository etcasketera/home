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


function game () {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your move: ");
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        console.log(round);
        if (round.includes("win")){
            playerWins += 1;
        } else if (round.includes("lose")) {
            computerWins += 1;
        }
        console.log(playerWins, " - ", computerWins);
    }
    if (playerWins > computerWins) {
        console.log ("You win!")
    } else if (playerWins < computerWins) {
        console.log ("You lose!")
    } else {
        console.log ("You tied!");
    }
}

game();