from fastapi import FastAPI
from routes.employee import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],
)
app.include_router(router)

@app.get("/")
def read_root():
    return {"Hello": "Welcome to the Employee API!"}