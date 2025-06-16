# __ init __
`__init__` es un archivo especial que utiliza python para inicializar paquetes. Para decirle, al intérprete, estos módulos vienen en un conjunto. Ya que si no, vienen en una carpeta sin más.

![[ED2025-06-15_16.35.19|220]]
La idea del módulo `__init__.py` es actuar como un constructor. Sobre él se van a agrupar todos los módulos del mismo paquete. Y en él vamos a poder ejecutar los mismos.

De esta forma, cuando hagamos la importación del paquete entero, se va a estar ejecutando todo lo que hay en `__init__.py`.

![[ED2025-06-15_16.40.52]]
