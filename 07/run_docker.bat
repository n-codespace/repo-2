@echo off
REM Build and run Node.js container on Windows
echo [1] Building Node.js Docker Image...
docker build -t nodejs-docker-app:v1 .

echo [2] Running Container on port 5000...
docker run -d --name node-live-container -p 5000:5000 nodejs-docker-app:v1

echo [3] Testing URL via curl...
timeout /t 3
curl http://localhost:5000/
curl http://localhost:5000/health

echo [4] Displaying logs...
docker logs node-live-container

echo Container is running at http://localhost:5000
echo When ready to stop, run: docker stop node-live-container ^&^& docker rm node-live-container
