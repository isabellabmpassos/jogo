const userScoreElement = document.getElementById('user-score');
const compScoreElement = document.getElementById('comp-score');
const resultMessage = document.getElementById('result-message');
const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function convertToWord(choice) {
    if (choice === 'pedra') return 'Pedra';
    if (choice === 'papel') return 'Papel';
    return 'Tesoura';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreElement.textContent = userScore;
    resultMessage.textContent = `${convertToWord(userChoice)} vence ${convertToWord(computerChoice)}. Você ganhou! 🎉`;
}

function lose(userChoice, computerChoice) {
    compScore++;
    compScoreElement.textContent = compScore;
    resultMessage.textContent = `${convertToWord(userChoice)} perde para ${convertToWord(computerChoice)}. Você perdeu! 😞`;
}

function draw(userChoice, computerChoice) {
    resultMessage.textContent = `${convertToWord(userChoice)} empata com ${convertToWord(computerChoice)}. É um empate!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'pedrapedra':
        case 'papelpapel':
        case 'tesouratesoura':
            draw(userChoice, computerChoice);
            break;
        case 'pedratesoura':
        case 'papelpedra':
        case 'tesourapapel':
            win(userChoice, computerChoice);
            break;
        case 'pedrapapel':
        case 'papeltesoura':
        case 'tesourapedra':
            lose(userChoice, computerChoice);
            break;
    }
}

pedra.addEventListener('click', () => game('pedra'));
papel.addEventListener('click', () => game('papel'));
tesoura.addEventListener('click', () => game('tesoura'));
