/*Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário.
Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).*/

function contarVogais(letra) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < letra.length; i++) {
        if (vogais.includes(letra[i])) {
            contador++;
        }
    }
    return contador;
}

let texto = prompt('Digite uma palavra ou um texto : ');
let numeroVogais = contarVogais(texto);
alert('O numero de vogais presente no texto é : ' + numeroVogais);
