//Se você quiser alterar o conteúdo HTML de um elemento (ou seja, adicionar tags HTML), pode usar innerHTML

let tituloSelecionado = document.getElementById('titulo-principal');
tituloSelecionado.innerHTML = '<span style="color: red;">Novo título alterado com HTML</span>';
//o conteúdo do titulo-principal será alterado para incluir uma tag <span> com um estilo.
