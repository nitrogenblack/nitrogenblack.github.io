# 1. Use an official lightweight Python image
FROM python:3.12-slim

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the rest of your local source code into the container
COPY . .

# 4. Local stack uses gateway hostnames; repo config.js targets production.
RUN sed -i \
  's|https://portal.nitrogenblack.com|http://portal.localhost:8080|g; \
   s|https://auth.nitrogenblack.com|http://auth.localhost:8080|g' \
  config.js

ENV PYTHONUNBUFFERED=1

# 5. Serve static marketing site
CMD ["python", "-m", "http.server", "5173"]
