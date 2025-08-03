#!/bin/bash
# setup-app.sh - Post-build script to properly integrate React app with MkDocs

set -e

echo "Setting up React app integration with MkDocs..."

# Ensure the app directory exists
mkdir -p docs/site/app

# Copy the built React app files to the correct location
if [ -d "docs/site/app/client" ]; then
    echo "Copying React app index.html..."
    cp docs/site/app/client/index.html docs/site/app/index.html
    
    echo "Copying React app assets..."
    cp -r docs/site/app/client/assets/* docs/site/app/assets/ 2>/dev/null || mkdir -p docs/site/app/assets
    
    echo "Copying favicon..."
    cp docs/site/app/client/favicon.ico docs/site/app/favicon.ico 2>/dev/null || true
    
    echo "✅ React app successfully integrated with MkDocs!"
    echo "📍 App accessible at: http://localhost:8000/app/"
else
    echo "❌ React app build not found. Run 'npm run build:app' first."
    exit 1
fi