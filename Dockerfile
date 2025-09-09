# ===========================
# FRONTEND BUILD STAGE
# ===========================
FROM node:20-alpine AS frontend-build

WORKDIR /app/frontend

# Install dependencies
COPY frontend/package*.json ./
RUN npm ci

# Copy frontend source
COPY frontend/ ./

# Build production assets
RUN npm run build


# ===========================
# BACKEND BUILD STAGE
# ===========================
FROM python:3.12-slim AS backend-build

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
        curl build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry
ENV POETRY_VERSION=2.0.0
RUN curl -sSL https://install.python-poetry.org | python3 - && \
    ln -s /root/.local/bin/poetry /usr/local/bin/poetry

# Copy backend dependency files first (better caching)
COPY backend/pyproject.toml backend/poetry.lock ./

RUN poetry config virtualenvs.in-project true
RUN poetry install --no-root --no-interaction --no-ansi

# Copy backend source code
COPY backend/ ./


# ===========================
# BACKEND RUNTIME STAGE
# ===========================
FROM python:3.12-slim AS runtime

WORKDIR /app

# Copy virtualenv and backend code
COPY --from=backend-build /app/.venv .venv
COPY --from=backend-build /app ./backend

# Copy frontend build output into backend static folder
COPY --from=frontend-build /app/frontend/build ./backend/static

# Add venv to PATH
ENV PATH="/app/.venv/bin:$PATH"

# Environment (can be overridden by docker-compose)
ENV SERVER=mavencode.api.server

# Start backend
CMD python3 -m ${SERVER}