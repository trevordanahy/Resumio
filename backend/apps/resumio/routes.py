from fastapi import APIRouter, Depends, Request
from fastapi.encoders import jsonable_encoder
from apps.users.routes import credentials
from .models import Draft

router = APIRouter()


@router.get("/drafts")
async def all_drafts(requests: Request, user_id=Depends(credentials)):
    drafts = []
    for draft in (
        await requests.app.mongodb["drafts"].find({"owner": user_id}).to_list(length=20)
    ):
        drafts.append(draft)
    return drafts


@router.get("/drafts/{draft_id}")
async def draft_by_id(request: Request, draft_id, user_id=Depends(credentials)):
    draft = await request.app.mongodb["drafts"].find_one(
        {"_id": draft_id, "owner": user_id}
    )
    return draft


@router.post("/drafts")
async def create_draft(request: Request, draft: Draft, user_id=Depends(credentials)):
    draft.owner = user_id
    json_draft = jsonable_encoder(draft)
    new_draft = await request.app.mongodb["drafts"].insert_one(json_draft)
    return {"msg": "works"}


@router.put("/drafts/{draft_id}")
async def update_draft(request: Request, draft_id, user_id=Depends(credentials)):
    updated_draft = await request.app.mongodb["drafts"].replace_one(
        {"_id": draft_id, "owner": user_id}, test_doc
    )
    return {"msg": "works"}


@router.delete("drafts/{draft_id}")
async def delete_draft(request: Request, draft_id, user_id=Depends(credentials)):
    delete_confirmation = await request.app.mongodb["drafts"].delete_one(
        {"_id": draft_id, "owner": user_id}
    )
    return {"msg": "works"}
