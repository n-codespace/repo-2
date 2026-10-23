# Assignment 06: Build a Simple CI Pipeline using Jenkins Scripted Pipeline

## How to Run This Application

### 1. From Terminal via Node.js
Open terminal in `06/`:
```bash
# 1. Run unit tests
node --test test_app.js

# 2. Run application
node app.js
```

---

### 2. From Terminal via Dockerfile
```bash
# 1. Build Docker image
docker build -t simple-ci-app .

# 2. Run container (runs tests + app automatically)
docker run --rm simple-ci-app
```

---

### 3. From Terminal via Docker Compose
```bash
docker compose up --build
```

---

### 4. Running in Jenkins Scripted Pipeline
1. In Jenkins Dashboard, click **New Item** -> Name: `Simple-Scripted-CI` -> Choose **Pipeline** -> Click **OK**.
2. In the **Pipeline** configuration script box, paste the code from `06/Jenkinsfile`.
3. Click **Save** -> Click **Build Now**.
4. Check **Console Output** to verify all 4 stages pass:
   - `Checkout Code` ➔ `Run Automated Tests` ➔ `Run Application` ➔ `Pipeline Finished`.
