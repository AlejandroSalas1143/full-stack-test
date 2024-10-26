from sqlalchemy import Column, Integer, String, JSON
from config.db import Base


class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    position = Column(String(100), nullable=False)
    avatar_url = Column(String(255))
    skills = Column(JSON)
    username = Column(String(100), nullable=False)
    password = Column(String(255))
