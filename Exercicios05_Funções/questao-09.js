function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}
let numeroInformado = parseInt(prompt('Informe o número :'));
let numeroFatorial = calcularFatorial(numeroInformado);

alert('O Fatorial de ' + numeroInformado + ' é :' + numeroFatorial);
