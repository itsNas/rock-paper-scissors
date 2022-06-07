// For game logic just update the function playRound with playerScore,computerScore and roundWinner. Update computerPlay with new switch
//replace the loop that will play the game 5 rounds to the new one 
// work on the ui section. Must have scoreInfo, scoreMessage, playerScore, computerScore, playerSign, computerSign, btn
//work on the restart btn overlay. Will have endGameModal,endGameMessage,overlay and restartBtn
//work on the sign and updateChoice function
//work on updateScore function. (you won, computer won or tie)

//* old code
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function lowerCase(string) {
    return string.toLowerCase();
}

function playerPlay() {
    let input = prompt("Choose Rock, Paper, Scissors");
    input = lowerCase(input);

    if (input === "rock" || input === "paper" || input === "scissors") {
        return input;
    } else {
        alert("Wrong input, please choose Rock, Paper or Scissors");
    }
    return input;
}

//game logic

function playRound(playerSelection, computerSelection) {
    log = "";
    if (playerSelection === computerSelection) {
        console.log("You choose:" + playerSelection + " " + "||" + " " + "Computer choose:" + computerSelection);
        console.log("Tie!");
        console.log("**********************************************");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerPoint = 1;
        console.log("You choose:" + playerSelection + " " + "||" + " " + "Computer choose:" + computerSelection);
        console.log("You win the round," + " " + playerSelection + " " + "beats" + " " + computerSelection);
        console.log("**********************************************");
        log = "player";
    } else {
        console.log("You choose:" + playerSelection + " " + "||" + " " + "Computer choose:" + computerSelection);
        console.log("Computer win the round," + " " + computerSelection + " " + "beats" + " " + playerSelection);
        console.log("**********************************************");
        log = "computer";
    }
    return log;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelections = computerPlay();
        const playerSelections = playerPlay();
        const roundResults = playRound(playerSelections, computerSelections);

        if (roundResults.search("player") > -1) {
            playerScore++;
        } else if (roundResults.search("computer") > -1) {
            computerScore++;
        }
    }
    console.log('*************** Final Result *****************')
    console.log("Player Score:" + playerScore + " " + "||" + " " + "Computer Score:" + computerScore);

    if (playerScore > computerScore) {
        console.log('You win the game!');
    } else if (playerScore < computerScore) {
        console.log('You lose the game!');
    } else {
        console.log('Its a tie!')
    }
}
game();

//* new code

//game
// let playerScore = 0;
// let computerScore = 0;
// let roundWinner = ''

// function playRound(playerSelection, computerSelection) {
//     let randomNumber = Math.floor(Math.random() * 3)
//     switch (randomNumber) {
//         case 0:
//             return 'rock';
//         case 1:
//             return 'paper';
//         case 2:
//             return 'scissors';
//     }
//     // updateScoreMessage(roundWinner, playerSelection, computerSelection)
// }

// function getComChoice() {
//     let randomNumber = Math.floor(Math.random() * 3)
//     switch (randomNumber) {
//         case 0:
//             return 'rock';
//         case 1:
//             return 'paper';
//         case 2:
//             return 'scissors';
//     }
// }

// function getPlayerChoice() {

//     let btnRock = rockBtn.addEventListener('click', () => {
//         'rock'
//     })
//     let btnPaper = paperBtn.addEventListener('click', () => {
//         'paper'
//     })
//     let btnScs = scissorsBtn.addEventListener('click', () => {
//         'scissors'
//     })
//     console.log(btnRock, btnPaper, btnScs)
// }

// function isGameOver() {
//     return playerScore === 5 || computerScore === 5
// }

// //UI
// const scoreInfo = document.getElementById('scoreInfo');
// const scoreMessage = document.getElementById('scoreMessage');
// const computerScorePara = document.getElementById('computerScore');
// const playerScorePara = document.getElementById('playerScore');
// const playerSign = document.getElementById('playerSign');
// const computerSign = document.getElementById('computerSign');
// const rockBtn = document.querySelector('#rockBtn');
// const paperBtn = document.querySelector('#paperBtn');
// const scissorsBtn = document.querySelector('#scissorsBtn');
// const endGameMessage = document.getElementById('endgameMsg');

// //create function capitalizeFirstLetter
// function capitalizeFirstLetter() {
//     return String.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
// }
// //create function updateChoice()
// function updateChoice(playerSelection, computerSelection) {
//     switch (playerSelection) {
//         case 'rock':
//             playerSign.textContent = '✊'
//             break
//         case 'paper':
//             playerSign.textContent = '🤚'
//             break
//         case 'scissors':
//             playerSign.textContent = '✌️'
//             break
//     }
//     switch (computerSelection) {
//         case 'rock':
//             computerSign.textContent = '✊'
//             break
//         case 'paper':
//             computerSign.textContent = '🤚'
//             break
//         case 'scissors':
//             computerSign.textContent = '✌️'
//             break
//     }
// }
// //create function updateScore
// function updateScore() {
//     if (roundWinner === 'tie') {
//         scoreInfo.textContent = 'Its a tie!';
//     } else if (roundWinner === 'player') {
//         scoreInfo.textContent = 'You won!';
//     } else {
//         scoreInfo.textContent = 'You lost!';
//     }
//     playerScorePara.textContent = 'Player : ${playerScore}';
//     computerScorePara.textContent = 'Computer : ${computerScore}';
// }
// //create function updateScoreMessage
// //create function setFinalMessage
// function setFinalMessage() {
//     return playerScore > computerScore ? (endgameMsg.textContent = 'You won!') : (endgameMsg.textContent = 'You lost!')
// }
// //create function handleClick
// const computerSelection = getComChoice();
// const playerSelection = getPlayerChoice();
// playRound(playerSelection, computerSelection);
// updateChoice(playerSelection, computerSelection);
// updateScore();
// //callback function by addEventListener