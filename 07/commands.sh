#!/bin/bash
# ==============================================================================
# Commands to build, run, test and stop the Node.js Docker container
# ==============================================================================

echo "=== 1. Building the Docker image ==="
docker build -t nodejs-docker-app:v1 .

echo "=== 2. Verifying image creation ==="
docker images | grep nodejs-docker-app

echo "=== 3. Running the container on port 5000 ==="
docker run -d --name node-live-container -p 5000:5000 nodejs-docker-app:v1

echo "=== 4. Testing the running app using curl ==="
sleep 2
curl http://localhost:5000/
echo ""
curl http://localhost:5000/health
echo ""

echo "=== 5. Viewing container runtime logs ==="
docker logs node-live-container

echo "=== 6. Stopping and removing the test container ==="
docker stop node-live-container
docker rm node-live-container
