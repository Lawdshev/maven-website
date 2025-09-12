from typing import Optional, List
from uuid import UUID
from asyncpg import UniqueViolationError
from databases import Database
from fastapi import HTTPException, status
from mavencode.core.logger import logger
from mavencode.core.utils.read_time import calculate_read_time
from mavencode.db.repositories.base import BaseRepository
from mavencode.models.blog.posts import (
    BlogPostResponse, BlogPostUpdate,
    BlogPostPaginationResponse
)

CREATE_POST_QUERY = """
    WITH inserted AS (
        INSERT INTO blog_posts
        (title, content, thumbnail, category_id, is_published, read_time, author_id)
        VALUES (:title, :content, :thumbnail, :category_id, :is_published, :read_time, :author_id)
        RETURNING *
    )
    SELECT i.*, CONCAT(u.first_name, ' ', u.last_name) AS author_name
    FROM inserted i
    JOIN users u ON i.author_id = u.id;
"""

GET_ALL_PUBLISHED_POSTS_QUERY = """
    SELECT bp.*, CONCAT(u.first_name, ' ', u.last_name) AS author_name
    FROM blog_posts bp
    JOIN users u ON bp.author_id = u.id
    WHERE bp.is_published = :is_published
    ORDER BY bp.created_at DESC
    OFFSET :offset
    LIMIT :limit;
"""

COUNT_ALL_PUBLISHED_POSTS_QUERY = """
    SELECT COUNT(*) FROM blog_posts
    WHERE is_published = :is_published
"""

GET_ALL_UNPUBLISHED_POSTS_QUERY = """
    SELECT bp.*, CONCAT(u.first_name, ' ', u.last_name) AS author_name
    FROM blog_posts bp
    JOIN users u ON bp.author_id = u.id
    WHERE bp.is_published = :is_published
    ORDER BY bp.created_at DESC
    OFFSET :offset
    LIMIT :limit;
"""

COUNT_ALL_UNPUBLISHED_POSTS_QUERY = """
    SELECT COUNT(*) FROM blog_posts
    WHERE is_published = :is_published
"""

GET_POST_BY_ID_QUERY = """
    SELECT bp.*, CONCAT(u.first_name, ' ', u.last_name) AS author_name
    FROM blog_posts bp
    JOIN users u ON bp.author_id = u.id
    WHERE bp.id = :id
      AND bp.is_published = :is_published;
"""

GET_POST_BY_ID = """
    SELECT * FROM blog_posts
    WHERE id = :id
"""

DELETE_POST_BY_ID_QUERY = """
    WITH deleted AS (
        DELETE FROM blog_posts
        WHERE id = :id
          AND is_published = :is_published
        RETURNING *
    )
    SELECT d.*, CONCAT(u.first_name, ' ', u.last_name) AS author_name
    FROM deleted d
    JOIN users u ON d.author_id = u.id;
"""

UPDATE_POST_BY_ID_QUERY = """
    WITH updated AS (
        UPDATE blog_posts
        SET title = :title,
            content = :content,
            thumbnail = :thumbnail,
            category_id = :category_id,
            is_published = :is_published,
            read_time = :read_time
        WHERE id = :id
        RETURNING *
    )
    SELECT up.*, CONCAT(a.first_name, ' ', a.last_name) AS author_name
    FROM updated up
    JOIN users a ON up.author_id = a.id;
"""

SEARCH_POSTS_QUERY = """
    SELECT bp.*, CONCAT(u.first_name, ' ', u.last_name) AS author_name
    FROM blog_posts bp
    JOIN users u ON bp.author_id = u.id
    WHERE bp.is_published = :is_published
      AND (
          bp.title ILIKE COALESCE(:search_term, '%')
          OR bp.content ILIKE COALESCE(:search_term, '%')
      )
    ORDER BY bp.created_at DESC;
"""

COUNT_SEARCHED_POSTS_QUERY = """
    SELECT COUNT(*) FROM blog_posts
    WHERE is_published = :is_published
    AND (title ILIKE COALESCE(:search_term, '%') OR content ILIKE COALESCE(:search_term, '%'))
"""

FILTER_POSTS_QUERY = """
    SELECT bp.*, CONCAT(u.first_name, ' ', u.last_name) AS author_name
    FROM blog_posts bp
    JOIN users u ON bp.author_id = u.id
    WHERE bp.is_published = :is_published
      AND bp.category_id = COALESCE(:category_id, bp.category_id)
      AND bp.author_id   = COALESCE(:author_id, bp.author_id)
    ORDER BY bp.created_at DESC;
"""

COUNT_FILTERED_POSTS_QUERY = """
    SELECT COUNT(*)
    FROM blog_posts
    WHERE is_published = :is_published
      AND category_id = COALESCE(:category_id, category_id)
      AND author_id   = COALESCE(:author_id, author_id)
"""


class BlogRepository(BaseRepository):
    def __init__(self, db: Database):
        super().__init__(db)
        logger.info("Blog Repository initialized")

    async def create_blog_post(self, blog_post: dict) -> Optional[BlogPostResponse]:
        try:
            logger.info("Creating a blog post")
            values = blog_post
            read_time = calculate_read_time(blog_post["content"])
            values["read_time"] = read_time
            post =  await self.db.fetch_one(CREATE_POST_QUERY, values)

            if not post:
                logger.error("Blog post creation failed")
                return None

            return BlogPostResponse(**post)
        except UniqueViolationError as unique_violation_error:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Blog post title already exists"
            ) from unique_violation_error
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def get_all_blog_posts(self, limit: int, offset: int) -> Optional[BlogPostPaginationResponse]:
        try:
            logger.info("Getting all blog posts, limit: %s, offset: %s", limit, offset)
            values = {
                "limit": limit,
                "offset": offset,
                "is_published": True
            }
            posts = await self.db.fetch_all(GET_ALL_PUBLISHED_POSTS_QUERY, values)
            count_posts = await self.db.fetch_one(COUNT_ALL_PUBLISHED_POSTS_QUERY, {"is_published": True})
            count_posts = count_posts["count"]

            if not posts:
                return {
                "posts": [],
                "number_of_posts": 0
            }

            blog_posts = [BlogPostResponse(**post) for post in posts]
            return BlogPostPaginationResponse(
                posts=blog_posts,
                number_of_posts=count_posts
            )
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e
    
    async def get_all_unpublished_blog_posts(self, limit: int, offset: int) -> Optional[BlogPostPaginationResponse]:
        try:
            logger.info("Getting all blog posts, limit: %s, offset: %s", limit, offset)
            values = {
                "limit": limit,
                "offset": offset,
                "is_published": False
            }
            posts = await self.db.fetch_all(GET_ALL_UNPUBLISHED_POSTS_QUERY, values)
            count_posts = await self.db.fetch_one(COUNT_ALL_UNPUBLISHED_POSTS_QUERY, {"is_published": False})
            count_posts = count_posts["count"]

            if not posts:
                return {
                "posts": [],
                "number_of_posts": 0
            }

            blog_posts = [BlogPostResponse(**post) for post in posts]
            return BlogPostPaginationResponse(
                posts=blog_posts,
                number_of_posts=count_posts
            )
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def get_blog_post_by_id(self, post_id: UUID, is_published: bool) -> Optional[BlogPostResponse]:
        try:
            logger.info("Getting blog post id: %s", post_id)
            values = {
                "id": post_id,
                "is_published": is_published
            }
            post = await self.db.fetch_one(GET_POST_BY_ID_QUERY, values)

            if not post:
                return None

            return BlogPostResponse(**post)
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def delete_blog_post_by_id(self, post_id: UUID, is_published: bool) -> Optional[BlogPostResponse]:
        try:
            logger.info("Deleting blog post id: %s", post_id)
            values = {
                "id": post_id,
                "is_published": is_published
            }
            post = await self.db.fetch_one(DELETE_POST_BY_ID_QUERY, values)

            if not post:
                return None

            return BlogPostResponse(**post)
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def update_blog_post_by_id(
        self, post_id: UUID, blog_post: BlogPostUpdate
    ) -> Optional[BlogPostResponse]:
        try:
            logger.info("Updating blog post id: %s", post_id)
            post = await self.db.fetch_one(GET_POST_BY_ID, {"id": post_id})

            if not post:
                return None

            values = blog_post.model_dump()
            values["id"] = post_id

            if values["thumbnail"] is None:
                values["thumbnail"] = post["thumbnail"]

            read_time = calculate_read_time(blog_post.content)
            values["read_time"] = read_time
            post = await self.db.fetch_one(UPDATE_POST_BY_ID_QUERY, values)

            if not post:
                return None

            return BlogPostResponse(**post)
        except Exception as e:
            logger.exception("Error: %s", e)

    async def search_blog_posts(self, search_term: str) -> Optional[BlogPostPaginationResponse]:
        try:
            logger.info("Searching for blog posts by title or content: %s", search_term)
            values = {
                "search_term": f"%{search_term}%",
                "is_published": True
            }
            posts = await self.db.fetch_all(SEARCH_POSTS_QUERY, values)
            count_posts = await self.db.fetch_one(COUNT_SEARCHED_POSTS_QUERY, values)
            count_posts = count_posts["count"]

            if not posts:
                return {
                "posts": [],
                "number_of_posts": 0
            }

            blog_posts = [BlogPostResponse(**post) for post in posts]
            return BlogPostPaginationResponse(
                posts=blog_posts,
                number_of_posts=count_posts
            )
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e
    
    async def filter_blog_posts(
        self, category_id: Optional[UUID] = None,
        author_id: Optional[UUID] = None,
    ) -> Optional[BlogPostPaginationResponse]:
        try:
            if category_id is not None and author_id is not None:
                logger.info("Filtering blog posts by category id: %s and author id: %s", category_id, author_id)
                values = {
                    "category_id": category_id,
                    "author_id": author_id,
                    "is_published": True
                }
            
                posts = await self.db.fetch_all(FILTER_POSTS_QUERY, values)
                count_posts = await self.db.fetch_one(COUNT_FILTERED_POSTS_QUERY, values)
                count = count_posts["count"]

                if not posts:
                    return {"posts": [], "number_of_posts": 0}
                
                blog_posts = [BlogPostResponse(**post) for post in posts]

                return BlogPostPaginationResponse(
                    posts=blog_posts,
                    number_of_posts=count
                )

            if category_id is not None and author_id is None:
                logger.info("Filtering blog posts by category id: %s", category_id)
                values = {
                    "category_id": category_id,
                    "is_published": True
                }
                posts = await self.db.fetch_all(FILTER_POSTS_QUERY, values)
                count_posts = await self.db.fetch_one(COUNT_FILTERED_POSTS_QUERY, values)
                count = count_posts["count"]

                if not posts:
                    return {"posts": [], "number_of_posts": 0}
                
                blog_posts = [BlogPostResponse(**post) for post in posts]

                return BlogPostPaginationResponse(
                    posts=blog_posts,
                    number_of_posts=count
                )

            if category_id is None and author_id is not None:
                logger.info("Filtering blog posts by author id: %s", author_id)
                values = {
                    "author_id": author_id,
                    "is_published": True
                }
                posts = await self.db.fetch_all(FILTER_POSTS_QUERY, values)
                count_posts = await self.db.fetch_one(COUNT_FILTERED_POSTS_QUERY, values)
                count = count_posts["count"]

                if not posts:
                    return {"posts": [], "number_of_posts": 0}
                
                blog_posts = [BlogPostResponse(**post) for post in posts]

                return BlogPostPaginationResponse(
                    posts=blog_posts,
                    number_of_posts=count
                )
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e
