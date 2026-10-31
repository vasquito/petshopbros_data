#!/usr/bin/env bash
set -e

MESSAGE="${1:-actualizo catalogo y imagenes}"
BRANCH="${2:-main}"

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

if [ ! -f "data/products.json" ] && [ ! -d "imagenes" ]; then
  echo "No encontré data/products.json ni la carpeta imagenes."
  exit 1
fi

git status --short
git add data/products.json imagenes
git diff --cached --quiet || git commit -m "$MESSAGE"
git push origin "$BRANCH"