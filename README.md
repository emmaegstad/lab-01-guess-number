# Alchemy Bootstrap Template

## Guess a Number App

### HTML Elements
* h1 with title - static
* input for guess - static
* submit button - static
* result paragraph - dynamic

### State
* randomNum -- will be generated at the start of each game
* userGuess -- will hold the value of the input field
* numGuesses -- number of guesses -- incremented every time the user clicks the button OR starts at 4 and decrements
* userMessage
    - 'You're correct': userGuess === randomNum
    - 'Guess too high': userGuess > randomNum
    - 'Guess too low': userGuess < randomNum
    - 'Invalid': userGuess > 20
    - 'Out of guesses': numGuesses > 4

## Making a plan

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass