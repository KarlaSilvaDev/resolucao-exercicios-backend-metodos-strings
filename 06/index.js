//POSSÍVEIS ENTRADAS
const celulares = [71999918888, 7199918888, 999918888,99918888];
/*
Índice 0: com DDD e com o 9  comprimento: 11
Índice 1: com DDD e sem o 9  comprimento: 10
Índice 2: sem DDD e com o 9  comprimento: 9
Índice 4: sem DDD e sem o 9  comprimento: 8
*/

function formatarCelular(celular){
    celular = String(celular);
    let primeiraParte = celular.slice(-8, -4);
    let segundaParte = celular.slice(-4);
    let ddd = "";
    let celularFormatado = "";
    if (celular.length == 11 || celular.length == 10){
        ddd = "(" + celular.slice(0,2) + ")";
    }
    celularFormatado = (ddd + " 9 " + primeiraParte + "-" + segundaParte).trim();
    console.log(celularFormatado);
}

for (let celular of celulares){
    formatarCelular(celular);
}



