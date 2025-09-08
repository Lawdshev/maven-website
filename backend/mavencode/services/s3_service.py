from __future__ import annotations
import uuid
from datetime import datetime, timezone
from typing import BinaryIO, Literal
import boto3
from botocore.client import Config
from mavencode.core.config import (
    S3_ENDPOINT_URL, AWS_REGION, S3_BUCKET,
    AWS_SECRET_ACCESS_KEY, AWS_ACCESS_KEY_ID
)
from mavencode.core.logger import logger


PAYLOAD_FOLDERS: dict[str, str] = {
    "blog": "blog",
    "provider": "provider",
    "service": "service",
}

ALLOWED_IMAGE_TYPES = {"image/jpeg", "image/png", "image/webp", "image/gif"}

_s3 = boto3.client(
    "s3",
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_REGION,
    endpoint_url=S3_ENDPOINT_URL or None,
    config=Config(s3={"addressing_style": "path"}),
)


def build_s3_key(
    payload_type: Literal["blog", "provider", "service"],
    trace_id: uuid.UUID,
    original_filename: str,
) -> str:
    """
    Build an S3 key based on payload type, trace_id, and original filename.

    Example:
        blog/2025/08/29/<trace_id>_file.png
    """
    logger.info("Building S3 key for payload type: %s", payload_type)

    if payload_type not in PAYLOAD_FOLDERS:
        logger.error("Invalid payload type: %s", payload_type)
        raise ValueError(f"Invalid payload type: {payload_type}")

    now = datetime.now(timezone.utc)
    subfolder = PAYLOAD_FOLDERS[payload_type]

    key = f"{subfolder}/{now:%Y/%m/%d}/{trace_id}_{original_filename}"
    logger.debug("Generated S3 key: %s", key)
    return key


def upload_image_fileobj(
    key: str,
    fileobj: BinaryIO,
    content_type: str,
    bucket: str = S3_BUCKET,
) -> str:
    """
    Upload an image file-like object to S3.

    Args:
        bucket: S3 bucket name
        key: Path/key in S3
        fileobj: File-like object to upload
        content_type: MIME type of the image (must be one of ALLOWED_IMAGE_TYPES)

    Returns:
        str: S3 URI of the uploaded file
    """
    if content_type not in ALLOWED_IMAGE_TYPES:
        logger.error("Invalid image content type: %s", content_type)
        raise ValueError(
            f"Invalid content type '{content_type}'. Allowed types: {', '.join(ALLOWED_IMAGE_TYPES)}"
        )

    logger.info("Uploading image to S3: bucket=%s, key=%s", bucket, key)

    try:
        _s3.upload_fileobj(
            Fileobj=fileobj,
            Bucket=bucket,
            Key=key,
            ExtraArgs={"ContentType": content_type},
        )
        s3_uri = f"s3://{bucket}/{key}"
        logger.info("Image successfully uploaded: %s", s3_uri)
        return s3_uri
    except Exception as e:
        logger.exception("Failed to upload image to S3: %s", e)
        raise RuntimeError(f"Failed to upload image to S3: {e}") from e
