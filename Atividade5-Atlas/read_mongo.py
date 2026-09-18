import os
import certifi
import folium
import requests
from dotenv import load_dotenv
from pymongo import MongoClient
from pymongo.server_api import ServerApi

load_dotenv()

DB_NAME = "Recife"
COLLECTION_NAME = "DistritosSanitarios"

# GeoJSON oficial com as faixas marginais dos rios do Recife
# (Capibaribe, Beberibe, Tejipió, Jordão, Jiquiá etc.)
RIOS_URL = (
    "https://dados.recife.pe.gov.br/dataset/1bf02d9c-2754-41cc-aede-1ac8e237f166/"
    "resource/81310c02-4bb8-4fea-b676-0c42977b4aef/download/"
    "faixas-marginais-dos-recursos-hidricos.geojson"
)

# Lê os distritos sanitários direto do MongoDB Atlas
# (carregados antecipadamente por scripts/carga_distritos_sanitarios.py)
mongo_uri = os.getenv("MONGODB_URI")
client = MongoClient(mongo_uri, server_api=ServerApi("1"),
tlsCAFile=certifi.where())
collection = client[DB_NAME][COLLECTION_NAME ]

features = list(collection.find({}, {"_id": 0}))
geojson = {"type": "FeatureCollection" , "features": features}

# Baixa a camada dos rios (dados abertos do Recife)
rios = requests.get(RIOS_URL, timeout=60).json()

# Monta o mapa dos distritos sanitários com folium
mapa = folium.Map(
    location=[-8.05, -34.9],
    zoom_start=11,

    tiles="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",attr="Tiles &copy; Esri",
)

folium.GeoJson(
geojson,
name="Distritos Sanitários",
tooltip=folium.GeoJsonTooltip(fields=["nome_distrito"],
aliases=["Distrito:"]),
style_function=lambda _: {"fillColor": "#3186cc", "color":
"black", "weight": 1, "fillOpacity": 0.4},
).add_to(mapa)

# Camada dos rios por cima dos distritos, em azul mais escuro
folium.GeoJson(
rios,
name="Rios",
tooltip=folium.GeoJsonTooltip(fields=["nome", "bacia"],
aliases=["Rio:", "Bacia:"]),
style_function=lambda _: {"fillColor": "#0a4d8c", "color":
"#0a4d8c", "weight": 1, "fillOpacity": 0.7},
).add_to(mapa)

# Controle para ligar/desligar as camadas
folium.LayerControl().add_to(mapa)

mapa.save("mapa_distritos_sanitarios.html")
print("Mapa salvo em mapa_distritos_sanitarios.html")