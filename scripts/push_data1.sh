#!/usr/bin/env bash
set -e

MESSAGE="${1:-actualizo catalogo y assets}"
BRANCH="${2:-main}"

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

if [ ! -f "products.json" ]; then
  echo "Falta products.json"
  exit 1
fi

if [ ! -d "assets" ]; then
  echo "Falta la carpeta assets"
  exit 1
fi

git status --short
git add products.json assets

if git diff --cached --quiet; then
  echo "No hay cambios nuevos."
  exit 0
fi

git commit -m "$MESSAGE"
git push origin "$BRANCH"