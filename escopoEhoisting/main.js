//Escopo global: Variáveis e funções declaradas fora de qualquer função ou bloco são acessíveis em qualquer parte do código (em todo o programa).
let globalVar = "Eu sou global!";
function exemplo() {
    console.log(globalVar); // Acessa a variável global
}
console.log(globalVar);



//Escopo local: Variáveis declaradas dentro de uma função são locais a essa função e não podem ser acessadas fora dela.
function exemplo() {
    let localVar = "Eu sou local!";
    console.log(localVar); // Acessa a variável local
}
exemplo() //chamando a function
//console.log(localVar); // Erro! Não pode acessar fora da função, o log tem que dar dentro da função
