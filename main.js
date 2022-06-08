// cache the DOM
let playerScore = 0;
let computerScore = 0;

const resultInfo_h2 = document.getElementById('result-info');
const resultMessage_h3 = document.getElementById('result-message');
const playerSign_div = document.getElementById('player-sign');
const computerSign_div = document.getElementById('computer-sign');
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const endgameMsg_p = document.getElementById('endgame-msg');

//add function getComputerChoice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice]
}

// add function isWin(),isLose(),isDraw
function isWin() {
    playerScore++;
    playerScore_span.textContent = playerScore;
}

function isLose() {
    computerScore++;
    computerScore_span.textContent = computerScore;
}

function isDraw() {
    console.log("DRAW")
}

//add function game(). THis function will run the game logic
function game(playerChoice) {
    const computerChoice = getComputerChoice();

    //add switch to compare playerChoice and computerChoice
    switch (playerChoice + ' ' + computerChoice) {
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            isWin()
            break;
        case "rock paper":
        case "paper scissors":
        case "scissors rock":
            isLose()
            break;
        case "rock rock":
        case "paper paper":
        case "scissors scissors":
            isDraw()
            break;
    }
}
//addEventListener. This will run the function game() after click
function main() {
    rockBtn.addEventListener('click', function () {
        game("rock")
    })
    paperBtn.addEventListener('click', function () {
        game("paper")
    })
    scissorsBtn.addEventListener('click', function () {
        game("scissors")
    })
}
main();