console.log('js-paliedispari');

// ** Palidroma ** ✅

// Chiedere all’utente di inserire una parola
const word = 'Ingegni';

// Creare una funzione per capire se la parola inserita è palindroma
function splitWord(userWord) {
    const letters = [];
    for (let i = 0; i < userWord.length; i++) {
        const letter = userWord[i]; //.lowerCase();
        letters.push(letter);
    }
    return letters;
}

const forwardWord = splitWord(word); // Array lettere originale
console.log(forwardWord);

function revSplitWord(lettersArray) {
    const reverseLetters = [];
    for (let i = lettersArray.length - 1; i >= 0; i--) {
        const reverseLetter = lettersArray[i];
        reverseLetters.push(reverseLetter);
    }
    console.log(reverseLetters);
    return reverseLetters;

}

const reversedLetters = revSplitWord(originalLetters); // Array lettere invertite

let isPalindroma = true;

for (let i = 0; i < originalLetters.length; i++) {
    if (originalLetters[i] !== reversedLetters[i]) {
        isPalindroma = false;
    }
}




// ** Pari e Dispari **

// Chiedere all'utente la sua scelta (pari/dispari) e il suo numero
let userNumb = prompt("scegli un numero tra 1 e 5");
userNumb = parseInt(userNumb);
let userChoice = prompt("scegli pari o dispari");
console.log(userNumb, userChoice);


// Generare un numero random per il computer 
function computerNumber() {
    return Math.floor(Math.random() * 5 + 1);
}

// Controllare se un numero è pari o dispari
function isPari(numero) {
    return numero % 2 === 0;
}

// Generare il numero del computer
let compNumb = computerNumber();
console.log(compNumb);


// Sommare i due numeri e capire se è pari o dispari
let somma = userNumb + compNumb;
let risultato = isPari(somma);

// Dichiarare il vincitore
if (risultato === true && userChoice === "pari") {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}

*/
