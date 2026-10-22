# Assignment 07: Write a Dockerfile to Containerize a Python/Flask App

## How to Run This Application

### 1. From Terminal via Python Directly
Open terminal in `07/`:
```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run Flask server
python app.py
```
Open browser at: **`http://localhost:5000`**

---

### 2. From Terminal via Dockerfile (Core Assignment Task)
Make sure Docker Desktop is running, then open terminal in `07/`:
```bash
# 1. Build the Docker image from Dockerfile
docker build -t flask-docker-app:v1 .

# 2. Run the container in background, mapping host port 5000
docker run -d --name flask-live -p 5000:5000 flask-docker-app:v1

# 3. Check status
docker ps

# 4. Test endpoints
curl http://localhost:5000/
curl http://localhost:5000/health

# 5. View logs
docker logs flask-live

# 6. Stop and remove container
docker stop flask-live
docker rm flask-live
```
*(On Windows, you can also double-click `run_docker.bat`)*

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
1. Create a **Pipeline** job named `Flask-Docker-Build`.
2. Paste the script from `07/Jenkinsfile`.
3. Click **Build Now** to watch Jenkins build the image and test the live container endpoint automatically.
