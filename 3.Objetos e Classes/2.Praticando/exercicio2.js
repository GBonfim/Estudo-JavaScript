/*
Crie uma clase para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg e 1,75 e peça ao José para dizer o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(peso, altura) {
        return this.peso / (this.altura * this.altura);
    }
}

const jose = new Pessoa('José', 70, 1.75);
const gustavo = new Pessoa('Gustavo', 80, 1.70);

console.log(`O IMC de ${jose.nome} é de ` + jose.calcularIMC().toFixed(2));

console.log(`O IMC de ${gustavo.nome} é de ` + gustavo.calcularIMC().toFixed(2));