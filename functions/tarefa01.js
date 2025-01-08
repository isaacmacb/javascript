function ehNumeroPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const numero1 = 6;
  const numero2 = 9;
  
  console.log(ehNumeroPar(numero1)); // Saída: true
  console.log(ehNumeroPar(numero2)); // Saída: false


  function somar(a, b) {
    return a + b;  // Corrigido de '/' para '+'
}

console.log(somar(5, 2));  // Exibe 7
console.log(somar(10 / 2));  // Exibe 5 (porque 10/2 é 5)

 