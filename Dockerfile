FROM denoland/deno:alpine AS builder
WORKDIR /app
ENV DENO_DIR=/deno-dir
COPY package.json deno.lock ./
RUN --mount=type=cache,target=/deno-dir \
	deno install --frozen
COPY . .
RUN --mount=type=cache,target=/deno-dir \
	deno task build

FROM denoland/deno:alpine
WORKDIR /app
COPY --from=builder /app/.deno-deploy .deno-deploy/
EXPOSE 3000
ENV NODE_ENV=production
CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", ".deno-deploy/server.ts"]
