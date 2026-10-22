@echo off
REM ==============================================================================
REM Script: k8s_deploy.bat (Windows Kubernetes Deployment)
REM ==============================================================================

echo [1] Applying Nginx Deployment (2 Replicas)...
kubectl apply -f nginx-deployment.yaml

echo [2] Applying Nginx NodePort Service...
kubectl apply -f nginx-service.yaml

echo [3] Listing Running Pods...
kubectl get pods -l app=nginx-web

echo [4] Listing Services...
kubectl get svc nginx-service

echo.
echo Deployment Complete!
echo Run 'kubectl port-forward svc/nginx-service 8080:80' to access locally at http://localhost:8080
