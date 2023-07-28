//Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.

function inverterNumero(numero) {
    if (isNaN(numero)) {
        return null;
    }
    return parseFloat(numero.toString().split('').reverse().join(''));
}

let numeroInformado = parseFloat(prompt('Informe um número : '));
let numeroInvertido = inverterNumero(numeroInformado);

if (numeroInvertido !== null) {
    alert('O número invertido fica : ' + numeroInvertido);
} else {
    alert('Digite um número válido!');
}
