function calcularCubo(numero) {
    if (isNaN(numero)) {
        //isNaN(numero) é usada para verificar se o valor não é um número.
        return null;
    }
    return Math.pow(numero, 3); //retorna o resultado da operação de potência, ou seja, a base(numero) elevada ao expoente(3)
}
var numeroInformado = parseFloat(prompt('Digite o numero:'));
var media = calcularCubo(numeroInformado);
if (media !== null) {
    alert('O cubo o número indicado é :' + media);
} else {
    alert('Por favor, insira um número válido.');
}
