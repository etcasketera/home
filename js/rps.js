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

const container = document.querySelector('#container')

const rock = document.createElement('button')
rock.textContent = "Rock"

const scissors = document.createElement('button')
scissors.textContent = "Scissors"

const paper = document.createElement('button')
paper.textContent = "Paper"

container.appendChild(rock)
container.appendChild(paper)
container.appendChild(scissors)


const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent)
    })
})

// const score = document.createElement('div')
// score.classList.add("score")
// score.style.backgroundColor = 'pink'
// score.style.border = 'thick solid black'
// const header1 = document.createElement('h1')
// header1.classList.add('heading1')
// header1.textContent = "I'm in a div"
// score.appendChild(header1)
// console.log(score)
// container.appendChild(score)