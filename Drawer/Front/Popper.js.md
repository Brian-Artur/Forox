# **¿Qué es Popper.js y por qué es necesario con Bootstrap?**

## **🔹 ¿Qué es Popper.js?**

**Popper.js** es una biblioteca de JavaScript que calcula posiciones dinámicas para elementos flotantes como:    
- **Tooltips** (información emergente al pasar el cursor)   
- **Popovers** (cuadros de información desplegables)  
- **Dropdowns** (menús desplegables)    
- **Modals** (ventanas emergentes)  

Su función principal es **posicionar correctamente estos elementos** en relación a sus "elementos de referencia" (como un botón o enlace), evitando que se salgan de la pantalla o se solapen con otros componentes.

---

## **🔹 ¿Por qué Bootstrap depende de Popper.js?**

Bootstrap **no incluye su propio sistema de posicionamiento**, sino que usa **Popper.js como dependencia** para manejar:

1. **Cálculo inteligente de posición**:    
    - Detecta si hay espacio para mostrar el elemento.        
    - Lo ajusta automáticamente (ej: si no cabe abajo, lo muestra arriba).       
2. **Comportamiento responsive**:    
    - Asegura que los tooltips, popovers y dropdowns se vean bien en móviles.
3. **Eficiencia**:
    - Popper.js está optimizado para rendimiento (mejor que soluciones custom de Bootstrap en versiones antiguas).

---

## **🔹 ¿Cómo se integra con Bootstrap?**

Desde **Bootstrap 4**, el JavaScript de Bootstrap **requiere Popper.js** para componentes como:    
- **Tooltips** (`data-bs-toggle="tooltip"`)
- **Popovers** (`data-bs-toggle="popover"`)
- **Dropdowns** (`data-bs-toggle="dropdown"`)
- **Modals** (ventanas emergentes)

### **Ejemplo de un Tooltip sin Popper.js vs con Popper.js:**

```html
<!-- Sin Popper.js (se vería mal) -->
<button class="btn btn-primary" title="Tooltip sin Popper">Hover me</button>

<!-- Con Popper.js (posición correcta) -->
<button class="btn btn-primary" data-bs-toggle="tooltip" title="Tooltip con Popper">Hover me</button>
```

_(El primer botón mostraría el tooltip en una posición fija, el segundo lo ajusta dinámicamente)._

---

## **🔹 ¿Cómo instalarlo?**

### **Opción 1: CDN (recomendado para desarrollo rápido)**

```html
<!-- Popper.js (necesario antes de Bootstrap JS) -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
```

### **Opción 2: Instalación via npm/yarn (para proyectos profesionales)**

```bash
npm install @popperjs/core bootstrap
```

Luego, en tu JavaScript:

```js
import '@popperjs/core';
import 'bootstrap';
```

### **Opción 3: Bootstrap Bundle (incluye Popper.js)**

Si no quieres manejar Popper por separado, usa `bootstrap.bundle.min.js`:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

_(Esta versión ya incluye Popper.js integrado)._

---

## **🔹 ¿Qué pasa si no uso Popper.js?**
- Los **dropdowns no se desplegarán** correctamente.
- Los **tooltips y popovers no funcionarán**.    
- Los **modals podrían tener problemas** de posicionamiento.
## **🔹 Conclusión**

- Si usas componentes interactivos de Bootstrap → **Instala Popper.js**. 
- Si solo necesitas estilos → **No es necesario**.

### [Qué es Bundle?](./Bundle)