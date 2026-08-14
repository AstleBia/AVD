import requests
import json

r = requests.get("https://servicodados.ibge.gov.br/api/v3/agregados/4093/periodos/201201-202601/variaveis/4096|4099|12466?localidades=N3[26]&classificacao=2[all]")
data = r.json()

total = data[0]['resultados'][0]['classificacoes'][0]['categoria']
homens = data[0]['resultados'][1]['classificacoes'][0]['categoria']
mulheres = data[0]['resultados'][2]['classificacoes'][0]['categoria']


print(json.dumps(total, indent = 4))
print(json.dumps(homens, indent = 4))
print(json.dumps(mulheres, indent = 4))
print(type(total))