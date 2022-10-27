/*
Faça um programa para calcular o valor gasto de combustível em uma viagem
Terá três variáveis, sendo elas: 
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por Km;
3 - Distância em Km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem
*/

const precoCombustivel = 5.79;
const kmPorLitro = 12; //12km por litro
const distancia = 1580; //km

const litrosConsumidos = distancia / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log("O valor gasto para realizar a viagem será de R$" + valorGasto.toFixed(2)); //toFixed(2) converte o valor em string até a segunda casa decimal, arredonando-o