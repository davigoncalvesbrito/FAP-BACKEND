/*Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial,
tempo em meses e taxa de juros mensal, fornecidos pelo usuário.*/

function retornoInvestimento(capitalInicial, tempoInvestimento, taxaJuros) {
    if (isNaN(capitalInicial) && isNaN(tempoInvestimento) && isNaN(taxaJuros)) {
        return null;
    }
    const taxaDecimal = taxaJuros / 100; //// Convertendo a taxa de juros de percentual para decimal
    const taxamensal = taxaJuros / 12;
    /* Se o tempo de investimento for fornecido em meses, é necessário ajustar a taxa de juros para refletir a periodicidade do investimento.
    Isso pode ser feito dividindo a taxa de juros anual pelo número de meses no ano (que é 12).*/
   
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
