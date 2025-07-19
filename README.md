# CalcAnuidade
Ver 1.0 - Calculo da anuidade para primeira inscrição. <br>
Ver 1.2 - Adicionado as opções de reabertura de inscrição e inscrição secundária. <br>
Ver 1.4 - Atualização dos valores das Anuidades e na data limite de acordo com a Decisão nº 50 do Coren/SE. <br>
Ver 1.5 - Adição de um novo Card com os valores das Taxas separados para melhor visualização. <br>
Ver 1.6 - Os valores anuais de anuidades e taxas estao centralizados em `anuidades.js`.

## Como usar
Abra `index.html` em seu navegador. Os botões da página inicial carregam `calcTipoInscricao.html` dentro de um iframe. Nessa tela selecione o tipo de inscrição, a categoria e o mês desejado e clique em **Calcular**.

Os cálculos são executados pela página `calcTipoInscricao.html` que utiliza os valores definidos no arquivo `anuidades.js`.

Para ajustar os valores de anuidades e taxas a cada ano, edite os montantes em `anuidades.js` e recarregue a página.
