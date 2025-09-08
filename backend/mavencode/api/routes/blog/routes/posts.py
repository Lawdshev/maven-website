import uuid
from typing import List
from uuid import UUID
from fastapi import APIRouter, Depends, UploadFile, File, HTTPException, Query, status
from mavencode.core.config import S3_BUCKET
from mavencode.core.logger import logger
from mavencode.db.database import get_repository
from mavencode.db.repositories.blog.posts import BlogRepository
from mavencode.models.blog.posts import (
    BlogPostCreate, BlogPostResponse, BlogPostUpdate
)
from mavencode.models.users.user import UserInDB
from mavencode.services.auth_service import get_current_user
from mavencode.services.s3_service import upload_image_fileobj, build_s3_key

router = APIRouter()


@router.post(
    "/posts/create", response_model=BlogPostResponse,
    status_code=status.HTTP_201_CREATED
)
async def create_blog_post(
    blog_post: BlogPostCreate = Depends(BlogPostCreate.as_form),
    image: UploadFile = File(None),
    blog_repo: BlogRepository = Depends(get_repository(BlogRepository)),
    current_user: UserInDB = Depends(get_current_user)
) -> BlogPostResponse:
    try:
        logger.info("Creating a blog post")
        if not (current_user.is_superuser or current_user.is_admin):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Forbidden"
            )

        image_url = None

        if image:
            key = build_s3_key("blog", uuid.uuid4(), image.filename)

            s3_uri = upload_image_fileobj(
                key=key,
                fileobj=image.file,
                content_type=image.content_type
            )

            image_url = f"https://{S3_BUCKET}.s3.amazonaws.com/{key}"

        blog_data = blog_post.model_dump()
        blog_data["thumbnail"] = image_url
        blog_data["author_id"] = current_user.id

        post = await blog_repo.create_blog_post(blog_data)

        if not post:
            logger.warning("Blog post creation failed")
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Blog post creation failed"
            )

        return post
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.get("/posts", response_model=List[BlogPostResponse])
async def get_all_blog_posts(
    limit: int = 10, offset: int = 0,
    blog_repo: BlogRepository = Depends(get_repository(BlogRepository))
) -> List[BlogPostResponse] | list:
    try:
        logger.info("Getting all blog posts, limit: %s, offset: %s", limit, offset)
        posts = await blog_repo.get_all_blog_posts(limit, offset)

        if not posts:
            return []

        return posts
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.get("/posts/unpublished", response_model=List[BlogPostResponse])
async def get_all_unpublished_blog_posts(
    limit: int = 10, offset: int = 0,
    blog_repo: BlogRepository = Depends(get_repository(BlogRepository)),
    current_user: UserInDB = Depends(get_current_user)
) -> List[BlogPostResponse] | list:
    try:
        logger.info("Getting all unpublished blog posts, limit: %s, offset: %s", limit, offset)

        if not (current_user.is_superuser or current_user.is_admin):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Forbidden"
            )
        posts = await blog_repo.get_all_unpublished_blog_posts(limit, offset)

        if not posts:
            return []

        return posts
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.get("/posts/search", response_model=List[BlogPostResponse])
async def search_blog_posts(
    search_term: str = Query(..., title="Search blog posts", min_length=1),
    blog_repo: BlogRepository = Depends(get_repository(BlogRepository))
) -> list | List[BlogPostResponse]:
    try:
        logger.info("Searching for blog posts by title or content: %s", search_term)
        posts = await blog_repo.search_blog_posts(search_term)

        if not posts:
            return []

        return posts
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.get("/posts/filter", response_model=List[BlogPostResponse])
async def filter_blog_posts(
    category_id: UUID,
    blog_repo: BlogRepository = Depends(get_repository(BlogRepository))
) -> List[BlogPostResponse] | list:
    try:
        logger.info("Filtering blog posts by category id: %s", category_id)
        posts = await blog_repo.filter_blog_posts(category_id)

        if not posts:
            return []

        return posts
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.get("/posts/{post_id}", response_model=BlogPostResponse)
async def get_blog_post_by_id(
    post_id: UUID, is_published: bool = True,
    blog_repo: BlogRepository = Depends(get_repository(BlogRepository))
) -> BlogPostResponse:
    try:
        logger.info("Getting blog post id: %s", post_id)
        post = await blog_repo.get_blog_post_by_id(post_id, is_published)

        if not post:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Blog post not found"
            )

        return post
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.patch("/posts/{post_id}/edit", response_model=BlogPostResponse)
async def update_blog_post_by_id(
    post_id: UUID, blog_post: BlogPostUpdate = Depends(BlogPostUpdate.as_form),
    image: UploadFile = File(None),
    blog_repo: BlogRepository = Depends(get_repository(BlogRepository)),
    current_user: UserInDB = Depends(get_current_user)
) -> BlogPostResponse:
    try:
        logger.info("Updating blog post id: %s", post_id)
        if not (current_user.is_superuser or current_user.is_admin):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Forbidden"
            )

        image_url = None

        if image:
            key = build_s3_key("blog", uuid.uuid4(), image.filename)

            s3_uri = upload_image_fileobj(
                key=key,
                fileobj=image.file,
                content_type=image.content_type
            )

            image_url = f"https://{S3_BUCKET}.s3.amazonaws.com/{key}"

        blog_data = blog_post.model_dump()
        blog_data["thumbnail"] = image_url

        blog_post = BlogPostUpdate(**blog_data)

        post = await blog_repo.update_blog_post_by_id(
            post_id, blog_post
        )

        if not post:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Blog post not found"
            )

        return post
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.delete(
    "/posts/{post_id}/delete",
    status_code=status.HTTP_204_NO_CONTENT
)
async def delete_blog_post_by_id(
    post_id: UUID, is_published: bool = True,
    blog_repo: BlogRepository = Depends(get_repository(BlogRepository)),
    current_user: UserInDB = Depends(get_current_user)
) -> None:
    try:
        logger.info("Deleting blog post id: %s", post_id)
        if not (current_user.is_superuser or current_user.is_admin):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Forbidden"
            )
        deleted = await blog_repo.delete_blog_post_by_id(
            post_id, is_published
        )

        if not deleted:
            logger.warning("Blog post not found id: %s", post_id)
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Blog post not found"
            )

        return
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e
