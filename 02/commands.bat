@echo off
REM ==============================================================================
REM Script: commands.bat
REM Docker Container Management Demonstration (Windows CMD / PowerShell)
REM ==============================================================================

echo [1] Building Custom Management Image...
docker build -t container-mgmt-app .

echo [2] Running container in background (detached mode)...
docker run -d --name mgmt-test container-mgmt-app

echo [3] Listing running containers...
docker ps

echo [4] Viewing container logs...
docker logs --tail 5 mgmt-test

echo [5] Executing command inside the running container...
docker exec mgmt-test ps aux

echo [6] Pausing container...
docker pause mgmt-test

echo [7] Unpausing container...
docker unpause mgmt-test

echo [8] Stopping container...
docker stop mgmt-test

echo [9] Removing container...
docker rm mgmt-test

echo [10] Container Management script finished successfully!
