const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
let remainingGuessText = document.getElementById('remaining-guesses');
let resultText = document.getElementById('result-text');

let hint = "";
let remainingGuesses = 4;
const correctNum = getRandomInt(1, 21);
console.log(correctNum);

//used getRandomInt() from MDN
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

submitButton.addEventListener('click', () => {

  remainingGuesses--;
  remainingGuessText.innerText = `You have ${remainingGuesses} guesses left.`

  const userGuess = Number(guessInput.value);

  if (userGuess === correctNum) {
    resultText.innerText = "Correct! You win.";
    remainingGuessText.style.display = "none";
    submitButton.style.display = "none";
    resetButton.style.display = "block";
  } else if (remainingGuesses === 0) {
    resultText.innerText = "You lose. Out of guesses.";
    remainingGuessText.style.display = "none";
    submitButton.style.display = "none";
    resetButton.style.display = "block";
  } else if (userGuess > correctNum) {
    hint = "Too high!";
    resultText.innerText = `${hint} Please try again.`;
  } else if (userGuess < correctNum) {
    hint = "Too low!"
    resultText.innerText = "Incorrect. Please try again.";
    resultText.innerText = `${hint} Please try again.`;
  }

  // else(userGuess > 20) -- display Invalid guess

})

resetButton.addEventListener('click', () => {
  //reset game
})





// What state do I need
// /* * randomNum -- will be generated at the start of each game
// * userGuess -- will hold the value of the input field
// * numGuesses -- number of guesses -- incremented every time the user clicks the button OR starts at 4 and decrements
// * userMessage
//     - 'You're correct': userGuess === randomNum
//     - 'Guess too high': userGuess > randomNum
//     - 'Guess too low': userGuess < randomNum
//     - 'Invalid': userGuess > 20
//     - 'Out of guesses': numGuesses > 4/*


