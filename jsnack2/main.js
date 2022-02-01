// dichiaro una costante per chiedere all'utente fino a che numero stampare N

const n = parseInt(prompt('Fino a che valore vuoi stampare N?'));

//verifico se il numero inserito è valido, ovvero deve essere un numero maggiore di 0

let i = 1;

if (isNaN(n) || n <= 0){
    alert('il numero inserito non è valido');
} else {



    // scorro tutti i numeri da zero al valore inserito
    for ( i = 1; i <=n; i++){
        // calcolo il cubo
        const cubo = i*i*i;
        alert('Il cubo dei numeri fino a ' +  n + ' è ' + cubo)
    }


}