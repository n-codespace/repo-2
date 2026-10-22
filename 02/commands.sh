#!/bin/bash
# ==============================================================================
# Script: commands.sh
# Topic: Hands-on Docker Container Management Demonstration
# ==============================================================================

echo "=== 1. Pulling official lightweight Alpine image ==="
docker pull alpine:latest

echo "=== 2. Creating and Running a container in background (detached) ==="
docker run -d --name demo-container -p 8080:80 nginx:alpine

echo "=== 3. Listing currently running containers ==="
docker ps

echo "=== 4. Checking resource usage (CPU/Memory) ==="
docker stats --no-stream demo-container

echo "=== 5. Inspecting container port bindings & IP address ==="
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' demo-container

echo "=== 6. Executing a command inside the running container ==="
docker exec demo-container cat /etc/nginx/nginx.conf | head -n 10

echo "=== 7. Viewing container logs ==="
docker logs --tail 10 demo-container

echo "=== 8. Pausing and unpausing container ==="
docker pause demo-container
docker unpause demo-container

echo "=== 9. Stopping the container ==="
docker stop demo-container

echo "=== 10. Listing all containers including stopped ones ==="
docker ps -a

echo "=== 11. Removing the container ==="
docker rm demo-container

echo "=== 12. Cleanup unused containers and images ==="
docker container prune -f

echo "=== Container management workflow successfully completed! ==="
