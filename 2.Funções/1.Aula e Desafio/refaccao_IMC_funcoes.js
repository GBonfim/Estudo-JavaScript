/*
o IMC - Índice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos - Condição:
-Abaixo de 18.5 = Abaixo do peso;
-Entre 18.5 e 25 = Peso normal;
-Entre 25 e 30 = Acima do Peso;
-Entre 30 e 40 = Obeso;
-Acima de 40 = Obesidade Grave;
*/

function calcularIMC(peso, altura) {
    return  peso / Math.pow(altura,2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Seu IMC é " + imc.toFixed(2) + ", você está na condição 'Abaixo do Peso'";
    }
    else if (imc >= 18.5 && imc < 25) {
        return "Seu IMC é " + imc.toFixed(2) + ", você está na condição 'Peso Normal'";
    }
    else if (imc >= 25 && imc < 30) {
        return "Seu IMC é " + imc.toFixed(2) + ", você está na condição 'Acima do Peso'";
    }
    else if (imc >= 30 && imc < 40) {
        return "Seu IMC é " + imc.toFixed(2) + ", você está na condição 'Obeso'";
    }
    else {
        return "Seu IMC é " + imc.toFixed(2) + ", você está na condição 'Obesidade Grave'";
    }
}

function main() {
    const peso = 80; //kg
    const altura = 1.70; //m
    
    const imc = calcularIMC(peso, altura); 

    console.log(classificarIMC(imc));
}

main();

/*
Também é possível criar uma função que é imediatamente executada:

(function () {
    const peso = 80; //kg
    const altura = 1.70; //m
    
    const imc = calcularIMC(peso, altura); 

    console.log(classificarIMC(imc));
})();

Nota-se que esta função não precisa ser nomeada, e será executada uma única vez!
*/