const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
let remainingGuessText = document.getElementById('remaining-guesses');
let resultText = document.getElementById('result-text');
let timesWon = document.getElementById('win-count');
let timesLost = document.getElementById('lose-count');

let hint = '';
let remainingGuesses = 4;
let correctNum = getRandomInt(1, 21);
let timesWonCount = 0;
let timesLostCount = 0;

//used getRandomInt() from MDN
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

submitButton.addEventListener('click', () => {
    remainingGuesses--;
    remainingGuessText.innerText = `You have ${remainingGuesses} guesses left.`;

    const userGuess = Number(guessInput.value);

    if (isNaN(userGuess) !== true) {

        if (userGuess === correctNum) {
            timesWonCount++;
            timesWon.innerText = `TIMES WON: ${timesWonCount}`;
            resultText.innerText = 'Correct! You win.';
            remainingGuessText.style.display = 'none';
            submitButton.style.display = 'none';
            resetButton.style.display = 'block';
        } else if (remainingGuesses === 0) {
            timesLostCount++;
            timesLost.innerText = `TIMES LOST: ${timesLostCount}`;
            resultText.innerText = 'No more guesses. You lose.';
            // remainingGuessText.style.display = 'none';
            submitButton.style.display = 'none';
            resetButton.style.display = 'block';
        } else if (userGuess > correctNum) {
            hint = 'Too high!';
            resultText.innerText = `${hint} Try again.`;
        } else if (userGuess < correctNum) {
            hint = 'Too low!';
            resultText.innerText = 'Incorrect. Please try again.';
            resultText.innerText = `${hint} Try again.`;
        }
    }
});

resetButton.addEventListener('click', () => {
    submitButton.style.display = 'block';
    resetButton.style.display = 'none';
    resultText.innerText = '';
    guessInput.value = '';
    correctNum = getRandomInt(1, 21);
    remainingGuesses = 4;
    remainingGuessText.innerText = `You have ${remainingGuesses} guesses left.`;
    remainingGuessText.style.display = 'block';
});
