from pydantic import BaseModel, Field
from typing import List, Optional, Dict

class EmployeeBase(BaseModel):
    name: str
    position: str
    avatar_url: Optional[str] = None
    skills: Dict[str, int] = Field(default_factory=dict)

class EmployeeCreate(EmployeeBase):
    username: str
    password: str = Field(..., min_length=8) 
class Employee(EmployeeBase):
    id: int

    class Config:
        from_attributes = True


class LoginRequest(BaseModel):
    username: str
    password: str
