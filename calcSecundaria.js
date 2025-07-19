  var anuidade_aux = 224.27;
  var anuidade_tec = 274.29;
  var anuidade_enf = 379.55;
  var taxaSec = 260.09;

  var meses = [
    // "Abril",
    // "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
    // Decisao de n 50 extendeu o prazo da anuidade ate Maio
    
  ];
  var nmeses = ["6", "7", "8", "9", "10", "11", "12"];

  // Mapeando os meses aos números.
var mesesMap = {};
for (var i = 0; i < meses.length; i++) {
  mesesMap[meses[i]] = nmeses[i];
}

var calcularButton = document.getElementById("calcularButton");
var categoriaSelect = document.getElementById("categoriaSelect");
var mesSelect = document.getElementById("mesSelect");
var resultadoElement = document.getElementById("resultadoSec");

calcularButton.addEventListener("click", function () {
var categoriaSec = categoriaSelect.value;
var mesSelecionado = mesSelect.value;

var valorAnuidadeSec = 0;

if (categoriaSec === "Auxiliar") {
  valorAnuidadeSec = anuidade_aux;
} else if (categoriaSec === "Tecnico") {
  valorAnuidadeSec = anuidade_tec;
} else if (categoriaSec === "Enfermeiro") {
  valorAnuidadeSec = anuidade_enf;
} else if (categoriaSec === "Selecione a Categoria") {
  resultadoElement.textContent = "Escolha a categoria desejada.";
  return;
}

if (meses.includes(mesSelecionado)) {
  var mesesCalculados =
    (valorAnuidadeSec / 12) * (12 - mesesMap[mesSelecionado] + 1);
  var secundaria = Math.ceil(mesesCalculados * 100) / 100 + taxaSec;

  resultadoElement.textContent = "A inscrição secundária de " + categoriaSelect.value + " para o mês de " + mesSelect.value + " está no valor de R$" + secundaria.toFixed(2);
} else if (["janeiro","fevereiro","março","abril","maio"].includes(mesSelecionado.toLowerCase())) {
  var valorUnico = parseFloat(valorAnuidadeSec) + parseFloat(taxaSec);
  resultadoElement.textContent = "Para os meses de Janeiro à Maio, o valor é de R$" + valorUnico;
}

if (mesSelecionado === "Selecione o Mês") {
  resultadoElement.textContent = "Escolha o mês desejado.";
  return;
}
});
