// Desenvolva um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. Conclua se o aluno está aprovado ou 
// reprovado de acordo com as especificações:
 
// - Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
// - Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
// Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

// No sistema, todos os valores devem estar armazenados em variáveis.
// --------------------------------------------------------------------------------------------------------------------------------------------------------

var nome_Aluno, nota1, nota2, quant_Faltas, media;
nome_Aluno = prompt('Informe o seu nome : ');
nota1 = Number(prompt('Informe sua primeira nota: '));
nota2 = Number(prompt('Informe sua segunda nota: '));
quant_Faltas = Number(prompt('Informe quantas faltas você teve: '));
media = (nota1 + nota2) / 2;

if (media >= 7 && quant_Faltas <= 3) {
    console.log('O Aluno: ' + nome_Aluno + ' foi aprovado!');
} else {
    console.log('O Aluno: ' + nome_Aluno + ' foi reprovado!');
}
