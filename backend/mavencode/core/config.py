"""
Centralized logic for declaring application environment variables
"""

import pathlib
from databases import DatabaseURL
from starlette.config import Config
from starlette.datastructures import Secret

env_path = pathlib.Path(__file__).resolve().parents[0] / ".env"
config = Config(env_path)

PROJECT_NAME = config("APP_NAME", cast=str)
VERSION = config("APP_VERSION", cast=str)
ALLOWED_ORIGINS = config("ALLOWED_ORIGINS", cast=list)
SECRET_KEY = config("SECRET_KEY", cast=str)
ENV = config("ENV", cast=str)

POSTGRES_USER = config("POSTGRES_USER", cast=str)
POSTGRES_PASSWORD = config("POSTGRES_PASSWORD", cast=Secret)
POSTGRES_SERVER = config("POSTGRES_HOST", cast=str)
POSTGRES_PORT = config("POSTGRES_PORT", cast=str, default="5432")
POSTGRES_DB = config("POSTGRES_DB", cast=str)

db_url = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_SERVER}:{POSTGRES_PORT}/{POSTGRES_DB}"

DATABASE_URL = config(
    "DATABASE_URL",
    cast=DatabaseURL,
    default=db_url
)

S3_ENDPOINT_URL = config("S3_ENDPOINT_URL", cast=str)
S3_BUCKET = config("S3_BUCKET", cast=str)
AWS_REGION = config("AWS_REGION", cast=str, default="us-east-1")
AWS_SECRET_ACCESS_KEY = config("AWS_SECRET_ACCESS_KEY", cast=Secret)
AWS_ACCESS_KEY_ID = config("AWS_ACCESS_KEY_ID", cast=str)
SES_SENDER = config("SES_SENDER", cast=str)

ACCESS_TOKEN_EXPIRE_MINS = config("ACCESS_TOKEN_EXPIRE_MINS", cast=int, default=30)
JWT_TOKEN_ALGORITHM = config("JWT_TOKEN_ALGORITHM", cast=str, default="HS256")
JWT_TOKEN_SECRET_KEY = config("JWT_TOKEN_SECRET_KEY", cast=str)
