# Custom Nginx Web Server Dockerfile
FROM nginx:alpine

# Copy custom styled HTML page into Nginx document root
COPY index.html /usr/share/nginx/html/index.html

# Expose HTTP port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
