# Dockerfile to build and test Python Calculator application
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt || true

COPY . .

# Run unit tests followed by calculator execution
CMD ["sh", "-c", "python -m unittest test_calculator.py -v && python calculator.py"]
