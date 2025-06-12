# Listas
![[ED2025-06-12_07.13.37|210]]
En Python, las listas tiene más funcionalidades que los array en JavaScript.

En una lista no es necesario guardar el mismo tipo de dato. Cosa contraria pasa en TypeScript, que nos chillaba.

## Destructuring list
![[ED2025-06-12_07.30.52]]
Al contrario que en JavaScript, aquí es necesario desestructurar todos los elementos de la lista.

## Contatenación
![[Pasted image 20250612073600.png|300]]
Sumamos todo el contenido de las listas en el mismo orden, en una nueva lista. Pero no hay listas internas.

## Eliminación de elementos
![[Pasted image 20250612085416.png]]
De esta manera estamos eliminando el tercer elemento de la lista.

|Método|¿Qué hace?|
|---|---|
|`del lista[i]`|Elimina el elemento por índice|
|`lista.pop(i)`|Igual que `del`, pero lo **devuelve**|
|`lista.remove(x)`|Elimina el **primer** valor igual a `x`|