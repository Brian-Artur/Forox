# Relation vs Relationship
#SQL 
## Relation (Relación como "tabla")
En bases de datos, una **relation** es una **tabla**.  
Cada tabla tiene filas y columnas.
- Las **filas** (también llamadas _registros_ o _tuplas_) representan datos individuales.
- Las **columnas** (también llamadas _atributos_) representan las características de esos datos.
## Relationship (Relación entre tablas)
Una **relationship** es una **relación entre dos o más tablas**.  
Sirve para conectar datos que están en diferentes tablas. No tiene que ser mediante una tabla intermedia. Cualquier relación que se haga entre clave primaria y clave foránea, es un relationship.

Ejemplo:  
Supón que tienes dos tablas:
- **Estudiantes** (`ID`, `Nombre`, `Edad`)
- **Cursos** (`ID`, `NombreCurso`)
Y una tercera tabla:
- **EstudiantesCursos** (`ID_Estudiante`, `ID_Curso`)
Esa tercera tabla crea una **relationship** entre _Estudiantes_ y _Cursos_.  
Es decir: conecta qué estudiante está en qué curso.

## Dominio 
El dominio de un atributo 

## Producto cartesiano de los dominios

## Relación = subconjunto del producto cartesiano


# Relaciones
## Desglosar 1 tabla en muchas
![[Drawing 2025-05-05 14.14.21.excalidraw|500]]
Fragmentamos una tabla con muchas columnas en muchas tablas con pocas columnas. Estas tablas van a estar relacionadas por `1:1` porque necesitamos que haya exactamente la misma cantidad 

# Objetos
#TypeScript 
En JavaScript podemos añadir nuevas propiedades a un objeto. E incluso pisar el objeto que ya hemos creado. Cosa que es TS nos va a señalar error, pese a que nos termine permitiendo.
![[Pasted image 20250505100307.png|550]]
Cuando estamos definiendo el objeto por primera vez, aunque no lo estemos tipando explícitamente. Estamos creando un nuevo tipo basado en el propio objeto y sus propiedades.
TypeScript infiere por nosotros los tipos de datos que hay en ese objeto.

Podemos aplastar todo el objeto ya creado. Siempre y cuando le asignemos valores a TODAS las propiedades.
## This
Todo objeto tiene un apuntador que apunta a sí mismo para evitar un problema.

Un método con función de flecha NO IMPLEMENTA (hereda) `this`
![[Drawing 2025-05-05 10.16.29.excalidraw]]

## Getter
El Get lo que hace es mostrarte los que hay en el interior de un objeto.

Es horrible encontrarse un objeto plagado de Getters y Setters.

Es una buena práctica el tener un Getter que actúe como valadador de los datos que hay dentro del mismo objeto.

# Docker
![[Drawing 2025-05-05 12.10.29.excalidraw|450]]

# Objetos tipados
A la hora de tipar las funciones, debemos ser más específicos y decir qué parámetros va a tener y qué tipo de valor va a devolver. Colocar sólamente el tipo Function (constructor de funciones) no es aconsejable; ya que da demasiada libertad a TS.
![[Drawing 2025-05-05 12.34.32.excalidraw|300]]

Como programador debes estar consciente al 100% de lo que haces

Al ser Opcional la función, sabes que puede retornar UNDEFINED. Pero tú sabes que esta nunca lo hará.

# Trazabilidad
Es importante seguir la trazabilidad; ya que podremos dale pasos atrás. Para hacer este proceso lo que hacemos es crear un nuevo objeto para cada versión.

Por eso no es bueno modificar un objeto ya creado. Pues no vamos a saber qué es lo que había en un pasado en ese objeto.
![[Drawing 2025-05-05 12.46.16.excalidraw|600]]

# Type
Palabra reservada para definir nuevo tipo de dato.
![[Drawing 2025-05-05 13.15.07.excalidraw|250]]
Puedes utilizar indistintamente `;` o `,`.

# Preguntar a ChatGPT
1. Decir que actúe como un expertor en el tema.
2. Le preguntamos sobre nuestra duda.
3. Si no lo entendemos. Copiamos su respuesta y le planteamos nuestra duda acerca de eso.

# Normalizaciones
El kit está en asegurar que no haya datos duplicados. Que la BBDD ocupe lo mínimo y sea más rápida.

## 1FN

> Si vamos a sacar un certificado de Oracle debemos ssaber qué signifacan esas relaciones teoricas de `0:1` . Lo mismo pasa con las formas normales, que en la vida real solo se emplean hasta la 3ª forma normal. Pero si queremos ser expertos, sí que debemos conocer las 8 (la última no se sabe si está terminada).


## Consistencia 
La **consistencia de datos** significa que la información debe ser **válida y coherente** en todo momento.
- **Datos inválidos**: Nada impide que exista una combinación como `id_nombre=99` (que no existe en la tabla `nombre`) en la tabla `id_persona`.
- **Datos huérfanos**: Si borras "Marta" de `nombre`, las relaciones con `id_nombre=2` en `id_persona` quedan **sin referencia** (violando la **integridad referencial**).
![[Drawing 2025-05-05 16.32.50.excalidraw|500]]
## Complejidad innecesaria
Para saber el nombre completo de una persona, necesitas hacer un **JOIN triple**:
##  Pérdida de semántica
- Los nombres y apellidos **no son entidades independientes**. No tiene sentido tratarlos como tablas separadas, porque:
    - No se reutilizan tanto como para justificar la normalización.
    - Un apellido "Blanco" no es el mismo concepto en "Lucía Blanco" y "Carlos Blanco".
# Tareas
- [x] Buscar formas de hacer copia profunda.
- [x] Cómo hacemos que en un objeto, una función retorne algo por defecto; sin haberselo asignado.
- [x] Escribir las primeras 3FN
# Copia Profunda (Deep Copy) de Objetos Literales
## Método Parse
Tomamos el objeto original y lo pasamos, primero a `string`, y nuevamente a `objeto`. De esta forma "rompemos" su referencia.
![[Drawing 2025-05-05 18.25.17.excalidraw|450]]
### Limitaciones:
- ❌ No copia funciones, `undefined`, `Symbol`, ni referencias circulares.
- ❌ Convierte `Date` a strings (pierde el tipo original).
## Librería `structuredClone()`
![[Pasted image 20250505183515.png]]
### Ventajas:
- ✅ Maneja tipos complejos: `Date`, `Map`, `Set`, `RegExp`, etc.
- ✅ Soporta referencias circulares.
- ✅ Más eficiente que el método JSON.
### Limitaciones:
- ❌ No copia funciones o propiedades no enumerables.
## Librería Lodash
### `_.cloneDeep()`
![[Drawing 2025-05-05 18.39.26.excalidraw]]
### Ventajas:
- ✅ Copia todos los tipos (incluyendo funciones y objetos personalizados).
- ✅ Soporta referencias circulares.

# Coalescencia nula
![[Drawing 2025-05-05 19.12.45.excalidraw|450]]
## Diferencia clave:
- `||` devuelve el valor derecho si el izquierdo es _falsy_ (`undefined`, `null`, `""`, `0`, `false`).
- `??` (Nullish coalescing) solo devuelve el derecho si el izquierdo es `null` o `undefined`. Permitiendo `""`, `0` y `false`, como valor.

# Formas normales
## 1FN
- **Elimina grupos repetidos:** Asegura que cada celda en una tabla contenga un solo valor atómico, no conjuntos de datos repetidos. 
- **Define claves primarias:** Cada tabla debe tener una clave primaria que identifique de forma única cada registro.
- ![[Pasted image 20250505194137.png]]
## 2FN
- **Cumple con 1FN:** Debe estar en la primera forma normal. 
- **Elimina dependencias parciales:** Todos los atributos no clave deben depender completamente de la clave primaria, no solo de parte de ella. 
- ![[Pasted image 20250505194106.png]]
## 3FN
- **Cumple con 2FN:** Debe estar en la segunda forma normal. 
- **Elimina dependencias transitivas:** No debe haber atributos no clave que dependan de otros atributos no clave.
![[Pasted image 20250505194019.png]]