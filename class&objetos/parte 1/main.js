//Vamos criar uma classe Pessoa com propriedades como nome, idade e profissão, e métodos para apresentar a pessoa e verificar se pode votar (baseado na idade).

class Pessoa {
    // O método construtor recebe parâmetros para inicializar as propriedades do objeto
    constructor(nome, idade, profissao) {
      this.nome = nome; // Propriedade
      this.idade = idade; // Propriedade
      this.profissao = profissao; // Propriedade
    }
  
    // Método para apresentar a pessoa
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    }
  
    // Método para verificar se a pessoa pode votar (18 ou mais)
    //podeVotar é um método
    podeVotar() {
      if (this.idade >= 18) {
        console.log(`${this.nome} pode votar.`);
      } else {
        console.log(`${this.nome} não pode votar.`);
      }
    }
  
    // Método para atualizar a profissão
    atualizarProfissao(novaProfissao) {
      this.profissao = novaProfissao;
      console.log(`${this.nome} agora é ${this.profissao}.`);
    }
  }
  
  // Criando objetos (instâncias da classe Pessoa)
  let pessoa1 = new Pessoa('João', 25, 'Engenheiro'); // os dados da classe "Pessoa" FICA CADASTRADO ASSIM QUE CRIA UMA INSTÂNCIA
  let pessoa2 = new Pessoa('Maria', 16, 'Estudante');
  
  // Usando os métodos da classe
  pessoa1.apresentar(); // "Olá, meu nome é João, tenho 25 anos e sou Engenheiro."
  pessoa1.podeVotar(); // "João pode votar."
  
  pessoa2.apresentar(); // "Olá, meu nome é Maria, tenho 16 anos e sou Estudante."
  pessoa2.podeVotar(); // "Maria não pode votar."
  
  // Atualizando a profissão de Maria
  pessoa2.atualizarProfissao('Designer'); // "Maria agora é Designer."
  