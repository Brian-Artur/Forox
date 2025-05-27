# Promesas en JavaScript

## ✅ ¿Qué es una promesa?

Una promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro, o nunca.
- Se usa para manejar **código asíncrono** de forma más estructurada.  
- Permite **encadenar operaciones** y manejar errores centralizadamente.   
- Alternativa más legible al uso de callbacks (evita el _callback hell_).

## 🧠 Composición y uso básico
### Crear una promesa que se resuelve inmediatamente:
![](2025-05-25_17-30.svg)
Aquí nosotros hemos creado una promesa que se resuelve inmediatamente y retorna el valor `1`.  

### Acceder al valor de la promesa:
No podemos acceder al valor de esta promesa **si no hacemos uso del método `.then`.**  
![](2025-05-25_17-40.svg)

### Encadenamiento de `.then`:
Además, también podemos hacer que nuestro método `.then` retorne otro valor.  
![](2025-05-25_17-50.svg)

El valor de `x` acá abajo es distinto del valor de `x` de acá arriba, porque se encuentran en _closures_ distintos.

### Devolver otra promesa
Generamos una nueva promesa, que se resuelve, en el primero `.then`. En el segundo `.then` imprimimos el resultado de esta promesa. 
![](2025-05-25_18-21.svg)

## ⚠️ Manejo de errores   
Si una promesa se **rechaza**, se salta toda la cadena `.then()` y va directo a `.catch()`
![](2025-05-25_18-35.svg)   

## 🕓 Promesas que se resuelven en el futuro
Promise se puede comportar también como una clase, con su constructor.
### Simular un retardo:
![](2025-05-25_19-10.svg)

### Encadenar promesas con retraso:
![](2025-05-25_19-25.svg)

## 🌐 Llamadas HTTP con `fetch`
![](2025-05-25_19-40.svg)


Nos permiten gestionar operaciones que no se completan inmediatamente _(como solicitudes de red, operaciones de lectura de archivos o temporizadores)_ de una manera **más estructurada y menos propensa** a errores en comparación con los callbacks.

Una promesa es como un “contenedor” para un valor que **puede estar disponible ahora, en el futuro, o nunca** _(por eso se llama promesa)_

En general, es aconsejable usar de `async`/`await` para trabajar con promesas de manera más sincrónica. Esto puede hacer que el código asíncrono sea más fácil de entender y mantener.

## Funcionamiento de una promesa

Una promesa es un objeto que representa **el posible éxito o fallo** de una operación asíncrona.

Para reflejar esto, durante su ejecución _**la promesa tiene una propiedad**_ `Estado`, que puede ser uno de los siguientes:

- **Pendiente (Pending)**: Estado inicial. La operación asíncrona aún no se ha completado.
- **Cumplida (Fulfilled)**: La operación se ha completado con éxito y la promesa tiene un valor resultante.
- **Rechazada (Rejected)**: La operación falló y la promesa tiene un motivo de error.

## Creación de una promesa

Podemos crear una promesa utilizando el constructor `Promise`. Este constructor toma una función _(llamada executor)_ que **recibe dos funciones como argumentos**:

- _**resolve**_ se llama si la operación es exitosa, y se cambia el estado de la promesa a **cumplida**.
- _**reject**_ se llama si hay un error, y se cambia el estado a **rechazada**.

Estos argumentos son funciones que se llaman para cambiar el estado de la promesa. Vamos a verlo con un ejemplo,

```
const miPromesa = new Promise((resolve, reject) => {
  // Simulación de una operación asíncrona
  let exito = true; // Simula el resultado de la operación

  if (exito) {
    resolve('Operación exitosa');
  } else {
    reject('Error en la operación');
  }
});
```

En este ejemplo,

- Creamos una promesa que recibe sus dos funciones `resolve` y `reject`.
- Simulamos hacer una operación cualquiera con `exito`.
- En función del resultado de la operación, invocamos a `resolve` o a `reject`.

## Manejo de promesas

Para manejar el resultado de una promesa, normalmente _**utilizamos los métodos**_ `.then()` y `.catch()`:

### then

```
miPromesa.then(onFulfilled, onRejected)
```

Este método se llama cuando la promesa se cumple o se rechaza.

- `onFulfilled` es una función que se llama con el valor de la promesa cuando se cumple,
- `onRejected` se llama con el motivo del rechazo si la promesa falla.

### catch

```
miPromesa.catch(onRejected)
```

Este método se utiliza para manejar errores. Es un atajo para `.then(null, onRejected)` y se llama cuando la promesa es rechazada.

Por ejemplo, vamos a ver un ejemplo de como se usaría una promesa normalmente,

```
miPromesa
  .then(result => {
    console.log(result); // 'Operación exitosa'
  })
  .catch(error => {
    console.error(error); // 'Error en la operación'
  });
```

## Encadenamiento de promesas

Las promesas permiten encadenar múltiples `.then()` para manejar secuencias de operaciones asíncronas.

Cada `.then()` devuelve una nueva promesa, lo que facilita la composición de tareas asíncronas.

```
miPromesa
  .then(result => {
    console.log(result); // 'Operación exitosa'
    return 'Otro valor';
  })
  .then(otroResultado => {
    console.log(otroResultado); // 'Otro valor'
  })
  .catch(error => {
    console.error(error);
  });
```

## Promesas anidadas

También podríamos **anidar promesas dentro de otras promesas** para gestionar operaciones que dependen de resultados anteriores.

```
miPromesa
  .then(result => {
    console.log(result); // 'Operación exitosa'
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Operación asíncrona adicional'), 1000);
    });
  })
  .then(adicional => {
    console.log(adicional); // 'Operación asíncrona adicional'
  })
  .catch(error => {
    console.error(error);
  });
```

Sin embargo, esto puede llevar a código difícil de leer, por lo que **es preferible usar encadenamiento** siempre que sea posible.

## Métodos estáticos de promesas

JavaScript proporciona varios métodos estáticos en el objeto `Promise` para manejar múltiples promesas simultáneamente.

Estos métodos devuelven una nueva promesa, que es una composición de las promesas que le pasamos como argumentos.

all

### Promise.all()

`Promise.all()` recibe un iterable de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas del iterable se cumplen. Si alguna promesa es rechazada, la promesa devuelta será rechazada inmediatamente.

```
const promesa1 = Promise.resolve(1);
const promesa2 = Promise.resolve(2);
const promesa3 = Promise.resolve(3);

Promise.all([promesa1, promesa2, promesa3])
  .then(results => {
    console.log(results); // [1, 2, 3]
  })
  .catch(error => {
    console.error(error);
  });
```

raceallSettledany

## Ejemplos prácticos

#### Ejemplo con fetch

#### Uso de promesas con temporizadores