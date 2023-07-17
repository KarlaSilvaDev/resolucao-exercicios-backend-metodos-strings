const cpf = "011.022.033-44";
const cnpj = "12.345.678/0001-99";

function removerPontuacao(documento){
    let pontuacoes = [".", "-", "/"];
    let documentoFormatado = documento;
    for (let pontuacao of pontuacoes){
        documentoFormatado = documentoFormatado.replaceAll(pontuacao,"");
    }
    console.log(documentoFormatado);
}

removerPontuacao(cpf);
removerPontuacao(cnpj);