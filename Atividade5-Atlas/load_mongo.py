
import os

import certifi
import pandas as pd
import requests
from dotenv import load_dotenv
from pymongo import MongoClient
from pymongo.server_api import ServerApi

load_dotenv()

GEOJSON_URL = (
"https://dados.recife.pe.gov.br/dataset/09ae25d3-7330-4fff-af57-9e9191a4c2f6/"
"resource/8d43533d-100b-4de2-9b08-65703d910320/download/"
"distritos-sanitarios-do-recife.geojson"
)
CSV_URL = (
"https://dados.recife.pe.gov.br/dataset/09ae25d3-7330-4fff-af57-9e9191a4c2f6/"
"resource/d8d649d6-5bf7-44af-9686-436162766037/download/"
"distritos-sanitarios-descricao-dos-bairros.csv"
)

DB_NAME = "Recife"
COLLECTION_NAME = "DistritosSanitarios"

bairros = pd.read_csv(CSV_URL, sep=";")
geojson = requests.get(GEOJSON_URL).json()

nomes_distritos = dict(
bairros[["distrito_sanitario", "descricao_distrito"]]
.drop_duplicates()
.values
)

for feature in geojson["features"]:
    codigo = feature["properties"]["cdistscodi"]
    feature["properties"]["nome_distrito"] = nomes_distritos.get(codigo, "Desconhecido")

# Salva os dados no MongoDB Atlas
mongo_uri = os.getenv("MONGODB_URI")
client = MongoClient(mongo_uri, server_api=ServerApi("1"), tlsCAFile=certifi.where())
collection = client[DB_NAME][COLLECTION_NAME]

collection.delete_many({})
collection.insert_many(geojson["features"])
print(f"{len(geojson['features'])} distritos salvos em {DB_NAME}.{COLLECTION_NAME}")