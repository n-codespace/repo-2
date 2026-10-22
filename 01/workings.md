# Assignment 01: Student Skill Portfolio Website (JavaScript & DevOps)

## How to Run This Application

### 1. Direct Browser (No setup needed)
Double-click `index.html` or right-click -> "Open with Chrome / Edge".

---

### 2. From Terminal via Node.js
Open your terminal in the `01/` folder:
```bash
# Check node installation
node -v

# Run the web server
node server.js
```
Open your browser and visit: **`http://localhost:3000`**

---

### 3. From Terminal via Dockerfile
Make sure Docker Desktop is running, then open terminal in `01/`:
```bash
# 1. Build the Docker image
docker build -t student-portfolio .

# 2. Run the container on port 3000
docker run -d -p 3000:3000 --name my-portfolio student-portfolio

# 3. Check running container
docker ps

# 4. Stop and remove when done
docker stop my-portfolio
docker rm my-portfolio
```
Open your browser and visit: **`http://localhost:3000`**

---

### 4. From Terminal via Docker Compose
Open terminal in `01/`:
```bash
# Start container in detached mode
docker compose up -d --build

# View container status
docker compose ps

# View real-time logs
docker compose logs -f

# Stop and remove container
docker compose down
```

---

### 5. Running in Jenkins CI
1. Open Jenkins Dashboard (`http://localhost:8080`).
2. Click **New Item** -> Name: `Portfolio-Pipeline` -> Choose **Pipeline** -> Click **OK**.
3. Under **Pipeline Script**, paste the content of `Jenkinsfile` (or select *Pipeline script from SCM*).
4. Click **Save** -> Click **Build Now**.
5. Check **Console Output** to see the automated build and test.
