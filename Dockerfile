FROM denoland/deno:alpine

# The port that your application listens to.
EXPOSE 8000

# Set the working directory inside the container (could be any directory)
WORKDIR /app

# Copy all files to the working directory
COPY . .

# Run checks
RUN deno task ok

# Install dependencies
RUN deno task build

# Start app
CMD ["task", "start"]
