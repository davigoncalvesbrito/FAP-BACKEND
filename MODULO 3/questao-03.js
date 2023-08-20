//FILA: A ordem de remoção na fila segue a ordem de inserção,
// portanto, os elementos seriam removidos na seguinte sequência: 3, 7, 9, 1, 0
function desenfilerar(fila) {
    return fila.shift();
}

let fila = [3, 7, 9, 1, 0];
document.write('A fila atual é ' + fila + '<br>');

while (fila.length != 0) {
    var removido = desenfilerar(fila);
    document.write('O número removido foi : ' + removido + '<br>');
    document.write(`A fila atual é [${fila}] <br>`);
}


//LISTA: Como a lista não possui uma ordem específica de remoção,
//os elementos podem ser removidos em qualquer ordem.
let lista = [3, 7, 9, 1, 0];
document.write(`Lista atual [${lista}]<br>`);
lista.splice(1, 0, 10); //SUBSTITUINDO O NUMBER 7 PELO 10
document.write(`Lista atualizada: [${lista}]<br>`);
lista.splice(0, 1); //EXCLUINDO O PRIMEIRO ELEMENTO
document.write(`Lista atualizada após a exclusão : [${lista}]<br>`);



//PILHA: o último elemento inserido é o primeiro
//a ser removido. Portanto, os elementos seriam removidos na seguinte sequência: 0, 1, 9, 7, 3
function retirar(numero) {
    return numero.pop(); // RETIRA O ÚLTIMO ELEMENTO DA PILHA
}

let pilha = [3, 7, 9, 1, 0];
document.write('A fila atual é ' + pilha + '<br>');
while (pilha.length != 0) {
    let tirar = retirar(pilha);
    document.write('O número removido foi : ' + tirar + '<br>');
    document.write(`A fila atual é [${pilha}] <br>`);
}
