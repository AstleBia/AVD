import pandas as pd
import requests

# 1. Carregamento dos dados da API do IBGE (PNAD Contínua - Agregado 4093, Variável 4099)
url = 'https://servicodados.ibge.gov.br/api/v3/agregados/4093/periodos/201201-202602/variaveis/4099?localidades=N3[26]&classificacao=2[all]'
data = pd.read_json(url)
res = data['resultados'][0]

df = pd.DataFrame()
df['periodo'] = list(res[0]['series'][0]['serie'].keys())
df['total'] = list(res[0]['series'][0]['serie'].values())
df['homens'] = list(res[1]['series'][0]['serie'].values())
df['mulheres'] = list(res[2]['series'][0]['serie'].values())

# Tratamento de valores ausentes / não numéricos ('...')
for col in ['total', 'homens', 'mulheres']:
    df[col] = df[col].replace('...', '0').astype(float)

# Filtrando períodos válidos (remover períodos zerados sem divulgação)
df_filtrado = df.query('total != 0 or mulheres != 0 or homens != 0').copy()

print("==================================================")
print("  EXERCÍCIOS DA AULA 05 - MEDIDAS DE DISPERSÃO   ")
print("==================================================\n")

# Exemplo 1: Variância
print("--- EXEMPLO 1: VARIÂNCIA (σ²) ---")
print("Variância Total:    ", df_filtrado['total'].var())
print("Variância Mulheres: ", df_filtrado['mulheres'].var())
print("Variância Homens:   ", df_filtrado['homens'].var())
print()

# Exemplo 2: Desvio Padrão
print("--- EXEMPLO 2: DESVIO PADRÃO (s) ---")
print("Desvio Padrão Total:    ", df_filtrado['total'].std())
print("Desvio Padrão Mulheres: ", df_filtrado['mulheres'].std())
print("Desvio Padrão Homens:   ", df_filtrado['homens'].std())
print()

# Exemplo 3: Amplitude
print("--- EXEMPLO 3: AMPLITUDE (Max - Min) ---")
print(f"Amplitude Total:    {df_filtrado['total'].max() - df_filtrado['total'].min():.4f} (Mín: {df_filtrado['total'].min()}, Máx: {df_filtrado['total'].max()})")
print(f"Amplitude Mulheres: {df_filtrado['mulheres'].max() - df_filtrado['mulheres'].min():.4f} (Mín: {df_filtrado['mulheres'].min()}, Máx: {df_filtrado['mulheres'].max()})")
print(f"Amplitude Homens:   {df_filtrado['homens'].max() - df_filtrado['homens'].min():.4f} (Mín: {df_filtrado['homens'].min()}, Máx: {df_filtrado['homens'].max()})")
print()

# Exemplo 4: Coeficiente de Assimetria
print("--- EXEMPLO 4: COEFICIENTE DE ASSIMETRIA ---")
print("Assimetria Total:    ", df_filtrado['total'].skew())
print("Assimetria Mulheres: ", df_filtrado['mulheres'].skew())
print("Assimetria Homens:   ", df_filtrado['homens'].skew())
print()

# Exemplo 5: Curtose e Classificação
print("--- EXEMPLO 5: CURTOSE (Excesso de Curtose - Pandas) ---")
def classificar_curtose(val):
    if abs(val) < 0.2:
        return f"{val:.4f} -> Mesocúrtica (formato similar à distribuição normal)"
    elif val < 0:
        return f"{val:.4f} -> Platicúrtica (caudas curtas e pico achatado/largo)"
    else:
        return f"{val:.4f} -> Leptocúrtica (caudas longas/pesadas e pico elevado)"

print("Curtose Total:    ", classificar_curtose(df_filtrado['total'].kurtosis()))
print("Curtose Mulheres: ", classificar_curtose(df_filtrado['mulheres'].kurtosis()))
print("Curtose Homens:   ", classificar_curtose(df_filtrado['homens'].kurtosis()))
print("\n==================================================")
