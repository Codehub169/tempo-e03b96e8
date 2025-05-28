#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "=== Starting Hueneu Website Setup ==="

# 1. Install dependencies
echo "--- Installing project dependencies... ---"
npm install

# 2. Create data directory for SQLite if it doesn't exist
echo "--- Ensuring data directory exists... ---"
mkdir -p data

# 3. Build the React frontend
echo "--- Building React application... ---"
npm run build

# 4. Start the Node.js server on port 9000
echo "--- Starting Node.js server on port 9000... ---"
# The server/index.js (to be created) should be written to respect the PORT environment variable.
PORT=9000 npm start

echo "=== Hueneu Website is running on http://localhost:9000 ==="
