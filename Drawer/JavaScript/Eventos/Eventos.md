# Eventos en JavaScript
En JavaScript un evento es simplemente _**un indicador de que algo ha ocurrido**_. Esto permite que nuestro código responda dinámicamente a diversas situaciones. Por ejemplo:

- Un usuario presiona una tecla.
- Un temporizador termina.
- Se recibe una señal desde una API.

Los eventos son un mecanismo sencillo para **la programación asíncrona**, ya que nos permite gestionar tareas de forma no bloqueante.

La gestión de eventos es ligeramente diferente en función de que se haga en un navegador, o en un runtime como Node.js.  
  
**Los conceptos son los mismos**, pero la sintaxis es algo diferente. Lo iremos viendo en el artículo.

## Cómo funcionan los eventos

Al empezar con los eventos, una de las cosas que cuestan es entender los conceptos y términos _(sin mezclarlos)_.

El **evento** en JavaScript es un suceso que ocurre en el navegador. Por ejemplo, puede estar causado por el usuario o por el sistema.

Para responder al evento, tenemos que asociar una función **manejadores de eventos** _(event handlers)_, que se ejecutara cuando ocurra el evento.

Finalmente, el evento también incluye un objeto, que contiene información sobre el evento.

En resumen:

- **Evento**: Un suceso que ocurre
- **Manejador de eventos**: Una función que se ejecuta cuando ocurre el evento
- **Objeto de evento**: Un objeto que contiene información sobre el evento

## Funciones manejadoras de eventos

La función manejadora de eventos _(event handler)_ es simplemente una función que definimos que se **ejecutará cuando ocurra el evento**.

Para ello, antes tenemos que asociar una función con un emisor de eventos.

Para asociar la función al evento usamos los métodos:

- En el navegador `addEventListener`
- En Node.js `on`

```
// Vincular un manejador con `addEventListener`
miEmisor.addEventListener("miEvento", (evento) => {
  console.log("Manejando el evento:", evento);
});
```

## Cómo lanzar un evento en JavaScript

Lanzar un evento, también conocido como **emitir un evento**, implica crear una instancia del evento y desencadenarlo en un objeto específico.

JavaScript proporciona varias formas de hacerlo. El método más común para lanzar eventos en JavaScript es

- En el navegador, `dispatchEvent`.
- En Node.js, `emit`.

```
// Crear un evento estándar
let evento = new Event("miEvento");

// Disparar el evento
document.dispatchEvent(evento);
```

En este ejemplo:

1. Creamos un evento llamado `miEvento`.
2. Utilizamos `dispatchEvent` para lanzarlo, activando así el manejador asociado.

## Ejemplo básico

Veámoslo como juntar la emisión de Eventos, junto a la función manejadora, con unos ejemplos completos

En el navegadorUso de eventos en Node.js

### Uso de eventos en Node.js

Node.js incluye el módulo `events`, que proporciona la clase `EventEmitter`, que permite registrar manejadores y emitir eventos.

```
import { EventEmitter } from "events";

// Clase que simula ser un servidor
class Servidor extends EventEmitter {
  iniciar() {
    console.log("Servidor iniciado");
    this.emit("servidorIniciado"); // emite un evento al iniciar
  }
}

// Crear una instancia del servidor
const servidor = new Servidor();

// Registrar handler del evento
servidor.on("servidorIniciado", () => {
  console.log("El servidor está listo para recibir solicitudes");
});

// Simular la ejecución del servidor
servidor.iniciar();
```

Aquí:

1. Creamos un emisor de eventos con `EventEmitter`.
2. Registramos un manejador para el evento `miEvento` usando `on`.
3. Utilizamos el método `emit` para lanzar el evento y pasar un mensaje como argumento.

## Definiendo eventos personalizados

Además de manejar eventos predefinidos, podemos **crear eventos personalizados**. Esto es útil en proyectos complejos, porque podemos dar más información que con eventos genéricos.

Para crear nuestros propios eventos podemos utilizar las clases `Event` o `CustomEvent`

Event

### Event

`Event` es una clase muy sencilla, que nos deja añadir un mensaje _(opcional)_ para identificar el evento.

```
// Crear un evento personalizado
let eventoPersonalizado = new Event("miEvento");

// Disparar el evento
document.dispatchEvent(eventoPersonalizado);
```

CustomEvent

## Integrando eventos con promesas

En ocasiones, puedes querer integrar el manejo de eventos con Promesas. Esto es útil para sincronizar tareas asíncronas.

```
function esperarEvento(evento) {
  return new Promise((resolve) => {
    document.addEventListener(evento, resolve, { once: true });
  });
}

async function main() {
  console.log("Esperando evento...");
  await esperarEvento("miEvento");
  console.log("Evento recibido.");
}

// Ejecutar y simular el evento
main();
document.dispatchEvent(new Event("miEvento"));
```

Aquí, la función `esperarEvento` convierte un evento en una Promesa, lo que permite esperar su resolución dentro de una función asíncrona.

## Funcionamiento interno

Bajo el capó, JavaScript es un lenguaje de ejecución única _(single-threaded)_, lo que significa que **solo puede ejecutar una tarea a la vez**.

Cuando ocurre un evento, **no se interrumpe el flujo principal** del programa. En su lugar, la acción asociada al evento se registra en la **cola de tareas** _(event queue)_.

El event loop _(bucle de eventos)_ se encarga de **procesar las tareas de esta cola** cuando el hilo principal está libre.