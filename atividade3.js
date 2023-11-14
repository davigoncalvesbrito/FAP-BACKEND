//  tipos de sanduíches
class Sanduiche {
    constructor() {
        this.descricaoSanduiche = 'Sanduíche';
    }

    custo() {
        return 0.0;
    }

    descricao() {
        return this.descricaoSanduiche;
    }
}


class IngredienteAdicional extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }
}


class FrangoAssado extends IngredienteAdicional {
    constructor(sanduiche) {
        super(sanduiche);
    }

    custo() {
        return 4.50 + this.sanduiche.custo();
    }

    descricao() {
        return `${this.sanduiche.descricao()}, Frango Assado`;
    }
}

class Pepperoni extends IngredienteAdicional {
    constructor(sanduiche) {
        super(sanduiche);
    }

    custo() {
        return 0.99 + this.sanduiche.custo();
    }

    descricao() {
        return `${this.sanduiche.descricao()}, Pepperoni`;
    }
}

class QueijoMussarelaRalado extends IngredienteAdicional {
    constructor(sanduiche) {
        super(sanduiche);
    }

    custo() {
        return 2.00 + this.sanduiche.custo();
    }

    descricao() {
        return `${this.sanduiche.descricao()}, Queijo Mussarela Ralado`;
    }
}


class SanduicheDecorator extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    custo() {
        return this.sanduiche.custo();
    }

    descricao() {
        return this.sanduiche.descricao();
    }
}


class SanduicheEspecial extends SanduicheDecorator {
    constructor() {
        super(new QueijoMussarelaRalado(new Pepperoni(new FrangoAssado(new Sanduiche()))));
    }

    custo() {
        return 7.49;
    }

    descricao() {
        return 'Sanduíche de Carne, Bacon, Queijo Mussarela Ralado';
    }
}

// Exemplo de uso
const sanduiche = new SanduicheEspecial();
console.log(`${sanduiche.descricao()} custa $${sanduiche.custo().toFixed(2)}`);
