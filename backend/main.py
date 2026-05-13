from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Настройка CORS, чтобы React (работающий на другом порту) мог делать запросы
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # В продакшене лучше указать конкретный URL, например ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/hello")
def read_hello():
    return {"message": "Привет от Python (FastAPI) Backend!"}

@app.get("/api/status")
def read_status():
    return {"status": "Backend работает отлично!", "version": "1.0"}
