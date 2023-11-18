class SistemaSeguranca {
    constructor() {
      if (!SistemaSeguranca.instancia) {
        this.senhaBaseSecreta = "senhaSecreta123"; // Senha da Base Secreta
        SistemaSeguranca.instancia = this;
      }
  
      return SistemaSeguranca.instancia;
    }
  
    acessarBaseSecreta(senhaInserida) {
      if (senhaInserida === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta!");
      } else {
        console.log("Acesso negado. Senha incorreta.");
      }
    }
  }
  
  // Programa principal
  const agenteSecreto1 = new SistemaSeguranca();
  agenteSecreto1.acessarBaseSecreta("senhaIncorreta"); // Acesso negado
  
  const agenteSecreto2 = new SistemaSeguranca(); // Retorna a instância existente
  agenteSecreto2.acessarBaseSecreta("senhaSecreta123"); // Acesso concedido
  