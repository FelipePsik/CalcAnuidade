var anuidade_aux = 208.9;
var anuidade_tec = 255.49;
var anuidade_enf = 353.53;
var taxaSec = 200;

var meses = [
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
var nmeses = ["4", "5", "6", "7", "8", "9", "10", "11", "12"];

// Mapeando os meses aos números.
var mesesMap = {};
for (var i = 0; i < meses.length; i++) {
  mesesMap[meses[i]] = nmeses[i];
}

var calcularButton = document.getElementById("calcularButton");
var categoriaSelect = document.getElementById("categoriaSelect");
var mesSelect = document.getElementById("mesSelect");
var resultadoElement = document.getElementById("resultadoReab");

calcularButton.addEventListener("click", function () {
var categoriaReabertura = categoriaSelect.value;
var mesSelecionado = mesSelect.value;

var valorAnuidadeReabertura = 0;

if (categoriaReabertura === "Auxiliar") {
  valorAnuidadeReabertura = anuidade_aux;
} else if (categoriaReabertura === "Tecnico") {
  valorAnuidadeReabertura = anuidade_tec;
} else if (categoriaReabertura === "Enfermeiro") {
  valorAnuidadeReabertura = anuidade_enf;
} else if (categoriaReabertura === "Selecione a Categoria") {
  resultadoElement.textContent = "Escolha a categoria desejada.";
  return;
}

if (meses.includes(mesSelecionado)) {
  var mesesCalculados =
    (valorAnuidadeReabertura / 12) * (12 - mesesMap[mesSelecionado] + 1);
  var reabertura = Math.ceil(mesesCalculados * 100) / 100 + taxaSec;

  resultadoElement.textContent = "A reabertura de " + categoriaSelect.value + " para o mês de " + mesSelect.value + " está no valor de R$" + reabertura.toFixed(2);
} else { (["Janeiro", "Fevereiro", "Março"].includes(mesSelecionado.toLowerCase())) 
  var valorUnico = parseFloat(valorAnuidadeReabertura) + parseFloat(taxaSec);
  resultadoElement.textContent = "Para os meses de Janeiro, Fevereiro ou Março, o valor é de R$" + valorUnico;
} if (mesSelecionado === "Selecione o Mês") {
resultadoElement.textContent = "Escolha o mês desejado.";
return;
}
});