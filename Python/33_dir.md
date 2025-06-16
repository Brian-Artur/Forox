# Dir()
La función **`dir()`** en Python es una herramienta de introspección que **devuelve una lista de nombres de atributos y métodos disponibles para un objeto**. Es especialmente útil para explorar y depurar código, ya que te permite descubrir qué operaciones puedes realizar con un objeto en tiempo real.

## Sin argumentos
Devuelve los nombres en el **ámbito local actual** (variables, funciones, imports).
```python
x = 10
def mi_funcion(): pass

print(dir())  
# Output: ['__annotations__', '__builtins__', ..., 'mi_funcion', 'x']
```

## Con un objeto
Lista los atributos/métodos del objeto (incluyendo los heredados).
```python
lista = [1, 2, 3]
print(dir(lista))
# Output: ['__add__', '__class__', ..., 'append', 'count', 'extend', ...]
```

## Con módulos
Muestra lo que contiene el módulo (funciones, clases variables).
```python
import math
print(dir(math))
# Output: ['__doc__', '__loader__', ..., 'sqrt', 'sin', 'cos', ...]
```

