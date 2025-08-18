#!/bin/bash

# Spanish Verbs Dev Server Startup Script
# Always uses port 5173

echo "🚀 Starting Spanish Verbs dev server on port 5173..."

# Kill any existing processes on port 5173
echo "🔪 Killing any existing processes on port 5173..."
lsof -ti:5173 2>/dev/null | xargs kill -9 2>/dev/null || true

# Wait a moment for port to be freed
sleep 1

# Check if port 5173 is free
if lsof -i:5173 >/dev/null 2>&1; then
    echo "❌ Port 5173 is still in use. Trying to force kill..."
    lsof -ti:5173 | xargs kill -9 2>/dev/null || true
    sleep 2
fi

# Verify port is free
if lsof -i:5173 >/dev/null 2>&1; then
    echo "❌ Failed to free port 5173. Please check what's using it."
    exit 1
fi

echo "✅ Port 5173 is free. Starting dev server..."

# Start the dev server
npm run dev
