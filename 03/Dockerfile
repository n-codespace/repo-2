# Dockerfile to build and test Python Project for Jenkins CI
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Run both the app and unit tests
CMD ["sh", "-c", "python app.py && python -m unittest test_app.py -v"]
