const texto = "Aprenda programar do zero na Cubos Academy";
let urlAmigavel= texto.toLowerCase().replaceAll(" ", "-");
console.log(urlAmigavel)

/* 
toLowerCase(): retorna o valor da string original convertido em letras minúsculas;
replaceAll(" ", "-"): no lugar dos espaços existentes no texto, são colocados traços ("-").
*/