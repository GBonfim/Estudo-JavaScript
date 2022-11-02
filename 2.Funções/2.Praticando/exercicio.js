function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Gustavo') + ', sou de maior.');
    } 
    else {
        console.log(escrevaMeuNome('Gustavo') + ', sou de menor.');
    }  
}

verificarIdade(22);