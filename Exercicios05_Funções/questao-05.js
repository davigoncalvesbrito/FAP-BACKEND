//Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.
function calcularAreaCirculo(raio) {
    if (isNaN(raio)) {
        return null;
    }
    return Math.PI * raio * raio;
}
function calcularPerimetroCirculo(raio) {
    if (isNaN(raio)) {
        return null;
    }
    return 2 * Math.PI * raio;
}

let raiocirulo = parseFloat(prompt('Informe o raio do circulo: '));

let circulo = calcularAreaCirculo(raiocirulo);
let perimetro = calcularPerimetroCirculo(raiocirulo);

if (circulo !== null && perimetro !== null) {
    alert(
        'A area do circulo é : ' +
            circulo.toFixed(2) +
            ' e a área do perimetro é :' +
            perimetro.toFixed(2),
    );
} else {
    alert('informe um valor válido');
}
