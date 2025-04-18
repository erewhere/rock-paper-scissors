function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getHumanChoice () {
    let choice;
    const validChoices = ["rock", "paper", "scissors"];
    while (true) {
        choice = prompt("Enter your choice: rock, paper or scissors!");
        if (choice === null) {
            alert("The game has been canceled by the user!");
            return null;
        }
        choice = choice.toLowerCase();
        if (validChoices.includes(choice)) {
            return choice;
        } else {
            alert("Invalid input! Please enter only rock, paper, or scissors (lower case sensitive).");
        }
    }
}
function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result = '';
    if (humanChoice === computerChoice) {
        result = "We have a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            result = `WINNER! ${humanChoice.toUpperCase()} beats ${computerChoice}!`;
        } else {
            result = `You LOSE! ${computerChoice.toUpperCase()} beats ${humanChoice}!`;
        }
        return result;
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
console.log(`Round ${i + 1}: FIGHT!`);
        const humanSelection = getHumanChoice();
        if (humanSelection === null) return;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection, computerSelection);
console.log(roundResult);
        if (roundResult.includes('WINNER')) {
            humanScore++;
        } else if (roundResult.includes('LOSE')) {
            computerScore++;
        }
    }
console.log("\nGAME OVER!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("The computer has won the game!");
    } else {
        console.log("We have a tie!");
    }
console.log(`Final Score: HUMAN: ${humanScore} | COMPUTER: ${computerScore}`);
}

playGame();