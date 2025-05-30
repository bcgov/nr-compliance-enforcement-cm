# Build static files
# Node Bullseye has npm
FROM node:20.19.0-bullseye-slim AS buildwithdevdeps

# Install packages, build and keep only prod packages
WORKDIR /app
COPY *.json ./
COPY ./src ./src
COPY ./prisma ./prisma
RUN npm ci --ignore-scripts --no-update-notifier
RUN npm run prisma-generate-cm 
RUN npm run prisma-generate-shared
FROM node:20.19.0-bullseye-slim AS build

# Install packages, build and keep only prod packages
WORKDIR /app
COPY *.json ./
COPY ./src ./src
COPY ./prisma ./prisma
RUN ls -la /app/src/**
RUN npm ci --ignore-scripts --no-update-notifier --omit=dev

# COPY over few dependencies from buildwithdevdeps
COPY --from=buildwithdevdeps /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=buildwithdevdeps /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=buildwithdevdeps /app/node_modules/prisma ./node_modules/prisma

RUN npm run build

# Deploy container
FROM node:20.19.0-bullseye-slim
ENV NODE_ENV=production

# Copy over app
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Ports, health check and non-root user
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost/:3000/api || exit 1
USER node

# Start up command with 50MB of heap size, each application needs to determine what is the best value. DONT use default as it is 4GB.
CMD ["--max-old-space-size=500", "/app/dist/src/main"]