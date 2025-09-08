from typing import Optional, List
from uuid import UUID
from asyncpg import UniqueViolationError
from databases import Database
from fastapi import HTTPException, status
from mavencode.core.logger import logger
from mavencode.db.repositories.base import BaseRepository
from mavencode.models.users.user import (
    UserInDB, UserUpdateRequest, UserPasswordUpdateRequest, User
)


CREATE_USER_QUERY = """
    INSERT INTO users
    (email, hashed_password, first_name, last_name, is_superuser, is_admin, username, is_active)
    VALUES (:email, :hashed_password, :first_name, :last_name, :is_superuser, :is_admin, :username, :is_active)
    RETURNING *;
"""

GET_ALL_USERS_QUERY = """
    SELECT * FROM users
    ORDER BY created_at DESC
    LIMIT :limit
    OFFSET :offset
"""

COUNT_ALL_USERS_QUERY = """
    SELECT COUNT(*) FROM users
"""

GET_USER_BY_ID_QUERY = """
    SELECT * FROM users
    WHERE id = :id
"""

GET_USER_BY_EMAIL_QUERY = """
    SELECT * FROM users
    WHERE email = :email
"""

UPDATE_USER_QUERY = """
    UPDATE users
    SET email = :email, first_name = :first_name,
    last_name = :last_name, is_superuser = :is_superuser,
    is_admin = :is_admin, is_active = :is_active, username = :username
    WHERE id = :id
    RETURNING *;
"""

UPDATE_USER_PASSWORD_QUERY = """
    UPDATE users
    SET hashed_password = :hashed_password
    WHERE id = :id
    RETURNING *;
"""

DELETE_USER_QUERY = """
    DELETE FROM users
    WHERE id = :id
    RETURNING *;
"""


class UserRepository(BaseRepository):
    def __init__(self, db: Database):
        super().__init__(db)
        from mavencode.services.auth_service import AuthPassword
        self.auth_password = AuthPassword()
        logger.info("User Repository initialized")

    async def create_user(self, user: User) -> Optional[UserInDB]:
        try:
            logger.info("Creating user email: %s", user.email)
            values = user.model_dump(exclude={"password"})
            hashed_password = self.auth_password.hash_password(user.password)
            values["hashed_password"] = hashed_password
            user = await self.db.fetch_one(CREATE_USER_QUERY, values)

            if not user:
                return None

            return UserInDB(**user)
        except UniqueViolationError:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="User with this email or username already exists"
            )
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def get_all_users(self, limit: int, offset: int) -> List[UserInDB] | list:
        try:
            logger.info("Getting all users")
            values={"limit": limit, "offset": offset}
            users = await self.db.fetch_all(GET_ALL_USERS_QUERY, values)
            count_users = await self.db.fetch_one(COUNT_ALL_USERS_QUERY)
            count_users = count_users["count"]

            if not users:
                return []

            return [UserInDB(**user) for user in users]
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def get_user_by_id(self, user_id: UUID) -> Optional[UserInDB]:
        try:
            logger.info("Getting user id: %s", user_id)
            values = {
                "id": user_id
            }
            user = await self.db.fetch_one(GET_USER_BY_ID_QUERY, values)

            if not user:
                return None

            return UserInDB(**user)
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def get_user_by_email(self, email: str) -> Optional[UserInDB]:
        try:
            logger.info("Getting user email: %s", email)
            values = {
                "email": email
            }
            user = await self.db.fetch_one(GET_USER_BY_EMAIL_QUERY, values)

            if not user:
                return None

            return UserInDB(**user)
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def update_user_by_id(self, user_id: UUID, user: UserUpdateRequest):
        try:
            logger.info("Updating user id: %s", user_id)
            values = user.model_dump()
            values["id"] = user_id
            user = await self.db.fetch_one(UPDATE_USER_QUERY, values)

            if not user:
                return None

            return UserInDB(**user)
        except UniqueViolationError:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="User with this email or username already exists"
            )
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def update_user_password_by_id(self, user_id: UUID, user: UserPasswordUpdateRequest):
        try:
            logger.info("Updating user password id: %s", user_id)
            hashed_password = self.auth_password.hash_password(user.new_password)
            values = {
                "id": user_id,
                "hashed_password": hashed_password,
            }
            user = await self.db.fetch_one(UPDATE_USER_PASSWORD_QUERY, values)

            if not user:
                return None

            return UserInDB(**user)
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e

    async def delete_user_by_id(self, user_id: UUID):
        try:
            logger.info("Deleting user id: %s", user_id)
            values = {
                "id": user_id
            }
            user = await self.db.fetch_one(DELETE_USER_QUERY, values)

            if not user:
                return None

            return UserInDB(**user)
        except Exception as e:
            logger.exception("Error: %s", e)
            raise e
