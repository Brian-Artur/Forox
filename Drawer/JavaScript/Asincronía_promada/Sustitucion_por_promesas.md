# Sustitución por promesas

Cuando se necesita sincronizar múltiples tareas que dependen del tiempo, considera usar `Promise` junto con `async`/`await` para obtener un control más preciso y una mejor gestión de errores.   
![ED2025-05-24_12.09.28|550](ED2025-05-24_12.09.28.md)

En este ejemplo,

- `esperar` crea una promesa que se resuelve después de un retraso especificado
- `await` se usa para pausar la ejecución de `ejecutarTareas`.