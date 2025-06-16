# __ main __
![[ED2025-06-15_17.59.48|200]]
Cuando hacemos un `__name__` lo que ocurre es que queremos saber desde dónde se encuentra ese código. 

Si preguntamos por `__name__` y nos devuelve `___main___` quiere decir que el código que se está ejecutando ahora mismo, se encuentra en este mismo archivo.  

Esta comprobación se debe a que muchas veces estamos importando código de otros paquetes, que se auto-ejecutan. Para evitar esta ejecución automática, le colocamos el mítico
```python
if __name__ == "__main__"
		...
```
