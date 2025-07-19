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
const categoriaSelect = document.getElementById('categoriaSelect');
const mesSelect = document.getElementById('mesSelect');
const tipoSelect = document.getElementById('tipoSelect');
const resultadoElement = document.getElementById('resultado');

calcularButton.addEventListener('click', () => {
  const categoria = categoriaSelect.value;
  const mesSelecionado = mesSelect.value;
  const tipo = tipoSelect.value;

  let valorAnuidade = 0;
  let taxa = 0;
  let texto = '';

  if (categoria === 'Selecione a Categoria') {
    resultadoElement.textContent = 'Escolha a categoria desejada.';
    return;
  }

  switch (tipo) {
    case 'Primeira Inscrição':
      texto = 'A primeira inscrição de ';
      if (categoria === 'Auxiliar') {
        valorAnuidade = valores.anuidade_aux / 2;
      } else if (categoria === 'Tecnico') {
        valorAnuidade = valores.anuidade_tec / 2;
      } else if (categoria === 'Enfermeiro') {
        valorAnuidade = valores.anuidade_enf * 0.7;
      }
      taxa = valores.taxaInscricao;
      break;
    case 'Reabertura de Inscrição':
      texto = 'A reabertura de ';
      if (categoria === 'Auxiliar') {
        valorAnuidade = valores.anuidade_aux;
      } else if (categoria === 'Tecnico') {
        valorAnuidade = valores.anuidade_tec;
      } else if (categoria === 'Enfermeiro') {
        valorAnuidade = valores.anuidade_enf;
      }
      taxa = valores.taxaReab;
      break;
    case 'Inscrição Secundária':
      texto = 'A inscrição secundária de ';
      if (categoria === 'Auxiliar') {
        valorAnuidade = valores.anuidade_aux;
      } else if (categoria === 'Tecnico') {
        valorAnuidade = valores.anuidade_tec;
      } else if (categoria === 'Enfermeiro') {
        valorAnuidade = valores.anuidade_enf;
      }
      taxa = valores.taxaSec;
      break;
    default:
      resultadoElement.textContent = 'Escolha o tipo de inscrição.';
      return;
  }

  if (mesSelecionado === 'Selecione o Mês') {
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
