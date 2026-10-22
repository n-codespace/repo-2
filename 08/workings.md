# Assignment 08: College Event Application (With / Without Docker Volume) [JavaScript]

## How to Run & Test Data Persistence

### 1. From Terminal via Node.js
```bash
# Add an event
node app.js add "TechFest 2026" "2026-11-15" "Main Auditorium"

# List events
node app.js list
```

---

### 2. From Terminal via Dockerfile (Hands-on Volume Test)

#### Case A: Running WITHOUT Docker Volume (Data Loss)
```bash
# 1. Build image
docker build -t college-event-app-js .

# 2. Run container and insert event
docker run --name c1 college-event-app-js add "TechFest 2026" "2026-11-15" "Auditorium"

# 3. Delete container
docker rm c1

# 4. Spin up new container without volume
docker run --name c2 college-event-app-js list
# OUTPUT: "No events found in storage! (Data is empty)" -> Proves data loss!
docker rm c2
```

#### Case B: Running WITH Docker Volume (Persistent)
```bash
# 1. Create a Docker Volume
docker volume create event_storage_js

# 2. Run container with volume mounted
docker run --name cA -v event_storage_js:/app/data college-event-app-js add "Hackathon 2026" "2026-12-01" "Lab 3"

# 3. Delete container cA
docker rm cA

# 4. Spin up brand new container cB using the SAME volume
docker run --name cB -v event_storage_js:/app/data college-event-app-js list
# OUTPUT: Hackathon 2026 is displayed! -> Proves data persistence!
docker rm cB

# 5. Clean up volume
docker volume rm event_storage_js
```

---

### 3. Automated One-Click Script
- On Windows: Run `.\test_volumes.bat`
- On Linux/Mac: Run `./test_volumes.sh`

---

### 4. From Terminal via Docker Compose
```bash
# Run with configured volume
docker compose up --build

# Stop and remove
docker compose down -v
```
