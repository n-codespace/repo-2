# Dockerfile for Azure Web App deployment
FROM nginx:alpine

# Copy landing page into default Nginx web root
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
