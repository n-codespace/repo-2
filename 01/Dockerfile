# Dockerfile for Student Skill Portfolio Website (Node.js)
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package definition and install dependencies
COPY package.json ./
# (If package-lock.json exists, npm ci can be used. For zero-dep, npm install ensures readiness)
RUN npm install --omit=dev

# Copy all source files (HTML, CSS, JS, server)
COPY . .

# Expose web server port
EXPOSE 3000

# Start Node.js web server
CMD ["node", "server.js"]
