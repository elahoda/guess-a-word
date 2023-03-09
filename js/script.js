const guessed = document.querySelector(".guessed-letters");
const guess = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordpart = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const numberremaining = document.querySelector(".remaining span");
const message = document.querySelector(".message")
const playagain = document.querySelector(".play-again");

const word = "magnolia";


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

    const userGuess = letterInput.value;
    console.log(userGuess);
 //   letterInput.value = "";
   
    
 //   let guessedletter = document.querySelector("letter");

});

