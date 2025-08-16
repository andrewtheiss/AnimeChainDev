#!/bin/bash
# setup-app.sh - Post-build script to properly integrate React app with MkDocs

set -e

echo "🔧 Setting up React app integration with MkDocs..."

# Ensure the app directory exists
mkdir -p docs/site/app

# Check if React app was built
if [ ! -d "docs/site/app/client" ]; then
    echo "⚠️  React app build not found. Building now..."
    npm run build:app
fi

# Verify the build succeeded
if [ -d "docs/site/app/client" ]; then
    echo "📁 Copying React app files..."
    
    # Copy main index.html
    cp docs/site/app/client/index.html docs/site/app/index.html
    echo "  ✅ index.html copied"
    
    # Copy assets directory (create if doesn't exist)
    mkdir -p docs/site/app/assets
    if [ -d "docs/site/app/client/assets" ]; then
        cp -r docs/site/app/client/assets/* docs/site/app/assets/
        echo "  ✅ Assets copied"
    fi
    # Ensure shared public images are available at app and root
    if [ -f "public/animecoin.png" ]; then
        cp public/animecoin.png docs/site/app/animecoin.png || true
        cp public/animecoin.png docs/site/animecoin.png || true
    fi
    if [ -f "public/animechain.webp" ]; then
        cp public/animechain.webp docs/site/app/animechain.webp || true
        cp public/animechain.webp docs/site/animechain.webp || true
    fi
    
    # Copy favicon
    if [ -f "docs/site/app/client/favicon.ico" ]; then
        cp docs/site/app/client/favicon.ico docs/site/app/favicon.ico
        echo "  ✅ Favicon copied"
    fi
    
    echo ""
    echo "🎉 React app successfully integrated with MkDocs!"
    echo "📍 App accessible at: http://localhost:8000/app/"
    echo "📖 App page accessible at: http://localhost:8000/app/"
    echo ""
else
    echo "❌ React app build failed. Please check the build process."
    exit 1
fi