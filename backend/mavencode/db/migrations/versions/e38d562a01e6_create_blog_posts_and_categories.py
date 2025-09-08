"""Create blog posts and categories

Revision ID: e38d562a01e6
Revises: 
Create Date: 2025-08-26 19:40:39.002638

"""
from typing import Sequence, Union, Tuple

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision: str = 'e38d562a01e6'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def create_updated_at_trigger() -> None:
    op.execute(
        """
        CREATE OR REPLACE FUNCTION update_updated_at_column()
            RETURNS TRIGGER AS
        $$
        BEGIN
            NEW.updated_at = now();
            RETURN NEW;
        END;
        $$ language 'plpgsql';
        """
    )


def timestamps(indexed: bool = False) -> Tuple[sa.Column, sa.Column]:
    return (
        sa.Column(
            "created_at",
            sa.TIMESTAMP(timezone=True),
            server_default=sa.func.now(),
            nullable=False,
            index=indexed,
        ),
        sa.Column(
            "updated_at",
            sa.TIMESTAMP(timezone=True),
            server_default=sa.func.now(),
            nullable=False,
            index=indexed,
        ),
    )


def create_users_table() -> None:
    op.create_table(
        "users",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True, server_default=sa.text("gen_random_uuid()")),
        sa.Column("first_name", sa.String(50), nullable=True),
        sa.Column("last_name", sa.String(50), nullable=True),
        sa.Column("username", sa.String(50), nullable=False, unique=True),
        sa.Column("email", sa.String(100), nullable=False, unique=True),
        sa.Column("hashed_password", sa.String(200), nullable=False),
        sa.Column("is_admin", sa.Boolean, nullable=False, default=False),
        sa.Column("is_active", sa.Boolean, nullable=True, default=True),
        sa.Column("is_superuser", sa.Boolean, nullable=False, default=False),
        *timestamps(indexed=True),
    )

    op.create_index("ix_users_email", "users", ["email"], unique=True)

    op.execute(
        """
        CREATE TRIGGER update_users_modtime
            BEFORE UPDATE
            ON users
            FOR EACH ROW
        EXECUTE PROCEDURE update_updated_at_column();
        """
    )


def create_blog_posts_table() -> None:
    op.create_table(
        "blog_posts",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True, server_default=sa.text("gen_random_uuid()")),
        sa.Column("title", sa.String(150), nullable=False, unique=True),
        sa.Column("content", sa.Text, nullable=False),
        sa.Column("thumbnail", sa.String(200), nullable=True),
        sa.Column("category_id", postgresql.UUID(as_uuid=True), 
                  sa.ForeignKey("categories.id", ondelete="CASCADE"), nullable=False),
        sa.Column("is_published", sa.Boolean, nullable=False, default=True),
        sa.Column("author_id", postgresql.UUID(as_uuid=True), 
                  sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False),
        sa.Column("read_time", sa.Integer, nullable=False, default=0),
        *timestamps(indexed=True),
    )

    op.create_index("ix_blog_posts_title", "blog_posts", ["title"], unique=True)
    op.create_index("ix_blog_posts_category_id", "blog_posts", ["category_id"], unique=False)
    op.create_index("ix_blog_posts_author_id", "blog_posts", ["author_id"], unique=False)
    op.create_index("ix_blog_posts_is_published", "blog_posts", ["is_published"], unique=False)

    op.execute(
        """
        CREATE TRIGGER update_blog_posts_modtime
            BEFORE UPDATE
            ON blog_posts
            FOR EACH ROW
        EXECUTE PROCEDURE update_updated_at_column();
        """
    )


def create_categories_table() -> None:
    op.create_table(
        "categories",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True, server_default=sa.text("gen_random_uuid()")),
        sa.Column("name", sa.String(50), nullable=False, unique=True),
        *timestamps(indexed=True),
    )

    op.create_index("ix_categories_name", "categories", ["name"], unique=True)

    op.execute(
        """
        CREATE TRIGGER update_categories_modtime
            BEFORE UPDATE
            ON categories
            FOR EACH ROW
        EXECUTE PROCEDURE update_updated_at_column();
        """
    )


def upgrade() -> None:
    """Upgrade schema."""
    create_updated_at_trigger()
    create_users_table()
    create_categories_table()
    create_blog_posts_table()


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_index("ix_users_email", table_name="users")
    op.drop_table("users")
    op.drop_index("ix_blog_posts_is_published", table_name="blog_posts")
    op.drop_index("ix_blog_posts_author_id", table_name="blog_posts")
    op.drop_index("ix_blog_posts_category_id", table_name="blog_posts")
    op.drop_index("ix_blog_posts_title", table_name="blog_posts")
    op.drop_table("blog_posts")
    op.drop_index("ix_categories_name", table_name="categories")
    op.drop_table("categories")
