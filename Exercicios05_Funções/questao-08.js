function retornoInvestimento(capitalInicial, tempoInvestimento, taxaJuros) {
    if (isNaN(capitalInicial) && isNaN(tempoInvestimento) && isNaN(taxaJuros)) {
        return null;
    }
    const taxaDecimal = taxaJuros / 10;
    const taxamensal = tempoInvestimento / 12;
    const montante = capitalInicial * Math.pow(1 + taxaDecimal, taxamensal);
    return montante;
}

let capital = parseFloat(prompt('Informe seu capital nicial: '));
let juros = parseFloat(prompt('Informe a taxa de juros '));
let meses = parseFloat(prompt('Informe o número de meses'));

let montanteFim = retornoInvestimento(capital, juros, meses);

if (montanteFim !== null) {
    alert('O Retorno do seu investimento foi : ' + montanteFim.toFixed(2));
} else {
    alert('Por Favor, Digite números validos!');
}
