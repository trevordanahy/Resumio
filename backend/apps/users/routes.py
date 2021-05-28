from fastapi import APIRouter, Depends, Request, Response, Body, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import RedirectResponse
from fastapi_login import LoginManager
from datetime import timedelta
from passlib.hash import bcrypt
import jwt
from .models import User, UserIn

router = APIRouter()

jwt_secret = "167e849c6b79422c6a29bad9bde29f4eb20dfa4004a56483"
token_cookie_name = "access-token"
token_expire_time = 5

credentials = LoginManager(
    secret=jwt_secret, tokenUrl="/login/", use_cookie=True, use_header=False
)

credentials.cookie_name = token_cookie_name


@credentials.user_loader
async def query_user(user):
    return user


# Used to sync expiration for jwt and auth cookie, used in /login route
# jwt is timedelta object, cookie is int in seconds
def set_duration_days(time_days: int):
    period = timedelta(days=time_days)
    expiration = {"jwt": period, "cookie": int(period.total_seconds())}
    return expiration


async def auth_user(email: str, password: str, request: Request):
    user = await request.app.mongodb["users"].find_one({"email": email})
    if not user:
        return False
    if not bcrypt.verify(password, user["password"]):
        return False
    return user


def create_token(user, expire_time):
    try:
        expiration = set_duration_days(expire_time)
        payload = {"sub": user["_id"], "username": user["username"]}
        token_value = credentials.create_access_token(
            data=payload, expires=expiration["jwt"]
        )
        token = {"value": token_value, "expiration": expiration["cookie"]}
    except:
        raise HTTPException(status_code=400, detail="Unable to create auth token")
    else:
        return token


# User Routes
@router.post("/register", status_code=201)
async def create_user(request: Request, user: User):
    existing = await request.app.mongodb["users"].find_one({"email": user.email})
    if existing:
        raise HTTPException(
            status_code=401, detail="User already exists, please sign in"
        )

    hashed_pass = bcrypt.hash(user.password)
    user.password = hashed_pass

    user = jsonable_encoder(user)
    new_user = await request.app.mongodb["users"].insert_one(user)
    return {"msg": "success"}


@router.post("/login")
async def login(login: UserIn, request: Request, response: Response):
    user = await auth_user(login.email, login.password, request)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_token(user, token_expire_time)

    try:
        response.set_cookie(
            key=token_cookie_name,
            value=token["value"],
            httponly=True,
            max_age=(token["expiration"]),
        )
    except:
        raise HTTPException(
            status_code=400, detail="Unable to set authorization cookie"
        )
    return {"detail": "Logged In", "username": user["username"]}


@router.get("/logout")
async def logout(response: Response):
    try:
        response.delete_cookie(key=token_cookie_name)
    except:
        raise HTTPException(status_code=400, detail="Error deleting cookie")
    return {"detail": "Logged Out"}


@router.get("/me", status_code=200)
async def user(request: Request, user=Depends(credentials)):
    try:
        me = await request.app.mongodb["users"].find_one({"_id": user})
        username = me["username"]
    except:
        raise HTTPException(status_code=404, detail="User not found")
    else:
        return {"username": username}