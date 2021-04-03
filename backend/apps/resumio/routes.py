from fastapi import APIRouter, Depends, Request
from fastapi.encoders import jsonable_encoder
from apps.users.routes import credentials
from .models import Draft
router = APIRouter()


@router.get("/")
async def all_drafts():
    pass


@router.get("/{id}")
async def draft_by_id():
    pass


@router.post("/")
async def create_draft(request: Request, draft: Draft, user_id=Depends(credentials)):
    draft.owner = user_id
    json_draft = jsonable_encoder(draft)
    new_draft = await request.app.mongodb["drafts"].insert_one(json_draft)
    return {"msg": "works"}


@router.put("/{id}")
async def update_draft():
    pass


@router.delete("/{id}")
async def delete_draft():
    pass
