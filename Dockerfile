# Dependencies
FROM node:lts-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
	npm ci --no-audit --no-fund --prefer-offline

# Build
FROM node:lts-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules node_modules/
COPY . .
RUN npm run check
RUN npm run build

# Production
FROM node:lts-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/build build/
COPY --from=deps /app/node_modules node_modules/
COPY package.json .
RUN npm prune --omit=dev
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
