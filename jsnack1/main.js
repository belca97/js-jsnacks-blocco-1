// creo una variabile somma
 

let somma = 0;

// chiedo per dieci volte un prompt all'utente

let i = 0

while ( i < 10) {
    const numero = parseInt(prompt('inserisci un numero'));
    somma += numero;
    i++;
}

alert('la somma vale ' + somma)