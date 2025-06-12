# String
Se unas indistintamente las comillas simples `''` como las comillas dobles `""`. 

Existen las triples comillas simples `''' '''` o dobles `""" """` que se usan para strings que tienen más de una línea.

Con JS usabamos los backtics para la interpolación de variables en strings. Aquí se usan **f-strings**. Ej: `f"Hola {nombre}"`.

Para concatenar strings ya nos es necesario en operador de concatenación `+`. Ya va implícito.

El Raw string sirve para emplear caracteres especiales dentro de nuestro string. Su sintaxis es `r"C:\nuevo\archivo"`

## Desestructurar string
Podemos "desestructurar" un array en muchos caracteres, que estén cada uno en una variable distinta. Pero parece que no es una buena práctica porque perdemos el tipado y/o la trazabilidad.
![[Pasted image 20250611223341.png|300]]

## Operador slice (python)
![[Pasted image 20250611223432.png|270]]
Definimos desde dónde y el hasta, sin incluirlo. Tiene el mismo comportamiento que el `.slice()` de JavaScript.
![[ED2025-06-12_06.47.31|280]]
Si no le especificamos ese final, nos coge desde ese caracter hasta el final del string.

## Reverse
![[Pasted image 20250612065447.png|270]]
Invertimos el orden del string.

## Funciones
![[Pasted image 20250612070123.png|230]]
Pese a que es una string, como es un número, nos marca con un True

