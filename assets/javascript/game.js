// variables 

var wins = 0;
var losses = 0; 
var guessLeft = 10;
var letters  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wrongLetterArray = []; 
var guessSoFar = letters[Math.floor(Math.random() * letters.length)];

// functions 

document.onkeyup = function(event) {
    var wrongLetter = String.fromCharCode(event.keyCode).toLowerCase();
    wrongLetterArray.push(wrongLetter); 

    if (wrongLetter == guessSoFar) {
        alert("YOU WIN!");
        wins++;
        guessleft = 10;
        wrongLetterArray = [];
        guessSoFar = letters[Math.floor(Math.random() * letters.length)];
    
    } else if (guessleft == 0) {
        alert("YOU LOSE! TRY AGAIN");
        losses++;
        guessleft = 10;
        wrongLetterArray = [];
        guessSoFar = letters[Math.floor(Math.random() * letters.length)];
    
    }else if (wrongLetter !== guessSoFar) {
        guessleft--;}

    document.querySelector('.wins').innerHTML = "wins: " + wins;

    document.querySelector('.losses').innerHTML = "losses: " + losses;

    document.querySelector('.guessLeft').innerHTML = "guesses left: " + guessleft;

    document.querySelector('.guessSoFar').innerHTML = "guesses so far: " + wrongLetter;

}
