# Assignment 06: Build a Real CI Pipeline using Jenkins Scripted Pipeline (JavaScript)

## How to Run This Application

### 1. From Terminal via Node.js
Open terminal in `06/`:
```bash
# 1. Run unit tests using Node built-in test runner
node --test test_app.js
# Or via npm
npm test

# 2. Run application invoice calculation
node app.js
```

---

### 2. From Terminal via Dockerfile
```bash
# 1. Build Docker image
docker build -t real-ci-app-js .

# 2. Run container (executes tests and application)
docker run --rm real-ci-app-js
```

---

### 3. From Terminal via Docker Compose
```bash
docker compose up --build
```

---

### 4. Running in Jenkins Scripted Pipeline (Groovy)
1. In Jenkins Dashboard, click **New Item** -> Name: `JS-Scripted-CI-Pipeline` -> Choose **Pipeline** -> Click **OK**.
2. In the **Pipeline** configuration script box, paste the Groovy script from `06/Jenkinsfile`.
3. Click **Save** -> Click **Build Now**.
4. Check **Console Output** to verify the Groovy `node {}` lifecycle:
   - Code Checkout ➔ Environment Prep ➔ Node Unit Tests ➔ App Execution ➔ Artifact Archiving ➔ Notification & Cleanup.
