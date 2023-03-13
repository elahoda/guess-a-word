const guessedLettersElement = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const inputLetter = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
let remainingGuessesElement = document.querySelector(".remaining");
const numberOfGuessesRemaining = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

//let word = "magnolia";
const guessedLetters = [];
let remainingGuesses = 8;



// word to guess

const getWord = async function() {
   const stashOfWords = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
   const newWords = await stashOfWords.text();
   const wordArray = newWords.split("\n");

   // get random word from fetched array
   const randomIndex = Math.floor(Math.random() * wordArray.length);
   word = wordArray[randomIndex].trim();
   placeHolder(word);
};

getWord();



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

// placeHolder(word);

button.addEventListener("click", function(e) {
// prevents reloading 
    e.preventDefault();
    
    message.innerText = "";
    const guess = inputLetter.value;
    const goodGuess = validateInput(guess);
    if (goodGuess) {
    makeGuess(guess);
    }
    inputLetter.value = "";
});    




// check the type of input
const validateInput = function (guess){

// regex to only allow letters    
    const acceptedLetter = /[a-zA-Z]/;

    if (guess.length === 0) {
        //empty input?
        message.innerText = `Please enter a letter only`;
    } else if (guess.length > 1) {
        //more than 1 letter
        message.innerText = `Enter only ONE letter at a time`;
    } else if  (!guess.match(acceptedLetter)) {
        //other than letters
        message.innerText = `Only enter letters, A -Z`;
        // and when you get a single letter
    } else {
        return guess;
    }
};

const makeGuess = function (guess){
     guess = guess.toUpperCase();    
    
    if (guessedLetters.includes(guess)) {
        message.innerText = `You have already guessed that letter`;
    } else {
        guessedLetters.push(guess);
        showGuesses();
        countGuesses(guess);
        updateWordInProgress(guessedLetters);
   } //console.log(guessedLetters);s
   
   
}; 


// function to update the display of the guessed letters

const showGuesses = function (input){
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};


// function to update the "word in progress" and replace the circles

const updateWordInProgress = function (guessedLetters){
    
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
    } else {
        revealWord.push("⚫");
        
    }        
}
    console.log(revealWord);
    wordProgress.innerText = revealWord.join("");
    checkWinner();
};

// count remaining guesses

const countGuesses = function (guess) {
    const wordUpper = word.toUpperCase();
    if (!wordUpper.includes(guess)) {
        message.innerText = `The letter ${guess} is not a match`;
        remainingGuesses -= 1;
        numberOfGuessesRemaining.innerText = `${remainingGuesses} guesses`;

    } else { 
        message.innerText = `Yes, ${guess} is one of the words letters`
    }
     if (remainingGuesses === 0) {
        message.innerHTML = `<span class="highlight"> Game Over. The word is ${wordUpper}</span>.`
        numberOfGuessesRemaining.innerText = `${remainingGuesses} guesses`;
        startOver();
    } else if (remainingGuesses === 1) {
        numberOfGuessesRemaining.innerText = `${remainingGuesses} guess`;
    } else {
        numberOfGuessesRemaining.innerText = `${remainingGuesses} guesses`;
    } 
};

const checkWinner = function () {
    if (word.toUpperCase()=== wordProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="higlight">You Won! You guessed the correct word</p>`;
    startOver();
    
    }
};

const startOver = function(){
    // hide button
    button.classList.add("hide");
    // hide remaining guesses paragraph
    remainingGuessesElement.classList.add("hide");
    // hide "li" where guessed letters appear
    guessedLettersElement.classList.add("hide");
    // show "play again button"
    playAgain.classList.remove("hide");
};

playAgain.addEventListener("click", function(e){
    message.classList.remove("win");   
    let remainingGuesses = 8;
    const guessedLetters = [];
    remainingGuessesElement.classList.remove("hide");
    
    //numberOfGuessesRemaining.innerText = `${remainingGuesses} guesses`;
    button.classList.remove("hide");
    playAgain.classList.add("hide");
    getWord();
});