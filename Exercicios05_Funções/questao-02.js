// Escreva uma função que retorne o cubo de um número fornecido pelo usuário.
function calcularCubo(numero) {
    if (isNaN(numero)) {
        //isNaN(numero) é usada para verificar se o valor não é um número.
        return null;
    }
    return Math.pow(numero, 3); //retorna o resultado da operação de potência, ou seja, a base(numero) elevada ao expoente(3)
}
let numeroInformado = parseFloat(prompt('Digite o numero:'));
let media = calcularCubo(numeroInformado);
if (media !== null) {
    alert('O cubo o número indicado é :' + media);
} else {
    alert('Por favor, insira um número válido.');
}
