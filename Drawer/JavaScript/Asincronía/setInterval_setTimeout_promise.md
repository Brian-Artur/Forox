# Uso de setInterval y setTimeout en JavaScript
En JavaScript, `setInterval`y `setTimeout`son una de _**las formas más sencillas de gestionar el tiempo**_ de las tareas.    

Estos dos métodos comúnmente utilizados son una forma sencilla de abordar la programación asincrónica.     
- **setTimeout** se utiliza para retrasar la ejecución de una función _**sólo una vez**_ .
- **setInterval** se utiliza para ejecutar código repetidamente _**a intervalos regulares**_ .

**NOTA:** Ambos son adecuados para **tareas de cronometraje simples** , pero si las tareas son más complejas y requieren un control más fino, es mejor optar por `Promises`la `async/await`sintaxis y.    
# Funcionamiento interno    
Tanto `setTimeout` como `setInterval` dependen del **event loop** de JavaScript, un mecanismo que permite manejar tareas asíncronas. Cuando usas una de estas funciones:
1. La tarea programada se registra en la cola de tareas.
2. Una vez transcurrido el tiempo especificado, el **bucle de eventos** coloca la función en la pila de ejecución.
3. La función se ejecuta cuando la pila de ejecución está vacía.    

[setTimeout](./setTimeout)
