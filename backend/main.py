from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from apps.users.routes import router as user_router
from apps.dev_tools.routes import router as dev_router
from apps.resumio.routes import router as resumio_router


app = FastAPI()

mongo_uri = "mongodb://mongoadmin:devpassword@localhost:27017"


@app.on_event("startup")
async def startup_db():
    app.mongodb_client = AsyncIOMotorClient(mongo_uri)
    app.mongodb = app.mongodb_client["resumio_test"]


@app.on_event("shutdown")
async def close_db_client():
    app.mongodb_client.close()


app.include_router(user_router, tags=["User"], prefix="/user")
app.include_router(dev_router, tags=["Dev"])
app.include_router(resumio_router, tags=["Resumio"], prefix="/app")


@app.get("/", tags=["Main"])
def index():
    return {"home": "world"}


@app.get("/about", tags=["Main"])
def about_page():
    return {"this page": "will be informative"}
