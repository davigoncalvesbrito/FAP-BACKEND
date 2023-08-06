//EXEMPLO 1
function calcularIdade() {
    const anoAtual = 2022;
    while (true) {
        let nome = prompt('Digite seu nome :');
        let ano = parseInt(
            prompt('Informe seu o ano do seu nascimento entre 1922 e 2021'),
        );
        if (isNaN(ano)) {
            alert('informações invalidas, tente novamente!');
        } else if (ano < 1922 || ano > 2021) {
            alert('Digite o ano de nascimento entre 1922 e 2021');
        } else {
            const idade = anoAtual - ano;
            alertO(
                'Seu nome é: ' +
                    nome +
                    ' você completou ou vai completar neste ano: ' +
                    idade +
                    ' Anos',
            );
            return idade;
        }
    }
}

try {
    media = calcularIdade();
} catch (error) {
    console.log(error.message);
}

//EXEMPLO 2
//UTILIZANDO O 'throw new Error' fará com que a execução seja interrompida e o loop seja encerrado
function calcularIdade() {
    const anoAtual = 2022;
    while (true) {
        let nome = prompt('Digite seu nome :');
        let ano = parseInt(
            prompt('Informe seu o ano do seu nascimento entre 1922 e 2021'),
        );
        if (isNaN(ano)) {
            throw new Error('Ano de nascimento invalido!'); //Lança uma exceção
        } else if (ano < 1922 || ano > 2021) {
            throw new Error('Digite o ano de nascimento entre 1922 e 2021'); //Lança uma exceção
        } else {
            const idade = anoAtual - ano;
            alert(
                'Seu nome é: ' +
                    nome +
                    ' você completou ou vai completar neste ano: ' +
                    idade +
                    ' Anos',
            );
            return idade;
        }
    }
}

try {
    const media = calcularIdade();
} catch (error) {
    console.log('Ocorreu um erro : ', error.message);
}
