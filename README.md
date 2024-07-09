# Hello neustadt!

## Setup Instructions

### Prerequisites

- Docker
- Docker Compose
- Motivation and time to test this

### Backend Setup

1. Navigate to the project root and start the Docker containers:
    ```bash
    docker-compose up -d
    ```

2. Run migrations:
    ```bash
    docker-compose exec app php artisan migrate
    ```

3. Run the queue worker:
    ```bash
    docker-compose exec app php artisan queue:work
    ```

### API Endpoints

- **Get all sets:** `GET /sets`
- **Get all cards:** `GET /cards`
- **Fetch and store cards by set:** `POST /cards` with payload `{"set": "set_code"}`

### Running Tests

To run tests, use the following command:
```bash
docker-compose exec app php artisan test
    ```

### Have fun!
