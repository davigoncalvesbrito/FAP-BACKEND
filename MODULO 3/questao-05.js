// Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
// e precisamos criar um código em JavaScript para encontrar o valor 20.
// Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for
//  mais adequada para essa situação. codifique a solução mais eficiente para buscar o número 20 no array.

function buscaLinear(array, numero) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            return i; // Encontrado!
        }
    }
    return -1; // Não encontrado!
}

const numeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const numeroEscolhido = 2022;

const indiceEncontrado = buscaLinear(numeros, numeroEscolhido);

if (indiceEncontrado !== -1) {
    console.log(
        `Encontrei o número ${numeroEscolhido} no índice ${indiceEncontrado}.`,
    );
} else {
    console.log(`Não foi encontrado o número ${numeroEscolhido} na lista.`);
}
