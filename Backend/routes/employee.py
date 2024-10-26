from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from models.employee import Employee as EmployeeModel
from schemas.employee import EmployeeCreate, LoginRequest, Employee as EmployeeSchema
from config.db import SessionLocal, engine, Base
from passlib.context import CryptContext


router = APIRouter()

# Base.metadata.drop_all(engine)

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Función para hashear contraseñas
def hash_password(password):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

@router.post("/login", response_model=EmployeeSchema)
async def login(login_request: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(EmployeeModel).filter(EmployeeModel.username == login_request.username).first()
    if not user or not verify_password(login_request.password, user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect username or password")
    return user


@router.post("/employees/", response_model=EmployeeSchema)
def create_employee(employee_data: EmployeeCreate, db: Session = Depends(get_db)):

    hashed_password = hash_password(employee_data.password)

    db_employee = EmployeeModel(
        name=employee_data.name,
        position=employee_data.position,
        avatar_url=employee_data.avatar_url,
        skills=employee_data.skills,
        username=employee_data.username,
        password=hashed_password
    )
    
    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)
    
    return db_employee

@router.get("/employees/", response_model=List[EmployeeSchema])
def read_employees(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    employees = db.query(EmployeeModel).offset(skip).limit(limit).all()
    return employees

@router.get("/employees/{employee_id}", response_model=EmployeeSchema)
def read_employee(employee_id: int, db: Session = Depends(get_db)):
    employee = db.query(EmployeeModel).filter(EmployeeModel.id == employee_id).first()
    if employee is None:
        raise HTTPException(status_code=404, detail="Employee not found")
    return employee
