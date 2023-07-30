function calculadora() {
    while (true) {
        console.log('1: Para Somar');
        console.log('2: Para Subtrair');
        console.log('3: Para Multiplicar');
        console.log('4: Para Dividir');
        console.log('0: Para Sair');

        const operacao = parseInt(
            prompt('Digite o número da operação desejada : '),
        );
        if (operacao === 0) {
            alert('Saindo da Calculadora');
            break;
        }
        let n1 = parseFloat(prompt('Digite o primeiro número'));
        let n2 = parseFloat(prompt('Digite o segundo número'));
        let resultado;

        if (operacao === 1) {
            resultado = n1 + n2;
        } else if (operacao === 2) {
            resultado = n1 - n2;
        } else if (operacao === 3) {
            resultado = n1 * n2;
        } else if (operacao === 4) {
            if (n2 != 0) {
                resultado = n1 / n2;
            } else {
                alert('Divisão por zero não é permitida');
                continue;
            }
        } else {
            alert('essa opção não existe');
            continue;
        }
        alert('O Resultado é: ' + resultado);
    }
}
calculadora();
