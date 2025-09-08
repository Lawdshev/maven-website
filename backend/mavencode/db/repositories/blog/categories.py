from typing import Optional, List
from uuid import UUID
from asyncpg import UniqueViolationError
from databases import Database
from fastapi import HTTPException, status
from mavencode.core.logger import logger
from mavencode.db.repositories.base import BaseRepository
from mavencode.models.blog.category import (
    CreateCategory, CategoryResponse, UpdateCategory
)

CREATE_CATEGORY_QUERY = """
    INSERT INTO categories
    (name)
    VALUES (:name)
    RETURNING *;
"""

GET_ALL_CATEGORIES_QUERY = """
    SELECT * FROM categories
    ORDER BY created_at DESC
    LIMIT :limit
    OFFSET :offset
"""

GET_CATEGORY_BY_ID_QUERY = """
    SELECT * FROM categories
    WHERE id = :id
"""

UPDATE_CATEGORY_BY_ID_QUERY = """
    UPDATE categories
    SET name = :name
    WHERE id = :id
    RETURNING *;
"""

DELETE_CATEGORY_BY_ID_QUERY = """
    DELETE FROM categories
    WHERE id = :id
    RETURNING *;
"""


class CategoryRepository(BaseRepository):
    def __init__(self, db: Database):
        super().__init__(db)
        logger.info("Category Repository initialized")

    async def create_category(self, category: CreateCategory) -> Optional[CategoryResponse]:
        try:
            logger.info("Creating a category")
            values = category.model_dump()
            category =  await self.db.fetch_one(CREATE_CATEGORY_QUERY, values)

            if not category:
                logger.error("Category creation failed")
                return None

            return CategoryResponse(**category)
        except UniqueViolationError as unique_violation_error:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Category name already exists"
            ) from unique_violation_error
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def get_all_categories(self, limit: int = 10, offset: int = 0) -> Optional[List[CategoryResponse]]:
        try:
            logger.info("Getting all categories")
            values = {
                "limit": limit,
                "offset": offset
            }
            categories = await self.db.fetch_all(GET_ALL_CATEGORIES_QUERY, values)

            if not categories:
                return []

            return [CategoryResponse(**category) for category in categories]
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def get_category_by_id(self, category_id: UUID) -> Optional[CategoryResponse]:
        try:
            logger.info("Getting category id: %s", category_id)
            values = {
                "id": category_id
            }
            category = await self.db.fetch_one(GET_CATEGORY_BY_ID_QUERY, values)

            if not category:
                return None

            return CategoryResponse(**category)
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def update_category_by_id(self, category_id: UUID, category: UpdateCategory) -> Optional[CategoryResponse]:
        try:
            logger.info("Updating category id: %s", category_id)
            values = category.model_dump()
            values["id"] = category_id
            category = await self.db.fetch_one(UPDATE_CATEGORY_BY_ID_QUERY, values)

            if not category:
                return None

            return CategoryResponse(**category)
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def delete_category_by_id(self, category_id: UUID) -> Optional[CategoryResponse]:
        try:
            logger.info("Deleting category id: %s", category_id)
            values = {
                "id": category_id,
            }
            category = await self.db.fetch_one(DELETE_CATEGORY_BY_ID_QUERY, values)

            if not category:
                return None

            return CategoryResponse(**category)
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e
