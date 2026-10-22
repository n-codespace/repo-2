@echo off
REM ==============================================================================
REM Script: aks_commands.bat (Windows Azure AKS Deployment)
REM ==============================================================================

echo [1] Logging into Azure...
az login

echo [2] Creating Resource Group: rg-mca-k8s...
az group create --name rg-mca-k8s --location eastus

echo [3] Provisioning AKS Cluster (1 Node)...
az aks create --resource-group rg-mca-k8s --name mca-aks-cluster --node-count 1 --generate-ssh-keys

echo [4] Getting Cluster Credentials...
az aks get-credentials --resource-group rg-mca-k8s --name mca-aks-cluster --overwrite-existing

echo [5] Deploying App and Load Balancer to AKS...
kubectl apply -f app-deployment.yaml
kubectl apply -f app-service.yaml

echo [6] Monitoring External Public IP...
echo Once EXTERNAL-IP changes from ^<pending^> to an IP address, open that IP in your browser!
kubectl get service azure-app-service --watch
