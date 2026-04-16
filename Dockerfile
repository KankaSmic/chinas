## Dev + production build for Vite (SPA)

FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
# Base44 exports often don't include a lockfile; fall back to `npm install`.
RUN if [ -f package-lock.json ]; then npm ci; else npm install --no-audit --no-fund; fi

FROM node:20-alpine AS dev
WORKDIR /app
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Inline script avoids CRLF from Windows editors breaking shebang on Alpine ("no such file or directory").
RUN printf '%s\n' \
  '#!/bin/sh' \
  'set -e' \
  'cd /app' \
  'npm install --no-audit --no-fund' \
  'exec npm run dev -- --host 0.0.0.0 --port 5173' \
  > /usr/local/bin/dev-entrypoint.sh \
  && chmod +x /usr/local/bin/dev-entrypoint.sh
EXPOSE 5173
ENTRYPOINT ["/usr/local/bin/dev-entrypoint.sh"]

FROM node:20-alpine AS build
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS prod
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
