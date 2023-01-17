function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    let choice = " ";
    if (num === 1) {
        choice = "Rock"
    } else if (num === 2) {
        choice = "Paper"
    } else {
        choice = "Scissors"
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toUpperCase() === "ROCK" && computerSelection === "Rock") || (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Paper") || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Scissors")) {
        return "Draw"
    } else if ((playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") || (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock")) {
        return "Computer Wins"
    } else if ((playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") || (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper")) {
        return "Player Wins"
    }
}

function game() {
    let player = 0;
    let computer = 0;
    for (let i = "continue"; i === "continue"; ) {
        let result = (playRound(prompt("Please choose Rock, Paper or Scissors"), getComputerChoice()))
        if (result === "Player Wins") {
            player = player + 1;
            console.log("Player wins a point!")
        } else if (result === "Computer Wins") {
            computer = computer + 1;
            console.log("Computer wins a point!")
        } else {
            console.log("It's a draw this round")
        }
        console.log(`Current score is Player ${player} : Computer ${computer}`);
        if (player >= 5) {
            i = "Finished";
            console.log("Player wins the game!")
        } else if (computer >= 5) {
            i = "Finished";
            console.log("Computer wins the game!")
        }
    }
}
