//O querySelector retorna o primeiro elemento que corresponde ao seletor CSS que você fornecer.
//let id = document.querySelector(seletor); //Selecionar um elemento por ID
//let classe = document.querySelector('.minha-classe'); // Selecionar um elemento por classe
//let tag = document.querySelector('p'); // Selecionar um elemento por tag
//let atributo = document.querySelector('input[type="text"]'); //Selecionar um elemento com um atributo:


let alterandoOvalor = document.getElementById('titulo-sec');
alterandoOvalor.textContent = 'oi';


// Selecionar o elemento pelo ID
let titulo = document.querySelector('#titulo-principal');
titulo.textContent = 'Novo título alterado';

// Selecionar o primeiro parágrafo com a classe 'descricao'
let primeiroParagrafo = document.querySelector('.descricao');
primeiroParagrafo.textContent = 'Descrição alterada';

// Selecionar o primeiro elemento <p> (tag)
let paragrafoSimples = document.querySelector('p');
paragrafoSimples.style.color = 'blue';  // Alterando a cor do primeiro <p>

// Selecionar o campo de input com o tipo 'text' (atributo)
let campoNome = document.querySelector('input[type="text"]');
campoNome.placeholder = 'Nome atualizado';  // Alterando o texto do placeholder

// Adicionando um evento ao botão para alterar os textos ao clicar
let botao = document.querySelector('#alterarTexto');
botao.addEventListener('click', function() {
  // Alterando os textos dos elementos
  titulo.textContent = 'Título alterado após clique!';
  primeiroParagrafo.textContent = 'Descrição alterada após clique!';
  paragrafoSimples.style.color = 'green';  // Alterando a cor para verde
});


