# ==============================================================================
# Dockerfile: Python / Flask Application Containerization
# ==============================================================================

# 1. Base Image: Use official lightweight Python runtime
FROM python:3.9-slim

# 2. Set working directory inside container
WORKDIR /app

# 3. Environment settings for clean Python logs
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# 4. Copy requirements file first for layer caching
COPY requirements.txt .

# 5. Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 6. Copy application code into container
COPY . .

# 7. Expose Flask default port 5000
EXPOSE 5000

# 8. Start Flask web server
CMD ["python", "app.py"]
