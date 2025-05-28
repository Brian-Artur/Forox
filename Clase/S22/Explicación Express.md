# Explicación código frontend

🧠 ¿Qué es una petición HTTP?
-----------------------------

Primero, imagina que estás en un restaurante. Tú (el cliente) haces un pedido (una **petición HTTP**) y el camarero (el servidor) te trae lo que pediste (la **respuesta**).

Por ejemplo:

*   GET: “Traeme el menú.”
    
*   POST: “Quiero pedir una pizza.”
    
*   PUT: “Cambia mi pedido, ahora quiero hamburguesa.”
    
*   DELETE: “Cancela mi pedido.”
    

* * *

🚀 ¿Qué es Express?
-------------------

Express es como el cocinero rápido y organizado del restaurante. Te permite escribir de forma sencilla qué hacer cuando te piden algo. Es una **librería de Node.js** para crear servidores web.

* * *

🍔 ¿Cómo se crea una petición en Express?
-----------------------------------------

Te muestro con un ejemplo básico:

```ts
import express from 'express';

const app = express();
const port = 3000;

// Esto escucha una petición GET a la ruta "/"
app.get('/', (req, res) => {
  res.send('Hola, esta es la página principal');
});

// Petición GET para obtener todas las películas
app.get('/api/films', (req, res) => {
  res.json([
    { film_id: 1, title: 'ACADEMY DINOSAUR' },
    { film_id: 2, title: 'ACE GOLDFINGER' }
  ]);
});

// Petición POST para agregar una película
app.post('/api/films', (req, res) => {
  // Aquí podrías guardar los datos que vienen en req.body
  res.status(201).send('Película agregada');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
```

* * *

🧩 ¿Qué hace cada parte?
------------------------

### `app.get('/ruta', (req, res) => { ... })`

*   `.get` es el tipo de petición (puede ser `.post`, `.put`, `.delete`, etc.).
    
*   `'/ruta'` es la dirección a la que se hace la petición.
    
*   `(req, res)` es una función que se ejecuta cuando alguien visita esa ruta.
    
    *   `req` es el objeto con los datos que manda el cliente (por ejemplo, parámetros, cuerpo, cabeceras, etc.).
        
    *   `res` es el objeto para **responder**.
        

* * *

🎁 Algunos métodos de `res` para enviar respuestas:
---------------------------------------------------

*   `res.send('texto')`: manda texto plano.
    
*   `res.json(objeto)`: manda JSON (muy común en APIs).
    
*   `res.status(201).send('OK')`: cambia el código HTTP (como 201 "Created").
    

* * *

📦 ¿Y si quiero mandar datos en un POST?
----------------------------------------

Hay que decirle a Express que lea el cuerpo (body) de la petición, usando un middleware:

```ts
app.use(express.json()); // Para leer JSON en el body
```

Entonces puedes acceder a los datos con `req.body`:

```ts
app.post('/api/films', (req, res) => {
  const nuevaPelicula = req.body;
  console.log('Película recibida:', nuevaPelicula);
  res.status(201).send('Película agregada');
});
```

* * *

✅ Recapitulando
---------------

1.  Usas Express para crear rutas.
    
2.  Esas rutas pueden ser `GET`, `POST`, `PUT`, `DELETE`, etc.
    
3.  Cada ruta tiene una función que se ejecuta al recibir la petición.
    
4.  Usas `req` para leer lo que te mandan y `res` para responder.
    


# Filtro Adri
```

document.addEventListener("DOMContentLoaded", () => {

  const app = document.getElementById("app");

  if (app) {

    app.innerHTML = `<p class="text-success">¡Frontend listo y esperando datos de Sakila!</p>`;

    isOnQuery = "qFilms";

    createButtonsContainer();

    createSelect();

  }

});

  

document.addEventListener("DOMContentLoaded", () => {

  const btnQuery = document.getElementById("btnQuery");

  if (btnQuery) {

    btnQuery.addEventListener("click", () => {

      removeTable("app", "tableFilm");

      removeTable("app", "pagination");

      loadQuery();

      isOnQuery = "qCategory";

      currentPage = 1;

    });

  }

});

  

document.addEventListener("DOMContentLoaded", () => {

  const btnFilm = document.getElementById("btnFilm");

  if (btnFilm) {

    btnFilm.addEventListener("click", () => {

      removeTable("app", "tableFilm");

      removeTable("app", "pagination");

      loadFilms();

      isOnQuery = "qFilms";

      currentPage = 1;

    });

  }

});

  

document.addEventListener("DOMContentLoaded", () => {

  const btnFind = document.getElementById("btnFind");

  

  if (btnFind) {

    btnFind.addEventListener("click", () => {

      let btnInput = document.getElementById("btnInput")?.value;

      let btnSelect = document.getElementById("idSelect")?.value;

      console.log("Btn select", btnSelect);

      console.log("Btn input", btnInput);

      loadDataFilter(btnInput, btnSelect);

    });

  }

});

  

document.addEventListener("DOMContentLoaded", () => {

  const btnClear = document.getElementById("btnClean");

  if (btnClear) {

    btnClear.addEventListener("click", () => {

      if (isOnQuery === "qCategory") {

        loadQuery();

      } else if (isOnQuery === "qFilms") {

        loadFilms();

      }

    });

  }

});

  

function loadDataFilter(btnInput: any, btnSelect: any) {

  let arr = [];

  for (const key in filmsData) {

    if (btnInput == filmsData[key][btnSelect]) {

      arr.push(filmsData[key]);

    }

  }

  filmsData = arr;

  if (isOnQuery === "qCategory") {

    renderQuery();

  } else if (isOnQuery === "qFilms") {

    renderFilms();

  }

}

  

function removeTable(idTable: string, child: string) {

  let children = document.getElementById(child);

  document.getElementById(idTable)?.removeChild(children);

}

  

function createButtonsContainer() {

  let btns = document.getElementById("buttons");

  btns?.setAttribute("class", "mb-3 d-flex align-items-center flex-wrap gap-2");

  let btnFilm = document.createElement("button");

  let btnQuery = document.createElement("button");

  let btnFind = document.createElement("button");

  let btnInput = document.createElement("input");

  let btnClean = document.createElement("button");

  createButton(btns, btnFilm, "btnFilm", "Botón Film");

  createButton(btns, btnQuery, "btnQuery", "Botón Query");

  createButton(btns, btnFind, "btnFind", "Buscar");

  createButton(btns, btnInput, "btnInput", "");

  createButton(btns, btnClean, "btnClean", "Limpiar");

}

  

function createSelect() {

  let select = document.getElementById("buttons");

  let btnSelect = document.createElement("select");

  btnSelect.setAttribute("id", "idSelect");

  select?.appendChild(btnSelect);

}

  

function arrBtnSelect() {

  let typeSelect;

  for (const key in filmsData) {

    typeSelect = Object.keys(filmsData[key]);

  }

  return typeSelect;

}

  

function loadDataBtn() {

  let arrData = arrBtnSelect();

  let btnSelect = document.getElementById("idSelect");

  for (let i = 0; i < arrData.length; i++) {

    let value = document.createElement("option");

    value.setAttribute("value", arrData[i]);

    value.text = arrData[i];

    btnSelect?.appendChild(value);

    //value.text = arrData[i]

  }

}

  

function removeData() {

  let btnSelect = document.getElementById("idSelect");

  btnSelect?.remove();

}

  

function loadDataSelect() {

  removeData();

  createSelect();

  loadDataBtn();

}

  

function createButton(

  btnFather: any,

  btnChild: any,

  nameId: string,

  nameText: string

) {

  btnChild.setAttribute("id", nameId);

  btnChild.setAttribute("class", "btn btn-outline-primary");

  btnChild.textContent = nameText;

  btnFather.appendChild(btnChild);

}

  

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

  

// Variables de paginación

let filmsData: Film[] = [];

let currentPage = 1;

const pageSize = 10;

let isOnQuery: string;

  

const loadFilms = async () => {

  try {

    const response = await fetch("http://localhost:3000/api/films");

    filmsData = await response.json();

    renderFilms();

    renderPagination();

    loadDataSelect();

  } catch (error) {

    console.error("Error al cargar películas:", error);

  }

};

  

const loadQuery = async () => {

  try {

    const response = await fetch("http://localhost:3000/api/category");

    filmsData = await response.json();

    renderQuery();

    renderPagination();

    loadDataSelect();

  } catch (error) {

    console.error("Error al cargar películas:", error);

  }

};

  

const renderFilms = () => {

  const app = document.getElementById("app");

  if (!app) return;

  

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedFilms = filmsData.slice(startIndex, startIndex + pageSize);

  

  const columnNames = Object.keys(paginatedFilms[0]);

  const table = `

    <table class="table table-striped table-hover" id="tableFilm">

      <thead class="table-dark" >

        <tr>

          ${columnNames

      .map(

        (col) =>

          `<th style="text-align: center; vertical-align: middle;">${col

            .replace("_", " ")

            .toUpperCase()}</th>`

      )

      .join("")}

        </tr>

      </thead>

      <tbody>

        ${paginatedFilms

      .map(

        (film) => `

          <tr>

            ${columnNames.map((col) => `<td>${film[col] ?? ""}</td>`).join("")}

          </tr>

        `

      )

      .join("")}

      </tbody>

    </table>

    <div id="pagination" class="d-flex justify-content-center mt-3"></div>

  `;

  

  app.innerHTML = table;

  renderPagination();

};

  

const renderQuery = () => {

  const app = document.getElementById("app");

  

  if (!app) return;

  

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedFilms = filmsData.slice(startIndex, startIndex + pageSize);

  

  const table = `

    <table class="table table-striped table-hover" id="tableFilm">

      <thead class="table-dark">

        <tr>

          <th>Categoria</th>

          <th>Duración Media</th>

        </tr>

      </thead>

      <tbody>

        ${paginatedFilms

      .map(

        (film) => `

          <tr>

            <td>${film.categoria}</td>

            <td>${film.duracion_media}</td>

          </tr>

        `

      )

      .join("")}

      </tbody>

    </table>

    <div id="pagination" class="d-flex justify-content-center mt-3"></div>

  `;

  

  app.innerHTML = table;

  renderPagination();

};

  

const renderPagination = () => {

  const paginationDiv = document.getElementById("pagination");

  if (!paginationDiv) return;

  

  const totalPages = Math.ceil(filmsData.length / pageSize);

  const maxVisible = 7;

  let buttons = "";

  

  // Botón primera página

  if (currentPage > 1) {

    buttons += `<button class="btn btn-outline-secondary me-2" data-page="1">1</button>`;

  }

  

  // Cálculo del rango de páginas visibles

  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));

  let endPage = startPage + maxVisible - 1;

  if (endPage > totalPages) {

    endPage = totalPages;

    startPage = Math.max(1, endPage - maxVisible + 1);

  }

  

  // Botones numéricos del rango visible

  for (let i = startPage; i <= endPage; i++) {

    buttons += `<button class="btn ${i === currentPage ? "btn-primary" : "btn-outline-primary"

      } me-1" data-page="${i}">${i}</button>`;

  }

  

  // Botón con número de la última página (si no está visible ya)

  if (currentPage < totalPages && endPage < totalPages) {

    buttons += `<button class="btn btn-outline-secondary ms-2" data-page="${totalPages}">${totalPages}</button>`;

  }

  

  paginationDiv.innerHTML = buttons;

  

  // Eventos de cambio de página

  const allButtons = paginationDiv.querySelectorAll("button[data-page]");

  allButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

      const page = Number(btn.getAttribute("data-page"));

      if (!isNaN(page)) {

        currentPage = page;

  

        if (isOnQuery === "qCategory") {

          renderQuery();

        } else if (isOnQuery === "qFilms") {

          renderFilms();

        } else {

        }

      }

    });

  });

};

  

document.addEventListener("DOMContentLoaded", () => {

  loadFilms();

});


```