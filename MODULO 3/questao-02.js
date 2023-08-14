//FIZ O EXEMPLO QUE PASSOU NO SLIDER ACHEI MELHOR PARA FIXAR O CONTEÚDO 
let notasAlunos = [
    ['jose', 5.5, 7.9, 7.1],
    ['Lucia', 7, 3.5, 4.0],
    ['Pedro', 8.6, 7.3, 8.8],
];

// // Acessando elementos da matriz (array bidimensional) 
// console.log(notas[0][0]); // Nome do primeiro aluno
// console.log(notas[0][1]); // Primeira nota do aluno um
// console.log(notas[1][0]); // Nome do segundo aluno
// console.log(notas[1][1]); // Primeira nota do aluno dois

const alunoEscolhido = notasAlunos[0]; //Selecionando o aluno 'Jose'

let somar = 0;
for (let i = 1; i < alunoEscolhido.length; i++) {
    //'let i= 1' para ignorar o nome do aluno

    somar += alunoEscolhido[i]; //Somando o total das notas
}
media = somar / (alunoEscolhido.length - 1); //Descobrindo o total de notas e -1 para ignorar o nome do aluno
console.log('a soma das notas deu ', somar);

console.log(
    'a media do aluno ' + notasAlunos[0][0] + ' foi: ' + media.toFixed(2),
);

//UTILIZANDO OBJETO DE ARRAY 
function calcular_Exibir(alunos) {
    const alunoEscolhido = alunos[2]; //Selecionando o indice do aluno desejado

    let somar = 0;
    for (let i = 0; i < alunoEscolhido.notas.length; i++) {
        // '.notas' selecionando o indice desejado
        somar += alunoEscolhido.notas[i];
    }
   
    console.log('a soma das notas deu: ', somar);
    
    let media = somar / alunoEscolhido.notas.length;
    // '.notas' selecionando o indice desejado

    console.log(
        'a media do aluno ' + alunoEscolhido.nome + ' foi: ' + media.toFixed(2),
        // '.nome' selecionando o indice desejado
    );
    return media;
}

const notas = [
    { nome: 'jose', notas: [10, 7, 6, 5] },
    { nome: 'Lucia', notas: [8, 7, 9, 6] },
    { nome: 'Pedro', notas: [6, 5, 8, 7] },
];

media = calcular_Exibir(notas);

