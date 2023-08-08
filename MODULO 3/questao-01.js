const pessoas = [
    { nome: 'Davi', idade: 25, corFavorita: 'azul' },
    { nome: 'Joyce', idade: 27, corFavorita: 'amarelo' },
    { nome: 'Rinaldo', idade: 50, corFavorita: 'verde' },
    { nome: 'Miguel', idade: 2, corFavorita: 'roxo' },
    { nome: 'Xavier', idade: 30, corFavorita: 'marrom' },
    { nome: 'Ronaldo', idade: 33, corFavorita: 'preto' },
    { nome: 'Ricardo', idade: 23, corFavorita: 'branco' },
    { nome: 'Matheus', idade: 22, corFavorita: 'cinza' },
    { nome: 'Daniela', idade: 31, corFavorita: 'rosa' },
    { nome: 'Jota', idade: 21, corFavorita: 'vermelho' },
];

console.table(pessoas);

pessoas.splice(2, 1, { ...pessoas[2], idade: 55, corFavorita: 'laranja' });
// O splice(2, 1, ...) indica que vamos começar no índice 2 do array pessoas.
// O número 1 indica que queremos remover 1 elemento a partir do índice 2 (ou seja, removeremos a
// terceira pessoa).O novo elemento que adicionaremos é { ...pessoas[2], corFavorita: novaCorFavorita },
//que é uma cópia superficial da terceira pessoa com a propriedade corFavorita modificada para
//o valor de uma novaCorFavorita
console.table(pessoas);
