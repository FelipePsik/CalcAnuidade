const anuidade = {
  Auxiliar: 224.27,
  Tecnico: 274.29,
  Enfermeiro: 379.55,
};

const taxaInscricao = 260.09;
const taxaReab = 271.92;
const taxaSec = 260.09;

const mesesPosteriores = [
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const mesesMap = {
  Junho: 6,
  Julho: 7,
  Agosto: 8,
  Setembro: 9,
  Outubro: 10,
  Novembro: 11,
  Dezembro: 12,
};

function calcular(categoria, mes, tipo) {
  let resultadoElement;
  switch (tipo) {
    case "primeira":
      resultadoElement = document.getElementById("resultado");
      break;
    case "reabertura":
      resultadoElement = document.getElementById("resultadoReab");
      break;
    case "secundaria":
      resultadoElement = document.getElementById("resultadoSec");
      break;
    default:
      return;
  }

  if (categoria === "Selecione a Categoria") {
    resultadoElement.textContent = "Escolha a categoria desejada.";
    return;
  }

  if (mes === "Selecione o Mês") {
    resultadoElement.textContent = "Escolha o mês desejado.";
    return;
  }

  let valorAnuidade = anuidade[categoria];

  if (tipo === "primeira") {
    if (categoria === "Enfermeiro") {
      valorAnuidade = valorAnuidade * 0.7;
    } else {
      valorAnuidade = valorAnuidade / 2;
    }
  }

  const taxa =
    tipo === "primeira" ? taxaInscricao : tipo === "reabertura" ? taxaReab : taxaSec;

  let total;
  if (mesesPosteriores.includes(mes)) {
    const mesesCalculados = (valorAnuidade / 12) * (12 - mesesMap[mes] + 1);
    total = Math.ceil(mesesCalculados * 100) / 100 + taxa;
    const descricao =
      tipo === "primeira"
        ? "A primeira inscrição"
        : tipo === "reabertura"
        ? "A reabertura"
        : "A inscrição secundária";
    resultadoElement.textContent =
      descricao +
      " de " +
      categoria +
      " para o mês de " +
      mes +
      " está no valor de R$" +
      total.toFixed(2);
  } else {
    total = valorAnuidade + taxa;
    resultadoElement.textContent =
      "Para os meses de Janeiro à Maio, o valor é de R$" + total.toFixed(2);
  }
}

window.calcular = calcular;
