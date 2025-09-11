# ===========================
# FRONTEND BUILD STAGE
# ===========================
FROM node:20-alpine AS frontend-build

WORKDIR /app/frontend

# Install dependencies
COPY frontend/package*.json ./
RUN npm install --legacy-peer-deps

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

# Copy Alembic config (so migrations can run inside container)
COPY alembic.ini ./

# Copy backend source code
COPY backend/mavencode /app/mavencode


# ===========================
# BACKEND RUNTIME STAGE
# ===========================
FROM python:3.12-slim AS backend-runtime

WORKDIR /app

# Copy virtualenv and backend code
COPY --from=backend-build /app/.venv .venv
COPY --from=backend-build /app/mavencode ./mavencode
COPY --from=backend-build /app/alembic.ini ./alembic.ini

# Add venv to PATH
ENV PATH="/app/.venv/bin:$PATH"

# Start backend (make sure it binds 0.0.0.0:9012)
CMD python3 -m ${SERVER}


# ===========================
# FRONTEND RUNTIME (NEXT.JS SERVER)
# ===========================
FROM node:20-alpine AS frontend-runtime

WORKDIR /app/frontend

# Copy built frontend (and node_modules for runtime)
COPY --from=frontend-build /app/frontend ./

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Start Next.js server
CMD ["npm", "start"]
