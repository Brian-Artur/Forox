# Estructura

```pgsql
blackjack-project/
│
├── frontend/              ← Vite + TS vanilla + SCSS
│   ├── src/
│   │   ├── models/        ← Clases (Player, Card, Deck)
│   │   ├── views/         ← UI components
│   │   ├── services/      ← Llamadas al backend
│   │   ├── utils/         ← Helpers
│   │   └── main.ts
│   └── scss/
│
├── backend/               ← Node.js + Express + TS
│   ├── src/
│   │   ├── controllers/   ← Manejan la lógica de las rutas
│   │   ├── models/        ← Clases: Player, GameSession, Card
│   │   ├── routes/        ← Rutas REST o WebSocket
│   │   ├── services/      ← Reglas de blackjack, lógica central
│   │   ├── websockets/    ← Conexiones y eventos
│   │   ├── utils/
│   │   └── index.ts
│   └── tsconfig.json
│
├── database/
│   ├── schema.sql         ← Estructura de las tablas
│   └── seed.sql           ← Datos de prueba
│
├── README.md
└── .gitignore
```

## ✅ Paso 1: Crear la carpeta raíz del proyecto
```bash
mkdir blackjack-project
cd blackjack-project
```

## ✅ Paso 2: Inicializar el repositorio Git
```bash
git init
git commit --allow-empty -m 'First commit'
echo "node_modules/" > .gitignore
echo "dist/" >> .gitignore
echo ".env" >> .gitignore
```
1. Inicia un repositorio Git.
2. Commit inicial con repo vacío.
3. Crea un archivo `.gitignore`.
4. Añade reglas para ignorar:
    - Dependencias (`node_modules/`),    
    - Archivos de producción (`dist/`),    
    - Archivos sensibles (`.env`).

## ✅ Paso 3: Crear el frontend con Vite + TypeScript
```bash
npm create vite@latest frontend -- --template vanilla-ts
cd frontend
npm install
npm install -D sass
mkdir -p src/models src/views src/services src/utils ../scss
cd ..
```

## ✅ Paso 4: Crear el backend con Node.js + Express + TypeScript
```bash
mkdir backend
cd backend
npm init -y
npm install express cors
npm install -D typescript ts-node-dev @types/node @types/express
npx tsc --init
```

### Edita el `tsconfig.json` y asegúrate de tener:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "strict": true
  }
}
```

### Crea la estructura:
```bash
mkdir -p src/controllers src/models src/routes src/services src/websockets src/utils
touch src/index.ts
cd ..
```

## ✅ Paso 5: Crear carpeta de base de datos
```bash
mkdir database
touch database/schema.sql
touch database/seed.sql
```

## ✅ Paso 6: Crear `README.md` y `.gitignore` en la raíz
```bash
touch README.md
```