# MASTER WORKINGS GUIDE: DEVOPS LAB ASSIGNMENTS (01 - 12)

This comprehensive guide explains how to run every application across all 12 folders from your terminal, including **JavaScript (`.js`) / Node.js**, **Python (`.py`)** (for assignment 03), **Docker (`Dockerfile`)**, **Docker Compose (`docker-compose.yml`)**, **Jenkins (`Jenkinsfile`)**, **Kubernetes (`kubectl`)**, and **Azure Cloud CLI**.

---

## 🛠️ Global Prerequisites Checklist

Before executing, ensure you have the required tools installed on your machine:
- **Node.js (v18+)**: `node -v` and `npm -v`.
- **Docker Desktop**: Running and configured (Linux containers mode).
- **Python (v3.9+)**: `python --version` (for assignment 03).
- **Jenkins**: Running locally on `http://localhost:8080`.
- **Git**: `git --version`.
- **kubectl**: `kubectl version --client` (comes bundled with Docker Desktop under Settings ➔ Kubernetes).
- **Azure CLI**: `az --version` (for Azure assignments 09 & 12).

---

## 📁 Assignment 01: Student Skill Portfolio Website (JavaScript & Node.js)

### Location: `01/`

#### 1. Run with Node.js (Terminal)
```bash
cd 01
node server.js
```
➔ Open browser at: **`http://localhost:3000`**

#### 2. Run with Dockerfile (Terminal)
```bash
cd 01
# Build the Docker image
docker build -t student-portfolio .

# Run the container
docker run -d -p 3000:3000 --name my-portfolio student-portfolio

# Stop & Remove
docker stop my-portfolio && docker rm my-portfolio
```

#### 3. Run with Docker Compose (Terminal)
```bash
cd 01
docker compose up -d --build
# Stop:
docker compose down
```

#### 4. Run with Jenkins CI
1. Open Jenkins (`http://localhost:8080`) ➔ **New Item** ➔ Choose **Pipeline** ➔ Name: `Portfolio-Pipeline`.
2. Paste the contents of `01/Jenkinsfile`.
3. Click **Build Now** to watch automated testing and container creation.

---

## 📁 Assignment 02: Docker – Container Management

### Location: `02/`

#### 1. Run Interactive Container Management Commands
```bash
cd 02

# 1. Build image
docker build -t container-mgmt-app .

# 2. Run container in background (detached)
docker run -d --name mgmt-test container-mgmt-app

# 3. View running containers
docker ps

# 4. View live logs
docker logs -f mgmt-test

# 5. Execute commands inside running container
docker exec -it mgmt-test ps aux

# 6. Pause and unpause container
docker pause mgmt-test
docker unpause mgmt-test

# 7. Check live resource stats (CPU / RAM)
docker stats --no-stream mgmt-test

# 8. Stop and delete
docker stop mgmt-test && docker rm mgmt-test
```

#### 2. Automated Run
- **Windows**: `.\commands.bat`
- **Linux / Git Bash**: `bash commands.sh`

---

## 📁 Assignment 03: Upload a Python Project using Jenkins

### Location: `03/`

#### 1. Run with Python (Terminal)
```bash
cd 03
python app.py
python -m unittest test_app.py -v
```

#### 2. Run with Dockerfile (Terminal)
```bash
cd 03
docker build -t python-jenkins-app .
docker run --rm python-jenkins-app
```

#### 3. Run inside Jenkins (Freestyle Project)
1. In Jenkins (`http://localhost:8080`) ➔ Click **New Item** ➔ Name: `Python-Upload-Job` ➔ Select **Freestyle project** ➔ Click **OK**.
2. Under **Build Steps**, click **Add build step**:
   - **Windows**: Select *Execute Windows batch command* and paste:
     ```cmd
     python app.py
     python -m unittest test_app.py -v
     ```
   - **Linux / Mac**: Select *Execute shell* and paste:
     ```bash
     python3 app.py
     python3 -m unittest test_app.py -v
     ```
3. Click **Save** ➔ **Build Now**. Check **Console Output** for blue "SUCCESS".

---

## 📁 Assignment 04: Student Attendance System (JavaScript / Node.js)

### Location: `04/`

#### 1. Run with Node.js (Terminal)
```bash
cd 04
node attendance.js
node --test test_attendance.js
```

#### 2. Run with Dockerfile (Terminal)
```bash
cd 04
docker build -t attendance-app-js .
docker run --rm attendance-app-js
```

#### 3. Run with Docker Compose (With Persistent Volume)
```bash
cd 04
docker compose up --build
```

#### 4. Run with Jenkins CI
Paste `04/Jenkinsfile` into a Jenkins Pipeline item and trigger **Build Now**.

---

## 📁 Assignment 05: Build a Pipeline on Jenkins (JavaScript Project)

### Location: `05/`

#### 1. Run with Node.js (Terminal)
```bash
cd 05
node --test test_calculator.js
node calculator.js
```

#### 2. Run with Dockerfile (Terminal)
```bash
cd 05
docker build -t js-calc-pipeline .
docker run --rm js-calc-pipeline
```

#### 3. Run in Jenkins Declarative Pipeline
1. Jenkins ➔ **New Item** ➔ Choose **Pipeline** ➔ Name: `JS-Declarative-Pipeline`.
2. Under **Pipeline Script**, paste `05/Jenkinsfile`.
3. Click **Build Now** and inspect the Stage View:
   `Checkout` ➔ `Environment Check` ➔ `Unit Testing` ➔ `Build & Run`.

---

## 📁 Assignment 06: Build a Real CI Pipeline using Jenkins Scripted Pipeline (JavaScript)

### Location: `06/`

#### 1. Run with Node.js (Terminal)
```bash
cd 06
node --test test_app.js
node app.js
```

#### 2. Run with Dockerfile (Terminal)
```bash
cd 06
docker build -t real-ci-app-js .
docker run --rm real-ci-app-js
```

#### 3. Run in Jenkins Scripted Pipeline (Groovy)
1. Jenkins ➔ **New Item** ➔ Choose **Pipeline** ➔ Name: `JS-Scripted-CI`.
2. In the Pipeline Script box, paste `06/Jenkinsfile`.
3. Click **Build Now**. View the Groovy `node {}` stages and archived release artifact in the build console.

---

## 📁 Assignment 07: Write a Dockerfile to Containerize a JavaScript/Node.js App

### Location: `07/`

#### 1. Run with Node.js (Terminal)
```bash
cd 07
node app.js
```
➔ Open browser at: **`http://localhost:5000`**

#### 2. Run with Dockerfile (Terminal)
```bash
cd 07
# 1. Build image
docker build -t nodejs-docker-app:v1 .

# 2. Run container
docker run -d --name node-live -p 5000:5000 nodejs-docker-app:v1

# 3. Test HTTP endpoints
curl http://localhost:5000/
curl http://localhost:5000/health

# 4. Stop & remove
docker stop node-live && docker rm node-live
```
*(Windows shortcut: run `.\run_docker.bat`)*

#### 3. Run with Docker Compose
```bash
cd 07
docker compose up -d --build
# Open http://localhost:5000
docker compose down
```

---

## 📁 Assignment 08: College Event Application (With / Without Docker Volume) [JavaScript]

### Location: `08/`

#### 1. Run with Node.js (Terminal)
```bash
cd 08
node app.js add "TechFest 2026" "2026-11-15" "Main Auditorium"
node app.js list
```

#### 2. Terminal Volume Comparison Test

```bash
cd 08
docker build -t college-event-app-js .

# CASE A: WITHOUT Volume (Data Lost)
docker run --name c1 college-event-app-js add "TechFest 2026" "2026-11-15" "Auditorium"
docker rm c1
docker run --name c2 college-event-app-js list
# OUTPUT: Empty! Proves data loss without volume.
docker rm c2

# CASE B: WITH Volume (Data Persists)
docker volume create event_storage_js
docker run --name cA -v event_storage_js:/app/data college-event-app-js add "Hackathon 2026" "2026-12-01" "Lab 3"
docker rm cA
docker run --name cB -v event_storage_js:/app/data college-event-app-js list
# OUTPUT: "Hackathon 2026" is preserved! Proves persistence.
docker rm cB
docker volume rm event_storage_js
```
*(Windows shortcut: run `.\test_volumes.bat`)*

---

## 📁 Assignment 09: Login to Azure Portal and Create a Web App

### Location: `09/`

#### 1. Local Preview with Docker
```bash
cd 09
docker compose up -d --build
# Visit http://localhost:8080
docker compose down
```

#### 2. Deploy via Azure Portal (GUI)
1. Go to **`https://portal.azure.com`** and log in.
2. Search for **App Services** ➔ Click **+ Create** ➔ **Web App**.
3. Group: `rg-mca-lab`, Name: `mca-app-2026`, Publish: `Code`, Runtime: `Node 20 LTS`, Plan: `Free F1`.
4. Click **Review + Create** ➔ **Create**. Open your live URL `https://<name>.azurewebsites.net`.

#### 3. Deploy via Azure CLI (Terminal)
```bash
cd 09
az login
az webapp up --name mca-app-$RANDOM --resource-group rg-mca-lab --html
```
*(Windows shortcut: run `.\azure_cli_deploy.bat`)*

---

## 📁 Assignment 10: Docker Compose: MultiContainer Web Application (Node.js & Redis)

### Location: `10/`

#### 1. Run with Docker Compose (Terminal)
```bash
cd 10
# 1. Start Web + Redis multi-container stack
docker compose up -d --build

# 2. Check running services
docker compose ps

# 3. Test counter in browser:
Open: http://localhost:5000
(Refresh multiple times: the counter increments inside Redis!)

# 4. View live logs
docker compose logs -f

# 5. Stop and delete stack + volumes
docker compose down -v
```
*(Windows shortcut: run `.\run_compose.bat`)*

#### 2. Run in Jenkins CI
Paste `10/Jenkinsfile` into a Jenkins Pipeline item to automate the multi-container spin-up, curl check, and teardown.

---

## 📁 Assignment 11: Deploy Nginx using Docker and Kubernetes

### Location: `11/`

#### 1. Deploy via Docker (Terminal)
```bash
cd 11
docker build -t my-custom-nginx .
docker run -d -p 8080:80 --name nginx-box my-custom-nginx
# Open http://localhost:8080
docker stop nginx-box && docker rm nginx-box
```

#### 2. Deploy via Kubernetes (`kubectl`)
```bash
cd 11
# 1. Apply Deployment & Service
kubectl apply -f nginx-deployment.yaml
kubectl apply -f nginx-service.yaml

# 2. Check Pods and Services
kubectl get pods -l app=nginx-web
kubectl get svc nginx-service

# 3. Access locally via port-forward
kubectl port-forward svc/nginx-service 8080:80
# Open http://localhost:8080

# 4. Clean up
kubectl delete -f nginx-service.yaml
kubectl delete -f nginx-deployment.yaml
```
*(Windows shortcut: run `.\k8s_deploy.bat`)*

---

## 📁 Assignment 12: Deploying Application through Kubernetes to Azure Cloud (AKS)

### Location: `12/`

#### Deploy to Azure Kubernetes Service (AKS) via CLI
```bash
cd 12

# 1. Login to Azure
az login

# 2. Create Resource Group
az group create --name rg-mca-k8s --location eastus

# 3. Create AKS Cluster (1 node for student lab)
az aks create --resource-group rg-mca-k8s --name mca-aks-cluster --node-count 1 --generate-ssh-keys

# 4. Get credentials to configure kubectl
az aks get-credentials --resource-group rg-mca-k8s --name mca-aks-cluster --overwrite-existing

# 5. Deploy application & Azure LoadBalancer Service
kubectl apply -f app-deployment.yaml
kubectl apply -f app-service.yaml

# 6. Watch for Azure Public IP assignment
kubectl get service azure-app-service --watch
# When EXTERNAL-IP changes from <pending> to a Public IP (e.g., 20.198.85.120), open in browser:
http://<EXTERNAL-IP>

# 7. Clean up Azure resources (Prevent cloud costs)
az group delete --name rg-mca-k8s --yes --no-wait
```
*(Windows shortcut: run `.\aks_commands.bat`)*

---

## 🎯 Quick Reference Command Matrix

| Tech / Target | Syntax / Command |
| :--- | :--- |
| **JavaScript / Node.js** | `node app.js` / `node --test test_app.js` / `npm start` |
| **Python** (for 03) | `python app.py` / `python -m unittest test_app.py -v` |
| **Docker Build** | `docker build -t <image-name> .` |
| **Docker Run** | `docker run -d -p <host-port>:<container-port> --name <cname> <image-name>` |
| **Docker Volume** | `docker run -v <vol-name>:<container-path> <image-name>` |
| **Docker Compose** | `docker compose up -d --build` / `docker compose down -v` |
| **Kubernetes Apply** | `kubectl apply -f <manifest>.yaml` |
| **Kubernetes Port-Forward** | `kubectl port-forward svc/<service-name> 8080:80` |
| **Azure Web App Up** | `az webapp up --name <app-name> --resource-group <rg-name> --html` |
| **Azure AKS Deploy** | `az aks get-credentials ... && kubectl apply -f ...` |
