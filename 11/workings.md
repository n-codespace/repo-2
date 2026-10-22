# Assignment 11: Deploy Nginx using Docker and Kubernetes

## How to Run This Application

### Part 1: Deploying Nginx via Docker

#### Method A: From Terminal via Dockerfile
```bash
# 1. Build custom Nginx image
docker build -t my-custom-nginx .

# 2. Run container mapping port 8080 to container port 80
docker run -d -p 8080:80 --name nginx-container my-custom-nginx

# 3. Open browser:
http://localhost:8080

# 4. Stop and remove container
docker stop nginx-container && docker rm nginx-container
```

#### Method B: From Terminal via Docker Compose
```bash
docker compose up -d --build
# Visit http://localhost:8080
docker compose down
```

---

### Part 2: Deploying Nginx via Kubernetes (K8s)
Make sure Minikube, Docker Desktop Kubernetes, or a K8s cluster is active:

```bash
# 1. Deploy the 2-replica Nginx Deployment
kubectl apply -f nginx-deployment.yaml

# 2. Expose the deployment via Service
kubectl apply -f nginx-service.yaml

# 3. Verify Pod status (Both pods should be 'Running')
kubectl get pods -l app=nginx-web

# 4. Verify Service status
kubectl get svc nginx-service

# 5. Access the application:
# Option 1: Port-forward to localhost:8080
kubectl port-forward svc/nginx-service 8080:80
# Visit http://localhost:8080 in your browser!

# Option 2 (Minikube users):
minikube service nginx-service

# 6. Clean up Kubernetes resources:
kubectl delete -f nginx-service.yaml
kubectl delete -f nginx-deployment.yaml
```
*(On Windows, you can also run `.\k8s_deploy.bat`)*
