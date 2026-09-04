# Relatório de Análise Estatística: Medidas de Dispersão e Variabilidade
**Disciplina:** Análise e Visualização de Dados  
**Tema:** Estudo da Taxa de Desocupação (PNAD Contínua - IBGE) — Aula 05  
**Data:** Setembro / 2026  

---

## 1. Introdução: Objetivos e Perguntas de Pesquisa

### Contextualização
A análise das estatísticas de emprego e desocupação é fundamental para compreender a dinâmica socioeconômica de uma região. As medidas de tendência central (média, mediana e moda) oferecem uma síntese do comportamento dos dados, contudo, são insuficientes para revelar a dispersão, a escala de variação e a forma da distribuição das taxas ao longo do tempo.

### Objetivos
- Determinar as principais medidas de variabilidade (Variância, Desvio Padrão e Amplitude) para a taxa de desocupação em Pernambuco/Brasil.
- Avaliar os coeficientes de forma da distribuição (**Assimetria** e **Curtose**), identificando se os dados apresentam desvios da distribuição normal.
- Estratificar os resultados pelas categorias **Total**, **Mulheres** e **Homens**, evidenciando disparidades de gênero e comportamento temporal.

### Perguntas Norteadoras
1. *Qual é o impacto da limpeza dos dados não divulgados (período da pandemia) sobre as métricas estatísticas?*
2. *Como a variabilidade e a amplitude da taxa de desocupação diferem entre homens e mulheres?*
3. *A distribuição temporal das taxas de desocupação se aproxima de uma curva Normal (Mesocúrtica e Simétrica)?*

---

## 2. Metodologia: Coleta e Processamento (ETL)

### Coleta via API
Os dados foram consumidos diretamente da API de Agregados do IBGE (PNAD Contínua - Agregado 4093, Variável 4099, Categoria de Sexo):
- **URL Base:** `https://servicodados.ibge.gov.br/api/v3/agregados/4093/periodos/201201-202602/variaveis/4099`
- **Variáveis Coletadas:** `total`, `homens` e `mulheres` para cada trimestre móvel de 201201 a 202602.

### Tratamento e Limpeza (ETL)
1. **Tratamento de Indisponibilidade:** O caractere `'...'` (atribuído pelo IBGE a períodos sem divulgação) foi substituído por `0.0`.
2. **Filtragem de Nulos/Zerados:** Foi criado o subconjunto `df_filtrado` removendo as observações nulas (`total != 0 or mulheres != 0 or homens != 0`), resultando em **50 trimestres válidos**.
3. **Conversão de Tipos:** Garantida a tipagem numérica `float64` para o cálculo preciso dos momentos estatísticos.

---

## 3. Análise Exploratória e Inspeção Inicial

### Perfil do Dataset (`df_filtrado`)
- **Período Coberto:** 1º Trimestre de 2012 ao 2º Trimestre de 2026 (excluindo janelas de suspensão de divulgação).
- **Total de Observações Válidas:** 50 trimestres.

### Resumo das Medidas de Tendência Central
| Categoria | Média (%) | Mediana (%) | Moda Principal (%) |
| :--- | :---: | :---: | :---: |
| **Total** | 12,35% | 11,80% | 9,20% e 14,20% |
| **Mulheres** | 14,51% | 14,30% | 10,40% e 11,10% |
| **Homens** | 10,77% | 10,15% | 6,80% e 7,40% |

---

## 4. Análise Estatística Quantitativa (Exemplos 1 a 5)

Abaixo apresentam-se os resultados exatos dos **5 Exemplos propostos na Aula 05**:

### Exemplo 1: Variância ($\sigma^2$)
A variância mede a dispersão quadrática média em torno da média do conjunto:
- **Total:** `11,1491 %²`
- **Mulheres:** `11,7598 %²`
- **Homens:** `11,3397 %²`

### Exemplo 2: Desvio Padrão ($s$)
O desvio padrão (raiz quadrada da variância) expressa a dispersão na mesma unidade dos dados (%):
- **Total:** `3,3390 %`
- **Mulheres:** `3,4293 %`
- **Homens:** `3,3674 %`

### Exemplo 3: Amplitude ($Max - Min$)
A amplitude indica a extensão total observada no período:
- **Total:** `11,60 %` (Mínimo: 7,40% | Máximo: 19,00%)
- **Mulheres:** `12,10 %` (Mínimo: 9,10% | Máximo: 21,20%)
- **Homens:** `11,30 %` (Mínimo: 6,10% | Máximo: 17,40%)

### Exemplo 4: Coeficiente de Assimetria (*Skewness*)
O coeficiente de assimetria quantifica o grau de desvio em relação à simetria:
- **Total:** `0,2771` $\rightarrow$ Assimetria positiva leve (cauda ligeiramente mais longa à direita).
- **Mulheres:** `0,0706` $\rightarrow$ Distribuição praticamente **simétrica** (próxima de 0).
- **Homens:** `0,4724` $\rightarrow$ Assimetria positiva moderada (maior ocorrência de valores concentrados à esquerda com cauda à direita).

### Exemplo 5: Curtose e Classificação da Distribuição
O excesso de curtose mede o grau de "achatamento" ou picos da distribuição em comparação com a normal:
- **Total:** `-1,2084` $\rightarrow$ **Platicúrtica** ($< 0$)
- **Mulheres:** `-1,2702` $\rightarrow$ **Platicúrtica** ($< 0$)
- **Homens:** `-0,9643` $\rightarrow$ **Platicúrtica** ($< 0$)

> **Classificação:** Todas as três categorias são classificadas como **Platicúrticas**, significando que possuem picos mais largos/achatados e caudas mais leves que a distribuição Normal padrão, refletindo flutuações temporais bem distribuídas sem picos extremos isolados.

---

## 5. Interpretação dos Resultados e Conclusão

1. **Impacto do Tratamento de Dados:**  
   A exclusão dos valores nulos/não divulgados é crítica. A inclusão de valores zerados distorceria artificialmente a média total para baixo (10,65%), ao passo que a análise no dataset limpo reflete a verdadeira média do período (12,35%).

2. **Disparidade Estrutural de Gênero:**  
   A taxa de desocupação das mulheres é significativamente maior que a dos homens em todo o histórico (média de 14,51% vs 10,77%). Além disso, o grupo feminino apresenta maior amplitude (12,10%) e maior desvio padrão (3,43%), indicando maior volatilidade e maior exposição às crises no mercado de trabalho.

3. **Comportamento da Distribuição:**  
   O formato platicúrtico e a assimetria positiva moderada revelam que a desocupação se manteve espalhada ao longo do tempo, alternando entre ciclos de alta e baixa sem concentração excessiva em torno do valor médio.
