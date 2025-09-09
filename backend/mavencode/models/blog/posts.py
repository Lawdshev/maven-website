from datetime import datetime
from uuid import UUID
from typing import Optional
from fastapi import Form
from pydantic import BaseModel, Field

class BaseBlogPost(BaseModel):
    title: str = Field(
        ...,
        title="Title",
        description="The title of the blog post",
        min_length=10,
        max_length=150
    )
    content: str = Field(
        ...,
        title="Content",
        description="The content of the blog post",
        min_length=10,
        max_length=1000
    )
    thumbnail: Optional[str] = Field(
        None,
        title="Thumbnail",
        description="The thumbnail of the blog post",
        min_length=10,
        max_length=200
    )
    category_id: UUID = Field(
        ...,
        title="Category ID",
        decription="The ID of the category"
    )
    is_published: bool = Field(
        title="Is Published",
        description="Whether the blog post is published or not",
        default=True
    )


class BlogPostCreate(BaseModel):
    title: str = Field(
        ...,
        title="Title",
        description="The title of the blog post",
        min_length=10,
        max_length=150,
    )
    content: str = Field(
        ...,
        title="Content",
        description="The content of the blog post",
        min_length=10,
        max_length=1000,
    )
    thumbnail: Optional[str] = Field(
        None,
        title="Thumbnail",
        description="The thumbnail of the blog post",
        min_length=10,
        max_length=200,
    )
    category_id: UUID = Field(
        ...,
        title="Category ID",
        description="The ID of the category",
    )
    is_published: bool = Field(
        default=True,
        title="Is Published",
        description="Whether the blog post is published or not",
    )

    @classmethod
    def as_form(
        cls,
        title: str = Form(...),
        content: str = Form(...),
        category_id: UUID = Form(...),
        is_published: bool = Form(True),
    ):
        return cls(
            title=title,
            content=content,
            category_id=category_id,
            is_published=is_published,
        )


class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    thumbnail: Optional[str] = None
    category_id: Optional[UUID] = None
    is_published: Optional[bool] = True

    @classmethod
    def as_form(
        cls,
        title: str = Form(...),
        content: str = Form(...),
        category_id: UUID = Form(...),
        is_published: bool = Form(True),
    ):
        return cls(
            title=title,
            content=content,
            category_id=category_id,
            is_published=is_published,
        )


class BlogPostResponse(BlogPostCreate):
    id: UUID = Field(
        ...,
        title="ID",
        description="The ID of the blog post"
    )
    author_id: UUID = Field(
        ...,
        title="Author ID",
        description="The ID of the author"
    )
    read_time: int = Field(
        ...,
        title="Read Time",
        description="The read time of the blog post"
    )
    created_at: datetime = Field(
        ...,
        title="Created At",
        description="The created at of the blog post"
    )
    updated_at: datetime = Field(
        ...,
        title="Updated At",
        description="The updated at of the blog post"
    )


class BlogPostPaginationResponse(BaseModel):
    posts: list[BlogPostResponse]
    number_of_posts: int
