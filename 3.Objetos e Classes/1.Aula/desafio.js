//Faça uma função que compara duas pessoas e retorna quem é a mais velha

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const gustavo = new Pessoa('Gustavo', 22);
const ricardo = new Pessoa('Ricardo' , 20);

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        return `${p1.nome} é mais velho.`;
    }
    else if (p1.idade < p2.idade) {
        return `${p2.nome} é mais velho.`; 
    }
    else {
        return `${p1.nome} e ${p2.nome} têm a mesma idade.`
    }
}

console.log (compararPessoas(gustavo, ricardo));
