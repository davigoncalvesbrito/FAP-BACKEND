// Classe Observável
class EditorTexto {
    constructor() {
      this.observadores = [];
    }
  
    adicionarObservador(observador) {
      this.observadores.push(observador);
    }
  
    removerObservador(observador) {
      this.observadores = this.observadores.filter(obs => obs !== observador);
    }
  
    notificar(evento) {
      this.observadores.forEach(observador => observador.atualizar(evento));
    }
  }
  
  // Classe Observável Concreta
  class EditorDeTexto extends EditorTexto {
    constructor() {
      super();
      this.linhas = [];
    }
  
    inserirLinha(numeroLinha, texto) {
      this.linhas.splice(numeroLinha, 0, texto);
      this.notificar({ tipo: "inserir", numeroLinha, texto });
    }
  
    removerLinha(numeroLinha) {
      const textoRemovido = this.linhas.splice(numeroLinha, 1)[0];
      this.notificar({ tipo: "remover", numeroLinha, textoRemovido });
    }
  
    salvarEmArquivo() {
      // Lógica para salvar no arquivo (não implementada no exemplo)
      console.log("Conteúdo salvo no arquivo.");
    }
  
    abrir() {
      this.notificar({ tipo: "abrir" });
    }
  }
  
  // Classe Observador
  class RegistroConsole {
    atualizar(evento) {
      switch (evento.tipo) {
        case "abrir":
          console.log("Editor aberto.");
          break;
        case "inserir":
          console.log(`Linha ${evento.numeroLinha} inserida: ${evento.texto}`);
          break;
        case "remover":
          console.log(`Linha ${evento.numeroLinha} removida: ${evento.textoRemovido}`);
          break;
      }
    }
  }
  
  // Programa Principal
  const editorTexto = new EditorDeTexto();
  const registroConsole = new RegistroConsole();
  
  editorTexto.adicionarObservador(registroConsole);
  
  console.log("Digite as linhas de texto. Digite 'EOF' para encerrar:");
  
  let numeroLinha = 0;
  while (true) {
    const entrada = prompt(`Linha ${numeroLinha + 1}: `);
    if (entrada.toLowerCase() === "eof") {
      break;
    }
    editorTexto.inserirLinha(numeroLinha, entrada);
    numeroLinha++;
  }
  
  editorTexto.salvarEmArquivo();
  
  // Imprimir todo o conteúdo do arquivo na tela
  console.log("Conteúdo do arquivo:");
  editorTexto.linhas.forEach((linha, indice) => console.log(`${indice + 1}: ${linha}`));
  