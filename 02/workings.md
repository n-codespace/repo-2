# Assignment 02: Docker – Container Management

## How to Run & Practice Container Management

### 1. From Terminal via Docker CLI
Open terminal in the `02/` directory:

```bash
# 1. Build the sample management image
docker build -t container-mgmt-app .

# 2. Run the container in detached (background) mode
docker run -d --name mgmt-test container-mgmt-app

# 3. Check container status
docker ps

# 4. View live logs from the container
docker logs -f mgmt-test

# 5. Execute commands inside the running container
docker exec -it mgmt-test ps aux

# 6. Pause and unpause the container
docker pause mgmt-test
docker unpause mgmt-test

# 7. Check container resource stats (CPU / Memory)
docker stats --no-stream mgmt-test

# 8. Stop and remove the container
docker stop mgmt-test
docker rm mgmt-test
```

---

### 2. Automated Scripts
- On **Windows**:
  ```cmd
  .\commands.bat
  ```
- On **Linux / macOS / Git Bash**:
  ```bash
  chmod +x commands.sh
  ./commands.sh
  ```

---

### 3. From Terminal via Docker Compose
```bash
# Start container
docker compose up -d

# Check status
docker compose ps

# View logs
docker compose logs -f

# Stop and delete container
docker compose down
```
