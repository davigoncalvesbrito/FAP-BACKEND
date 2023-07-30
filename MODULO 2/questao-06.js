function calculadora(n1, n2, operacao) {
    if (operacao == 1) {
        return n1 + n2;
    } else if (operacao == 2) {
        return n1 - n2;
    } else if (operacao == 3) {
        return n1 * n2;
    } else if (operacao == 4) {
        if (n2 != 0) {
            return n1 / n2;
        } else {
            alert('Divisão por zero não é permitido !');
            return 0;
        }
    } else {
        document.write('Operação invalida! ');
        return 0;
    }
}

resultado = calculadora(4, 0, 5);

console.log('resultado é ' + resultado);
