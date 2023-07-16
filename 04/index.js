let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

//Formatando o ID
identificador = identificador.trim().padStart(6,"0");

//Formatando o Nome
nome = nome.trim();
let nomeFormatado = ""
let palavrasNome = nome.split(" ");
for (let i = 0; i < palavrasNome.length; i++){
    palavrasNome[i] = palavrasNome[i].charAt(0).toUpperCase() + palavrasNome[i].slice(1).toLowerCase();
    /*
    palavrasNome[i].charAt(0).toUpperCase(): pega a letra no índice 0 (charAt(0)) da palavra no índice i do array (palavrasNome[i]) e retorna a letra maiúscula (toUpperCase());

    palavrasNome[i].slice(1).toLowerCase(): pega as letras a partir do índice 1 da palavra (slice(1)), isto é, o restante da palavra no índice i do array (palavrasNome[i]) e retorna em letras minúsculas (toLowerCase())
    */
}
nome = palavrasNome.join(" ") //junta as palavras do array em uma string, usando espaço (" ") como separador

//Formatando o email
email = email.trim();


console.log(identificador);
console.log(nome);
console.log(email);