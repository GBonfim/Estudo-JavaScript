/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de forma de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado:

Código Condição de Pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto = 400;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(precoProduto - (precoProduto * 0.1));
}
else if (formaPagamento === 2) {
    console.log(precoProduto - (precoProduto * 0.15));
}
else if (formaPagamento === 3) {
    console.log(precoProduto);
}
else if (formaPagamento === 4) {
    console.log(precoProduto + (precoProduto * 0.1)); 
}
else {
    console.log("Forma de pagamento inválida!");
}