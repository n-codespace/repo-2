#!/bin/bash
# ==============================================================================
# Script: test_volumes.sh
# Demonstrates College Event Application (JavaScript): WITH vs WITHOUT Docker Volumes
# ==============================================================================

echo "=== Building College Event App Docker Image (Node.js) ==="
docker build -t college-event-app-js .

echo ""
echo "======================================================================="
echo "CASE 1: RUNNING WITHOUT DOCKER VOLUME (EPHEMERAL / DATA LOSS)"
echo "======================================================================="

echo "[1.1] Starting Container 1 (Without volume) and adding an event..."
docker run --name event-c1 college-event-app-js add "TechFest 2026" "2026-11-15" "Main Auditorium"

echo "[1.2] Removing Container 1..."
docker rm event-c1

echo "[1.3] Starting a brand NEW Container 2 (Without volume)..."
docker run --name event-c2 college-event-app-js list
echo ">>> RESULT: The event data is GONE! Container storage was ephemeral."
docker rm event-c2

echo ""
echo "======================================================================="
echo "CASE 2: RUNNING WITH DOCKER VOLUME (PERSISTENT DATA)"
echo "======================================================================="

echo "[2.1] Creating a dedicated Docker named volume: 'event_storage_js'..."
docker volume create event_storage_js

echo "[2.2] Starting Container A (WITH VOLUME) and adding an event..."
docker run --name event-cA -v event_storage_js:/app/data college-event-app-js add "Hackathon 2026" "2026-12-01" "CS Lab 3"

echo "[2.3] Removing Container A completely..."
docker rm event-cA

echo "[2.4] Starting a completely NEW Container B mounted to the SAME VOLUME..."
docker run --name event-cB -v event_storage_js:/app/data college-event-app-js list

echo ">>> RESULT: Data PERSISTED! The Hackathon event is intact even after container deletion."
docker rm event-cB

echo "[2.5] Cleanup Docker volume"
docker volume rm event_storage_js

echo "=== Demonstration Completed Successfully! ==="
