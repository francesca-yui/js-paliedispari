// Chiedere all’utente di inserire una parola
const userWord = prompt('Inserisci una parola');

// Funzione per capire se la parola inserita è palindroma
function isPalindrome(userWord) {
    // parola al contrario
    const reversedWord = userWord.split('').reverse().join('');
    // Controllo se la parola originale è uguale a quella invertita
    return userWord === reversedWord;
}

// Controllo del risultato
if (isPalindrome(userWord)) {
    alert(userWord + 'è palindroma!');
} else {
    alert(userWord + 'non è palindroma!');
}

/*    
// Esercizio Pari e DIspari
// L’utente sceglie pari o dispari
const evenUneven = prompt('Pari o Dispari?');
//Inserisce un numero da 1 a 5
const chooseNum = Number(prompt('Scegli un numero da 1 a 5'));

//Computer genera un numero random da 1 a 5
function generateRandomNumber() {
    const computerNumber = Math.floor(Math.random() * 5) + 1;
    return computerNumber;
}

// Funzione numero del computer in una costante
const computerNumber = generateRandomNumber(); 

// Somma numero dell'utente e numero del computer
const totalSum = chooseNum + computerNumber;

//Funzione dichiarazione vincitore
function checkEvenorOdd(sumToControl) {
    if (sumToControl % 2 === 0) {
        return 'Pari';
    } else {
        return 'Dispari';
    }
}

//funzione risultato ('Pari' o 'Dispari')
const gameResult = checkEvenorOdd(totalSum);

// Confronto risultato
if (evenUneven === gameResult) {
    alert(`Il computer ha dato ${computerNumber}.
        La somma è ${totalSum} (${gameResult}). Hai vinto! 🎉`);
} else {
    alert(`Il computer ha dato ${computerNumber}. La somma è ${totalSum} (${gameResult}). Hai perso! 😢`);
}


