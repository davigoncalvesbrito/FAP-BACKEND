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
