//Você pode usar o switch para selecionar um de muitos blocos de códigos, de acordo com sua condição

let dia = 3;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  default: // default é a ultima condição caso o switch não encontre o dia que é o 3
    console.log("Dia inválido");
}
