const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const resultParagraph = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", function () {
    playGame("rock");
});

paperButton.addEventListener("click", function () {

    playGame("paper");
});

scissorsButton.addEventListener("click", function () {

    playGame("scissors");
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
    let choice = getRandomInt(1, 3);
    switch (choice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            return 'error';
    }
}

function playRound(playerChoice, computerChoice) {
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return 'You win! ' + playerChoice + ' beats ' + computerChoice + '.';
    } else if (
        (playerChoice === 'scissors' && computerChoice === 'rock') ||
        (playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'scissors')
    ) {
        computerScore++;
        return 'You lose! ' + computerChoice + ' beats ' + playerChoice + '.';
    } else {
        return "It's a draw!";
    }
}

function playGame(playerChoice) {
    computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);

    resultParagraph.textContent = result;

    if (playerScore + computerScore === 5) {
        if (playerScore > computerScore) {
            resultParagraph.textContent += ` You win! Your score is ${playerScore}, while the computer scored ${computerScore}.`;
        } else if (computerScore > playerScore) {
            resultParagraph.textContent += ` You lose! Your score is ${playerScore}, while the computer scored ${computerScore}.`;
        } else {
            resultParagraph.textContent += " It's a tie!";
        }

        // Reset scores for the next game
        playerScore = 0;
        computerScore = 0;
    }
}