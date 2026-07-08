FROM denoland/deno:latest
WORKDIR /app
ENV DENO_DIR=/deno-dir
COPY package.json deno.lock ./
RUN --mount=type=cache,target=/deno-dir \
	deno install --frozen
COPY . .
RUN --mount=type=cache,target=/deno-dir \
	deno task build

EXPOSE 8000
ENV NODE_ENV=production
CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", ".deno-deploy/server.ts"]
