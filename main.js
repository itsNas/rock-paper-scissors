// 1. Declare a global variable for the purpose of player choice and computer choice. *Hint* use array

// 2. Write a function called computerPlay. The choice will be random. *Hint* use code array[math.floor(math.random())*array.length]

// 3. Write a function caller playerPlay. The player will give input using prompt. The input will be case-insensitive. *Hint* use input = toLocaleLowerCase. Add if else statement so only correct values will be returned. 

// 4. Write a function called determineWinner with 2 parameters to determine the winner. *Hint* use if else statement and && and ||.

// 5. Write a function called playRound and declare the parameters of playerSelection, computerSelection and winnerSelection . This function will run all the previous functions. *Hint* const computerSelection = computerPlay.

// 6. Write a function called game(). Called the playRound function to play the game. The game will  be 5 rounds. *Hint* use for loops

const choices = ["rock", "paper", "scissors"]

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];

}

function playerPlay() {
    let input = prompt("Choose Rock, Paper, Scissors")
    input = input.toLowerCase();

    if ((input === "rock") || (input === "paper") || (input === "scissors")) {
        return input;
    } else {
        prompt("Wrong choice, please choose Rock, Paper or Scissors")
    }
    return input;
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You Win!!!";
    } else {
        return "Computer win!!!";
    }
}

function displayResult() {

}

function playRound() {
    const computerSelection = computerPlay();
    console.log("Computer choose:" + (computerSelection));
    const playerSelection = playerPlay();
    console.log("You choose:" + (playerSelection));
    const winnerSelection = determineWinner(playerSelection, computerSelection);
    console.log(winnerSelection);
    console.log("--------------------------------")
}

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }

}

game();