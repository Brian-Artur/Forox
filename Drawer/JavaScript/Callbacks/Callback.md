# Callback
En JavaScript, una de las formas más comunes de implementar la programación asincrónica es _**mediante el uso de callbacks**_.

Un callback es una función que **se pasa como argumento a otra función** y se ejecuta **después de que esta última complete su tarea**.

La idea básica de una función callback es que se “llama de vuelta” una vez que se realiza una tarea.

Un ejemplo común es el manejo de eventos. Por ejemplo, cuando se hace clic en un botón en una página web, se puede pasar una función de callback como argumento a la función `addEventListener()` para que se ejecute cuando se haga clic en el botón.

No importa si es la función de callback es una función anónima, una función declarada o una función expresada; **mientras se pase como argumento y se ejecute después**, es un callback.

## Funcionamiento de los Callbacks

1. **Definición de una función callback**.  
    Una función callback se define como cualquier función que puede ser pasada como argumento a otra función.
2. **Pasar el callback como argumento**.  
    El callback se pasa como argumento a la función principal. Esta función principal ejecutará el callback en el momento apropiado.
3. **Ejecución del Callback**.  
    Una vez que la función principal completa su tarea principal, invoca el callback.

Vamos a verlo con un ejemplo sencillo.

```
function saludo(nombre, callback) {
  console.log(`Hola, ${nombre}!`);
  callback(); // Llamada a la función callback
}

function despedida() {
  console.log('Adios!');
}

saludo('Luis', despedida);
// Output:
// Hola, Luis!
// Adios!
```

En este ejemplo,

- `despedida` es una función de callback
- `despedida` se pasa como parámetro a la función principal `saludo`
- `saludo` ejecuta `despedida` después de que ha terminado su ejecución.

## Uso de Callbacks en operaciones asíncronas

Los callbacks se emplean _**para realizar operaciones asíncronas**_. A diferencia de las operaciones sincrónicas, que se ejecutan en secuencia, las operaciones asíncronas permiten que el programa continúe ejecutándose mientras espera que una operación se complete.

Para ver este comportamiento asíncrono, vamos a ver un ejemplo usando la función `setTimeout`.

```
console.log('Inicio');

setTimeout(() => {
  console.log('Tarea Asíncrona Completada');
}, 2000);

console.log('Fin');
```

En este ejemplo,

- `setTimeout` toma una función de callback _(en este caso, una lambda)_
- La función lambda se ejecutará después de un retraso de 2000 milisegundos.
- El resultado es que `Fin` se imprime antes que `Tarea Asíncrona Completada`.

## Uso de los Callbacks para manejar errores

Una de las ventajas de los callbacks en JavaScript es que _**se pueden utilizar para manejar errores**_.

Es común seguir el patrón de **error-primer**, donde el primer argumento del callback es el error y el segundo argumento es el resultado.

Si una tarea asincrónica falla, se puede llamar a un callback de error para manejar la situación.

```
function miCallback() {
  console.log('La tarea se ha completado');
}

function miCallbackError() {
  console.error('La tarea ha fallado');
}

function miFuncion(callback, callbackError) {
  setTimeout(function() {
    if (Math.random() < 0.5) {
      callback();
    } else {
      callbackError();
    }
  }, 3000);
}

miFuncion(miCallback, miCallbackError);
```

En este ejemplo,

- `miFuncion()` acepta dos callbacks como argumentos
- `miCallback()` para el caso de éxito y `miCallbackError()` para el caso de error.
- Si la tarea tiene éxito, se llama a `miCallback()`, y si falla, se llama a `miCallbackError()`.

## Callback hell

El **callback hell** _(o piramide de la perdición)_ ocurre cuando tenemos muchos callbacks anidados. Por ejemplo,

```
doSomething(function(result1) {
  doSomethingElse(result1, function(result2) {
    doAnotherThing(result2, function(result3) {
      // Más código aquí
    });
  });
});
```

A medida que tenemos más y más callbacks, cada vez se vuelve más lío. Al final, el código **se puede hacer muy difícil de leer y mantener**.

Para operaciones más complejas considera el uso de **promesas** y **`async`/`await`**. Estas técnicas ofrecen una forma más limpia y manejable de trabajar con código asíncrono.