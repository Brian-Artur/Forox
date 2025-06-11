# Listas (array)
```python
frutas = ["manzana", "pera", "uva"]
frutas.append("naranja")  # agrega
frutas[0] = "plátano"     # modifica
```
Funcionan como los Array. Ambos son **mutables**, ordenadas, y permiten elementos duplicados y de tipos distintos.

# Tuplas
```python
coordenadas = (10.5, 20.3)  # tipo implícito: tuple[float, float]
```
Útiles para devolver múltiples valores o representar estructuras fijas.

# Diccionarios (objetos)
```python
persona = {
    "nombre": "Ana",
    "edad": 30
}
# Añadir nuevo campo y valor
persona["profesion"] = "Ingeniera"
```
En Python, las claves deben ser **hashables** (usualmente strings o números), y el orden se mantiene desde Python 3.7.

# Sets 
```python
numeros = {1, 2, 3}
numeros.add(4)
numeros.add(2)  # no se añade, ya existe
```
- Evitan duplicados y tienen operaciones como `add`, `delete`, `has`.
- No conservan el orden de inserción al iterar (aunque en práctica suele parecerlo).
- Las operaciones como unión o intersección son más fáciles y legibles en Python:
```python
a = {1, 2, 3}
b = {3, 4}
print(a & b)  # intersección: {3}
```

# Frozenset
```python
inmutable = frozenset({1, 2, 3})
```
