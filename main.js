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
        alert("Wrong choice, please choose Rock, Paper or Scissors");
    }
    return input;
}

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
        console.log("Computer win the round," + " " + playerSelection + " " + "beats" + " " + computerSelection);
        console.log("**********************************************");
        log = "computer!";
    }
    return log;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
        const roundResults = playRound(playerSelection, computerSelection);

        if (roundResults.search("player") > -1) {
            playerScore++;
        } else if (roundResults.search("computer") > -1) {
            computerScore++;
        }
    }
    console.log(
        "Player Score:" +
        playerScore +
        " " +
        "||" +
        " " +
        "Computer Score:" +
        computerScore
    );
}

game();