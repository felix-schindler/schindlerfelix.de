FROM denoland/deno:latest

# The port that your application listens to.
EXPOSE 8000

# Set the working directory inside the container (could be any directory)
WORKDIR /app

# Copy all files to the working directory
COPY . .

# Log version
RUN deno --version

# Install dependencies
RUN deno install --allow-scripts=npm:@tailwindcss/oxide

# Run checks
RUN deno task ok

# Install dependencies
RUN deno task build

# Start app
CMD ["task", "start"]
