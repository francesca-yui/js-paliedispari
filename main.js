//inserire parola
const userWord = prompt('Inserisci una parola');

//funzione per capire se la parola è palindroma
function isPalindrome(word) {
    //parola al contrario
    const reverseWord = word.split('').reverse().join('');
    return word === reverseWord;
}

//controllo del risultato
if (isPalindrome(userWord)) {
alert(userWord + ' è palindroma!');
} else {
alert(userWord + ' non è palindroma!');
}

// Chiedere all’utente di scegliere pari o dispari
const evenUneven = prompt('Pari o Dispari?');

// Inserire un numero da 1 a 5
const chooseNum = Number(prompt('Scegli un numero da 1 a 5'));

// Funzione per generare un numero random da 1 a 5 per il computer
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// numero del computer in una costante
const computerNumber = generateRandomNumber(); 

// Somma numero dell'utente e numero del computer
const totalSum = chooseNum + computerNumber;

// Funzione per capire se la somma è pari o dispari
function checkEvenorOdd(sumToControl) {
    if (sumToControl % 2 === 0) {
        return 'Pari';
    } else {
        return 'Dispari';
    }
}

// risultato della funzione in una costante
const gameResult = checkEvenorOdd(totalSum);

// Controllo del risultato finale e vincitore
if (evenUneven.toLowerCase() === gameResult.toLowerCase()) {
    alert(`Il computer ha dato ${computerNumber}. La somma è ${totalSum} (${gameResult}). Hai vinto! 🎉`);
} else {
    alert(`Il computer ha dato ${computerNumber}. La somma è ${totalSum} (${gameResult}). Hai perso! 😢`);
}