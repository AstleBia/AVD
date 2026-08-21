# 📊 AVD — Análise e Visualização de Dados

Repositório para as atividades e projeto da disciplina de **Análise e Visualização de Dados (AVD)** da **CESAR School**.

O projeto utiliza uma base pública de **Solicitações de Atendimento do SAMU-192**, com o objetivo de realizar o processo de entendimento, preparação, modelagem, avaliação e futura implantação de um pipeline de dados.

---

## 👥 Nossa Equipe

| Nome | Funções | Email |
|------|---------|-------|
| Beatriz Astle | Analista de Dados | [abaa@cesar.school](mailto:abaa@cesar.school) |
| João Astle | Analista de Dados | [jvaa@cesar.school](mailto:jvaa@cesar.school) |
| Gabriel Abreu Souza | Analista de Dados | [gasb2@cesar.school](mailto:gasb2@cesar.school) |
| Rafael Lyra Costa | Analista de Dados | [rlc3@cesar.school](mailto:rlc3@cesar.school) |
| Mateus José Galvão de Melo Guimarães | Analista de Dados | [mjgmg@cesar.school](mailto:mjgmg@cesar.school) |

**Disciplina:** Análise e Visualização de Dados (AVD)

---

---

## 🗃️ Dataset

### Solicitações de Atendimento SAMU

A base contém informações relacionadas às solicitações de atendimento recebidas pelo **SAMU-192**, permitindo análises temporais, geográficas e relacionadas às características das ocorrências e dos pacientes.

Entre as principais variáveis estão:

- `data`
- `hora_minuto`
- `municipio`
- `bairro`
- `endereco`
- `origem_chamado`
- `tipo`
- `subtipo`
- `sexo`
- `idade`
- `motivo_finalizacao`
- `motivo_desfecho`

---

## 📋 Planejamento das Próximas Fases

> **⚠️ Planejamento — As etapas abaixo representam o que será realizado nas próximas fases do projeto. Nenhuma dessas etapas está sendo implementada neste momento.**

### 🧹 Preparação

- [ ] Verificar e corrigir os tipos de dados das variáveis.
- [ ] Identificar e tratar valores ausentes.
- [ ] Identificar registros duplicados.
- [ ] Verificar valores inconsistentes ou inválidos.
- [ ] Padronizar valores das variáveis categóricas.
- [ ] Converter `idade` para um formato numérico adequado.
- [ ] Padronizar as informações de data e horário.
- [ ] Verificar a consistência das informações geográficas.
- [ ] Avaliar a necessidade de empilhar ou combinar diferentes estados/variáveis, caso novas fontes ou períodos sejam incorporados.
- [ ] Documentar todos os tratamentos realizados.

### 🏗️ Modelagem

- [ ] Definir o formato final dos dados.
- [ ] Manter uma linha por solicitação de atendimento.
- [ ] Estruturar as variáveis temporais para possibilitar análises por dia, mês, horário e período.
- [ ] Estruturar os dados geográficos para análises por município, bairro e endereço.
- [ ] Definir possíveis variáveis derivadas, como faixa etária, dia da semana e período do dia.
- [ ] Definir a estrutura final que será utilizada nas análises e visualizações.

### ✅ Avaliação

Os dados serão considerados **prontos para análise** quando:

- [ ] Os tipos de dados estiverem adequados.
- [ ] Os valores ausentes estiverem identificados e tratados ou devidamente justificados.
- [ ] Não existirem duplicidades indevidas.
- [ ] As categorias estiverem padronizadas.
- [ ] Não houver valores evidentemente inválidos ou inconsistentes.
- [ ] As datas e horários estiverem dentro do período esperado.
- [ ] Os dados geográficos apresentarem padrões consistentes.
- [ ] A quantidade de registros antes e depois dos tratamentos estiver documentada.
- [ ] O dataset estiver adequado para responder às perguntas de análise definidas pelo grupo.

### 🚀 Implantação

- [ ] Definir uma rotina recorrente de atualização dos dados.
- [ ] Considerar a frequência de atualização mensal informada pela fonte.
- [ ] Definir o fluxo de ingestão dos novos dados.
- [ ] Automatizar as etapas de preparação e transformação.
- [ ] Automatizar as validações de qualidade.
- [ ] Registrar erros e inconsistências encontrados durante cada execução.
- [ ] Manter o histórico das atualizações e processamentos.
- [ ] Definir uma rotina de monitoramento para identificar falhas no pipeline.

---

## 📌 Fluxo planejado

```text
Dados Brutos
     ↓
Preparação
     ↓
Modelagem
     ↓
Avaliação
     ↓
Dados Prontos
     ↓
Análise e Visualização
     ↓
Implantação / Atualização Recorrente

```

## 📦 Entregas

<details>
  <summary>🚀 Entrega 1</summary>
  <br/>

  <!-- Adicionar conteúdo da Entrega 1 -->

  <br/>
</details>

<details>
  <summary>🚀 Entrega 2</summary>
  <br/>

  ## Documentação
  [Entendimento de Negócio e Dados](./Documentação/Documentação_AVD.pdf)

  <br/>
</details>

<details>
  <summary>🚀 Entrega 3</summary>
  <br/>

  <!-- Adicionar conteúdo da Entrega 3 -->

  <br/>
</details>

<details>
  <summary>🚀 Entrega 4</summary>
  <br/>

  <!-- Adicionar conteúdo da Entrega 4 -->

  <br/>
</details>



## 💡 Observações

> Projeto desenvolvido na disciplina de **AVD (Análise e Visualização de Dados)** da **CESAR School**.

> Os dados utilizados são provenientes do Portal de Dados Abertos da Prefeitura do Recife e são utilizados para fins acadêmicos de análise e visualização de dados.

