console.log('js-paliedispari');

// ** Palidroma ** ✅

// Chiedere all’utente di inserire una parola
const word = prompt('Inserire una parola');

// Creare una funzione per capire se la parola inserita è palindroma
function isPalindroma(word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed
}

if (isPalindroma(word)) {
    console.log(`${word} è una parola palindroma`);
} else {
    console.log(`${word} non è una parola palindroma`);
}

// ** Pari e Dispari **

// Chiedere all'utente la sua scelta (pari/dispari) e il suo numero

// Generare un numero random per il computer

// Sommare i due numeri e capire se è pari o dispari

// Dichiarare il vincitore