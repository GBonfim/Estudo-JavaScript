/*
Crie uma classe para representar carros.
Os carros possuem marca, cor e um gasto médio de combustível por Km rodado.
Crie um método que dado a quantidade de Km e o preço do combustível nos dê o valor gasto em R$ para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio; //Litro por Km

    constructor (marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularValorGasto (distancia, precoCombustivel) {
        return distancia * this.gastoMedio * precoCombustivel;
    }
}

const fusca = new Carro('Volkswagen', 'Azul', 1/10);

console.log('R$' + fusca.calcularValorGasto(100, 5));
