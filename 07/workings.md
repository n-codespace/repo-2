# Assignment 07: Write a Dockerfile to Containerize a JavaScript/Node.js App

## How to Run This Application

### 1. From Terminal via Node.js Directly
Open terminal in `07/`:
```bash
# Run web server directly
node app.js
```
Open browser at: **`http://localhost:5000`**

---

### 2. From Terminal via Dockerfile (Core Assignment Task)
Make sure Docker Desktop is running, then open terminal in `07/`:
```bash
# 1. Build the Docker image from Dockerfile
docker build -t nodejs-docker-app:v1 .

# 2. Run the container in background, mapping host port 5000
docker run -d --name node-live -p 5000:5000 nodejs-docker-app:v1

# 3. Check status
docker ps

# 4. Test endpoints
curl http://localhost:5000/
curl http://localhost:5000/health

# 5. View logs
docker logs node-live

# 6. Stop and remove container
docker stop node-live
docker rm node-live
```
*(On Windows, you can also run `.\run_docker.bat`)*

---

### 3. From Terminal via Docker Compose
```bash
# Start container
docker compose up -d --build

# View status
docker compose ps

# Stop container
docker compose down
```

---

### 4. Running in Jenkins CI
1. Create a **Pipeline** job named `NodeJS-Docker-Build`.
2. Paste the script from `07/Jenkinsfile`.
3. Click **Build Now** to watch Jenkins build the image and test the live container endpoint automatically.
