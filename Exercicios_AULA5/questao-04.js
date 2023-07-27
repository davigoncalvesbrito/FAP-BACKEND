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
    alert('A área do triângulo é : ' + calcular + ' cm²');
} else {
    alert('Por favor, insira os dados válidos');
}
