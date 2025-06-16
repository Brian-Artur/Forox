function getById(id) {
  return document.getElementById(id)
}

let nombre = getById('nombre-usuario');
let vehiculo = getById('vehiculo');
let ciudad = getById('ciudad');

nombre.innerText = prompt('¿Cuál es tu nombre?');
vehiculo.innerText = prompt('Marca de tu coche');
ciudad.innerText = prompt('¿En qué ciudad vives?');


let edad = document.createElement('div');

document.body.append(edad);


edad.className = "w3-container w3-orange w3-padding-24 myFontSize"
edad.setAttribute('id','edad');
edad.innerHTML = 'Edad';


edad.innerHTML = prompt('Dime tu edad:')

