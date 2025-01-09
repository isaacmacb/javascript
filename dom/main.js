//Todo arquivo html tem o DOM, um modelo de documentos por objetos
// O javascript tem a capacidade de modificar...

let tituloSelecionado = document.getElementById('titulo-principal'); // O método getElementById seleciona o elemento HTML com o ID especificado
tituloSelecionado.textContent = 'Novo titulo alterado kkk' // O textContent altera o texto puro de um elemento, sem interpretar HTML. Ou seja, ele substitui o texto exibido dentro do elemento pela nova string que você passou.