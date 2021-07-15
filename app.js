function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function computerPlay() {
    let choice = randomInt(1, 3);
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
        default:
            return "error";
    }

}
const playerSelection = prompt("Enter rock, paper, or scissor").toLowerCase();
