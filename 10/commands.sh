#!/bin/bash
# ==============================================================================
# Script: commands.sh
# Managing Multi-Container Web App with Docker Compose (Node.js & Redis)
# ==============================================================================

echo "=== 1. Starting all services in detached mode ==="
docker compose up -d --build

echo "=== 2. Viewing running services ==="
docker compose ps

echo "=== 3. Testing web service hitting Redis counter ==="
sleep 3
curl http://localhost:5000/
echo ""
curl http://localhost:5000/
echo ""

echo "=== 4. Viewing container logs in real-time ==="
docker compose logs --tail=20

echo "=== 5. Stopping and removing containers, networks, and volumes ==="
docker compose down -v
