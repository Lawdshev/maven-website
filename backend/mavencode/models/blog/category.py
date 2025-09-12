from datetime import datetime
from uuid import UUID
from typing import Optional
from pydantic import BaseModel, Field

class CreateCategory(BaseModel):
    name: str = Field(
        ...,
        title="Category Name",
        description="Name of the category"
    )


class CategoryResponse(BaseModel):
    id: UUID = Field(
        ...,
        title="Category ID",
        description="Unique identifier for the category"
    )
    name: str = Field(
        ...,
        title="Category Name",
        description="Name of the category"
    )
    created_at: datetime = Field(
        ...,
        title="Created At",
        description="Timestamp when the category was created"
    )
    updated_at: Optional[datetime]  = Field(
        ...,
        title="Updated At",
        description="Timestamp when the category was last updated"
    )


class UpdateCategory(BaseModel):
    name: Optional[str] = Field(
        ...,
        title="Category Name",
        description="Name of the category"
    )
