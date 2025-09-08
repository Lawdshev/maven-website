from fastapi import APIRouter
from mavencode.api.routes.blog.routes.category import router as category_router
from mavencode.api.routes.blog.routes.posts import router as blog_router

router = APIRouter()

router.include_router(category_router, prefix="/categories", tags=["Blog Categories"])
router.include_router(blog_router, prefix="/blog", tags=["Blog Posts"])
