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
            console.log('Saindo da Calculadora');
            break;
        } else if (operacao >= 1 && operacao <= 4) {
            const n1 = parseFloat(prompt('Digite o primeiro número'));
            const n2 = parseFloat(prompt('Digite o segundo número'));

            let resultado;
            if (operacao === 1) {
                resultado = n1 + n2;
            } else if (operacao === 2) {
                resultado = n1 - n2;
            } else if (operacao === 3) {
                resultado = n1 * n2;
            } else if (operacao === 4) {
                if (n2 !== 0) {
                    resultado = n1 / n2;
                } else {
                    alert('Divisão por zero não é permitida');
                    continue;
                }
            }
            alert('O Resultado é: ' + resultado);
        } else {
            alert('Essa opção não existe');
        }
    }
}
calculadora();
