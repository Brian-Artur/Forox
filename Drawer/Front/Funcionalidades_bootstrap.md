# Personalización con Sass en Bootstrap 5.3

## 📁 Estructura de Archivos Recomendada

Para personalizar Bootstrap sin modificar sus archivos fuente, se sugiere la siguiente estructura:

tu-proyecto/      
├── scss/     
│   └── custom.scss    
├── node_modules/    
│   └── bootstrap/    
│       ├── js/   
│       └── scss/   
└── index.html   

En custom.scss, importarás los archivos Sass de Bootstrap y realizarás tus personalizaciones.

## 🔧 Importación de Bootstrap en tu Archivo Sass

En tu archivo custom.scss, puedes importar Bootstrap de la siguiente manera:

```scss
// Importa las funciones de Bootstrap
@import "node_modules/bootstrap/scss/functions";

// Aquí puedes sobrescribir variables predeterminadas de Bootstrap
$primary: #ff5733;

// Importa el resto de los archivos de Bootstrap
@import "node_modules/bootstrap/scss/bootstrap";
```
Este enfoque te permite sobrescribir variables antes de que se utilicen en los estilos de Bootstrap.

## ⚙️ Compilación de Sass

Para compilar tu archivo Sass en CSS, puedes utilizar herramientas como:    
- Dart Sass: el compilador oficial de Sass.   
- Webpack, Parcel o Vite: empaquetadores de módulos que pueden manejar la compilación de Sass.   

Por ejemplo, usando Dart Sass desde la terminal:

```bash
sass scss/custom.scss css/custom.css
```

Esto generará un archivo CSS que puedes incluir en tu HTML.

## 🧩 Personalización Avanzada con Mapas y Mixins   
Bootstrap utiliza mapas para definir conjuntos de variables, como colores o tamaños. Puedes modificar estos mapas para personalizar componentes:    
```scss
// Agrega un nuevo color al mapa de colores
$theme-colors: map-merge($theme-colors, (
  "nuevo-color": #123456
));
```  
Además, Bootstrap proporciona mixins para aplicar estilos de manera consistente:
```scss
@include media-breakpoint-up(md) {
  // Estilos para pantallas medianas en adelante
}
```

## 🛠️ Opciones Globales
Bootstrap ofrece variables Sass para habilitar o deshabilitar características globales, como:   
- `$enable-rounded` : controla los bordes redondeados.  
- `$enable-shadows` : activa o desactiva las sombras.
- `$enable-gradients` : permite o no los degradados.   
Estas variables se pueden ajustar en tu archivo custom.scss antes de importar los archivos principales de Bootstrap.   
## 🌈 Modos de Color   
Bootstrap 5.3 introduce soporte para modos de color, como claro y oscuro, utilizando la variable data-bs-theme. Puedes definir tus propios modos de color personalizados y ajustar variables Sass y CSS según sea necesario.

  
  
  

[LAYOUT](./Layout.md)   
[CONTENT](./Content.md)   
[FORMS & CONTENT](./Forms.md)   
[HELPERS](./Helpers.md)    
[UTILITIES](./Utilities.md)     