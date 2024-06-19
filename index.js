// THE ROCK-PAPER-SCISSORS GAME - JAVASCRIPT - THE ODIN PROJECT

// DEFINIR AS JOGADAS:
//  - JOGADA DO USUÁRIO;
//  - JOGADA DO COMPUTADOR;
// COMPARAR AS JOGADAS E DEFINIR O VENCEDOR
// ANOTAR O PLACAR ATÉ ATINGIR A MELHOR DE CINCO
// OFERECER OPÇÃO PARA REINÍCIO DO JOGO
// =======================================================================

// VARIÁVEIS GLOBAIS:


// Computer's move:

function getComputerChoice () {
    let cpu = Math.ceil(Math.random() * 3);
    if (cpu === 1) {
        return 'ROCK';
    } else if (cpu === 2) {
        return 'PAPER';
    } else if (cpu === 3) {
        return 'SCISSORS';
    }
}

// user's move:

function getHumanChoice () {
    return prompt('ROCK, PAPER OR SCISSORS? ').toUpperCase();
}

// console.log(getHumanChoice());
// console.log(computerChoice);
// playRound(humanChoice, computerChoice);

// playing a round:

function playRound(user, cpu) {
    if (user === cpu) {
        console.log(`Draw! ${user} equals to ${cpu}.`);
    } else if (user === 'ROCK' && cpu === 'SCISSORS') {
        humanScore += 1;
        console.log(`You win! ${user} beats ${cpu}.`);
    } else if (user === 'PAPER' && cpu === 'ROCK') {
        humanScore += 1;
        console.log(`You win! ${user} beats ${cpu}.`);
    } else if (user === 'SCISSORS' && cpu === 'PAPER') {
        humanScore += 1;
        console.log(`You win! ${user} beats ${cpu}.`);
    } else if (user === 'ROCK' && cpu === 'PAPER'){
        computerScore += 1;
        console.log(`You lose! ${cpu} beats ${user}.`);
    } else if (user === 'PAPER' && cpu === 'SCISSORS') {
        computerScore += 1;
        console.log(`You lose! ${cpu} beats ${user}.`);
    } else if (user === 'SCISSORS' && cpu === 'ROCK') {
        computerScore += 1;
        console.log(`You lose! ${cpu} beats ${user}.`);
    }
}

// playing a game of five rounds:

let humanScore = 0;
let computerScore = 0;

function playGame () {
    for (i = 0; i < 5; i++) {
        // getComputerChoice();
        // getHumanChoice();   
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore === computerScore) {
        console.log(`FINAL SCORE: ${humanScore} x ${computerScore}. DRAW!`);
    } else if (humanScore > computerScore) {
        console.log(`FINAL SCORE: ${humanScore} x ${computerScore}. YOU WIN!`);
    } else if (humanScore < computerScore) {
        console.log(`FINAL SCORE: ${humanScore} x ${computerScore}. YOU LOSE!`);
    }
}
playGame();