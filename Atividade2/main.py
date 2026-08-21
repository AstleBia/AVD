import requests
import json


def buscar_base():
    resource_id = input("Digite o resource id da base que deseja buscar: ")
    r = requests.get(f"https://dados.recife.pe.gov.br/api/action/datastore_search?resource_id={resource_id}&limit=200000")
    data = r.json()

    print(data)
    #print(json.dumps(total, indent = 4))
    print(json.dumps(data, indent = 4))

buscar_base()