from typing import List
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, status
from mavencode.core.logger import logger
from mavencode.db.database import get_repository
from mavencode.db.repositories.blog.categories import CategoryRepository
from mavencode.models.blog.category import (
    CreateCategory, CategoryResponse, UpdateCategory
)
from mavencode.models.users.user import UserInDB
from mavencode.services.auth_service import get_current_user

router = APIRouter()


@router.post(
    "/create", response_model=CategoryResponse,
    status_code=status.HTTP_201_CREATED
)
async def create_category(
    category: CreateCategory,
    cat_repo: CategoryRepository = Depends(get_repository(CategoryRepository)),
    current_user: UserInDB = Depends(get_current_user)
) -> CategoryResponse:
    try:
        logger.info("Creating category")
        if not (current_user.is_superuser or current_user.is_admin):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, 
                detail="Forbidden"
            )
        new_category = await cat_repo.create_category(category)

        if not new_category:
            logger.warning("Category creation failed")
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Category creation failed"
            )

        return new_category
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.get("/", response_model=List[CategoryResponse])
async def get_all_categories(
    limit: int = 10, offset: int = 0,
    cat_repo: CategoryRepository = Depends(get_repository(CategoryRepository))
) -> List[CategoryResponse] | list:
    try:
        logger.info("Getting all categories, limit: %s, offset: %s", limit, offset)
        categories = await cat_repo.get_all_categories(limit, offset)

        if not categories:
            return []

        return categories
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.get("/{category_id}", response_model=CategoryResponse)
async def get_category_by_id(
    category_id: UUID,
    cat_repo: CategoryRepository = Depends(get_repository(CategoryRepository))
) -> CategoryResponse | None:
    try:
        logger.info("Getting category id: %s", category_id)
        category = await cat_repo.get_category_by_id(category_id)

        if not category:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail="Category not found"
            )

        return category
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.patch("/{category_id}/edit", response_model=CategoryResponse)
async def update_category_by_id(
    category_id: UUID, category: UpdateCategory,
    cat_repo: CategoryRepository = Depends(get_repository(CategoryRepository)),
    current_user: UserInDB = Depends(get_current_user)
) -> CategoryResponse | None:
    try:
        logger.info("Updating category id: %s", category_id)
        if not (current_user.is_superuser or current_user.is_admin):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, 
                detail="Forbidden"
            )
        updated = await cat_repo.update_category_by_id(category_id, category)

        if not updated:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Category not found"
            )

        return updated
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.delete(
    "/{category_id}/delete",
    status_code=status.HTTP_204_NO_CONTENT
)
async def delete_category_by_id(
    category_id: UUID,
    cat_repo: CategoryRepository = Depends(get_repository(CategoryRepository)),
    current_user: UserInDB = Depends(get_current_user)
) -> None:
    try:
        logger.info("Deleting category id: %s", category_id)
        if not (current_user.is_superuser or current_user.is_admin):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, 
                detail="Forbidden"
            )
        deleted = await cat_repo.delete_category_by_id(category_id)

        if not deleted:
            logger.warning("Category not found id: %s", category_id)
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Category not found"
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
