const categorias = {
		"Charcutería": ["Jamón", "Queso", "Salchichón", "Chorizo", "Pate", "Mortadela"],
		"Productos de limpieza": ["Detergente", "Lejía", "Bayetas", "Escoba", "Ambientador", "Guantes"],
		"Frutas": ["Manzanas", "Plátanos", "Naranjas", "Fresas", "Uvas", "Peras"]
};

const configIds = ["ol", "-", "li"];

function crearListaConIDs() {

	const body = document.body
	const contenedor = document.createElement('div')
	contenedor.className = 'container';
	body.append(contenedor);

	const libreta = document.createElement('img')
	libreta.src = "./assets/libreta.png";
	contenedor.append(libreta);

	let count = 0;
	const parent = document.getElementById("container_list");

	const ol = document.createElement('ol');
	ol.className = 'lista-categorias'; // Clase para el CSS
	parent.appendChild(ol);

	for (const categoria in categorias) {
			const liCategoria = document.createElement('li');
			liCategoria.textContent = categoria;
			liCategoria.id = `${configIds[0]}${count}`;
			liCategoria.className = 'categoria-item'; // Clase para el CSS
			ol.appendChild(liCategoria);

			const ulProductos = document.createElement('ul');
			ulProductos.className = 'productos-lista'; // Clase para el CSS
			liCategoria.appendChild(ulProductos);

			let count2 = 0;
			for (const producto of categorias[categoria]) {
					const liProducto = document.createElement('li');
					liProducto.textContent = producto;
					liProducto.id = `${configIds[0]}${count}${configIds[1]}${configIds[2]}${count2}`;
					liProducto.className = 'producto-item'; // Clase para el CSS
					ulProductos.appendChild(liProducto);
					count2++;

					// Evento para tachar producto individual
					liProducto.addEventListener('click', (e) => {
							e.stopPropagation(); // Evita que se active el evento de la categoría
							liProducto.classList.toggle('tachado');
					});
			}

			// Evento para tachar todos los productos de la categoría
liCategoria.addEventListener('click', (e) => {
    // Tachar/desmarcar la categoría misma
    e.currentTarget.classList.toggle('tachado');
    
    // Tachar/desmarcar todos los productos de la categoría
    const productos = liCategoria.querySelectorAll('.producto-item');
    productos.forEach(producto => {
        producto.classList.toggle('tachado');
    });
});

			count++;
	}

	let img = document.createElement('img')
	img.className = "goma"
	img.src = "./assets/goma.png"
	
	img.addEventListener('click', () => {
		img.classList.add('clicked');
    setTimeout(() => img.classList.remove('clicked'), 200);

		let tachados = parent.querySelectorAll('.tachado')
		tachados.forEach(e => {
			e.classList.remove('tachado');
		})
	})
	
	parent.append(img)

}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', crearListaConIDs);