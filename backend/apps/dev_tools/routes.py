# ALL ROUTES BELOW ARE FOR DEVELOPMENT ONLY
# THESE FUNCTIONS WILL NOT BE IN FINAL RELEASE

# fuction to make clearing test users easier
from fastapi import APIRouter, Request, Depends
from apps.users.routes import credentials, token_cookie_name

router = APIRouter()


@router.delete("/all_users/")
async def delete_all_users(request: Request):
    deleted = await request.app.mongodb["users"].delete_many({})
    return {"msg": "successs"}


@router.get("/all_users/")
async def get_users(request: Request):
    users = []
    for doc in await request.app.mongodb["users"].find().to_list(length=50):
        users.append(doc)
    return users


@router.get("/auth_cookie")
async def eat_cookie(request: Request):
    cookie = request.cookies.get(token_cookie_name)
    return cookie


@router.get("/protected_route/")
async def tester(user=Depends(credentials)):
    return user
