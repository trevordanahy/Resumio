from fastapi import FastAPI

resumio = FastAPI()

@resumio.get("/")
def index():
    return {"hello": "world"}