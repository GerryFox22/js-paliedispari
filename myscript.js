

// Palidroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// function reverseString(parola) {
//     let splitString = parola.split("");
//     let reverseArray = splitString.reverse(); 
//     let joinArray = reverseArray.join(""); 
  
//     return joinArray; 
// }
 
// let parolaDaVerifare = prompt("Inserisci una parola");

// if (parolaDaVerifare === reverseString (parolaDaVerifare)){
//     console.log("La parola inserita è Palidroma!");
// } else {
//     console.log("La parola inserita non è Palidroma!")
// }


// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


var listaPariODispari = ["pari","dispari"];

let pariODispari = prompt("Scegli pari o dispari!");

if (pariODispari !== "pari" && pariODispari !== "dispari") {
    alert("Non hai inserito un valore tra pari o dispari, ora sceglierò io casualmente per te!");
    pariODispari = listaPariODispari[Math.floor(Math.random()*listaPariODispari.length)];
}

let numeroScelto = parseInt(prompt("Scegli un numero da 1 a 5!"));

if (numeroScelto > 5 || numeroScelto < 1 || isNaN(numeroScelto) === true) {
    alert("Non hai inserito un numero tra 1 e 5, ora sceglierò io casualmente per te!");
    numeroScelto = Math.floor(Math.random() * 5) + 1;;
}

function numeroCasuale () {
    let numeroCasualeComputer = Math.floor(Math.random() * 5) + 1;;
    
    return numeroCasualeComputer;
}

let sommaNumeri = numeroScelto + numeroCasuale();

function sommaPariODispari (num){
    if (num % 2 === 0){
        return "pari";
    } else {
        return "dispari";
    }
}

if (pariODispari === sommaPariODispari (sommaNumeri)){
    console.log("Hai Vinto!")
} else {
    console.log("Hai Perso!")
}



