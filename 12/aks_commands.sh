#!/bin/bash
# ==============================================================================
# Script: aks_commands.sh
# Complete deployment workflow to Azure Kubernetes Service (AKS)
# ==============================================================================

# Variables
RESOURCE_GROUP="rg-mca-k8s"
LOCATION="eastus"
CLUSTER_NAME="mca-aks-cluster"

echo "=== 1. Log in to Azure ==="
az login

echo "=== 2. Create Resource Group ==="
az group create --name $RESOURCE_GROUP --location $LOCATION

echo "=== 3. Create AKS Cluster (1 Node for Lab Efficiency) ==="
az aks create \
  --resource-group $RESOURCE_GROUP \
  --name $CLUSTER_NAME \
  --node-count 1 \
  --generate-ssh-keys

echo "=== 4. Configure kubectl to connect to AKS Cluster ==="
az aks get-credentials --resource-group $RESOURCE_GROUP --name $CLUSTER_NAME --overwrite-existing

echo "=== 5. Verify Cluster Nodes ==="
kubectl get nodes

echo "=== 6. Deploy Application & Load Balancer to AKS ==="
kubectl apply -f app-deployment.yaml
kubectl apply -f app-service.yaml

echo "=== 7. Monitoring External Public IP Allocation ==="
echo "Waiting for Azure Load Balancer to assign Public IP..."
kubectl get service azure-app-service --watch

# Clean up resources when done to prevent credit depletion
# echo "=== Cleanup ==="
# az group delete --name $RESOURCE_GROUP --yes --no-wait
