# 1. Use an official lightweight Python image
FROM python:3.12-slim

# 2. Set the working directory inside the container
WORKDIR /app

# 5. Copy the rest of your local source code into the container
COPY . .

ENV PYTHONUNBUFFERED=1

# 6. Specify the command to run your script
CMD ["python", "-m", "http.server", "5173"]
