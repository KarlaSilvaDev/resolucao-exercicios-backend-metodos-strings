const numeroCartao = '1111222233334444';
let numeroCartaoOculto = numeroCartao.slice(0,4) + numeroCartao.slice(-4).padStart(12,"*");
console.log(numeroCartaoOculto);
/*
numeroCartao.slice(0,4): retorna os primeiros 4 dígitos do cartão (16 - 4 = 12 dígitos restantes)
numeroCartao.slice(-4).padStart(12,"*"): pega os últimos 4 dígitos do cartão (slice(-4)) e coloca asteriscos à esquerda até que o comprimento total da string seja igual a 12 (.padStart(12,"*")). 
*/