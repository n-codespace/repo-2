# Assignment 04: Student Attendance System (JavaScript / Node.js)

## How to Run This Application

### 1. From Terminal via Node.js (JavaScript)
Open terminal in the `04/` directory:
```bash
# 1. Run the Attendance System (marks sample data & prints summary table)
node attendance.js

# 2. Run unit tests using Node built-in test runner
node --test test_attendance.js
# Or using npm
npm test
```

---

### 2. From Terminal via Dockerfile
```bash
# 1. Build Docker image
docker build -t attendance-app-js .

# 2. Run container
docker run --rm attendance-app-js
```

---

### 3. From Terminal via Docker Compose (With Persistence)
```bash
# Runs the container mounted to a persistent Docker volume
docker compose up --build
```

---

### 4. Running in Jenkins CI
1. Create a **Pipeline** job named `Attendance-CI-JS`.
2. Point SCM to your repository or paste the contents of `Jenkinsfile`.
3. Click **Build Now** to execute the tests and generate the attendance report in Jenkins Console Output.
