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
const replayBtn = document.getElementById('replay-btn');

//add function getComputerChoice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice]
}

// add function convertSign() to display the sign
function convertSign(playerChoice, computerChoice) {
    switch (playerChoice) {
        case "rock":
            playerSign_div.textContent = "✊"
            break;
        case "paper":
            playerSign_div.textContent = "🤚"
            break;
        case "scissors":
            playerSign_div.textContent = "✌️"
            break;
    }
    switch (computerChoice) {
        case "rock":
            computerSign_div.textContent = "✊"
            break;
        case "paper":
            computerSign_div.textContent = "🤚"
            break;
        case "scissors":
            computerSign_div.textContent = "✌️"
            break;
    }
}

function getCapitalLetter(string) {
    if (string === "rock") return "Rock";
    if (string === "paper") return "Paper";
    return "Scissors";
}

//add function isWin(), isLose() and isDraw() to display the score and message.
function isWin(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.textContent = playerScore;
    resultInfo_h2.textContent = "You win!"
    resultMessage_h3.textContent = `${getCapitalLetter(playerChoice)} beats ${getCapitalLetter(computerChoice)}`
}

function isLose(playerChoice, computerChoice) {
    computerScore++;
    computerScore_span.textContent = computerScore;
    resultInfo_h2.textContent = "You lose!"
    resultMessage_h3.textContent = `${getCapitalLetter(computerChoice)} beats ${getCapitalLetter(playerChoice)}`
}

function isDraw(computerChoice) {
    resultInfo_h2.textContent = "Draw!"
    resultMessage_h3.textContent = `You both choose ${getCapitalLetter(computerChoice)}`
}

function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return endgameMsg_p.textContent = 'You win the game!'
    } else {
        return endgameMsg_p.textContent = 'You lose the game!'
    }
}

function disableBtn() {
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
}

function isGameOver(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        getWinner(playerScore, computerScore)
        disableBtn();
        replayBtn.style.visibility = 'visible';
    }

}

function resetGame() {
    replayBtn.addEventListener('click', () => {
        window.location.reload()
    })
}

//add function game(). THis function will run the game logic
function game(playerChoice) {
    const computerChoice = getComputerChoice();
    convertSign(playerChoice, computerChoice);

    //add switch to compare playerChoice and computerChoice
    switch (playerChoice + ' ' + computerChoice) {
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            isWin(playerChoice, computerChoice);
            break;
        case "rock paper":
        case "paper scissors":
        case "scissors rock":
            isLose(playerChoice, computerChoice)
            break;
        case "rock rock":
        case "paper paper":
        case "scissors scissors":
            isDraw(computerChoice)
            break;
    }
    isGameOver(playerScore, computerScore);
    resetGame()
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