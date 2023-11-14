// Interface comum para produtos (Computadores)
class Computador {
    constructor(ram, hdd, cpu) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    getRAM() {
        return this.ram;
    }

    getHDD() {
        return this.hdd;
    }

    getCPU() {
        return this.cpu;
    }

    getType() {
        return "Generic";
    }

    toString() {
        return `${this.getType()} - RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
}


class PC extends Computador {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu);
    }

    getType() {
        return "PC";
    }
}


class Server extends Computador {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu);
    }

    getType() {
        return "Server";
    }
}

// Fábrica abstrata para criar instâncias de computadores
class FabricaComputador {
    static createComputer(type, ram, hdd, cpu) {
        if (type.toLowerCase() === "pc") {
            return new PC(ram, hdd, cpu);
        } else if (type.toLowerCase() === "server") {
            return new Server(ram, hdd, cpu);
        } else {
            throw new Error(`Tipo de computador não suportado: ${type}`);
        }
    }
}

// Exemplo de uso
const pc = FabricaComputador.createComputer("PC", "8", "256", "2.4");
const server = FabricaComputador.createComputer("Servidor", "16", "512", "3.0");

console.log(pc.toString());
console.log(server.toString());
