  var anuidade_aux = 224.27;
  var anuidade_tec = 274.29;
  var anuidade_enf = 379.55;
  var taxaInscricao = 260.09;

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
var resultadoElement = document.getElementById("resultado");

calcularButton.addEventListener("click", function () {
  var categoriaInscricao = categoriaSelect.value;
  var mesSelecionado = mesSelect.value;

  var valorAnuidadePrimeiraInscricao = 0;

  if (categoriaInscricao === "Auxiliar") {
    valorAnuidadePrimeiraInscricao = (anuidade_aux / 2).toFixed(2);
  } else if (categoriaInscricao === "Tecnico") {
    valorAnuidadePrimeiraInscricao = (anuidade_tec / 2).toFixed(2);
  } else if (categoriaInscricao === "Enfermeiro") {
    valorAnuidadePrimeiraInscricao = (anuidade_enf * 0.7).toFixed(2);
  } else if (categoriaInscricao === "Selecione a Categoria") {
    resultadoElement.textContent = "Escolha a categoria desejada.";
    return;
  }

  if (meses.includes(mesSelecionado)) {
    var mesesCalculados =
      (valorAnuidadePrimeiraInscricao / 12) * (12 - mesesMap[mesSelecionado] + 1);
    var inscricao = Math.ceil(mesesCalculados * 100) / 100 + taxaInscricao;

    resultadoElement.textContent = "A primeira inscrição de " + categoriaSelect.value + " para o mês de " + mesSelect.value + " é de R$" + inscricao.toFixed(2);
  } else { (["Janeiro", "Fevereiro", "Março", "Abril", "Maio"].includes(mesSelecionado.toLowerCase())) 
    var valorUnico = parseFloat(valorAnuidadePrimeiraInscricao) + parseFloat(taxaInscricao);
    resultadoElement.textContent = "Para os meses de Janeiro à Maio, o valor é de R$" + valorUnico;
  } if (mesSelecionado === "Selecione o Mês") {
  resultadoElement.textContent = "Escolha o mês desejado.";
  return;
}
});
