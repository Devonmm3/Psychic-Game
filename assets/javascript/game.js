var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesNum = 10;
var guessChoice = [];
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("Guesses-left-text");
var guessesSoFarText = document.getElementById("Guesses-so-far-text");
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice)


document.onkeypress = function (event) {
    var userGuess = event.key;



    if (userGuess === computerChoice) {
        wins++;
        guessesNum = 9;
        guessChoice = [];
        winsText.textContent = 'Wins: ' + wins;
    } else {
        if (guessChoice.includes(userGuess)) {} else {
            guessesNum--;
            guessChoice.push(userGuess);
            guessesLeftText.textContent = "Guesses Left: " + guessesNum;
            guessesSoFarText.textContent = "Guesses So Far: " + guessChoice;
        }
    }
    if (guessesNum = 0) {
        guessesNum = 9;
        losses--;
        guessChoice = [];
        lossesText.textContent = "Losses: " + losses;
    }
}