# Virtual enviroments
Utilizamos un entorno virtual para que no se mezclen las dependencias globales (las del ordenador), con las del proyecto que estamos desarrollando.

### 1. Crear venv
```bash
python -m venv venv
```
Creamos una entorno virtual, y lo bautizamos como "venv". Esto lo hacemos por convención. Ya que así sabemos a qué nos referimos.

### 1.5 Ignorar venv
Al igual que hacemos con los `node-modules` en Node.js, aquí también vamos a ignorar el traqueo de las dependencias que estemos instalando en el entorno virtual.

Creamos un *.gitignote* y le añadimos el nombre de la carpeta.
```bash
venv/
```

### 2. Activar venv
```bash
source venv/Scripts/activate
```

### 3. Instalar dependencias
Ahora todo lo que instales con `pip` quedará **solo dentro de ese entorno**.
```bash
pip install requests
pip install flask
```

### 4. Guarda las dependencias
Para compartir el entorno con otras personas (o tu “yo” del futuro 😅), crea un archivo `requirements.txt`
```bash
pip freeze > requirements.txt
```

### 5. Desactivar venv
```bash
deactivate
```
