// Classe abstrata Veiculo
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
       
        return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
    }

    represent() {
        return `Veículo - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
    }
}


class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    clone() {
        
        return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }

    represent() {
        
        return `${super.represent()}, Número de Portas: ${this.numeroPortas}`;
    }
}


// Seu código das classes Veiculo e Carro aqui...

// Classe de aplicação
class Aplicacao {
    criarVeiculos() {
        const veiculos = [];

        for (let i = 1; i <= 3; i++) {
            veiculos.push(new Veiculo(`Modelo${i}`, `Marca${i}`, `Cor${i}`, 4));
            veiculos.push(new Carro(`ModeloCarro${i}`, `MarcaCarro${i}`, `CorCarro${i}`, 4, 2));
        }

        return veiculos;
    }

    clonarVeiculos(veiculos) {
        return veiculos.map((veiculo) => veiculo.clone());
    }

    imprimirRepresentacao(veiculos) {
        veiculos.forEach((veiculo) => {
            console.log(veiculo.represent());
        });
    }
}


const aplicacao = new Aplicacao();

// Usar os métodos da classe Aplicacao
const veiculos = aplicacao.criarVeiculos();
const veiculosClonados = aplicacao.clonarVeiculos(veiculos);
aplicacao.imprimirRepresentacao(veiculosClonados);
