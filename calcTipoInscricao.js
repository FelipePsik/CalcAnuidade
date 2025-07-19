import { valores } from './anuidades.js';

const meses = [
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const nmeses = ['6', '7', '8', '9', '10', '11', '12'];

const mesesMap = {};
for (let i = 0; i < meses.length; i++) {
  mesesMap[meses[i]] = nmeses[i];
}

const calcularButton = document.getElementById('calcularButton');
const tipoSelect = document.getElementById('tipoSelect');
const categoriaSelect = document.getElementById('categoriaSelect');
const mesSelect = document.getElementById('mesSelect');

// Ajusta o tipo selecionado quando recebido por parametro na URL
const params = new URLSearchParams(window.location.search);
const tipoParam = params.get('tipo');
if (tipoParam) {
  tipoSelect.value = tipoParam;
}

calcularButton.addEventListener('click', () => {
  const categoria = categoriaSelect.value;
  const mesSelecionado = mesSelect.value;
  const tipo = tipoSelect.value;

  const resultadoElement = document.getElementById('resultado');

  let valorAnuidade = 0;
  let taxa = 0;
  let texto = '';

  if (tipo === 'primeira') {
    texto = 'A primeira inscrição de ';
    if (categoria === 'Auxiliar') {
      valorAnuidade = valores.anuidade_aux / 2;
    } else if (categoria === 'Tecnico') {
      valorAnuidade = valores.anuidade_tec / 2;
    } else if (categoria === 'Enfermeiro') {
      valorAnuidade = valores.anuidade_enf * 0.7;
    } else {
      resultadoElement.textContent = 'Escolha a categoria desejada.';
      return;
    }
    taxa = valores.taxaInscricao;
  } else if (tipo === 'reabertura') {
    texto = 'A reabertura de ';
    if (categoria === 'Auxiliar') {
      valorAnuidade = valores.anuidade_aux;
    } else if (categoria === 'Tecnico') {
      valorAnuidade = valores.anuidade_tec;
    } else if (categoria === 'Enfermeiro') {
      valorAnuidade = valores.anuidade_enf;
    } else {
      resultadoElement.textContent = 'Escolha a categoria desejada.';
      return;
    }
    taxa = valores.taxaReab;
  } else if (tipo === 'secundaria') {
    texto = 'A inscrição secundária de ';
    if (categoria === 'Auxiliar') {
      valorAnuidade = valores.anuidade_aux;
    } else if (categoria === 'Tecnico') {
      valorAnuidade = valores.anuidade_tec;
    } else if (categoria === 'Enfermeiro') {
      valorAnuidade = valores.anuidade_enf;
    } else {
      resultadoElement.textContent = 'Escolha a categoria desejada.';
      return;
    }
    taxa = valores.taxaSec;
  } else {
    resultadoElement.textContent = 'Escolha o tipo de inscrição.';
    return;
  }

  if (!mesSelecionado) {
    resultadoElement.textContent = 'Escolha o mês desejado.';
    return;
  }

  if (meses.includes(mesSelecionado)) {
    const mesesCalculados =
      (valorAnuidade / 12) * (12 - mesesMap[mesSelecionado] + 1);
    const total = Math.ceil(mesesCalculados * 100) / 100 + taxa;
    resultadoElement.textContent =
      texto + categoria + ' para o mês de ' + mesSelecionado + ' é de R$' + total.toFixed(2);
  } else {
    const valorUnico = parseFloat(valorAnuidade) + parseFloat(taxa);
    resultadoElement.textContent =
      'Para os meses de Janeiro à Maio, o valor é de R$' + valorUnico.toFixed(2);
  }
});
