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
