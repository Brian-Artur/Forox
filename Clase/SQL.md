# Funciones agregadas
## **📚 ¿Qué son las funciones agregadas en SQL?**  
Son operaciones que **procesan múltiples filas** y devuelven **un solo valor**. Las más comunes:  

| Función   | Descripción                           | Ejemplo (con los datos de arriba)  |
| --------- | ------------------------------------- | ---------------------------------- |
| `SUM()`   | Suma todos los valores de una columna | `SUM(amount)` → **20.95**          |
| `AVG()`   | Calcula el promedio                   | `AVG(amount)` → **4.19** (20.95/5) |
| `COUNT()` | Cuenta el número de filas             | `COUNT(*)` → **5**                 |
| `MIN()`   | Devuelve el valor mínimo              | `MIN(amount)` → **0.99**           |
| `MAX()`   | Devuelve el valor máximo              | `MAX(amount)` → **9.99**           |
![Payment primeros resultados](Pasted%20image%2020250513073033.png)  

# Group by & Distint
lo que hace el distint, lo que va a hacer es recorrer toda la tabla
![ED2025-05-12_09.05.11](ED2025-05-12_09.05.11.md)
Mientras que GROUP BY opera con *los 5 Pérez*, DISTINT opera sólo con el primero. Entonces estamos recortando la cantidad de registros. Por lo que no tendremos acceso ellos, después de discriminarlos.

DISTINT sólo muestra los resultados distintos.

Cuando hacemos GRUOP BY, debemos pensar que estamos trabajando agrupaciones, en vez de registros sueltos. Entonces, las operaciones que hagamos, van a computar por el grupo.

El GROUP BY tiene prioridad. Por eso, aunque hagamos un orden de los registros de la tabla, se la va a pasar de largo. Nos va a devolver ese primer registro en el orden original.
