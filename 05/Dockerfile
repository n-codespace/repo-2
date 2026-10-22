# Dockerfile for Jenkins Declarative Pipeline JavaScript build
FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY . .

# Run unit tests and calculator execution
CMD ["sh", "-c", "node --test test_calculator.js && node calculator.js"]
