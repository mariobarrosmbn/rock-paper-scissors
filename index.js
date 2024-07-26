// THE ROCK-PAPER-SCISSORS GAME - UI - THE ODIN PROJECT

// CREATE 3 BUTTONS, ONE FOR EACH SELECTION (done in the HTML file);


// ADD DIV FOR DISPLAYING RESULTS AND USE DOM METHODS INSTEAD OF CONSOLE.LOG;
// UPDATE THE SCORE UNTIL ONE PLAYER REACHES FIVE WINS;



// Computer's move:

function getComputerChoice() {
    let cpuPlay = Math.ceil(Math.random() * 3);
    if (cpuPlay === 1) {
        cpu = 'ROCK';
    } else if (cpuPlay === 2) {
        cpu = 'PAPER';
    } else if (cpuPlay === 3) {
        cpu = 'SCISSORS';
    }
}

// playing a round:

let humanScore = 0;
let computerScore = 0;
let computer = document.querySelector('.computer');
let results = document.querySelector('.results');
let score = document.querySelector('.score');

function playRound(user, cpu) {
    if (user === cpu) {
        computer.textContent = `Computer picks ${cpu}!`;
        results.textContent = `DRAW! ${user} equals to ${cpu}.`;
        score.textContent = `YOU ${humanScore} x ${computerScore} COMPUTER`;
    } else if (user === 'ROCK' && cpu === 'SCISSORS') {
        humanScore += 1;
        computer.textContent = `Computer picks ${cpu}!`;
        results.textContent = `You win! ${user} beats ${cpu}.`;
        score.textContent = `YOU ${humanScore} x ${computerScore} COMPUTER`;
    } else if (user === 'PAPER' && cpu === 'ROCK') {
        humanScore += 1;
        computer.textContent = `Computer picks ${cpu}!`;
        results.textContent = `You win! ${user} beats ${cpu}.`;
        score.textContent = `YOU ${humanScore} x ${computerScore} COMPUTER`;
    } else if (user === 'SCISSORS' && cpu === 'PAPER') {
        humanScore += 1;
        computer.textContent = `Computer picks ${cpu}!`;
        results.textContent = `You win! ${user} beats ${cpu}.`;
        score.textContent = `YOU ${humanScore} x ${computerScore} COMPUTER`;
    } else if (user === 'ROCK' && cpu === 'PAPER'){
        computerScore += 1;
        computer.textContent = `Computer picks ${cpu}!`;
        results.textContent = `You lose! ${cpu} beats ${user}.`;
        score.textContent = `YOU ${humanScore} x ${computerScore} COMPUTER`;
    } else if (user === 'PAPER' && cpu === 'SCISSORS') {
        computerScore += 1;
        computer.textContent = `Computer picks ${cpu}!`;
        results.textContent = `You lose! ${cpu} beats ${user}.`;
        score.textContent = `YOU ${humanScore} x ${computerScore} COMPUTER`;
    } else if (user === 'SCISSORS' && cpu === 'ROCK') {
        computerScore += 1;
        computer.textContent = `Computer picks ${cpu}!`;
        results.textContent = `You lose! ${cpu} beats ${user}.`;
        score.textContent = `YOU ${humanScore} x ${computerScore} COMPUTER`;
    }
}

let user = '';
let cpu = '';

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    user = 'ROCK';
    getComputerChoice();
    playRound(user, cpu);
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    user = 'PAPER';
    getComputerChoice();
    playRound(user, cpu);
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    user = 'SCISSORS';
    getComputerChoice();
    playRound(user, cpu);
});

