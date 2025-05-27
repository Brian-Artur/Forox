# Ejecucion periódica `setInterval`
`setInterval` es una función que permite ejecutar una función o un bloque de código de manera repetitiva en intervalos regulares de tiempo. La sintaxis básica de `setInterval` es:   
![|650](Pasted%20image%2020250524114537.png)     
- **función**: La función que se ejecutará repetidamente.
- **intervalo**: El tiempo en milisegundos entre cada ejecución de la función.
- **[argumentos…]**: Opcionalmente, argumentos que se pasarán a la función.
![ED2025-05-24_11.45.00|500](ED2025-05-24_11.45.00.md)   
En este ejemplo, `saludar` se ejecutará al instante, y una ves cada segundo debido al intervalo de 1000 milisegundos. La primera vez que se ejecuta es sin retraso. No confundir con el comportamiento de `setTimeout()`.

## Cancelación de `setTimeout`   
Para detener la ejecución repetitiva iniciada por `setInterval`, utiliza `clearInterval`, pasando el identificador devuelto por `setInterval`.    
![ED2025-05-24_11.59.22|500](ED2025-05-24_11.59.22.md)   
En este ejemplo, `saludar` se ejecuta cada segundo, pero `clearInterval` detiene la repetición después de 5 segundos.