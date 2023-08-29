// Crie uma lista encadeada em que cada elemento representa uma pessoa.
// Ela precisa conter informações como nome, idade e referência ao filho dela.
function criarPessoas(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        filho: null,
    };
}
const pessoa1 = criarPessoas('Davi', 25);
const pessoa2 = criarPessoas('Miguel', 2);
const pessoa3 = criarPessoas('Rinaldo', 51);
const pessoa4 = criarPessoas('emmilly', 25);

pessoa1.filho = pessoa2;
pessoa4.filho = pessoa2;
pessoa3.filho = pessoa1;

const listaEncadeada = [pessoa1, pessoa2, pessoa3, pessoa4];

for (const pessoa of listaEncadeada) {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos e `);

    if (pessoa.filho) {
        console.log(`seu filho é ${pessoa.filho.nome}.`);
    } else {
        console.log(`não tem filho.`);
    }
}
