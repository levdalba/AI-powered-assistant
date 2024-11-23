FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy dependencies
COPY requirements.txt requirements.txt

# Install dependencies
RUN pip install -r requirements.txt

# Copy application files
COPY . .

# Expose port 5000
EXPOSE 5000

# Run Flask app
CMD ["python", "app.py"]
