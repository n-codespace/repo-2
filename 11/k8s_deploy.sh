#!/bin/bash
# ==============================================================================
# Script: k8s_deploy.sh
# Part 2: Deploying Nginx via Kubernetes Manifests
# ==============================================================================

echo "=== 1. Applying Nginx Deployment (2 Replicas) ==="
kubectl apply -f nginx-deployment.yaml

echo "=== 2. Applying Nginx NodePort Service ==="
kubectl apply -f nginx-service.yaml

echo "=== 3. Checking Pods Status ==="
kubectl get pods -l app=nginx-web

echo "=== 4. Checking Service and NodePort ==="
kubectl get svc nginx-service

echo "=== 5. Forwarding Port to localhost:8080 (for local test) ==="
# kubectl port-forward service/nginx-service 8080:80 &
echo "Run 'kubectl port-forward svc/nginx-service 8080:80' to access at http://localhost:8080"
