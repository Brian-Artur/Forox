# **¿Qué es Bootstrap?**

Bootstrap es un **framework front-end** de código abierto desarrollado por Twitter que proporciona componentes y herramientas pre-diseñadas para crear sitios web y aplicaciones **responsive** (adaptables a móviles, tablets y desktop) de forma rápida y consistente.   
### **Características principales:**
- Sistema de **grid (rejilla)** para layouts responsivos.
- Componentes pre-estilizados (botones, formularios, tarjetas, modales, etc.).
- Utiliza **CSS** y **JavaScript** (con dependencia de **Popper.js** para componentes interactivos).    
- Compatible con los principales navegadores.    
- Personalizable mediante **Sass** (opcional).

# **Formas de implementar Bootstrap en un proyecto local**

## **1. Usar CDN (recomendado para desarrollo rápido)**

No requiere instalación local, pero depende de conexión a internet.

### **En tu `index.html`**:

```html
<!-- CSS de Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JavaScript de Bootstrap (requiere Popper.js) -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
```

✅ **Ventajas**:
- Fácil de implementar.
- Siempre obtienes la última versión.  

❌ **Desventajas**:
- Requiere conexión a internet.
- No es óptimo para producción (dependencia externa).

## **2. Instalar Bootstrap via npm (recomendado para proyectos serios)**

Ideal si usas un bundler como **Webpack, Vite o Parcel**.

### **Paso 1: Instalar Bootstrap y Popper.js**    
`npm install bootstrap @popperjs/core`    

### **Paso 2: Importar en tu proyecto**

#### **Opción A: Importar directamente en JavaScript/TypeScript**
```js
// Importar CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar JS (si necesitas modales, tooltips, etc.)
import * as bootstrap from 'bootstrap';
```

#### **Opción B: Enlazar manualmente en HTML**

Si no usas un bundler, puedes referenciar los archivos desde `node_modules`:
```html
<link href="./node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="./node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
<script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```


✅ **Ventajas**:
- Control total sobre la versión.
- Se puede personalizar con **Sass**.  
- Mejor rendimiento en producción.  

❌ **Desventajas**:
- Requiere configuración adicional si usas bundlers.

---

## **3. Descargar archivos manualmente**

Si no quieres usar npm, puedes descargar los archivos compilados desde [getbootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/).

### **Pasos:**
1. Descarga la última versión de Bootstrap.    
2. Copia `bootstrap.min.css` y `bootstrap.bundle.min.js` (incluye Popper) en tu proyecto.  
3. Enlázalos en tu HTML:

<link href="css/bootstrap.min.css" rel="stylesheet">
<script src="js/bootstrap.bundle.min.js"></script>

✅ **Ventajas**:
- No requiere npm ni CDN. 
- Funciona sin conexión.  

❌ **Desventajas**:
- Actualizaciones manuales.  
- Ocupa espacio en tu proyecto.

---

## **4. Usar Sass (para personalización avanzada)**

Si necesitas modificar colores, tamaños o variables de Bootstrap, puedes compilarlo desde Sass.     
### **Pasos:**     
#### 1. Instala Bootstrap y Sass:    
```bash
npm install bootstrap sass
```
#### 2. Crea un archivo `custom.scss` donde sobrescribas variables:   
```scss
// Cambiar el color primario
$primary: #ff5722;

// Importar Bootstrap
@import "~bootstrap/scss/bootstrap";
```
#### 3. Compila con Sass:    
```bash
sass custom.scss dist/css/bootstrap.css
```
#### 4. Enlázalo en tu HTML:    
```html
<link href="dist/css/bootstrap.css" rel="stylesheet">
```

✅ **Ventajas**:
- Totalmente personalizable.
- Mejor organización del CSS.

❌ **Desventajas**:
- Requiere conocimientos de **Sass**.

### [Qué es Popper?](Popper.js.md)