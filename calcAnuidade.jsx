  var anuidade_aux = 208.9;
  var anuidade_tec = 255.49;
  var anuidade_enf = 353.53;
  var taxaInscricao = 242.27;

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
var resultadoElement = document.getElementById("resultado");

calcularButton.addEventListener("click", function () {
  var categoriaInscricao = categoriaSelect.value;
  var mesSelecionado = mesSelect.value;

  var valorAnuidadePrimeiraInscricao = 0;

  if (categoriaInscricao === "Auxiliar") {
    valorAnuidadePrimeiraInscricao = anuidade_aux / 2;
  } else if (categoriaInscricao === "Tecnico") {
    valorAnuidadePrimeiraInscricao = anuidade_tec / 2;
  } else if (categoriaInscricao === "Enfermeiro") {
    valorAnuidadePrimeiraInscricao = (anuidade_enf * 0.7).toFixed(2);
  }

  if (meses.includes(mesSelecionado)) {
    var mesesCalculados =
      (valorAnuidadePrimeiraInscricao / 12) * (12 - mesesMap[mesSelecionado] + 1);
    var inscricao = Math.ceil(mesesCalculados * 100) / 100 + taxaInscricao;

    resultadoElement.textContent = "O valor da primeira inscrição de " + categoriaSelect.value + " para o mês de " + mesSelect.value + " é de R$" + inscricao.toFixed(2);
  } else { (["Janeiro", "Fevereiro", "Março"].includes(mesSelecionado.toLowerCase())) 
    var valorUnico = parseFloat(valorAnuidadePrimeiraInscricao) + parseFloat(taxaInscricao);
    resultadoElement.textContent = "Caso o mês selecionado for Janeiro, Fevereiro ou Março, lembre-se que o valor é de R$" + valorUnico + ".";
}
});