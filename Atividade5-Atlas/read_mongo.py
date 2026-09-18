import os
import certifi
import folium
from dotenv import load_dotenv
from pymongo import MongoClient
from pymongo.server_api import ServerApi

load_dotenv()

DB_NAME = "Recife"
COLLECTION_NAME = "DistritosSanitarios"

# Lê os distritos sanitários direto do MongoDB Atlas
# (carregados antecipadamente por scripts/carga_distritos_sanitarios.py)
mongo_uri = os.getenv("MONGODB_URI")
client = MongoClient(mongo_uri, server_api=ServerApi("1"),
tlsCAFile=certifi.where())
collection = client[DB_NAME][COLLECTION_NAME ]

features = list(collection.find({}, {"_id": 0}))
geojson = {"type": "FeatureCollection" , "features": features}

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

mapa.save("mapa_distritos_sanitarios.html")
print("Mapa salvo em mapa_distritos_sanitarios.html")