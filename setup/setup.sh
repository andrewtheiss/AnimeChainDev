#!/usr/bin/env bash
# setup.sh ─ ensure a Python environment named AnimeChainDevEnv exists one directory
# above this repo (../Environments) and activate it. Works with either:
#   • Conda (if available)
#   • Python venv fallback

set -euo pipefail

ENV_PARENT_DIR="$(cd .. && pwd)/Environments"
ENV_NAME="AnimeChainDevEnv"

# Helper: print heading
info() { printf "[setup] %s\n" "$1"; }

mkdir -p "$ENV_PARENT_DIR"

###############################################
# 1. Conda path if conda is available
###############################################
if command -v conda >/dev/null 2>&1; then
  # Ensure conda activation works inside script
  # shellcheck source=/dev/null
  source "$(conda info --base)/etc/profile.d/conda.sh"

  if conda env list | awk '{print $1}' | grep -qx "$ENV_NAME"; then
    info "Activating existing conda environment '$ENV_NAME'"
  else
    info "Creating new conda environment '$ENV_NAME' (python>=3.11)"
    conda create -y -n "$ENV_NAME" python=3.11
  fi

  conda activate "$ENV_NAME"
  info "Conda environment '$ENV_NAME' is active."

  # If additional commands were supplied, run them inside the env
  if [ "$#" -gt 0 ]; then
    exec "$@"
  fi
  return 0
fi

###############################################
# 2. Fallback: Python venv under ../Environments
###############################################
VENV_PATH="$ENV_PARENT_DIR/$ENV_NAME"

if [ -d "$VENV_PATH" ]; then
  info "Activating existing venv at $VENV_PATH"
else
  info "Creating new virtual environment at $VENV_PATH"
  python3 -m venv "$VENV_PATH"
fi

# shellcheck source=/dev/null
source "$VENV_PATH/bin/activate"
info "Virtual environment '$ENV_NAME' is active."

# Run remaining args inside the venv if provided
if [ "$#" -gt 0 ]; then
  exec "$@"
fi
