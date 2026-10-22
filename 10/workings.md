# Assignment 10: Docker Compose: MultiContainer Web Application (Node.js & Redis)

## How to Run This Application

### 1. From Terminal via Docker Compose (Primary Task)
Open terminal in `10/`:
```bash
# 1. Build and start all services in background
docker compose up -d --build

# 2. Verify both containers ('web' and 'redis') are running
docker compose ps

# 3. Test the visit counter in your browser
Open: http://localhost:5000
(Refresh multiple times: the counter increments inside Redis!)

# 4. View aggregated service logs
docker compose logs -f

# 5. Stop and clean up containers and volumes
docker compose down -v
```
*(On Windows, you can also run `.\run_compose.bat`)*

---

### 2. From Terminal via Individual Docker Commands (Manual Equivalent)
```bash
# 1. Create a shared user-defined bridge network
docker network create my-net

# 2. Run Redis container
docker run -d --name my-redis --network my-net redis:7-alpine

# 3. Build Web image
docker build -t my-web-app-js .

# 4. Run Web container connected to the same network
docker run -d --name my-web --network my-net -p 5000:5000 -e REDIS_HOST=my-redis my-web-app-js

# 5. Stop and cleanup
docker stop my-web my-redis && docker rm my-web my-redis && docker network rm my-net
```

---

### 3. Running in Jenkins CI
1. Create a **Pipeline** job named `Compose-MultiContainer-CI`.
2. Paste the contents of `10/Jenkinsfile`.
3. Click **Build Now** to watch Jenkins spin up the multi-container stack, run automated endpoint checks, and tear down the environment.
