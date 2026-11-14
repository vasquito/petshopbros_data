# Pet Shop Bros Data

Repositorio de datos e imágenes del catálogo de Pet Shop Bros. Mantiene el contenido separado de la aplicación para poder actualizar productos sin modificar el código de React.

## Estructura

```text
petshopbros_data/
├── data/
│   ├── productos.csv
│   └── products.json
├── assets/
│   └── img/
│       └── products/
│           ├── producto-1.png
│           ├── producto-2.png
│           └── ...
├── scripts/
│   └── excel_to_json.js
├── .gitignore
└── README.md
```

## ¿Qué se puede actualizar?

- Agregar, modificar o quitar productos del archivo Excel/CSV.
- Agregar o quitar imágenes de productos.
- Generar `products.json` a partir de los datos.
- Publicar los cambios en este repositorio.

La aplicación obtiene el catálogo desde este repositorio. Así, los datos y las imágenes se pueden mantener sin modificar el código de la tienda.

## Requisitos

Instalá [Node.js](https://nodejs.org/) y [Git](https://git-scm.com/install/windows).

Verificá que estén disponibles:

```bash
node --version
git --version
```
### ¿Qué son Node.js y Git?

- **Node.js** permite ejecutar JavaScript fuera del navegador. En este proyecto se usa para correr el script que genera `products.json`.
- **Git** sirve para registrar los cambios realizados en los archivos y subirlos al repositorio para compartirlos con la aplicación.

## Obtener una copia del proyecto

Si todavía no tenés el repositorio en tu computadora, clonalo con Git. Reemplazá la URL de ejemplo por la URL real del repositorio:

```powershell
git clone https://github.com/USUARIO/petshopbros_data.git
cd pethshopbros_data
```

## Actualizar el catálogo

### 1. Abrir la carpeta del repositorio

En una terminal, cambiá la ruta por la ubicación local del proyecto:

```powershell
cd "C:\ruta\al\proyecto\petshopbros_data"
```

### 2. Generar el JSON

Después de actualizar los datos, ejecutá:

```powershell
node .\scripts\excel_to_json.js
```

Revisá que `data/products.json` se haya generado correctamente.

### 3. Revisar los cambios

```bash
git status --short
git diff (opcional)
```

### 4. Guardar y publicar los cambios

Agregá los archivos que modificaste. Por ejemplo:

```bash
git add data/products.json data/productos.csv assets/img/products/
```

Si también cambiaste el script u otros archivos, agregalos explícitamente. Después, creá el commit y subilo:

```bash
git commit -m "Actualiza catálogo e imágenes"
git push origin main
```

> Si la rama principal del repositorio no se llama `main`, reemplazá ese nombre por la rama correspondiente.

## Solución de problemas

### `node` no se reconoce

Instalá Node.js desde [nodejs.org](https://nodejs.org/) y volvé a abrir la terminal. Después, verificá la instalación con:

```bash
node --version
```