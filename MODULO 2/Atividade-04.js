// INSTRUÇÕES DO PROJETO
// Desenvolva um código que utilize as seguintes características de um veículo:
// - Quantidade de rodas;
// - Peso bruto em quilogramas;
// - Quantidade de pessoas no veículo.

// Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
// A: Veículos com duas ou três rodas;
// B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
// C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
// D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
// E: Veículos com quatro rodas ou mais e com mais de 6000 kg.
// ------------------------------------------------------------------------------------------------------------------------------------------------

var rodas, pesoBruto, passageiros;
rodas = parseInt(prompt('Informe a quantidade de rodas do veículo : '));
pesoBruto = parseInt(prompt('Informe o peso bruto  do veículo : '));
passageiros = parseInt(prompt('Informe a quantidade de passageiros do veículo: '));
if (rodas == 2 || rodas == 3) {
    console.log('Sua categoria de habilitação: A ');
} else if (rodas == 4 && passageiros <= 8 && pesoBruto <= 3500) {
    console.log('Sua categoria de habilitação: B');
} else if (rodas >= 4 && pesoBruto > 3500 && pesoBruto <= 6000) {
    console.log('Sua categoria de habilitação: C');
} else if (rodas >= 4 && passageiros > 8) {
    console.log('Sua categoria de habilitação: D');
} else if (rodas >= 4 && pesoBruto > 6000) {
    console.log('Sua categoria de habilitação: E');
} else {
    console.log('Categoria não indentificada ');
}
