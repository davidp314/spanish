#!/bin/bash

echo "🚀 Starting Spanish Verb Master..."

# Kill any existing process on port 3000
echo "🛑 Stopping any existing server on port 3000..."
pkill -f "react-scripts start" 2>/dev/null
pkill -f "node.*3000" 2>/dev/null

# Wait a moment for processes to fully stop
sleep 2

# Check if port 3000 is free
if lsof -i :3000 >/dev/null 2>&1; then
    echo "⚠️  Port 3000 is still in use. Force killing..."
    lsof -ti:3000 | xargs kill -9 2>/dev/null
    sleep 1
fi

# Verify port is free
if ! lsof -i :3000 >/dev/null 2>&1; then
    echo "✅ Port 3000 is now free"
else
    echo "❌ Failed to free port 3000. Please check manually."
    exit 1
fi

# Start the development server
echo "🎯 Starting React development server..."
echo "📱 Your app will be available at: http://localhost:3000"
echo "🛑 To stop the server, press Ctrl+C"
echo ""

# Start the server in the foreground
npm start 