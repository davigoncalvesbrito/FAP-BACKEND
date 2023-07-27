//Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C)
function converterFahrenheit(temperatura) {
    if (isNaN(temperatura)) {
        return null;
    }
    return (media = (temperatura - 32) * (5 / 9));
}

let temperaturaFahrenheit = parseFloat(
    prompt('Digite a temperatura em Fahrenheit (F) : '),
);
let mediaTemperatura = converterFahrenheit(temperaturaFahrenheit);

if (mediaTemperatura !== null) {
    alert(
        'A Temperatura convertida para Celsius (C)  é : ' +
            mediaTemperatura.toFixed(2),
    );
} else {
    alert('Insira um número válido');
}
