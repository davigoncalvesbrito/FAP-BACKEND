//Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.
function areaDoTriangulo(base, altura) {
    if (isNaN(base) || isNaN(altura)) {
        return null;
    }
    return (media = (base * altura) / 2);
}

usuarioBase = parseFloat(prompt('Digite o tamanho da base: '));
usuarioAltura = parseFloat(prompt('Digite o tamanho da altura:'));
calcular = areaDoTriangulo(usuarioBase, usuarioAltura);
if (calcular !== null) {
    alert('A área do triângulo é : ' + calcular.toFixed(2) + ' cm²');
} else {
    alert('Por favor, insira os dados válidos');
}
