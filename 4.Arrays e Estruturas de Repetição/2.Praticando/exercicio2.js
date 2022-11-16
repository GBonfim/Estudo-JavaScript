//Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

const array = [12, 5, 33, 84, 21, 46, 90, 38];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}