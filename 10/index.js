const nomeArquivo1 = 'Foto da Familia.pdf';
const nomeArquivo2 = 'Foto da Familia.png';

function validarArquivo(nomeArquivo){
    let extensoesPermitidas = ["jpg", "jpeg", "gif", "png"];
    let extensaoDoArquivo = nomeArquivo.slice(nomeArquivo.lastIndexOf(".") + 1);
    let valido = false;
    for (let extensaoPermitida of extensoesPermitidas){
        if (extensaoPermitida === extensaoDoArquivo){
            valido = true;
            console.log("Arquivo válido");
            break;
        }
    }
    if (!valido){ 
        console.log("Arquivo inválido");
    }
}

validarArquivo(nomeArquivo1);
validarArquivo(nomeArquivo2);