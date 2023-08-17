function getRandomInt(min, max) {
    /*
    This function is used for the generating the random numbers with the provided arguments.
    */
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
let playerChoice = null;
let computerChoice = null;
function computerPlay() {
    /*
     Using the random number generator for randomizing the choice of the computer.
    
     The choice variable is passed to the switch statement, which returns the string depending upon the case.
     */

    let choice = getRandomInt(1, 3);
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "error";
    }
}

function playRound(playerChoice, computerChoice) {
    /*
    After receiving the function arguments, the conditions check and compare the playerChoice, and computerChoice, and return a string depending on the condition.
    */

    if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors.";
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock.";
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats paper."
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose! paper beats rock.";
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beat paper.";
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats scissors.";
    }
    else {
        return "Tie!";
    }
}

function game() {

    /*
    two score keeping variables are declared, one for computer, one for player.
    
    a loop runs for five rounds, and score keeping variables are incremented with one number depending on who won.
    
    After which, they are compared, and whoever has the greater score, wins. An alert function prints the results.
    */
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        playerChoice = prompt("Enter rock, paper, or scissors").toLowerCase();
        computerChoice = computerPlay();
        let winOrLose = playRound(playerChoice, computerChoice)
        switch (winOrLose) {
            case "You win! Rock beats scissors.":
                alert(winOrLose);
                playerScore++;
                break;
            case "You win! Paper beats rock.":
                alert(winOrLose);
                playerScore++;
                break;
            case "You win! Scissors beats paper.":
                alert(winOrLose);
                playerScore++;
                break;
            case "You lose! paper beats rock.":
                alert(winOrLose);
                computerScore++;
                break;
            case "You lose! Scissors beat paper.":
                alert(winOrLose);
                computerScore++;
                break;
            case "You lose! Rock beats scissors.":
                alert(winOrLose);
                computerScore++;
                break;
            default:
                alert(winOrLose);
        }
    }
    if (playerScore > computerScore) {
        alert(`You won! Your score is ${playerScore}, while computer scored ${computerScore}`);
    }
    else {
        alert(`You lose! Your score is ${playerScore}, while the computer scored ${computerScore}`);
    }
}

game();