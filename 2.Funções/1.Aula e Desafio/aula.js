/*
function teste() {
    console.log('Hello World!');
}

teste();
*/

function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Gustavo');
sayMyName('bonfs');


function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(10) + quadrado(10));

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));