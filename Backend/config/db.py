from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

user = 'factored-alejandro-salas'
password = 'pruebafullstack'
host = '35.192.60.167'
database = 'storedb'

connection_string = f'mysql+mysqlconnector://{user}:{password}@{host}/{database}'

engine = create_engine(connection_string)

meta = MetaData()

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()