En JavaScript, `setInterval`y `setTimeout`son una de _**las formas más sencillas de gestionar el tiempo**_ de las tareas.    

Estos dos métodos comúnmente utilizados son una forma sencilla de abordar la programación asincrónica.     
- **setTimeout** se utiliza para retrasar la ejecución de una función _**sólo una vez**_ .
- **setInterval** se utiliza para ejecutar código repetidamente _**a intervalos regulares**_ .

También están disponibles tanto en navegadores web como en la mayoría de los entornos de ejecución como NodeJs.   

**NOTA:** Ambos son adecuados para **tareas de cronometraje simples** , pero si las tareas son más complejas y requieren un control más fino, es mejor optar por `Promises`la `async/await`sintaxis y.    
# Funcionamiento interno    
Tanto `setTimeout`como `setInterval` se necesitan contexto. Pues "dependen del **bucle de eventos"** de JavaScript. Un mecanismo que permite gestionar tareas asíncronas. Al usar una de estas funciones:   
1. La tarea programada se registra en la cola de tareas.
2. Una vez transcurrido el tiempo especificado, el **bucle de eventos** coloca la función en la pila de ejecución.
3. La función se ejecuta cuando la pila de ejecución está vacía.    
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

- [x] Terminar setTiout()
- [ ] Comenzar setInterval
