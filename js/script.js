const guessedLettersElement = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const inputLetter = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const numberOfGuessesRemaining = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

// word to guess
const word = "magnolia";
const guessedLetters = [];

// function represent each word letter with placeholder

const placeHolder = function(word){
//the array of placeholders
        const placeHolderLetters =[];
        for (const letter of word) {
        console.log(letter);
        wordProgress.innerText = word;
        placeHolderLetters.push("⚫");
    }
// bringing array back to a string with no seperation using ""  
        wordProgress.innerText = placeHolderLetters.join("");
};

placeHolder(word);

button.addEventListener("click", function(e) {
// prevents reloading 
    e.preventDefault();
    
    message.innerText = "";
    const inputGuess = inputLetter.value;
    const goodGuess = validateInput(inputGuess);
    inputLetter.value = "";
    makeGuess(inputGuess);
});    




// check the type of input
const validateInput = function (input){

// regex to only allow letters    
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0) {
        //empty input?
        message.innerText = `Please enter a letter`;
    } else if (input.length > 1) {
        //more than 1 letter
        message.innerText = `Only one letter at a time`;
    } else if  (!input.match(acceptedLetter)) {
        //other than letters
        message.innerText = `Only enter letters`;
        // and when you get a single letter
    } else {
        return input;
    }
};

const makeGuess = function (inputGuess){
     inputGuess = inputGuess.toUpperCase();    
    
    if (guessedLetters.includes(inputGuess)) {
        message.innerText = `You have already guessed that letter`;
    } else {
        guessedLetters.push(inputGuess);
   } console.log(guessedLetters);
}; 

