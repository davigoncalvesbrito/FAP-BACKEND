// INSTRUÇÕES DO PROJETO
//  temos um exemplo de um fluxograma que realiza o cálculo da média de duas notas de um aluno. 
// O fluxograma solicita duas notas que serão somadas, e logo em seguida a média dessas notas é calculada.
// Dessa forma o resultado da média quando é maior ou igual a 7 o aluno está APROVADO, quando menor que 7 o aluno está REPROVADO.

// construa o algoritmos que realiza esse processamento.
// --------------------------------------------------------------------------------------------------------------------------------


var nota1, nota2, media;
nota1 = Number(prompt('Digite Sua Primeira Nota: '));
nota2 = Number(prompt('Digite Sua Segunda Nota : '));
media = (nota1 + nota2) / 2;
if (media >= 7) {
    console.log('Você estar Aprovado! ');
    console.log('Sua Média foi: ' + media);
} else {
    console.log('Você foi Reprovado');
    console.log('Sua Média foi : ' + media);
}
