// Initialize score tracking
let humanScore = 0;
let computerScore = 0;

// Get button elements from the DOM
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');
resetBtn.style.display = 'none'; // Hide initially

// Attach event listeners to the buttons with correct choices passed to playRound function
rockBtn.addEventListener('click', () =>  playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

// Function to generate a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Main game logic for one round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    // Determine outcome of one round
    if (humanChoice === computerChoice) {
        result = "We have a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            result = `WINNER! ${humanChoice.toUpperCase()} beats ${computerChoice}!`;
            humanScore++;
        } else {
            result = `You LOSE! ${computerChoice.toUpperCase()} beats ${humanChoice}!`;
            computerScore++;
        }

        // Update the result display on the page
        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = ''; // Clear existing result

        const resultPara = document.createElement('p');
        resultPara.textContent = result;
        resultsDiv.appendChild(resultPara);

        // Update the live scoreboard
        document.getElementById('human-score').textContent = `Human: ${humanScore}`;
        document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
        
        // Check for the game winner
        if (humanScore === 5 || computerScore === 5) {
            const winnerMessage =
                humanScore === 5
                    ? "That's 5 points for you! You won the game!"
                    : "The computer reached 5 points. YOU LOSE.";

            // Append winner message
            const winnerPara = document.createElement('p');
            const winnerStrong = document.createElement('strong');
            winnerStrong.textContent = winnerMessage;
            winnerPara.appendChild(winnerStrong);
            resultsDiv.appendChild(winnerPara);

            // Disable the buttons to prevent further play
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;

            resetBtn.style.display = 'block';

        }
}

resetBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;

    document.getElementById('human-score').textContent = 'Human: 0';
    document.getElementById('computer-score').textContent = 'Computer: 0';

    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = '';
    
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    resetBtn.style.display = 'none'; // Hide again
});