#!/bin/bash

echo "🚀 Building Spanish Verb Master for production..."

# Build the application
npm run build

echo "✅ Build completed successfully!"

# Check if serve is installed
if ! command -v serve &> /dev/null; then
    echo "📦 Installing serve globally..."
    npm install -g serve
fi

echo "🌐 Starting production server..."
echo "📱 Your app is now running at: http://localhost:3000"
echo "🔗 To access from other devices, use your IP address instead of localhost"

# Serve the built application
serve -s build -l 3000 