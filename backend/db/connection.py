import psycopg
from psycopg.rows import dict_row
import os
from dotenv  import load_dotenv

load_dotenv()
# estas credenciales deberian ser trabajadas como variables de entorno

DB_CONFIG = {
    "host": os.environ.get("host"), # "localhost", # os.environ.get("host")
    "dbname": os.environ.get("dbname"), #"postgres", # os.environ.get("dbname")
    "user": os.environ.get("user"), #"postgres", # os.environ.get("user")
    "password": os.environ.get("password"), #"fernet2020", # os.environ.get("password")
    "port":  os.environ.get("port"), # "5432", # os.environ.get("port")
    "options": os.environ.get("options") # "-c search_path=little_tribu,public" # os.environ.get("options")
}



def get_connection():
    return psycopg.connect(**DB_CONFIG, row_factory=dict_row)