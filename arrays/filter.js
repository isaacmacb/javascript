//filter(): Cria um novo array com todos os elementos que passam no teste de uma função.
let numeros = [1, 2, 3, 4];
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]
