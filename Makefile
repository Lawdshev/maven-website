.PHONY: build migrate up down clean createdb

# Docker and Docker Compose configurations
COMPOSE_FILE = docker-compose.yml

# Service names
SERVICES = mavencode

# Docker image names
REGISTRY = 
PROJECT = mavencode
VERSION = latest

# Database settings (change these if needed)
DB_NAME = db
DB_USER = db
DB_CONTAINER = db

# Create database if it does not exist
createdb:
	@echo "Creating database $(DB_NAME) if it does not exist..."
	docker compose -f $(COMPOSE_FILE) exec -T $(DB_CONTAINER) \
	psql -U $(DB_USER) -tc "SELECT 1 FROM pg_database WHERE datname = '$(DB_NAME)'" | grep -q 1 \
	|| docker compose -f $(COMPOSE_FILE) exec -T $(DB_CONTAINER) createdb -U $(DB_USER) $(DB_NAME)

# Run DB Migration
migrate: createdb
	@echo "Migrating database schemas..."
	cd backend && alembic upgrade head
	@echo "✅ Database migration completed!"

# Build all Docker images
build:
	@echo "Building Docker images..."
	docker compose -f $(COMPOSE_FILE) build

# Build a specific service
build-%:
	@echo "Building Docker image for $*..."
	docker compose -f $(COMPOSE_FILE) build $*

# Start all services
up:
	@echo "Starting all services..."
	docker compose -f $(COMPOSE_FILE) up -d
	@echo "MavenCode backend docs => http://localhost:9012/v1/mvc/docs"
	@echo "MavenCode frontend Service => http://localhost:3000"

# Start a specific service
up-%:
	@echo "Starting service $*..."
	docker compose -f $(COMPOSE_FILE) up -d $*

# Stop all services
down:
	@echo "Stopping all services..."
	docker compose -f $(COMPOSE_FILE) down

# Stop a specific service
down-%:
	@echo "Stopping service $*..."
	docker compose -f $(COMPOSE_FILE) stop $*

# Show logs for all services
logs:
	docker compose -f $(COMPOSE_FILE) logs -f

# Show logs for a specific service
logs-%:
	docker compose -f $(COMPOSE_FILE) logs -f $*

# Clean up Docker resources
clean:
	@echo "Cleaning up Docker resources..."
	docker compose -f $(COMPOSE_FILE) down --volumes --remove-orphans

# Run full development workflow
all: build up createdb migrate
	@echo "======================================"
	@echo "✅ All services are up and database is ready!"
	@echo "👉 Vine Family Medicine docs: http://localhost:9012/v1/mvc/docs"
	@echo "======================================"

# Show help information
help:
	@echo "MavenCode Application Microservices Management"
	@echo ""
	@echo "Usage:"
	@echo "  make build         Build all Docker images"
	@echo "  make build-SERVICE Build a specific service's Docker image"
	@echo "  make up            Start all services"
	@echo "  make up-SERVICE    Start a specific service"
	@echo "  make down          Stop all services"
	@echo "  make down-SERVICE  Stop a specific service"
	@echo "  make logs          Show logs for all services"
	@echo "  make logs-SERVICE  Show logs for a specific service"
	@echo "  make clean         Clean up Docker resources"
	@echo "  make createdb      Create database if it does not exist"
	@echo "  make migrate       Migrate database schemas"
	@echo ""
	@echo "Services:"
	@echo "  - blog-service"