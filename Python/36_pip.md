# PIP
**`pip`** es el **gestor de paquetes** de Python. Su función principal es **instalar, actualizar y eliminar paquetes o librerías** que no vienen por defecto con Python.

### Comprobar versión
```bash
python --version
pip --version
```

### Actualizar PIP
```bash
python -m pip install --upgrade pip
```
En sistemas UNIX hay que hacerlo con `python3`.

## Instalar paquete globalmente
 ```bash
# Instalamos paquete "requests"
pip install requests

# Comprobamos todos los paquetes instalados
pip freeze

# Nos sale algo como => requests==2.31.0
```

