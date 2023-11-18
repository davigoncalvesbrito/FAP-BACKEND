// Interface Strategy
class OperacaoStrategy {
    execute(numero1, numero2) {}
  }
  
  // Classes concretas implementando a Strategy
  class SomaStrategy extends OperacaoStrategy {
    execute(numero1, numero2) {
      return numero1 + numero2;
    }
  }
  
  class SubtracaoStrategy extends OperacaoStrategy {
    execute(numero1, numero2) {
      return numero1 - numero2;
    }
  }
  
  class MultiplicacaoStrategy extends OperacaoStrategy {
    execute(numero1, numero2) {
      return numero1 * numero2;
    }
  }
  
  // Contexto que utiliza a Strategy
  class Calculadora {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    calcular(numero1, numero2) {
      return this.strategy.execute(numero1, numero2);
    }
  }
  
  // Programa principal
  const numero1 = parseInt(prompt("Digite o primeiro número: "));
  const numero2 = parseInt(prompt("Digite o segundo número: "));
  const operacao = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação): ");
  
  let strategy;
  
  switch (operacao) {
    case "+":
      strategy = new SomaStrategy();
      break;
    case "-":
      strategy = new SubtracaoStrategy();
      break;
    case "*":
      strategy = new MultiplicacaoStrategy();
      break;
    default:
      console.log("Operação inválida.");
      process.exit();
  }
  
  const calculadora = new Calculadora(strategy);
  const resultado = calculadora.calcular(numero1, numero2);
  
  console.log(`Resultado da operação: ${resultado}`);
  