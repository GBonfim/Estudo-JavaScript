/*
Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre da faculdade, calcula e imprime a sua média e sua classificação conforme a tabela abaixo:

-Média menor que 5, reprovação;
-Média entre 5 e 7, recuperação;
-Média acima de 7, passou de semestre;
*/

const n1 = 6;
const n2 = 5;
const n3 = 8;

const media = (n1 + n2 + n3) / 3;

if (media < 5)
    console.log("Sua média é " + media.toFixed(2) + ", você está reprovado!");
else if (media >= 5 && media <= 7)
    console.log("Sua média é " + media.toFixed(2) + ", você está de recuperação!");
else   
    console.log("Sua média é " + media.toFixed(2) + ", você está aprovado!");