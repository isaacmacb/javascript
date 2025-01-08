//O do...while funciona de maneira semelhante ao while, mas a diferença é que o código dentro do do é executado pelo menos uma vez, independentemente da condição ser verdadeira ou falsa no início.

let i = 0;
do {
  console.log(i); // Imprime 0, 1, 2, 3, 4
  i++;
} while (i < 5);
