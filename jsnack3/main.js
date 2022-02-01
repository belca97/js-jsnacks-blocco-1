// creo le variabili

let somma = 0;
let media = 0;
const limite = 10;


for (let i = 1; i<=limite; i++){
    somma+= i;
}

// calcolo la media

media = somma / limite;
console.log(media)

alert('La somma è ' +  somma + ' La media è ' + media)