// Classe Pato
class Pato {
    fazerQuack() {
      console.log("Quack!");
    }
  
    voar() {
      console.log("Voando!");
    }
  }
  
  
  class Galinha {
    cacarejar() {
      console.log("Cocoricó!");
    }
  
    voarCurto() {
      console.log("Voando baixo!");
    }
  }
  
  
  class AdaptadorPato extends Galinha {
    constructor(pato) {
      super();
      this.pato = pato;
    }
  
    cacarejar() {
  
      this.pato.fazerQuack();
    }
  
    voarCurto() {
  
      this.pato.voar();
    }
  }
  
  
  function adaptadorPatoDemo() {
    
    const pato = new Pato();
  
    
    const adaptadorPato = new AdaptadorPato(pato);
  
    
    console.log("Adaptador Pato como Galinha:");
    adaptadorPato.cacarejar();
    adaptadorPato.voarCurto();
  }
  
  
  adaptadorPatoDemo();
  