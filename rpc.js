// Function that randomly returns rock, paper or scissors
function computerPlay() {
    let optionArray = ['rock', 'paper', 'scissors'];
    return optionArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return "Tie";
        } else if (computerSelection == 'scissors') {
            return "You Win";
        } else {
            return "You Lose";
        }

    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return "You Win";
        } else if (computerSelection == 'scissors') {
            return "You Lose";
        } else {
            return "Tie";
        }

    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return "You Lose";
        } else if (computerSelection == 'scissors') {
            return "Tie";
        } else {
            return "You Win";
        }
    }
}

function game() {
    let rounds = 0;
    let playerWin = 0;
    let computerWin = 0;

    for (rounds = 0; rounds < 5; rounds++) {
        let player = prompt("Please enter either rock, paper, or scissors.").toLowerCase();
        let computer = computerPlay();
        let result = playRound(player, computer);

        if (result == "You Win") {
            playerWin++;
            console.log("You Win!");
        } else if (result == "You Lose") {
            computerWin++;
            console.log("You Lose.");
        } else {
            console.log("It's a tie.")
        }
    }

    if (playerWin > computerWin) {
        console.log("You are the winner!");
    } else if (playerWin <computerWin) {
        console.log("You lose. Better luck next time!");
    } else {
        console.log("It's a tie!");
    }
}

game();