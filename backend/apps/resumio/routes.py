from fastapi import APIRouter
from .models import Draft

router = APIRouter()


@router.get("/")
async def all_drafts():
    pass


@router.get("/{id}")
async def draft_by_id():
    pass


@router.post("/")
async def create_draft():
    pass


@router.put("/{id}")
async def update_draft():
    pass


@router.delete("/{id}")
async def delete_draft():
    pass
