# Lightweight Node.js container for simple CI testing
FROM node:20-alpine

WORKDIR /app

COPY . .

# Run tests and app
CMD ["sh", "-c", "node --test test_app.js && node app.js"]
