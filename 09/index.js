const nome = 'Guido Cerqueira';

function gerarNickname(nome){
    let nickname = "@" + nome.toLowerCase().replaceAll(" ","").slice(0, 12);
    console.log(nickname);
}

gerarNickname(nome);

