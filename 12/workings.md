# Assignment 12: Deploying Application through Kubernetes to Azure Cloud (AKS)

## How to Run & Deploy This Application

### 1. Local Container Preview via Dockerfile
```bash
# 1. Build image locally
docker build -t aks-app-preview .

# 2. Run container
docker run -d -p 8080:80 --name local-aks aks-app-preview

# 3. Test at http://localhost:8080
docker stop local-aks && docker rm local-aks
```

---

### 2. Local Container Preview via Docker Compose
```bash
docker compose up -d --build
# Open http://localhost:8080
docker compose down
```

---

### 3. Deploying to Azure Kubernetes Service (AKS) via CLI
Make sure you have Azure CLI and `kubectl` installed:

```bash
# 1. Login to Azure
az login

# 2. Create Azure Resource Group
az group create --name rg-mca-k8s --location eastus

# 3. Create AKS Cluster (1 worker node for lab cost-saving)
az aks create \
  --resource-group rg-mca-k8s \
  --name mca-aks-cluster \
  --node-count 1 \
  --generate-ssh-keys

# 4. Connect kubectl to the new AKS Cluster
az aks get-credentials --resource-group rg-mca-k8s --name mca-aks-cluster --overwrite-existing

# 5. Check cluster nodes
kubectl get nodes

# 6. Deploy application and LoadBalancer Service
kubectl apply -f app-deployment.yaml
kubectl apply -f app-service.yaml

# 7. Check running pods on AKS
kubectl get pods -l app=cloud-app

# 8. Get Public IP address assigned by Azure Load Balancer
kubectl get service azure-app-service --watch
# (Wait ~60 seconds until EXTERNAL-IP changes from <pending> to a public IP, e.g. 20.198.85.120)

# 9. Open browser:
http://<EXTERNAL-IP>

# 10. Clean up cloud resources when finished (CRITICAL to avoid cloud costs):
az group delete --name rg-mca-k8s --yes --no-wait
```
*(On Windows, you can also run `.\aks_commands.bat`)*

---

### 4. Running in Jenkins Continuous Deployment (CD)
1. In Jenkins, create a **Pipeline** job named `AKS-Deployment-Pipeline`.
2. Paste the contents of `12/Jenkinsfile`.
3. Click **Build Now** to execute dry-run validation and deployment rollout to AKS.
