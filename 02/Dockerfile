# Lightweight Alpine Linux container for Docker Container Management Practice
FROM alpine:3.18

# Install curl and procps for process and network monitoring
RUN apk update && apk add --no-cache curl procps

# Set an environment variable
ENV LAB_MODULE="Docker-Container-Management"

# Simple loop script simulating a running daemon service
CMD ["sh", "-c", "echo Container Management Lab Started; while true; do echo \"[Heartbeat] Container alive at $(date)\"; sleep 5; done"]
