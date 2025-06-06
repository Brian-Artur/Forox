# Sakila Base de Datos

**User:**   
**Created:**   
**Updated:**   
**Exported:** 6/4/2025 19:11  

## Prompt:
Actúa como un experto en Sakila y trabaja con temperatura 0.4

## Response:
Perfecto. A partir de ahora actuaré como un experto en la base de datos **Sakila** y responderé con un estilo preciso, conservador y técnico, manteniendo una temperatura baja (0.4), lo que significa que priorizaré la claridad, exactitud y concisión.

Puedes preguntarme sobre:

*   Estructura de la base de datos Sakila (tablas, claves, relaciones).
    
*   Consultas SQL comunes (JOINs, subconsultas, agrupaciones).
    
*   Análisis de negocio basado en Sakila (por ejemplo, películas más alquiladas, ingresos por tienda, etc.).
    
*   Creación o modificación de vistas, procedimientos almacenados o triggers.
    
*   Exportación de datos o integraciones.
    

Indícame qué necesitas exactamente. ¿Quieres que trabajemos con consultas SQL, interpretación de datos, modelado, resolución de ejercicios…?

## Prompt:
Genera 10 consultas usando select, where, order by, distinct, max y min, sum, avg, count, group by, having, and, or, like, not y join. No tienes por qué usar todos los datos que te paso, los que necesites para las consultas que generes. Y recuerda generar una consulta más preguntando cuántas Penelope hay en Sakila. Usa Sakila clásico.

## Response:
Perfecto. A continuación te presento **10 consultas SQL** más una adicional (la número 11) sobre cuántas actrices llamadas **Penelope** hay en la base de datos **Sakila clásica**. Todas están diseñadas con sintaxis SQL estándar y utilizando cláusulas como `SELECT`, `WHERE`, `ORDER BY`, `DISTINCT`, `MAX`, `MIN`, `SUM`, `AVG`, `COUNT`, `GROUP BY`, `HAVING`, `AND`, `OR`, `LIKE`, `NOT` y `JOIN`.

* * *

### 1\. Películas con duración superior a 120 minutos

```sql
SELECT title, length
FROM film
WHERE length > 120
ORDER BY length DESC;
```

* * *

### 2\. Nombres distintos de ciudades

```sql
SELECT DISTINCT city
FROM city;
```

* * *

### 3\. Película más larga de la base de datos

```sql
SELECT title, length
FROM film
WHERE length = (SELECT MAX(length) FROM film);
```

* * *

### 4\. Precio total de alquiler de todas las películas

```sql
SELECT SUM(rental_rate) AS total_rental_price
FROM film;
```

* * *

### 5\. Duración media de las películas por clasificación

```sql
SELECT rating, AVG(length) AS avg_duration
FROM film
GROUP BY rating;
```

* * *

### 6\. Número de clientes por país

```sql
SELECT country.country, COUNT(customer.customer_id) AS num_customers
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
GROUP BY country.country
ORDER BY num_customers DESC;
```

* * *

### 7\. Actores cuyo apellido empieza por "Smi" o "Joh"

```sql
SELECT first_name, last_name
FROM actor
WHERE last_name LIKE 'Smi%' OR last_name LIKE 'Joh%';
```

* * *

### 8\. Películas con coste de reemplazo entre 15 y 20 dólares

```sql
SELECT title, replacement_cost
FROM film
WHERE replacement_cost BETWEEN 15 AND 20
ORDER BY replacement_cost;
```

* * *

### 9\. Clasificaciones con más de 200 películas

```sql
SELECT rating, COUNT(*) AS num_films
FROM film
GROUP BY rating
HAVING COUNT(*) > 200;
```

* * *

### 10\. Clientes que NO viven en ciudades que empiecen por 'A'

```sql
SELECT customer.first_name, customer.last_name, city.city
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
WHERE city.city NOT LIKE 'A%';
```

* * *

### 11\. ¿Cuántas personas llamadas "Penelope" hay en Sakila?

```sql
SELECT COUNT(*) AS num_penelopes
FROM actor
WHERE first_name = 'PENELOPE';
```

* * *

¿Te gustaría que adapte alguna de estas consultas para practicar agrupaciones más complejas, subconsultas o incorporar `CASE`, `LIMIT`, o `UNION`?

## Prompt:
Explica detalladamente el contenido de cada consulta

## Response:
Claro, a continuación te explico **detalladamente el propósito, funcionamiento y estructura de cada una de las 11 consultas SQL** aplicadas sobre la base de datos **Sakila clásica**, incluyendo las cláusulas utilizadas y el resultado esperado:

* * *

### **1\. Películas con duración superior a 120 minutos**

```sql
SELECT title, length
FROM film
WHERE length > 120
ORDER BY length DESC;
```

**Explicación:**

*   Se seleccionan los títulos (`title`) y la duración (`length`) de las películas de la tabla `film`.
    
*   La cláusula `WHERE length > 120` filtra para mostrar solo aquellas películas cuya duración sea mayor a 120 minutos.
    
*   `ORDER BY length DESC` ordena los resultados de mayor a menor duración.
    

* * *

### **2\. Nombres distintos de ciudades**

```sql
SELECT DISTINCT city
FROM city;
```

**Explicación:**

*   `DISTINCT` elimina duplicados, por lo tanto devuelve una lista única de nombres de ciudad.
    
*   La tabla `city` contiene información sobre las ciudades donde hay direcciones de clientes o tiendas.
    

* * *

### **3\. Película más larga de la base de datos**

```sql
SELECT title, length
FROM film
WHERE length = (SELECT MAX(length) FROM film);
```

**Explicación:**

*   Esta consulta devuelve el título y duración de la película más larga.
    
*   `MAX(length)` se usa dentro de una subconsulta para encontrar la mayor duración.
    
*   La cláusula `WHERE` compara la duración de cada película con ese valor máximo.
    

* * *

### **4\. Precio total de alquiler de todas las películas**

```sql
SELECT SUM(rental_rate) AS total_rental_price
FROM film;
```

**Explicación:**

*   `SUM(rental_rate)` calcula la suma total de los precios de alquiler (`rental_rate`) de todas las películas en la tabla `film`.
    
*   `AS total_rental_price` da un alias legible a la columna del resultado.
    

* * *

### **5\. Duración media de las películas por clasificación**

```sql
SELECT rating, AVG(length) AS avg_duration
FROM film
GROUP BY rating;
```

**Explicación:**

*   Se agrupan las películas según su clasificación (`rating`: PG, R, etc.).
    
*   `AVG(length)` calcula la duración media para cada grupo.
    
*   `GROUP BY` permite que `AVG` opere por clasificación.
    

* * *

### **6\. Número de clientes por país**

```sql
SELECT country.country, COUNT(customer.customer_id) AS num_customers
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
GROUP BY country.country
ORDER BY num_customers DESC;
```

**Explicación:**

*   Utiliza múltiples `JOIN` para conectar al cliente con su dirección, ciudad y país.
    
*   `COUNT(customer.customer_id)` cuenta cuántos clientes hay por país.
    
*   `GROUP BY` agrupa por país.
    
*   `ORDER BY num_customers DESC` ordena de mayor a menor cantidad de clientes.
    

* * *

### **7\. Actores cuyo apellido empieza por "Smi" o "Joh"**

```sql
SELECT first_name, last_name
FROM actor
WHERE last_name LIKE 'Smi%' OR last_name LIKE 'Joh%';
```

**Explicación:**

*   Selecciona nombres y apellidos de la tabla `actor`.
    
*   `LIKE 'Smi%'` busca apellidos que empiezan por "Smi", y lo mismo para "Joh".
    
*   `%` es un comodín que representa cualquier número de caracteres después.
    

* * *

### **8\. Películas con coste de reemplazo entre 15 y 20 dólares**

```sql
SELECT title, replacement_cost
FROM film
WHERE replacement_cost BETWEEN 15 AND 20
ORDER BY replacement_cost;
```

**Explicación:**

*   Devuelve el título y coste de reemplazo (`replacement_cost`) de películas cuyo valor esté entre 15 y 20 (inclusive).
    
*   `BETWEEN` es una forma clara de expresar rangos.
    
*   Ordena los resultados por el valor del coste.
    

* * *

### **9\. Clasificaciones con más de 200 películas**

```sql
SELECT rating, COUNT(*) AS num_films
FROM film
GROUP BY rating
HAVING COUNT(*) > 200;
```

**Explicación:**

*   Agrupa películas por clasificación (`rating`).
    
*   Cuenta cuántas películas hay por grupo.
    
*   `HAVING` se usa para filtrar los grupos, en este caso mostrando solo aquellos con más de 200 películas.
    
*   A diferencia de `WHERE`, `HAVING` se aplica sobre funciones agregadas.
    

* * *

### **10\. Clientes que NO viven en ciudades que empiecen por 'A'**

```sql
SELECT customer.first_name, customer.last_name, city.city
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
WHERE city.city NOT LIKE 'A%';
```

**Explicación:**

*   Une las tablas `customer`, `address` y `city` para obtener la ciudad del cliente.
    
*   La cláusula `NOT LIKE 'A%'` excluye todas las ciudades cuyo nombre comienza por la letra "A".
    
*   Muestra nombre, apellido y ciudad del cliente.
    

* * *

### **11\. ¿Cuántas personas llamadas "Penelope" hay en Sakila?**

```sql
SELECT COUNT(*) AS num_penelopes
FROM actor
WHERE first_name = 'PENELOPE';
```

**Explicación:**

*   Cuenta cuántos actores tienen el nombre "PENELOPE".
    
*   La comparación es exacta y sensible a mayúsculas (según la configuración de la base de datos).
    
*   `COUNT(*)` cuenta todas las filas que cumplan la condición.
    

* * *

¿Te gustaría que añadamos más ejemplos con `INNER JOIN` más complejos, funciones de fecha (`DATE`, `NOW()`, etc.), o ejercicios prácticos sobre estadísticas de alquiler?



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)