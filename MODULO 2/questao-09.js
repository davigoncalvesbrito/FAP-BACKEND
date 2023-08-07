function eleicao() {
    let candidatoA = 0;
    let candidatoB = 0;
    let candidatoC = 0;
    let nulo = 0;
    let branco = 0;

    while (true) {
        let votos = prompt(
            'Digite o número do candidato:\n1 para Candidato A\n2 para Candidato B\n3 para Candidato C\n0 para branco.\nDigite "FIM" para encerrar a votação.',
        );

        if (votos.toUpperCase() === 'FIM') {
            break;
        }
        if (isNaN(votos)) {
            alert(
                'Voto inválido! Digite um número correspondente ao candidato ou "FIM" para encerrar a votação.',
            );
        }
        //PROCESSAMENTO DOS VOTOS
        votos = parseInt(votos);
        if (votos === 1) {
            candidatoA++;
        } else if (votos === 2) {
            candidatoB++;
        } else if (votos === 3) {
            candidatoC++;
        } else if (votos === 0) {
            branco++;
        } else {
            nulo++;
        }
    }
    //TOTAL VOTOS
    let totalVotos = candidatoA + candidatoB + candidatoC + branco + nulo;
    let resultado =
        'Resultado das eleições\n Candidato A: ' +
        candidatoA +
        '\nCandidato B: ' +
        candidatoB +
        '\nCandidato C: ' +
        candidatoC +
        '\n Votos Brancos: ' +
        branco +
        '\n Votos Nulos: ' +
        nulo +
        '\n Total de Votos: ' +
        totalVotos;
    if (totalVotos === 0) {
        alert('Nenhum voto foi computado');
    } else {
        alert(resultado);
    }

    //VENCEDOR
    if (candidatoA > candidatoB && candidatoA > candidatoC) {
        alert('o vencedor foi o candidato A');
    } else if (candidatoB > candidatoA && candidatoB > candidatoC) {
        alert('o vencedor foi o candidato B');
    } else if (candidatoC > candidatoB && candidatoC > candidatoA) {
        alert('o vencedor foi o candidato C');
    } else {
        alert('a eleição deu empate');
    }
}
eleicao();
