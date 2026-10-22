@echo off
REM ==============================================================================
REM Script: run_compose.bat
REM Docker Compose Multi-Container Orchestration (Node.js & Redis)
REM ==============================================================================

echo [1] Building and starting all containers in detached mode...
docker compose up -d --build

echo [2] Listing running containers...
docker compose ps

echo [3] Testing counter endpoint...
timeout /t 4
curl http://localhost:5000/
curl http://localhost:5000/

echo [4] Displaying real-time container logs...
docker compose logs --tail=15

echo.
echo Application is running at http://localhost:5000
echo To stop containers and clean up volumes, run: docker compose down -v
