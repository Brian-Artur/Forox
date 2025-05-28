# Explicación código frontend

🔹 ESTRUCTURA GENERAL DEL CÓDIGO

Este código hace lo siguiente:
1.  Espera que el DOM esté completamente cargado (`DOMContentLoaded`).
2.  Carga películas desde una API REST en `/api/films` o `/api/films/available`.   
3.  Las guarda en dos arrays: `filmsData` (todos los datos) y `filteredFilms` (los datos mostrados actualmente).  
4.  Permite filtrar las películas por título o descripción.  
5.  Renderiza los resultados en una tabla HTML paginada.  
6.  Muestra botones para cambiar entre todas las películas y solo las disponibles. 
7.  Usa Bootstrap para estilos. 

* * *
## Inicialización del DOM

```ts
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = `<p class="text-success">¡Frontend listo y esperando datos de Sakila!</p>`;
  }
});
```

*   Espera a que el DOM esté cargado.
    
*   Busca el div con ID `app` y coloca un mensaje de estado inicial.
    

* * *

### Interfaz de tipo Film

```ts
interface Film {
  film_id: number;
  title: string;
  description: string | null;
  release_year: number | null;
  language_id: number;
  rental_duration: number;
  rental_rate: number;
  length: number | null;
  replacement_cost: number;
  rating: string | null;
}
```

*   Define la **estructura esperada** de los objetos de tipo película.
    
*   Es útil para **tipado fuerte en TypeScript**.
    
*   Aun así, más abajo se usa `Record<string, any>[]` en vez de `Film[]`, lo que indica que **la respuesta real puede tener campos adicionales o no conocidos.**
    

* * *

### Variables globales

```ts
let filmsData: Record<string, any>[] = [];
let filteredFilms: Record<string, any>[] = [];
let currentPage = 1;
const pageSize = 10;
```

*   `filmsData`: Todas las películas cargadas desde la API.
    
*   `filteredFilms`: Películas que están siendo mostradas actualmente (filtradas).
    
*   `currentPage`: Página actual de la paginación.
    
*   `pageSize`: Número de resultados por página.
    

* * *

### Función `loadFilms`

```ts
const loadFilms = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/films');
    filmsData = await response.json();
    filteredFilms = [...filmsData];
    renderFilms();
    renderPagination();
  } catch (error) {
    console.error('Error al cargar películas:', error);
  }
};
```

*   Realiza un **fetch HTTP GET** a `/api/films`.
    
*   Guarda los resultados en `filmsData` y `filteredFilms`.
    
*   Llama a `renderFilms()` y `renderPagination()` para mostrar los resultados.
    

* * *

### Función `loadAvailableFilms`

```ts
const loadAvailableFilms = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/films/available');
    filmsData = await response.json();
    filteredFilms = [...filmsData];
    renderFilms();
    renderPagination();
  } catch (error) {
    console.error('Error al cargar películas disponibles:', error);
  }
};
```

*   Igual que `loadFilms`, pero consulta solo películas disponibles.
    

* * *

### Función de filtro

```ts
const filterFilms = (searchTerm: string) => {
  if (!searchTerm) {
    filteredFilms = [...filmsData];
  } else {
    const term = searchTerm.toLowerCase();
    filteredFilms = filmsData.filter(film =>
      film.title.toLowerCase().includes(term) ||
      (film.description && film.description.toLowerCase().includes(term))
    );
  }
  currentPage = 1;
  renderFilms();
  renderPagination();
};
```

*   Filtra películas por **título** o **descripción**, sin distinguir mayúsculas/minúsculas.
    
*   Reinicia la paginación a la primera página después de filtrar.
    

* * *

### Función `renderFilms`

Esta función renderiza:

1.  Los **botones de vista** (`Todas` / `Disponibles`).
    
2.  La **barra de búsqueda**.
    
3.  La **tabla de resultados**, con datos dinámicos y encabezados generados a partir de las claves del primer objeto.
    
4.  El **total de resultados** encontrados.
    
5.  Muestra un mensaje si no hay resultados.
    

Ejemplo del header de la tabla:

```ts
${columnNames.map(col => `<th>${col.replace('_', ' ').toUpperCase()}</th>`).join('')}
```

Transforma `"release_year"` en `"RELEASE YEAR"`, por ejemplo.

* * *

### Función `renderPagination`

*   Calcula el total de páginas necesarias.
    
*   Muestra una paginación inteligente (con `...` si hay muchas páginas).
    
*   Muestra botones de navegación hacia cada página visible.
    
*   Muestra `1 ... [actual] ... n` si corresponde.
    
*   Asocia eventos `click` a los botones para cambiar de página.
    

* * *

### Función `setupViewButtons`

```ts
const setupViewButtons = () => {
  const btnAll = document.getElementById('btn-all-films');
  const btnAvailable = document.getElementById('btn-available-films');

  btnAll?.addEventListener('click', () => {
    currentPage = 1;
    loadFilms();
  });

  btnAvailable?.addEventListener('click', () => {
    currentPage = 1;
    loadAvailableFilms();
  });
};
```

*   Agrega eventos a los botones para cargar los datos correspondientes.
    

* * *

### Función `setupSearchInput`

*   Obtiene referencias a los elementos del filtro.
    
*   Permite:
    
    *   Filtrar al presionar el botón "Filtrar".
        
    *   Filtrar al presionar Enter.
        
    *   Limpiar el campo y restaurar todos los datos al hacer clic en "Limpiar".
        

* * *

### Segunda llamada a `DOMContentLoaded`

```ts
document.addEventListener('DOMContentLoaded', () => {
  loadFilms();
});
```

*   Además de mostrar el mensaje al inicio, también carga los datos al abrir la página.
    

> ⚠️ Esta segunda llamada al mismo evento está **repetida**. No es dañino, pero podría integrarse en la primera para evitar duplicidad.

* * *

🧠 CONCEPTOS RELACIONADOS
---
*   **TS/POO**: Usa una interfaz (`Film`) para tipar objetos, aunque no se aplica como clase ni se usa programación orientada a objetos directamente.
    
*   **Node/Express**: Este frontend espera una API REST disponible en `localhost:3000`, típica de un backend con Express.
    
*   **SQL**: La API debe estar conectada a la base de datos Sakila, filtrando por disponibilidad de películas.
    

* * *

✅ POSIBLES MEJORAS
------------------

1.  Usar la interfaz `Film` directamente en lugar de `Record<string, any>`.
    
2.  Separar la lógica de UI en funciones más pequeñas.
    
3.  Evitar la duplicación de `DOMContentLoaded`.
    
4.  Agregar mensajes de carga y manejo de errores visuales.
    
5.  Hacer `fetch` más robusto con control de errores del `response.status`.
    

* * *
