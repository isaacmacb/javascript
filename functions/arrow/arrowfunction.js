// sintaxe básica de uma arrow function é a seguinte: () => {}, conhecida como função de setas, introduzida no ECMAScript 6
    // sem parametros
    const saudacao = () => {
        console.log("Olá!");
    };
    
    saudacao(); // Imprime "Olá!"

    //com parametros
    const quadrado = x => {
        return x * x;
    };
    
    console.log(quadrado(4)); // Imprime 16

    //Outro exemplo 
    const soma = (a, b) => {
        return a + b;
    };
    
    console.log(soma(3, 5)); // Imprime 8
    
    
