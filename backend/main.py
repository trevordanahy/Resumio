from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from urllib.parse import quote
from apps.users.routes import router as user_router
from apps.dev_tools.routes import router as dev_router
from apps.resumio.routes import router as resumio_router
import os


app = FastAPI()
app.include_router(user_router, tags=["User"], prefix="/user")
app.include_router(dev_router, tags=["Dev"])
app.include_router(resumio_router, tags=["Resumio"], prefix="/app")

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


db_user = quote(os.environ.get("DB_USER"))
db_pass = quote(os.environ.get("DB_PASS"))
mongo_uri = f"mongodb://{db_user}:{db_pass}@localhost:27017"


@app.on_event("startup")
async def startup_db():
    app.mongodb_client = AsyncIOMotorClient(mongo_uri)
    app.mongodb = app.mongodb_client["resumio_test"]


@app.on_event("shutdown")
async def close_db_client():
    app.mongodb_client.close()


@app.get("/", tags=["Main"])
def index():
    return {"home": "world"}


@app.get("/about", tags=["Main"])
def about_page():
    return {"this page": "will be informative"}
