from pymongo import MongoClient
from pymongo.server_api import ServerApi
import os
from dotenv import load_dotenv
import certifi

load_dotenv()

db_user = os.getenv("MONGODB_USERNAME")
db_password = os.getenv("MONGODB_PASSWORD")

uri = f"mongodb+srv://{db_user}:{db_password}@cluster0.djxhbyz.mongodb.net/?appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'), tlsCAFile=certifi.where())
#
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)