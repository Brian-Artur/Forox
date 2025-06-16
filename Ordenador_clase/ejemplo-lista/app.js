const lista = document.getElementById('ul-compra');
console.log(lista);


let hijo = document.createElement('li');
hijo.innerText = 'Jamón York'
lista.append(hijo);


hijo = document.createElement('li');
hijo.innerText = 'Aceitunas';
lista.append(hijo)


console.log({lista});

