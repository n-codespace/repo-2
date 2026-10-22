#!/bin/bash
# ==============================================================================
# Script: docker_run_nginx.sh
# Part 1: Deploying Nginx via Standalone Docker
# ==============================================================================

echo "=== 1. Running Nginx Docker Container with Custom HTML ==="
docker run -d \
  --name nginx-standalone \
  -p 8080:80 \
  -v $(pwd)/index.html:/usr/share/nginx/html/index.html:ro \
  nginx:alpine

echo "=== 2. Verifying container is running ==="
docker ps --filter "name=nginx-standalone"

echo "=== 3. Testing response via curl ==="
sleep 2
curl http://localhost:8080

echo "=== 4. Stopping and removing standalone container ==="
docker stop nginx-standalone
docker rm nginx-standalone
