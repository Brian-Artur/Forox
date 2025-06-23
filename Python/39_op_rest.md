# Operador `*args`
- En definición de funciones: **empaqueta** argumentos posicionales (`*args`)
- En llamadas de funciones: **desempaqueta** secuencias
```python
def f(*args): ...   # empaquetar 
f(*[1, 2, 3])        # desempaquetar
```

# Operador `**kwargs`
# Op
- En definición de funciones: **empaqueta** argumentos nombrados (`**kwargs`)
- En llamadas de funciones: **desempaqueta** diccionarios
```python
def f(**kwargs): ...    # empaquetar 
f(**{"x": 1, "y": 2})    # desempaquetar
```
