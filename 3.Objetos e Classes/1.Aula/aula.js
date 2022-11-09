const gustavo = {
    nome: 'Gustavo Bonfim',
    idade: 22,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
/*
console.log(gustavo.nome);
console.log(gustavo.idade);
console.log(gustavo);

gustavo.altura = 1.70; //É possível adicionar valores fora das chaves do objeto

console.log(gustavo);
*/

gustavo.descrever();