/*
Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis, sendo elas:

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível usado;
4 - Gasto médio de combustível do carro por Km;
5 - Distância em Km da viagem;

Imprima no console o valor que será gasto em R$.
*/

/*
const precoEtanol = 3;
const precoGasolina = 4.35;

const tipoCombustivel = 'gasolina';

const gastoMedioPorKm = 5;

const distancia = 100;

const litrosConsumidos = distancia / gastoMedioPorKm;
const valorGastoEtanol = precoEtanol * litrosConsumidos;
const valorGastoGasolina = precoGasolina * litrosConsumidos;

if (tipoCombustivel == 'etanol')
    console.log('Será gasto R$' + valorGastoEtanol.toFixed(2));
else if (tipoCombustivel == 'gasolina')
    console.log('Será gasto R$' + valorGastoGasolina.toFixed(2));
else 
    console.log('Tipo de combustível inválido.')
*/

let precoCombustivel;

const tipoCombustivel = 'gasolina'

if (tipoCombustivel == 'etanol')
    precoCombustivel = 3;
else if (tipoCombustivel == 'gasolina')
    precoCombustivel = 4.35;
else
    precoCombustivel = 0

const gastoMedioPorKm = 5;

const distancia = 100;

const litrosConsumidos = distancia / gastoMedioPorKm;

const valorGasto = precoCombustivel * litrosConsumidos;

if (precoCombustivel === 0)
    console.log('Tipo de combustível inválido.')
else
    console.log('Será gasto R$' + valorGasto.toFixed(2))

//Foi feito de duas formas, a primeira de acordo com o enunciado (comentado) e a segunda caso fosse possível criar uma variável do preço de acordo com o tipo de combustível utilizado.