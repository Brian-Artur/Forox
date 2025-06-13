# Class
`self` es obligatorio como primer parámetro y hace referencia al objeto que se está creando.

## Atributos
En Python a las propiedades de una clase se le llaman atributos, como en Java.

En Python los atributos **no son realmente privatos**, pero se pueden hacer *pseudo-privados* usando `__nombre`

**Por convención**, se considera que si una propiedad comienza con doble guión bajo (`__`), **no deberías accederla directamente desde fuera**.

![[ED2025-06-13_14.17.45|550]]
Los atributos privados sólo pueden ser accesibles de esta forma.