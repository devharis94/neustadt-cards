# Hello neustadt!

## Setup Instructions

### Prerequisites

- Docker
- Docker Compose
- Motivation and time to test this

### Backend Setup

0. Take the .env file from the email you got and place it in the root of the "backend" folder

1. Navigate to the project root and start the Docker containers:
    ```bash
    docker-compose up -d --build
    ```
2. Run composer
    ```bash
    docker-compose run --rm app composer install
    ```

3. Run migrations:
    ```bash
    docker-compose exec app php artisan migrate
    ```

4. Run the queue worker:
    ```bash
    docker-compose exec app php artisan queue:work
    ```

5. Navigate to 
   http://localhost:3000 for the frontend
   http://localhost:8000/cards or http://localhost:8000/sets for the backend

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
