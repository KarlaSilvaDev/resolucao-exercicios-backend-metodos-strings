const comentario = "Esse COVID é muito perigoso!";
let proibidas = ["pandemia", "covid"]; //Se adicionarmos mais palavras proibidas nessa lista, o programa continuará funcionando bem, inclusive se forem inseridas com letras maiúsculas.
let bloqueado = false;

for (let proibida of proibidas){  //percorre a lista de palavras proibidas
    if (comentario.toLowerCase().includes(proibida.toLowerCase())){ //Colocando o comentário e a palavra proibida em letras minúsculas e verificando se o comentário possui alguma das palavras proibidas do array "proibidas"
        console.log("Comentário bloqueado por conter palavras proibidas."); 
        bloqueado = true;
        break;  //sai do loop caso seja encontrada uma palavra do array "proibidas" no comentário
    }
}

if (!bloqueado){
    console.log("Comentário autorizado.")
}