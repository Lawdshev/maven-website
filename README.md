# MavenCode Website

A simple application built with a modern API architecture using FastAPI, and Docker.

## Overview

The application is designed as a collection of applications that communicate with one entry point via REST APIs, allowing for scalability, resilience, and ease of development.

## Application Architecture

The system is composed of seven (7) applications:
Application entry point: `mavencode.api.server`
Base URL: `http://<ip>:<port>/v1/mvc` in this case `http://0.0.0.0:9000/v1/mvc`

### 1. User Application

- **Path:** `/mavencode/api/routes/users/`
- **Responsibilities:**
  - User registration and management
  - Authentication using OAuth2 with Password flow
  - JWT token generation and validation
  - Authorization for other applications
- **Key Endpoints:**
  - `POST /create` - Create a new user account
  - `POST /login` - Log in to user account
  - `PATCH /{user_id}` - Update user details
  - `PATCH /update-password` - Change user password
  - `DELETE /{user_id}` - Delete user account
  - `GET /users` - GET all the users
  - `GET /{user_id}` - GET user detail
  - `GET /users/me/` - Get current user information

### 2. Blog Application

- **Path:** `/mavencode/api/routes/blog`
- **Responsibilities:**
  - Blog posts management
  - Create a new blog post
  - Retrieve blog posts
  - Get a blog post
  - Search blog posts
  - filter blog posts
  - Update a blog post
  - Delete a blog post
- **Key Endpoints:**
  - `POST /posts/create` - Create new blog post
  - `GET /posts` - List all blog posts
  - `GET /posts/unpublished` - List of unpublished posts
  - `GET /posts/{app_id}` - Get post details
  - `GET /posts/search` - Search posts
  - `GET /posts/filter` - Filter posts by category id
  - `PATCH /posts/{app_id}` - Update post
  - `DELETE /posts/{app_id}` - Delete post

### 3. Blog Category Application

- **Path:** `/mavencode/api/routes/blog/categories`
- **Responsibilities:**
  - List of categories
  - Create category
  - Get category details
  - Update category
  - Delete category
- **Key Endpoints:**
  - `GET /contact-categories/` - List of categories
  - `POST /contact-categories/create` - Create category
  - `GET /contact-categories/{category_id}` - Get category details
  - `PATCH /contact-categories/{category_id}` Update category
  - `DELETE /contact-categories/{category_id}` - Delete category

## Getting Started

### Prerequisites

- Docker and Docker Compose (v2.0+)
- Make (v3.81+)
- Python 3.11+ (for local development without Docker)

### Environment Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/MavenCode/MavenCode2025.git
   cd vfm
   ```
2. Set up environment variables (optional for development):
   Create `.env` files in each component directory for custom configurations, or rely on the defaults provided in the Docker Compose file.

### Local Development

#### Using Make

```bash
# Start all services
make up

# Build all Docker images, migrate database and start the services
make all

# Or just build all Docker images

make build

# Run tests
make test

# View logs
make logs

# Stop all services
make down

# Clean up resources
make clean
```

#### Manual Service Testing

After starting the application, you can access them at:

- MavenCode Backend: http://0.0.0.0:9000/v1/mvc/docs
- MavenCode Frontend: http://127.0.0.1:3000

Each section provides Swagger UI documentation for testing the APIs.

## Deployment

### Using Make

The project uses Kustomize for deployment to different environments:

```bash
# Deploy to development
make deploy-dev

# Deploy to staging
make deploy-stg

# Deploy to production
make deploy-prod
```

## Project Structure

```bash
/
├── mavencode/     # All applications
│   ├── api/                  # APIs
│   │   ├── routes/           # APIs routes
│   │   └── server.py         # FastAPI application
│   ├── core/                 # Application configs
│   ├── db/                   # Database files
│   └── models/               # Pydantic models
│   └── services/             # Services
│   └── alembic.ini           # Alembic config file
│   └── poetry.lock           # Poetry dependecies lock file
│   └── pyproject.toml        # Poetry settings
├── docker-compose.yml        # Local development setup
├── Makefile                  # Build and deployment commands
└── README.md                 # This file
```

## Architecture

### Technical Stack

- **Backend Framework**: FastAPI (Python 3.11)
- **Authentication**: OAuth2 with JWT tokens
- **Containerization**: Docker
- **Build Automation**: Make

### Service Interaction

The services interact with each other through RESTful HTTP APIs:

1. **Authentication Flow**:

   - Client requests token from Auth Service
   - Auth Service validates credentials and returns JWT
   - Client includes JWT in requests to other services
   - Services validate JWT with Auth Service

### Security

- JWT-based authentication
- Role-based access control
- Secure communication between services
- Environment-specific secrets management

## Development Roadmap

- [ ] Add persistent storage (databases) for each service
- [ ] Implement real password hashing
- [ ] Add logging and monitoring
- [ ] Implement comprehensive error handling
- [ ] Write unit and integration tests
- [ ] Add CI/CD pipeline
- [ ] Consider API gateway or service mesh

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Write tests for your changes
5. Submit a pull request

## Troubleshooting

### Common Issues

- **Services not communicating**: Ensure all containers are running on the same network
- **Authentication failing**: Check if the JWT secret key is consistent across services
- **Container build errors**: Verify Dockerfile and dependencies

### Logs

To view logs for all services:

```bash
make logs
```

## Contact

For questions or support, please contact the MavenCode team.
