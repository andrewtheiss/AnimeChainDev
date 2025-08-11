$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

<#
  setup.ps1 — Ensure a Python environment named "AnimeChainDevEnv" exists
  one directory above the repo (../Environments) and run any provided
  command inside that environment.

  Behavior mirrors setup/setup.sh:
  - Prefer Conda if available (create env if missing, then `conda run -n`)
  - Fallback to Python venv at ../Environments/AnimeChainDevEnv
  - If additional args are provided, execute them inside the environment

  Usage examples:
    # Install MkDocs tooling inside the env
    powershell -ExecutionPolicy Bypass -File setup/setup.ps1 pip install mkdocs mkdocs-material mkdocstrings

    # Serve docs
    powershell -ExecutionPolicy Bypass -File setup/setup.ps1 python -m mkdocs serve -f docs/mkdocs.yml
#>

function Write-Info {
  param([string]$Message)
  Write-Host "[setup] $Message"
}

# Resolve repo root and environment parent (one level above repo root)
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$repoParent = Split-Path $repoRoot -Parent
$envParentDir = Join-Path $repoParent 'Environments'
$envName = 'AnimeChainDevEnv'

if (-not (Test-Path $envParentDir)) {
  New-Item -ItemType Directory -Force -Path $envParentDir | Out-Null
}

function Test-CommandExists {
  param([string]$Name)
  return $null -ne (Get-Command $Name -ErrorAction SilentlyContinue)
}

# 1) Conda path if conda is available
if (Test-CommandExists 'conda') {
  try {
    $envsJson = conda env list --json | ConvertFrom-Json
  } catch {
    $envsJson = $null
  }

  $envExists = $false
  if ($envsJson -and $envsJson.envs) {
    foreach ($p in $envsJson.envs) {
      if ((Split-Path $p -Leaf) -eq $envName) { $envExists = $true; break }
    }
  } else {
    # Fallback to text parsing if JSON not available
    $list = conda env list 2>$null
    if ($list) { $envExists = ($list -match "\b$envName\b").Count -gt 0 }
  }

  if (-not $envExists) {
    Write-Info "Creating new conda environment '$envName' (python>=3.11)"
    conda create -y -n $envName python=3.11 | Out-Null
  } else {
    Write-Info "Using existing conda environment '$envName'"
  }

  if ($args.Count -gt 0) {
    Write-Info "Running inside conda env '$envName': $($args -join ' ')"
    & conda run -n $envName @args
  } else {
    Write-Info "Conda environment '$envName' is ready. Run 'conda activate $envName' to use it."
  }
  exit 0
}

# 2) Fallback: Python venv under ../Environments
$venvPath = Join-Path $envParentDir $envName

if (-not (Test-Path $venvPath)) {
  Write-Info "Creating new virtual environment at $venvPath"
  $python = if (Test-CommandExists 'python') { 'python' } elseif (Test-CommandExists 'py') { 'py' } else { $null }
  if (-not $python) { throw "Python not found. Please install Python 3.11+ or install Conda." }

  if ($python -eq 'py') {
    & py -3 -m venv $venvPath
  } else {
    & python -m venv $venvPath
  }
} else {
  Write-Info "Using existing virtual environment at $venvPath"
}

# If args provided, activate venv in current session and run the command
if ($args.Count -gt 0) {
  $activate = Join-Path $venvPath 'Scripts\Activate.ps1'
  if (-not (Test-Path $activate)) { throw "Activation script not found at $activate" }
  Write-Info "Activating venv and running: $($args -join ' ')"
  . $activate
  & $args[0] @($args | Select-Object -Skip 1)
} else {
  Write-Info "Virtual environment is ready. To activate: `n  . `"$venvPath\Scripts\Activate.ps1`""
}


