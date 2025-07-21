
# 🧮 CalcAnuidade

Sistema de cálculo automático para inscrições de profissionais de enfermagem, com base nas categorias e taxas previstas por resolução do COFEN e decisões do Coren/SE.

---

## 📌 Histórico de Versões

- **Ver 1.0** – Cálculo da anuidade para primeira inscrição.
- **Ver 1.2** – Adição das opções de reabertura e inscrição secundária.
- **Ver 1.4** – Atualização dos valores e datas conforme Decisão nº 50 do Coren/SE.
- **Ver 1.5** – Inclusão de um novo card com os valores das taxas separadas para melhor visualização.
- **Ver 1.6** – Centralização dos valores de anuidades e taxas no arquivo `anuidades.js`.
- **Ver 1.7** – Unificação das páginas de inscrição em um único `index.html`, e dos scripts em um único arquivo `.js`.

---

## 🚀 Como usar

1. **Abra** o arquivo `index.html` diretamente no navegador.
2. **Selecione**:
   - Tipo de inscrição (primeira, reabertura, secundária ou transferência)
   - Categoria (auxiliar, técnico ou enfermeiro)
   - Mês desejado
3. Clique em **Calcular** para ver o valor resultante.

---

## ⚙️ Como funciona

- O script principal é `calcTipoInscricao.js`, responsável por:
  - Aplicar a lógica de proporcionalidade conforme o mês
  - Buscar os valores no arquivo `anuidades.js`
  - Exibir o resultado formatado na tela

- Os valores de anuidades e taxas podem ser facilmente ajustados editando `anuidades.js`.

---

## 📎 Referências

- **Resolução COFEN nº 545/2017**  
  [Ver documento](https://www.cofen.gov.br/resolucao-cofen-no-05452017/)

- **Decisão nº 50 – Coren/SE**

---

## 🛠️ Tecnologias utilizadas

- HTML, CSS e JavaScript puro (sem dependências externas)
- Flexbox para o layout
- Projeto leve, responsivo e totalmente estático

---

## 📁 Estrutura do Projeto

- `index.html` – Interface principal
- `style.css` – Estilo visual
- `anuidades.js` – Valores fixos por categoria e tipo
- `calcTipoInscricao.js` – Lógica de cálculo
