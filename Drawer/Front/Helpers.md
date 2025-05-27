# 🛠️ Helpers en Bootstrap 5.3
Los helpers en Bootstrap 5.3 son clases utilitarias diseñadas para facilitar tareas comunes de diseño y comportamiento en tus proyectos web. Estas clases permiten aplicar estilos específicos de manera rápida y eficiente, sin necesidad de escribir CSS personalizado.

## 1. Stacks (.vstack y .hstack)
Introducidos en Bootstrap 5.1, los stacks son atajos que simplifican la creación de diseños utilizando Flexbox:[Bootstrap](https://getbootstrap.com/docs/5.3/helpers/stacks/?utm_source=chatgpt.com)
- .vstack: Apila elementos verticalmente.[Bootstrap+6Bootstrap+6Bootstrap+6](https://getbootstrap.com/docs/5.3/helpers/stacks/?utm_source=chatgpt.com)    
- .hstack: Coloca elementos horizontalmente.[Bootstrap Blog+5Bootstrap+5Bootstrap+5](https://getbootstrap.com/docs/5.3/helpers/position/?utm_source=chatgpt.com)

Ambas clases pueden combinarse con las utilidades de espaciado, como .gap-*, para controlar el espacio entre los elementos. [Bootstrap](https://getbootstrap.com/docs/5.3/helpers/stacks/?utm_source=chatgpt.com)

## 2. Color y Fondo
Estas clases combinan las utilidades de texto (.text-*) y fondo (.bg-*) para establecer combinaciones de colores con contraste adecuado. Utilizan la función color-contrast() de Sass para garantizar la legibilidad del texto sobre diferentes fondos. [Bootstrap+1Bootstrap+1](https://getbootstrap.com/docs/5.3/helpers/color-background/?utm_source=chatgpt.com)

## 3. Posicionamiento
Bootstrap ofrece clases para posicionar elementos de manera fija o adhesiva:
- .fixed-top y .fixed-bottom: Fijan un elemento en la parte superior o inferior de la ventana. 
- .sticky-top y .sticky-bottom: Hacen que un elemento se adhiera al borde correspondiente al hacer scroll.  

También existen variantes responsivas como .sticky-sm-top para aplicar estos comportamientos en diferentes tamaños de pantalla. [Bootstrap](https://getbootstrap.com/docs/5.3/helpers/position/?utm_source=chatgpt.com)

## 4. Ratios
Las clases .ratio permiten mantener una relación de aspecto específica para elementos como videos o imágenes. Las relaciones predefinidas incluyen:
- .ratio-1x1
- .ratio-4x3
- .ratio-16x9
- .ratio-21x9

También es posible definir relaciones personalizadas utilizando variables CSS. [Bootstrap+3Bootstrap+3Bootstrap+3](https://getbootstrap.com/docs/5.3/utilities/api/?utm_source=chatgpt.com)

## 5. API de Utilidades Personalizadas
Bootstrap 5.3 introduce una API que permite crear utilidades personalizadas mediante Sass. Algunas características incluyen:
- **Variables CSS**: Genera variables locales en lugar de reglas tradicionales de propiedad-valor.[Bootstrap+1Bootstrap+1](https://getbootstrap.com/docs/5.3/utilities/api/?utm_source=chatgpt.com)
- **Clases Personalizadas**: Permite cambiar el prefijo de las clases generadas.
- **Estados**: Genera variantes para pseudo-clases como :hover o :focus.[Bootstrap](https://getbootstrap.com/docs/5.3/utilities/api/?utm_source=chatgpt.com)

Esta flexibilidad facilita la creación de estilos reutilizables y adaptados a las necesidades específicas de tu proyecto.