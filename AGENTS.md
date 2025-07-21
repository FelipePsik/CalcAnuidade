
# AGENTS.md

## 📌 Objetivo do Projeto

O projeto **CalcAnuidade** tem como objetivo calcular automaticamente o valor da inscrição de profissionais da área de enfermagem com base no tipo de inscrição, na categoria profissional e no mês da solicitação. Os cálculos seguem os critérios da Resolução COFEN nº 545/2017.

---

## 📂 Estrutura dos Arquivos

### `index.html`
- Contém a interface principal da aplicação.
- Inclui botões para seleção de:
  - Tipo de inscrição (Primeira, Reabertura, Secundária, Transferência)
  - Categoria (Auxiliar, Técnico, Enfermeiro)
  - Mês (Janeiro a Dezembro)
- Mostra o valor calculado dinamicamente conforme as seleções do usuário.
- Importa os arquivos JavaScript responsáveis pela lógica de cálculo.

---

### `style.css`
- Responsável pelo estilo visual da aplicação.
- Define o layout centralizado da página, botões personalizados, caixas de informação e responsividade básica.
- Usa uma estética limpa, com caixas sombreadas e cantos arredondados.

---

### `anuidades.js`
- Exporta os valores fixos de anuidade por categoria para o ano de 2025:
  - Auxiliar: R$224.27
  - Técnico: R$274.29
  - Enfermeiro: R$379.55
- Define as taxas fixas de serviço para cada tipo de inscrição:
  - Inscrição: R$260.09
  - Reabertura: R$271.92
  - Secundária: R$260.09
  - Transferência: R$212.81

---

### `calcTipoInscricao.js`
- Contém a função `calcularValor()` que é ativada ao clicar no botão "Calcular Valor".
- Aplica as seguintes regras de negócio:
  - Obtém as seleções do usuário (tipo, categoria, mês).
  - Calcula a fração da anuidade proporcional ao mês selecionado.
  - Soma o valor da taxa correspondente ao tipo de inscrição.
  - Exibe o valor final no campo de resultado, formatado em real.

---

## 📎 Referência Legal

Este sistema baseia seus cálculos na **Resolução COFEN nº 545/2017**:  
🔗 https://www.cofen.gov.br/resolucao-cofen-no-05452017/

---

## 💡 Sugestões Futuras

- Exportar cálculo como PDF.
- Permitir impressão da simulação.
- Adicionar campo de observações.
- Implementar histórico de simulações no navegador (localStorage).
