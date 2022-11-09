class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
/*
const gustavo = new Pessoa();
gustavo.nome = 'Gustavo Bonfim';
gustavo.idade = 22;
const teste = new Pessoa();
*/

const gustavo = new Pessoa('Gustavo Bonfim', 22);

console.log(gustavo);