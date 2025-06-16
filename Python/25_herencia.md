# Herencia
Clase base es la clase padre. Y clase derivada es la clase hijo.

## Función super()
![[ED2025-06-14_11.16.01|550]]
De esta forma, podemos utilizar el constructor de la superclase (clase padre), sin tener que repetir los atributos en el constructor de la subclase (clase hijo).

## Tipos de herencia
Todas las clases de Python van a heredar implícitamente de la clase **"object"**.
### Herencia simple o única
Proviene de una única superclase.

![[ED2025-06-14_12.54.54|100]]
### Herencia múltiple
Ocurre cuando una subclase recibe la herencia de múltiples superclases.
![[ED2025-06-14_15.37.41|300]]


### Herencia multinivel
Es aquella que va heredando de otras herencias
![[ED2025-06-14_15.41.57|100]]

#### mro()
El método `.mro()` se utiliza para saber cuál es la ascendencia de esta clase; cuales son sus padres, abuelos, etc.
![[ED2025-06-14_15.49.34]]
### Herencia jerárquica
Es la que ocurre cuando hay más de una subclase, proveniente de una superclase. Es decir, tenemos una clase padre, y luego varias clases hijo que están heredando del mismo padre.
![[ED2025-06-14_15.56.24|300]]
### Herecia híbrida
Ocurre cuando se mezclan varios tipos de herencia en una misma estructura de clases.
![[ED2025-06-14_16.03.43|320]]
Es muy recomendable ir docuentando estas herencias porque podemos hacer una lío con todas estas relaciones.