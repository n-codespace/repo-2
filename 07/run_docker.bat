@echo off
REM Build and run Python/Flask container on Windows
echo [1] Building Flask Docker Image...
docker build -t flask-docker-app:v1 .

echo [2] Running Container on port 5000...
docker run -d --name flask-live-container -p 5000:5000 flask-docker-app:v1

echo [3] Testing URL via curl...
timeout /t 3
curl http://localhost:5000/
curl http://localhost:5000/health

echo [4] Displaying logs...
docker logs flask-live-container

echo.
echo Container is running at http://localhost:5000
echo When ready to stop, run: docker stop flask-live-container ^&^& docker rm flask-live-container
