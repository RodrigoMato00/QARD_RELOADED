from dotenv import load_dotenv
import os

load_dotenv() # Loads .env file

user = os.environ['MYSQL_USER']
password = os.environ['MYSQL_PASSWORD']
host = os.environ['MYSQL_HOST']
database = os.environ['MYSQL_DB']

DATABASE_CONNECTION_URI = f'mysql://{user}:{password}@{host}/{database}'