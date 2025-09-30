const result = document.querySelector('.result');
const humanScoreSpan = document.getElementById('human-score');
const machineScoreSpan = document.getElementById('machine-score');

let humanScore = 0;
let machineScore = 0;

const GAME_OPTIONS = {
    ROCK: 'PEDRA',
    PAPER: 'PAPEL',
    SCISSORS: 'TESOURA'
}


const playHuman = (humanChoise) => {
    playTheGame(humanChoise, playMachine());

}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

const playTheGame = (humanChoise, machineChoise) => {

    if (humanChoise === machineChoise) {
        result.innerHTML = `Empate! Vocês dois escolheram ${humanChoise}`;
        result.style.color = 'gray';
    } else if (humanChoise === GAME_OPTIONS.ROCK && machineChoise === GAME_OPTIONS.SCISSORS ||
        humanChoise === GAME_OPTIONS.PAPER && machineChoise === GAME_OPTIONS.ROCK ||
        humanChoise === GAME_OPTIONS.SCISSORS && machineChoise === GAME_OPTIONS.PAPER) {
        result.innerHTML = `Você ganhou! ${humanChoise} vence ${machineChoise}`;
        result.style.color = 'blue';

        humanScore++;
        humanScoreSpan.innerHTML = humanScore;
    
    } else {
        result.innerHTML = `Você perdeu! ${machineChoise} vence ${humanChoise}`;
        machineScore++;
        machineScoreSpan.innerHTML = machineScore;
        result.style.color = 'red';
    }

}

