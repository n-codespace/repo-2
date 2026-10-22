# Dockerfile for Real CI Scripted Pipeline Application (Node.js)
FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY . .

# Run unit tests followed by application invoice execution
CMD ["sh", "-c", "node --test test_app.js && node app.js"]
