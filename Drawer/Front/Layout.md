# 🧱 1. Contenedores (.container)  
Los contenedores son elementos fundamentales en Bootstrap que sirven para alinear y espaciar el contenido dentro de un dispositivo o ventana de visualización. Existen tres tipos principales:   
- .container: Establece un ancho máximo en cada punto de interrupción (breakpoint) y centra el contenido horizontalmente.
- .container-{breakpoint}: Tiene un ancho del 100% hasta el punto de interrupción especificado, donde se fija un ancho máximo.
- .container-fluid: Siempre tiene un ancho del 100%, independientemente del tamaño de la ventana.   

# 📐 2. Sistema de Rejilla (Grid System)  
Bootstrap utiliza un sistema de rejilla basado en Flexbox que permite crear diseños responsivos y adaptables. Este sistema se basa en una estructura de 12 columnas y se compone de:   
- **Contenedores** (.container): Envoltorio general del contenido.
- **Filas** (.row): Agrupan columnas y aseguran un alineamiento adecuado.
- **Columnas** (.col): Contienen el contenido real y se ajustan según el tamaño de la pantalla.

Las clases de columna se pueden combinar con los puntos de interrupción para definir cómo se comportan en diferentes tamaños de pantalla, por ejemplo: .col-6, .col-md-4, .col-lg-3.

# 📏 3. Puntos de Interrupción (Breakpoints)

Los puntos de interrupción son anchos de pantalla predefinidos que permiten adaptar el diseño a diferentes dispositivos. Bootstrap define los siguientes:    
- **Extra pequeño** (xs): <576px (sin clase infix)  
- **Pequeño** (sm): ≥576px
- **Mediano** (md): ≥768px
- **Grande** (lg): ≥992px
- **Extra grande** (xl): ≥1200px
- **Extra extra grande** (xxl): ≥1400px

Estos puntos de interrupción se utilizan en clases como .col-md-6 o .d-lg-none para aplicar estilos específicos según el tamaño de la pantalla.

# 🧱 4. Columnas Avanzadas
Además de las clases básicas de columnas, Bootstrap ofrece opciones avanzadas para:    
- **Alineación vertical y horizontal**: Utilizando clases como .align-items-center o .justify-content-end.
- **Ordenamiento**: Cambiar el orden de las columnas con clases como .order-1 o .order-md-2.
- **Desplazamiento (Offset)**: Mover columnas hacia la derecha con clases como .offset-md-3.

Estas opciones proporcionan un control más preciso sobre la disposición de las columnas en diferentes tamaños de pantalla.

# 🧪 5. CSS Grid (Experimental)

Bootstrap 5.1 introdujo un sistema de rejilla alternativo basado en CSS Grid, que es experimental y opcional. Para habilitarlo:   
1. Desactiva las clases de la rejilla predeterminada estableciendo $enable-grid-classes: false.    
2. Activa CSS Grid estableciendo $enable-cssgrid: true.   
3. Recompila tu Sass.   

Este sistema utiliza clases como .grid y .g-col-4 y se basa en propiedades de CSS Grid como grid-template-columns y gap.

# 🧰 6. Utilidades de Diseño

Bootstrap incluye numerosas clases utilitarias para facilitar el diseño y la disposición de elementos:
- **Visualización** (display): Controla cómo se muestra un elemento, por ejemplo, .d-none para ocultar o .d-flex para aplicar Flexbox.    
- **Flexbox**: Clases como .justify-content-center o .align-items-start para alinear elementos.    
- **Espaciado** (margin y padding): Clases como .m-3 o .p-2 para ajustar márgenes y rellenos.    
- **Visibilidad**: Clases como .visible o .invisible para mostrar u ocultar elementos sin afectar el diseño.   

Estas utilidades permiten aplicar estilos de manera rápida y coherente sin necesidad de escribir CSS personalizado.