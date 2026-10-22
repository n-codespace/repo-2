# Dockerfile for Student Attendance System in Node.js
FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY . .

# Run attendance summary
CMD ["node", "attendance.js"]
