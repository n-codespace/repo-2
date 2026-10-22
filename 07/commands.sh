#!/bin/bash
# ==============================================================================
# Commands to build, run, test and stop the Flask Docker container
# ==============================================================================

echo "=== 1. Building the Flask Docker image ==="
docker build -t flask-docker-app:v1 .

echo "=== 2. Verifying image creation ==="
docker images | grep flask-docker-app

echo "=== 3. Running the container on port 5000 ==="
docker run -d --name flask-live-container -p 5000:5000 flask-docker-app:v1

echo "=== 4. Testing the running app using curl ==="
sleep 2
curl http://localhost:5000/
echo ""
curl http://localhost:5000/health
echo ""

echo "=== 5. Viewing container runtime logs ==="
docker logs flask-live-container

echo "=== 6. Stopping and removing the test container ==="
docker stop flask-live-container
docker rm flask-live-container
