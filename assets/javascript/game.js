//Javascript file for Psychic Game

// Variables wins, losses, guesses left, guesses used, user guesses, & letters in alphabet
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;
var lettersInAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Start Log
var letterToBeGuessed = lettersInAlphabet[Math.floor(Math.random() * lettersInAlphabet.length)];
console.log("Wins: " + wins)
console.log("Losses: " + losses)
console.log("GuessesLeft: " + guessesLeft)
console.log("Guesses so far: " + guessesSoFar)
console.log("Computer picked: " + letterToBeGuessed);

// Start listening
document.onkeyup = function(event) {

// Saves letter entered to userGuess
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// Displays users guesses
// If guess is incorrect, decrease guessesLeft by 1
if (guessesSoFar.indexOf(userGuess) < 0 && lettersInAlphabet.indexOf(userGuess) >= 0) {
	guessesSoFar[guessesSoFar.length]=userGuess;    
    guessesLeft--;       
}

// If user guesses correct letter, add 1 to wins, set guessesLeft to 9,
// set guessesUsed to null, ask the computer to pick another letter.
if (letterToBeGuessed == userGuess) {
	wins++;
	guessesLeft = 9;
	guessesSoFar = [];
	letterToBeGuessed = lettersInAlphabet[Math.floor(Math.random() * lettersInAlphabet.length)];
    console.log("You Win!!! 8-)");
    console.log("Wins: " + wins)
    console.log("Losses: " + losses)
    console.log("GuessesLeft: " + guessesLeft)
    console.log("Guesses so far: " + guessesSoFar)
    console.log("Computer picked: " + letterToBeGuessed);
};
    
// If user guesses incorrect letter 9 times and guessesLeft = 0, add 1 to losses, set guessesLeft to 9,
// set guessesUsed to null, ask the computer to pick another letter.

if (guessesLeft == 0) {
	losses++;
	guessesLeft = 9;
	guessesSoFar = [];
	letterToBeGuessed = lettersInAlphabet[Math.floor(Math.random() * lettersInAlphabet.length)];
    
    console.log("You Lose 8-(");
    console.log("Wins: " + wins)
    console.log("Losses: " + losses)
    console.log("GuessesLeft: " + guessesLeft)
    console.log("Guesses so far: " + guessesSoFar)
    console.log("Computer picked: " + letterToBeGuessed);
}

// Display the output to the html file
var html = "<p><h1>The Psychic Game</h1></p>"  
+ "<p>Guess what letter I\'m thinking of</p>"  
+ "<p>Wins: " + wins + "</p>"  
+ "<p>Losses: " + losses + "</p>" 
+ "<p>Guesses Left: " + guessesLeft + "</p>"  
+ "<p>Your guesses so far: " + guessesSoFar + "</p>";

// Place into game
document.querySelector("#game").innerHTML = html;
}
