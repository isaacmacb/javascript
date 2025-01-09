//O método addEventListener() é utilizado para adicionar eventos a elementos HTML, permitindo que você execute funções específicas em 
// resposta a interações do usuário (como clicar em um botão, mover o mouse, pressionar uma tecla, etc.).

// Seleciona o botão e o título
let botao = document.getElementById('meuBotao');
let titulo = document.getElementById('titulo-sec');

// Adiciona um evento ao clicar no botão
botao.addEventListener('click', function() {
  // Quando o botão for clicado, o conteúdo do título é alterado
  titulo.textContent = 'Título alterado após o clique!';
});
