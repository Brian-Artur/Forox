# Class
`self` es obligatorio como primer parámetro y hace referencia al objeto que se está creando.

## Atributos
En Python a las propiedades de una clase se le llaman atributos, como en Java.

En Python los atributos **no son realmente privatos**, pero se pueden hacer *pseudo-privados* usando `__nombre`

**Por convención**, se considera que si una propiedad comienza con doble guión bajo (`__`), **no deberías accederla directamente desde fuera**.

![[ED2025-06-13_14.17.45|550]]
Los atributos privados sólo pueden ser accesibles de esta forma.

### Atributos de clase
![[ED2025-06-13_23.02.52|300]]
En el caso de que modifiquemos **desde un objeto**, los atributos de objeto, no lo haremos como tal. Lo que en realidad pasa es que see "crea" un nuevo atributo para ese objeto.

Para modificar los atributos de clase debemos de usar la propia clase.

## Self
Todos los métodos llevan un primer parámetro *self*. El resto de parámetros irán a continuación. 

Aunque crees un método que no lleva parámetros este  deberá estar siempre este self ya que si no lo pones recibirás un error.

El error ocurre porque el intérprete de python está **pasando el valor de self internamente** o por lo menos que lo intenta. Pero el método, al no tener ningún parámetro, no lo contempla.   
![[ED2025-06-14_09.38.00|280]]   
Es por esta razón que tenemos 2 formas de llamar al método del mismo objeto.

El nombre self es una convención. En realidad se le puede cambiar de nombre.