//reduce(): Aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzir a um único valor.
let numeros = [1, 2, 3, 4];
let soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma); // 10
