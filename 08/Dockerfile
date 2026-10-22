FROM node:20-alpine

WORKDIR /app

# Create mount point directory for data persistence
RUN mkdir -p /app/data

COPY package.json ./
RUN npm install --omit=dev

COPY app.js .

# Entrypoint runs node app.js with arguments
ENTRYPOINT ["node", "app.js"]
CMD ["list"]
