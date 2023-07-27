function converterFahrenheit(temperatura) {
    if (isNaN(temperatura)) {
        return null;
    }
    return (media = (temperatura - 32) * (5 / 9));
}

let temperaturaFahrenheit = parseFloat(
    prompt('Digite a temperatura em Fahrenheit : '),
);
let mediaTemperatura = converterFahrenheit(temperaturaFahrenheit);

if (mediaTemperatura !== null) {
    alert(
        'A Temperatura convertida para celsius é : ' +
            mediaTemperatura.toFixed(2),
    );
} else {
    alert('Insira um número válido');
}
