const cpf = "12345678900";  
const cnpj = "12345678000199";

function formatarCpf(cpf){ //formato: 123.456.789-00
    cpf = cpf.trim(); 
    if (cpf.length == 11 && !isNaN(+cpf)){ //Verifica se o cpf tem 11 digítos e se contém apenas números. Explicação no final do código
        let novoCpf = cpf.slice(0,3) + '.' + cpf.slice(3,6) + '.' + cpf.slice(6,9) + '-' + cpf.slice(9);      
        console.log(novoCpf);
    }else{
        console.log("CPF Inválido");
    }
}

function formatarCnpj(cnpj){ //formato: 12.345.678/0001-99
    cnpj = cnpj.trim();
    if (cnpj.length == 14 && !isNaN(Number(cnpj))){
        let novoCnpj = cnpj.slice(0,2) + "." + cnpj.slice(2,5) + "." + cnpj.slice(5,8) + "/" + cnpj.slice(8,12) + "-" + cnpj.slice(-2); 
        console.log(novoCnpj);
    }else{
        console.log("CNPJ Inválido");     
    }     
}

/*
Explicando a condição !isNaN(+cpf)
+cpf: tenta converter a string em um número, poderia usar também Number(cpf) no lugar.
isNaN: se não for possível converter a string em um número, significa que "isNotaNumber" (não é um número), retornando true
!: nesse caso, só queremos que entre no bloco se for um número, então colocamos o operador de negação ! na frente da função isNaN().
*/ 

formatarCpf(cpf);
formatarCnpj(cnpj);
