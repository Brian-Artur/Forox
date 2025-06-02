## 🧠 Arquitectura General
Tu app estará **dividida en frontend y backend**, lo cual te da muchas ventajas: separación de responsabilidades, mayor escalabilidad y facilidad para mantener y testear.
```
Frontend (SPA TS + Tailwind)          
	⇅ HTTP / JSON (API REST) 
Backend (Node.js + Express + DB + JWT)
```
## 🎨 Frontend (SPA con TypeScript Vanilla + Tailwind)
### ✅ Qué vas a usar:
- **TypeScript vanilla** 👉 para estructurar bien tu JS.
- **Tailwind CSS** 👉 para estilos rápidos, bonitos y sin romperte la cabeza.
- **Fetch API** 👉 para hablar con tu backend.
- **LocalStorage** o **SessionStorage** 👉 para guardar el JWT (token de sesión).
### 🔧 Tareas clave:
1. **Montar Tailwind localmente** (con PostCSS o CDN si prefieres algo simple).
2. **Rutas internas** simuladas con `location.hash` o el History API.  
3. **Login:** formulario que manda user/pass al backend y guarda el JWT. 
4. **Fetch protegidos:** añade el JWT como header `Authorization: Bearer <token>`.
## 🛠️ Backend (Node.js + Express + JWT + DB)
### ✅ Qué vas a usar:
- **Node.js + Express** 👉 para crear tu API REST.
- **JWT (jsonwebtoken)** 👉 para autenticación segura.
- **dotenv** 👉 para variables como DB_PASS, JWT_SECRET, etc.
- **CORS** 👉 para permitir peticiones del frontend.
- **Base de datos en Clever Cloud** 👉 genial que ya la tengas lista 💪.
### 🔧 Tareas clave:
1. **Configurar CORS:**
```js
app.use(cors({   
	origin: 'http://localhost:3000', // o tu dominio real   
	credentials: true 
}));`
```
2. **Variables de entorno con `.env`:**
```env
DB_USER=xxx 
DB_PASS=yyy 
JWT_SECRET=zzz`
```
3. **Login endpoint:**
    - Verifica las credenciales.    
    - Genera y responde con el JWT.
4. **Middleware de autenticación:**
	- Para proteger rutas privadas.
```ts
const auth = (req, res, next) => {
	const token = req.headers.authorization?.split(' ')[1];   
	if (!token) return res.status(401).json({ message: 'No token' });   
	try {     
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		req.user = payload;     
		next();   
	} catch {     
		res.status(403).json({ message: 'Token inválido' });   
	} 
};
```
5. **Rutas REST para tu base de datos** (GET, POST, PUT, DELETE).
## 🔒 Flujo de Autenticación con JWT
1. **Usuario inicia sesión.**
2. **El backend verifica y responde con un JWT.**
3. **El frontend guarda el token (localStorage).**
4. **El frontend envía ese token en las peticiones protegidas.**
5. **El backend lo verifica en cada petición.**
## 📦 Consejitos extra
- 🔁 **Haz servicios reutilizables en el frontend** para manejar peticiones API.
- 🔍 Usa `try/catch` para mostrar errores amigables al usuario.
- 🔄 Si vas a manejar sesiones largas, piensa en refresh tokens (opcional al inicio).
