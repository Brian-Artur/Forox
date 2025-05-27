# Ejecución retrasada por`setTimeout`   
`setTimeout`Es una función que ejecuta una función o un bloque de código después de un tiempo especificado. La sintaxis básica de `setTimeout`es:      
![|600](Pasted%20Image%2020250522072907_404.png)      
- **función** : La función que se ejecutará después de que transcurra el tiempo.
- **tiempo** : el tiempo en milisegundos antes de ejecutar la función.
- **[argumentos…]** : Opcionalmente, argumentos que se pasarán a la función.
![ED2025-05-22_07.28.35](ED2025-05-22_07.28.35.md)    
## Cancelado`setTimeout`
Para cancelar una acción programada por `setTimeout`, utiliza `clearTimeout`, pasando el identificador devuelto por `setTimeout`.    
![ED2025-05-22_08.46.26|500](ED2025-05-22_08.46.26.md)
### ¿Para Qué Sirve Asignar `setTimeout` a una Variable?   
El propósito de guardar el ID (`timeoutId`) es **tener control sobre el temporizador**. Por ejemplo:
1. **Cancelar la ejecución** si ya no es necesaria (como en tu código).
2. **Reutilizar el ID** para otros fines (ej: volver a programar el timeout).