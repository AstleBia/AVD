import pandas as pd

url = 'https://servicodados.ibge.gov.br/api/v3/agregados/4093/periodos/201201-202602/variaveis/4099?localidades=N3[26]&classificacao=2[all]'

data = pd.read_json(url)
serie = data['resultados'][0][0]['series'][0]['serie']

df = pd.DataFrame.from_dict(serie, orient="index", columns=["valor"])
df.index.name = 'periodo'
df = df.reset_index()
print(df.head())

df['valor'] = df['valor'].replace('...','0')
df['valor'] = df['valor'].astype(float)

df['ano'] = df['periodo'].str[:4]
df['tri'] = df['periodo'].str[-2:].astype(int)

print(df.head())
print(df['valor'].mean())
df_filtrado = df.query("valor != 0")
media_por_ano = df_filtrado.groupby('ano')['valor'].mean()
mediana_por_ano = df_filtrado.groupby('ano')['valor'].median()
moda_por_ano = df_filtrado['valor'].mode()

print(media_por_ano)
print(mediana_por_ano)
print(moda_por_ano)

