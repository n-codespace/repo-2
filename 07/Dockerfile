# ==============================================================================
# Dockerfile: Node.js / JavaScript Web Application Containerization
# ==============================================================================

# 1. Base Image: Use official lightweight Node.js Alpine runtime
FROM node:20-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package configuration first for Docker layer caching
COPY package.json ./

# 4. Install production dependencies
RUN npm install --omit=dev

# 5. Copy application source code into the container
COPY . .

# 6. Expose the port on which the web app listens
EXPOSE 5000

# 7. Start the JavaScript application
CMD ["node", "app.js"]
