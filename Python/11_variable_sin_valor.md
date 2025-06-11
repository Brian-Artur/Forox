# Variable sin valor
En Python, **no es posible declarar una variable sin asignarle un valor inicial**. Esto es diferente a lenguajes como JavaScript (con `let x;`) o TypeScript (con `let x: number;`).
```python
x  # Esto generará un error (NameError)
```
Python requiere que toda variable tenga un valor asignado desde su creación.

## Asignar None
```python
x = None  # Variable "declarada" pero sin valor útil
```
- **Ventaja**: Es explícito y sigue el estilo Pythonico
- **Uso común**: Inicializar variables que se asignarán más tarde

## Estructuras de datos
```python
lista = []
diccionario = {}
conjunto = set()
```
Que son estructuras de datos vacías. Pero que al menos ya sabemos que existen con un valor vacío.

## Equivalencia con TypeScript
TS: `let x: number;` Py: `x: int = 0`