//POSSÍVEIS ENTRADAS 
//const email = "aluno@cubos.academy";
const emails = ["jose@cubos.academy", "jose@cubos.academy.br", "jose.messias@cubos.academy", "jose.messias@cubos.io", "jose@cubos", "jose.messias@cubos", "jose.messias@.", "jose.@cubos", ".@", "@.", "jose.messias@cubos.", ".messias@cubos.", ".messias@cubos"]; //transformei em array pra facilitar os testes de saídas

//SISTEMA
function validarEmail(email){
    if (email[0] !== "." && email.slice(-1) !=="." && email.includes("@") && email.includes(".")){
        console.log("Email válido.")
    }else{
        console.log("Email inválido.")
    }
}

//SAÍDA
for (let email of emails){
    validarEmail(email);
}