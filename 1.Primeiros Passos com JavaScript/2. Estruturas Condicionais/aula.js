/*
const numero = 10;

const NumeroPar = (numero % 2) === 0;

console.log(NumeroPar);
*/

const numero = 256;

const numeroPar = (numero % 2) === 0;

const numeroDivisivelPorCinco = (numero % 5) === 0;

if (numeroPar) 
    console.log('É par.');
else   
    console.log('É ímpar.');

if (numeroDivisivelPorCinco)
    console.log('É divisível por 5.');
else 
    console.log('Não é divisível por 5.')

//Também é possível colocar if (!numeroPar) ao invés do else para obter o oposto do booleano    