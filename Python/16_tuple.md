## ¿Qué es una **tupla** en Python?

Una **tupla** es una **estructura de datos inmutable**. Es similar a una lista (`list`), pero **no se puede modificar** (no puedes cambiar, eliminar ni insertar elementos después de creada).

## Conversión a lista (para poder modificar)
```python
`my_tuple = list(my_tuple)  # 🔄 de tupla a lista 
print(type(my_tuple))      # <class 'list'>  

my_tuple[4] = "MoureDev"    # ✅ Ahora sí se puede cambiar 
my_tuple.insert(1, "Azul")  # ✅ Insertamos un nuevo valor  

my_tuple = tuple(my_tuple) # 🔄 volvemos a convertir a tupla 
print(my_tuple) 
print(type(my_tuple))      # <class 'tuple'>`
```
- Este patrón es **común** si necesitas editar una tupla: convertir → modificar → reconvertir.

## Casos de uso típicos de las tuplas
- Datos que no deben cambiar (coordenadas, registros, configuraciones).
- Mejor rendimiento cuando no se necesita modificación.   
- Claves en diccionarios (si son tuplas inmutables puras).

