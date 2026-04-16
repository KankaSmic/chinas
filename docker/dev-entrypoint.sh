#!/bin/sh
set -e
cd /app
# node_modules is a Docker volume (see docker-compose.yml), so install after bind-mount — keeps deps in sync with package-lock.json.
npm install --no-audit --no-fund
exec npm run dev -- --host 0.0.0.0 --port 5173
