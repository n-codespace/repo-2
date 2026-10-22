# Assignment 03: Upload a Python Project using Jenkins

## How to Run This Application

### 1. From Terminal via Python
Open terminal in `03/`:
```bash
# 1. Run the Python application directly
python app.py

# 2. Run the automated unit tests
python -m unittest test_app.py -v
```

---

### 2. From Terminal via Dockerfile
```bash
# 1. Build the container image
docker build -t python-jenkins-app .

# 2. Run the container (executes app and unit tests automatically)
docker run --rm python-jenkins-app
```

---

### 3. From Terminal via Docker Compose
```bash
docker compose up --build
```

---

### 4. Running inside Jenkins (Freestyle Project)
1. Go to Jenkins Dashboard (`http://localhost:8080`).
2. Click **New Item** -> Name: `Python-Upload-Job` -> Select **Freestyle project** -> Click **OK**.
3. Under **Source Code Management**, choose **Git** and enter your repository URL.
4. Under **Build Steps**, click **Add build step**:
   - On Windows: Choose **Execute Windows batch command** and paste:
     ```cmd
     python --version
     python app.py
     python -m unittest test_app.py -v
     ```
   - On Linux/macOS: Choose **Execute shell** and paste:
     ```bash
     python3 --version
     python3 app.py
     python3 -m unittest test_app.py -v
     ```
5. Click **Save** -> Click **Build Now**.
6. View real-time output by clicking the build number -> **Console Output**.
