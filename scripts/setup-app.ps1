# setup-app.ps1 - Windows PowerShell equivalent of scripts/setup-app.sh
Param()

Write-Host "Setting up React app integration with MkDocs (Windows)..."

# Ensure the app directory exists
New-Item -ItemType Directory -Force -Path "docs/site/app" | Out-Null

# If React app not built where react-router outputs, build:app should have done so already
if (-Not (Test-Path "docs/site/app/client")) {
  Write-Host "React app build not found. Running build:app..."
  npm run build:app --silent | Write-Host
}

# Check if build exists and copy files, otherwise show error
if (Test-Path "docs/site/app/client") {
  Write-Host "Copying React app files..."
  Copy-Item -Force "docs/site/app/client/index.html" "docs/site/app/index.html"

  New-Item -ItemType Directory -Force -Path "docs/site/app/assets" | Out-Null
  if (Test-Path "docs/site/app/client/assets") {
    Copy-Item -Recurse -Force "docs/site/app/client/assets" "docs/site/app/"
  }

  if (Test-Path "docs/site/app/client/favicon.ico") {
    Copy-Item -Force "docs/site/app/client/favicon.ico" "docs/site/app/favicon.ico"
  }

  if (Test-Path "public/animecoin.png") {
    Copy-Item -Force "public/animecoin.png" "docs/site/app/animecoin.png"
    Copy-Item -Force "public/animecoin.png" "docs/site/animecoin.png"
  }
  if (Test-Path "public/animechain.webp") {
    Copy-Item -Force "public/animechain.webp" "docs/site/app/animechain.webp"
    Copy-Item -Force "public/animechain.webp" "docs/site/animechain.webp"
  }

  Write-Host "React app successfully integrated with MkDocs!"
  Write-Host "App accessible at: http://localhost:8000/app/"
} else {
  Write-Error "React app build failed. Please check the build process."
  exit 1
}