//POSSÍVEIS ENTRADAS
const celular1 = 71999918888; //com DDD e com o 9  comprimento: 11
const celular2 = 7199918888;  //com DDD e sem o 9  comprimento: 10
const celular3 = 999918888;   //sem DDD e com o 9  comprimento: 9
const celular4 = 99918888;    //sem DDD e sem o 9  comprimento: 8

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

formatarCelular(celular1)
formatarCelular(celular2)
formatarCelular(celular3)
formatarCelular(celular4)


