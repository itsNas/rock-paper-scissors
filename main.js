// For game logic just update the function playRound with playerScore,computerScore and roundWinner. Update computerPlay with new switch
//replace the loop that will play the game 5 rounds to the new one 
// work on the ui section. Must have scoreInfo, scoreMessage, playerScore, computerScore, playerSign, computerSign, btn
//work on the restart btn overlay. Will have endGameModal,endGameMessage,overlay and restartBtn
//work on the sign and updateChoice function
//work on updateScore function. (you won, computer won or tie)

//* old code
// function computerPlay() {
//     const choices = ["rock", "paper", "scissors"];
//     return choices[Math.floor(Math.random() * choices.length)];
// }

// function lowerCase(string) {
//     return string.toLowerCase();
// }

// function playerPlay() {
//     let input = prompt("Choose Rock, Paper, Scissors");
//     input = lowerCase(input);

//     if (input === "rock" || input === "paper" || input === "scissors") {
//         return input;
//     } else {
//         alert("Wrong input, please choose Rock, Paper or Scissors");
//     }
//     return input;
// }

// game logic
// function playRound(playerSelection, computerSelection) {
//     log = "";
//     if (playerSelection === computerSelection) {
//         console.log("You choose:" + playerSelection + " " + "||" + " " + "Computer choose:" + computerSelection);
//         console.log("Tie!");
//         console.log("**********************************************");
// } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissors" && computerSelection === "paper")
// ) {
//     playerPoint = 1;
//     console.log("You choose:" + playerSelection + " " + "||" + " " + "Computer choose:" + computerSelection);
//     console.log("You win the round," + " " + playerSelection + " " + "beats" + " " + computerSelection);
//     console.log("**********************************************");
//     log = "player";
// } else {
//         console.log("You choose:" + playerSelection + " " + "||" + " " + "Computer choose:" + computerSelection);
//         console.log("Computer win the round," + " " + computerSelection + " " + "beats" + " " + playerSelection);
//         console.log("**********************************************");
//         log = "computer!";
//     }
//     return log;
// }

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         const computerSelections = computerPlay();
//         const playerSelections = playerPlay();
//         const roundResults = playRound(playerSelections, computerSelections);

//         if (roundResults.search("player") > -1) {
//             playerScore++;
//         } else if (roundResults.search("computer") > -1) {
//             computerScore++;
//         }
//     }
//     console.log('*************** Final Result *****************')
//     console.log("Player Score:" + playerScore + " " + "||" + " " + "Computer Score:" + computerScore);

//     if (playerScore > computerScore) {
//         console.log('You win the game!');
//     } else if (playerScore < computerScore) {
//         console.log('You lose the game!');
//     } else {
//         console.log('Its a tie!')
//     }
// }
// game();

//* new code

//game
let playerScore = 0;
let computerScore = 0;
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie'
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        roundWinner = 'player';
    } else {
        computerScore++;
        roundWinner = 'computer';
    }
    // updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

//UI