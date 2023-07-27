//Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.
function areaDoTriangulo(base, altura) {
    if (isNaN(base) || isNaN(altura)) {
        return null;
    }
    return (media = (base * altura) / 2);
}

let usuarioBase = parseFloat(prompt('Digite o tamanho da base: '));
let usuarioAltura = parseFloat(prompt('Digite o tamanho da altura:'));
let calcular = areaDoTriangulo(usuarioBase, usuarioAltura);
if (calcular !== null) {
    alert('A área do triângulo é : ' + calcular.toFixed(2) + ' cm²');
} else {
    alert('Por favor, insira os dados válidos');
}
