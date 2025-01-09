class Carro { //Classe define como um objeto deve ser.
    constructor(marca, modelo) {
      this.marca = marca;  // Propriedade
      this.modelo = modelo;  // Propriedade
    }
  
    // Método
    exibirInfo() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
  }
  
//new cria a instância, passando os dados dos carros dentro do parametro ()
let meuCarro = new Carro("Toyota", "Corolla"); // Objeto é uma instância concreta dessa classe, contendo valores específicos
meuCarro.exibirInfo();  // Chama o método exibirInfo()
