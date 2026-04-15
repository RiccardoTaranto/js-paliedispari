console.log('js-paliedispari');

// ** Palidroma ** ✅

// Chiedere all’utente di inserire una parola

// const word = prompt('Inserire una parola');

const word = 'ingegni';

// Creare una funzione per capire se la parola inserita è palindroma



const letters = [];
for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    letters.unshift(letter);
}
console.log(letters);


//}

/* if (isPalindroma(word)) {
    console.log(`${word} è una parola palindroma`);
} else {
    console.log(`${word} non è una parola palindroma`);
}
    */



/*

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
