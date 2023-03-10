const guessed = document.querySelector(".guessed-letters");
const guess = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordpart = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const numberremaining = document.querySelector(".remaining span");
const message = document.querySelector(".message")
const playagain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];


    


// guessing display functions //
//create function to update wordpart.innerText

// displays symblals, turns an array into a string//

const cover = function (word) {
    const letterCover =[];
    for (const letter of word) {
        console.log(letter);
        letterCover.push("⚫");
    }
    wordpart.innterText = letterCover.join("");
        
};

cover(word);


//listens for click and captures the letter guess//
guess.addEventListener("click", function(e) {
// prevents clicking form and reload//
    e.preventDefault();
    //empty input
    message.innerText = "";
    
    //what was entered
    const userGuess = letterInput.value;
    
    //make sure it was a single letter
    const goodGuess = checkInput(userGuess);

    if (goodGuess) {
        //we have a letter. Let's guess
        makeaGuess(userGuess);
    }
    
    
    letterInput.value = "";
   
    
 //   let guessedletter = document.querySelector("letter");

});

const checkInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/
    
    if (input.length === 0) {
    /// enter a letter//
    message.innerText = "Please enter a letter";
    } else if (input.length > 1) { 
            // enter only one letter
        message.innerText = "Only enter one letter";
         } else if (!input.match(acceptedLetter)) {
            //No numbers or special characters, only letters
        message.innerText = "Please enter a letter from A to Z";
         } else {
            // got a single letter
         
            return input;
        }

};

const makeaGuess = function(userGuess){
    userGuess.toUpperCase();
    if (guessedLetters.includes(userGuess)) {
        message.innerText = "you already guessed that letter"
    } else {
        guessedLetters.push(userGuess);
        console.log(guessedLetters);  
     
} 
    
};
