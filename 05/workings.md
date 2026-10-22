# Assignment 05: Build a Pipeline on Jenkins and Build a Python Project

## How to Run This Application

### 1. From Terminal via Python
Open terminal in `05/`:
```bash
# 1. Run unit tests using Python built-in unittest
python -m unittest test_calculator.py -v

# 2. Run the calculator program
python calculator.py
```

---

### 2. From Terminal via Dockerfile
```bash
# 1. Build Docker image
docker build -t python-calc-pipeline .

# 2. Run container (runs tests + calculator execution)
docker run --rm python-calc-pipeline
```

---

### 3. From Terminal via Docker Compose
```bash
docker compose up --build
```

---

### 4. Running in Jenkins Declarative Pipeline
1. Open Jenkins (`http://localhost:8080`).
2. Click **New Item** -> Name: `Python-Declarative-Pipeline` -> Choose **Pipeline** -> Click **OK**.
3. Scroll to the **Pipeline** section:
   - Select **Pipeline script** and copy-paste the contents of `Jenkinsfile`.
   *(Or select "Pipeline script from SCM", choose Git, and specify path `05/Jenkinsfile`)*.
4. Click **Save** -> Click **Build Now**.
5. Observe the **Stage View** showcasing all four stages:
   - `Checkout` ➔ `Environment Check` ➔ `Unit Testing` ➔ `Build & Run`.
