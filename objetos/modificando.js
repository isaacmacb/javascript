//declarando um objeto
const pessoa = {
    nome : "Isaac",
    idade : 12,
    profissão: "desenvolvedor"
}

pessoa.endereco = "Rua E-27, 123";  // Adicionando nova propriedade
pessoa.idade = 31;                 // Modificando o valor de 'idade'


console.log(pessoa.nome);
console.log(pessoa.profissão);
console.log(pessoa.endereco); // Exibe "Rua ABC, 123"
console.log(pessoa.idade);    // Exibe 31