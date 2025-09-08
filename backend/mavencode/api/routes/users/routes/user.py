from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, status
from mavencode.core.logger import logger
from mavencode.db.repositories.users.user import UserRepository as UsersRepo
from mavencode.models.users.user import (
    User, UserResponse, UserUpdateRequest,
    UserPasswordUpdateRequest, UserInDB
)
from mavencode.services.auth_service import (
    get_current_user, AuthPassword, AppJWTBearer
)
from mavencode.db.database import get_repository
from mavencode.models.users.token import AuthToken
from fastapi.security import OAuth2PasswordRequestForm
from datetime import datetime, timezone, timedelta
from mavencode.core.config import ACCESS_TOKEN_EXPIRE_MINS

router = APIRouter()


@router.post("/create", response_model=UserResponse)
async def create_user(
    user: User, 
    user_repo: UsersRepo = Depends(get_repository(UsersRepo))
) -> UserResponse:
    try:
        logger.info("Creating user email: %s", user.email)
        existing_user = await user_repo.get_user_by_email(user.email)

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, 
                detail="Email already registered"
            )

        new_user_data = await user_repo.create_user(user=user)

        if not new_user_data:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, 
                detail="Failed to create new user"
            )

        return new_user_data
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.get("/", response_model=list[UserResponse])
async def get_all_users(
    limit: int = 10,
    offset: int = 0,
    user_repo: UsersRepo = Depends(get_repository(UsersRepo)),
    current_user: UserInDB = Depends(get_current_user)
):
    try:
        logger.info("Getting all users, limit: %s, offset: %s", limit, offset)
        if not current_user.is_superuser or not current_user.is_admin:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, 
                detail="Forbidden"
            )
        users = await user_repo.get_all_users(limit, offset)

        if not users:
            return []

        return users
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.get("/me", response_model=UserResponse)
def current_user_profile(
    current_user: UserInDB = Depends(get_current_user)
):
    try:
        logger.info("Getting current user email: %s", current_user.email)
        return UserResponse(**current_user.model_dump())
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.get("/{user_id}", response_model=UserResponse)
async def get_user_by_id(
    user_id: UUID,
    user_repo: UsersRepo = Depends(get_repository(UsersRepo)),
    current_user: UserInDB = Depends(get_current_user)
):
    try:
        logger.info("Getting user id: %s", user_id)
        if not current_user.is_superuser or not current_user.is_admin:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, 
                detail="Forbidden"
            )
        user = await user_repo.get_user_by_id(user_id=user_id)

        if not user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail="User not found"
            )

        return UserResponse(**user.model_dump())
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user_by_id(
    user_id: UUID,
    user_repo: UsersRepo = Depends(get_repository(UsersRepo)),
    current_user: UserInDB = Depends(get_current_user)
):
    try:
        logger.info("Deleting user id: %s", user_id)
        if not current_user.is_superuser or not current_user.is_admin:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, 
                detail="Forbidden"
            )
        user = await user_repo.delete_user_by_id(user_id=user_id)

        if not user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail="User not found"
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


@router.patch("/update-password", response_model=UserResponse)
async def update_user_password(
    user: UserPasswordUpdateRequest, user_id: UUID,
    current_user: UserInDB = Depends(get_current_user),
    user_repo: UsersRepo = Depends(get_repository(UsersRepo))
):
    try:
        logger.info("Updating user id: %s", current_user.id)
        if not current_user.is_superuser or not current_user.is_admin:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, 
                detail="Forbidden"
            )

        get_user = await user_repo.get_user_by_id(user_id=user_id)

        if not get_user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail="User not found"
            )

        if not AuthPassword().verify_password(user.old_password, get_user.hashed_password):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, 
                detail="Invalid credentials"
            )

        updated_pass = await user_repo.update_user_password_by_id(user_id=user_id, user=user)

        if not updated_pass:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail="User not found"
            )

        return UserResponse(**updated_pass.model_dump())
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.patch("/{user_id}", response_model=UserResponse)
async def update_user(
    user: UserUpdateRequest, user_id: UUID,
    current_user: UserInDB = Depends(get_current_user),
    user_repo: UsersRepo = Depends(get_repository(UsersRepo))
):
    try:
        logger.info("Updating user id: %s", current_user.id)
        if not current_user.is_superuser or not current_user.is_admin:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, 
                detail="Forbidden"
            )
        updated_user = await user_repo.update_user_by_id(user_id=user_id, user=user)

        if not updated_user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail="User not found"
            )

        return UserResponse(**updated_user.model_dump())
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e


@router.post("/login", response_model=AuthToken)
async def login(
    data: OAuth2PasswordRequestForm = Depends(),
    user_repo: UsersRepo = Depends(get_repository(UsersRepo))
):
    try:
        logger.info("Logging in user email: %s", data.username)
        user = await user_repo.get_user_by_email(email=data.username)

        if not user or not AuthPassword().verify_password(data.password, user.hashed_password):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

        now = datetime.now(timezone.utc)

        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINS)
        access_token = AppJWTBearer.create_access_token(
            data={"sub": user.email},
            expires_delta=access_token_expires
        )

        token_info = {
            "access_token": access_token,
            "token_type": "bearer",
            "access_token_expires": now + access_token_expires
        }

        return AuthToken(**token_info)
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        ) from e
