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

let ps_score = 0
let cs_score = 0

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == "ROCK"){
        if (computerSelection == "Rock") {
            return "You tie!";
        } else if (computerSelection == "Paper") {
            cs_score += 1
            return "You lose! Paper beats Rock.";
        } else if (computerSelection == "Scissors") {
            ps_score += 1
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "Paper") {
            return "You tie!";
        } else if (computerSelection == "Rock") {
            ps_score += 1
            return "You win! Paper beats Rock.";
        } else if (computerSelection == "Scissors") {
            cs_score += 1
            return "You lose! Scissors beats Paper.;"
        }
    } else if (playerSelection == "SCISSORS") {
        if (computerSelection == "Scissors") {
            return "You tie!";
        } else if (computerSelection == "Rock") {
            cs_score += 1
            return "You lose! Rock beats Scissors.";
        } else if (computerSelection == "Paper") {
            ps_score += 1
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
        console.log(playRound(button.textContent, getComputerChoice()))
        cs_num.textContent = cs_score
        ps_num.textContent = ps_score
        if(cs_num.textContent == 5) {
            alert("You lose!")
        }
        else if(ps_num.textContent == 5) {
            alert("You win!")
        }    
    })
})



const score = document.createElement('div')
score.classList.add("score")
score.style.backgroundColor = 'pink'
score.style.border = 'thick solid black'
score.style.margin = '10px';
score.style.padding = '10px'
const playerScore = document.createElement('h2')
playerScore.classList.add('pS')
playerScore.textContent = "Player Score: "
score.appendChild(playerScore)
const computerScore = document.createElement('h2')
computerScore.classList.add('cS')
computerScore.textContent = "Computer Score: "
score.appendChild(computerScore)

const ps_num = document.createElement('h3')
ps_num.textContent = ps_score
ps_num.classList.add('updater')
playerScore.appendChild(ps_num)

const cs_num = document.createElement('h3')
cs_num.textContent = cs_score
cs_num.classList.add('updater')
computerScore.appendChild(cs_num)

// const header1 = document.createElement('h1')
// header1.classList.add('heading1')
// header1.textContent = "I'm in a div"
// score.appendChild(header1)
// console.log(score)
container.appendChild(score)